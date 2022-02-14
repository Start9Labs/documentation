.. _build-package-example:

========================
Build Your First Package
========================

This guide will take you through the fundamentals of packaging a service for EmbassyOS by creating a real service. Let's get started!

What we'll build
================

We'll create a web application that produces a hello world page. This web application will be the service we package for the Embassy. During this guide we will:

1. Create a simple hello world web service
2. Create a Dockerfile
3. Create a Package Manifest
4. Create a hosted repository which will contain all the service components
5. Create the packaged service file

You can find the `complete code <https://github.com/Start9Labs/hello-world-wrapper>`_ referenced in this guide on GitHub.

Download required tools
=======================

If necessary, download any of the system requirements:

- Docker 
- EmbassySDK
- A code editor
- Terminal

For more details and installation steps for these tools, visit the :ref:`environment setup <environment-setup>` page.


Create Service
==============

For this example, we are going to create a simple Rust project that serves a static web page. 

.. code:: bash

    mkdir hello-world
    cargo init
    touch src/index.html

In ``index.html`` add:

.. code:: html

    <html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
    </html>

In ``main.rs`` add:

.. code:: rust

    use hyper::service::{make_service_fn, service_fn};
    use hyper::{body::Bytes, Body, Request, Response, Server};
    use std::convert::Infallible;
    use std::net::SocketAddr;

    async fn handle(_req: Request<Body>) -> Result<Response<Body>, Infallible> {
        Ok(Response::new(Body::from(Bytes::from_static(
            include_bytes!("index.html"),
        ))))
    }

    #[tokio::main]
    async fn main() {
        // Construct our SocketAddr to listen on...
        let addr = SocketAddr::from(([0, 0, 0, 0], 80));

        // And a MakeService to handle each connection...
        let make_service = make_service_fn(|_conn| async { Ok::<_, Infallible>(service_fn(handle)) });

        // Then bind and serve...
        let server = Server::bind(&addr).serve(make_service);

        // And run forever...
        if let Err(e) = server.await {
            eprintln!("server error: {}", e);
        }
    }


**That's it!** We now have the code for our service.

Let's build and run it!

.. code:: bash

    # build the project
    cargo build
    # start the executable
    target/debug/hello-world

Visit `<http://localhost:80>`_ to see your running web page!

Build for RaspberryPi
======================

EmbassyOS is run on the arm-v8 architecture, specifically the aarch64 state, for the RaspberryPi.

Depending on the programming language or libraries used in a project, you might need to set up an environment to *cross compile* the executable for this runtime environment.

We were able to easily build and run our project locally. However, Rust is one of those programming languages that needs to be cross compiled. This step can be skipped if it does not apply to your project.

Since Start9 uses Rust throughout its service ecosystem, the team has built a helper to cross compile Rust projects for the Embassy.

This Rust cross compiler for aarch64 can be downloaded and build from `GitHub <https://github.com/Start9Labs/rust-musl-cross>`_:

.. code:: bash

    git clone https://github.com/Start9Labs/rust-musl-cross.git
    cd rust-musl-cross
    chmod a+x ./build.sh
    ./build.sh

This actually builds a Docker container for us to use locally so we can emulate the environment we need to compile our project for aarch64!


Next, we enable cross-arch emulated builds in Docker

.. code:: bash
    
    docker run --privileged --rm linuxkit/binfmt:v0.8

Finally, we run the following command to build the project, replacing `/absolute/path/to` with the output of `pwd` as necessary:

.. code:: bash

    docker run --rm -it -v ~/.cargo/registry:/root/.cargo/registry -v "/absolute/path/to"/hello-world:/home/rust/src start9/rust-musl-cross:aarch64-musl cargo build --release

Awesome! We can now see the compiled executable here: `./hello-world/target/aarch64-unknown-linux-musl/release/hello-world`

Build with Docker
=================

Now that we have our code properly built/compiled, we can create a Dockerfile. This file defines how to build the Docker image for the service by declaring the environment, building stages, and copying any binaries or assets needed to run the service to the Docker image filesystem. 

In other words, the Dockerfile serves as a recipe for creating a Docker image, from which Docker containers are spun up. This is ultimately what runs an instance of your service on the Embassy.

1. Create the necessary Docker files:

  .. code:: bash

      touch Dockerfile
      touch docker_entrypoint.sh

2. We start by importing a base image, in this case Alpine, as recommended.

  .. code:: docker

    FROM arm64v8/alpine:3.12

3. Next, we issue some commands to setup the filesystem. Here we update repositories and install required system packages.

  .. code:: docker

    RUN apk update
    RUN apk add tini

4. Next, we add the cross-compiled binary of ``hello-world`` to ``/usr/local/bin/`` and add the ``docker_entrypoint.sh`` file from the project root.  Then, we set permissions for ``docker_entrypoint.sh``.

  .. code:: docker

    ADD ./hello-world/target/aarch64-unknown-linux-musl/release/hello-world /usr/local/bin/hello-world
    ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
    RUN chmod a+x /usr/local/bin/docker_entrypoint.sh

5. Next, we set a working directory, and set the location of the entrypoint. Exposing ports is not necessary for EOS, but its often useful to leave this line for quick reference and clarity.

  .. code:: docker

    WORKDIR /root

    EXPOSE 80

    ENTRYPOINT ["/usr/local/bin/docker_entrypoint.sh"]

6. **That's it!** Let's take a look at our final ``Dockerfile``:

.. code:: docker

    FROM arm64v8/alpine:3.12

    RUN apk update
    RUN apk add tini

    ADD ./hello-world/target/aarch64-unknown-linux-musl/release/hello-world /usr/local/bin/hello-world
    ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
    RUN chmod a+x /usr/local/bin/docker_entrypoint.sh

    WORKDIR /root

    # not necessary for EmbassyOS, but often left for quick reference and clarity
    EXPOSE 80

    ENTRYPOINT ["/usr/local/bin/docker_entrypoint.sh"]

7. Finally, add the following code to the ``docker_entrypoint.sh``:

.. code:: bash

    #!/bin/sh

    exec tini hello-world

This is a script that defines how the service starts, and often acts as an init system.  It will need to complete any environment setup (such as folder substructure), set any environment variables, and execute the run command. It's also PID 1 in the Docker container, so should do all of the signal handling for container exits.

Manifest
========

The Manifest file specifies the details EmbassyOS needs to operate a service. It is the connection point between your service and EmbassyOS. 

In this file, values and actions exist for:

- Displaying the service in the marketplace
- Specifying the project assets (eg. icon, instructions, license)
- Defining the docker mount points
- Specifying how to configure the service
- Relaying how to run health checks, backups, and other custom actions
- Outlining dependency relationships (if applicable) and configuration rules for dependencies
- Denoting copy to display in EmbassyUI elements, alerts, descriptions

This file can be written in:

- yaml
- toml
- json

Let's create a yaml manifest file for our hello-world project:

.. code:: bash

    touch manifest.yaml

And populate it with the following example manifest (see the line comments for a description of each key and view the full :ref:`type specification here <service_manifest>`):

.. code:: yaml
    
    # The package identifier used by the OS
    id: hello-world 
    # A human readable service title
    title: "Hello World"
    # Service version - accepts up to four digits, where the last confirms to revisions necessary for EmbassyOS - see documentation: https://github.com/Start9Labs/emver-rs
    version: 0.3.0
    # Release notes for the update - can be a string, paragraph or URL
    release-notes: "Upgrade to EmbassyOS v0.3.0"
    # The type of license for the project. Include the LICENSE in the root of the project directory. A license is required for a Start9 package.
    license: mit
    # The Start9 wrapper repository URL for the package. This repo contains the manifest file (this), any scripts necessary for configuration, backups, actions, or health checks (more below). This key must exist. But could be embedded into the source repository. 
    wrapper-repo: "https://github.com/Start9Labs/hello-world-wrapper"
    # The original project repository URL. There is no upstream repo in this example
    upstream-repo: "https://github.com/Start9Labs/hello-world-wrapper"
    # URL to the support site / channel for the project. This key can be omitted if none exists, or it can link to the original project repository issues.
    support-site: "https://docs.start9.com/"
    # URL to the marketing site for the project. This key can be omitted if none exists, or it can link to the original project repository. 
    marketing-site: "https://start9.com/"
    # The series of commands to build the project into an s9pk for arm64/v8. In this case we are using a Makefile with the simple build command "make".
    build: ["make"]
    # Minimum required version of EmbassyOS
    min-os-version: "0.3.0"
    # Human readable descriptors for the service. These are used throughout the EmbassyOS user interface, primarily in the marketplace.
    description:
    # This is the first description visible to the user in the marketplace.
    short: Example service
    # This description will display with additional details in the service's individual marketplace page
    long: |
        Hello World is a simple example of a service wrapper that launches a web interface to say hello and nothing more.
    # These assets are static files necessary for packaging the service for Start9 (into an s9pk). Each value is a path to the specified asset. If an asset is missing from this list, or otherwise denoted, it will be defaulted to the values denoted below. 
    assets:
        # Default = LICENSE.md
        license: LICENSE
        # Default = icon.png
        icon: icon.png
        # Default = INSTRUCTIONS.md
        instructions: instructions.md
        # Default = image.tar
        docker-images: image.tar
    # The main action for initializing the service. Currently, the only type of action available is docker.
    main:
        # Docker is currently the only action implementation
        type: docker
        # Identifier for the main image volume, which will be used when other actions need to mount to this volume.
        image: main
        # The executable binary for starting the initialization action. For docker actions, this is typically a "docker_entrypoint.sh" file. See the Dockerfile and the docker_entrypoint.sh in this project for additional details.
        entrypoint: "docker_entrypoint.sh"
        # Any arguments that should be passed into the entrypoint executable 
        args: []
        # Specifies where to mount the data volume(s), if there are any. Mounts for pointer dependency volumes are also denoted here. These are necessary if data needs to be read from / written to these volumes. 
        mounts:
            # Specifies where on the service's file system its persistence directory should be mounted prior to service startup
            main: /root
    # Health checks 
    health-checks:
    main:
        name: Web Interface
        description: Ensures the network interface is accessible via HTTP.
        type: docker
        image: main
        entrypoint: "sh"
        args: ["-c", "curl --silent --show-error --fail http://loacalhost:80"]
        # When `inject` is true, the health check will use the main image to run the health check. This is faster as there is no need to spin up an additional docker container
        # When `inject` is false, the health check will use whatever image is specified. This is useful when using a system image with additional utilities to run a health check. If inject=false, then system must equal true
        inject: true
        # Optional if false - indicates if an image that is preloaded onto the system will be used
        system: false
        # Required - valid values are yaml, toml, json
        io-format: json
    # Specifies how to get and set configuration file values for the service. NOTE: This stanza can be left empty (null) if the service has no configuration options.
    config:
    # The config action to run to get the specified config file (default is config.yaml)
        get:
            # The type of implementation to run this action (currently, only Docker is available)
            type: docker
            # The Docker image to run the action command in. This could be the service's main image, or an image that is preloaded onto the system, like compat (which holds compatible helper functions for default functionality)
            image: compat
            # Indicates if an image that is preloaded onto the system will be used
            system: true
            # The initial run command to execute the config get action
            entrypoint: compat
            # Any arguments that need to be passed into the run command
            args:
            - config
            - get
            - /root
            - "/mnt/assets/config_spec.yaml"
            # The locations at which to mount the specified Docker images
            mounts:
                compat: /mnt/assets
                main: /root
            # Required - valid values are yaml, toml, json
            io-format: yaml
    # The config action to run to set the specified config file (default is config.yaml). Details for the keys below are the same as above.
    set:
        type: docker
        image: compat
        system: true
        entrypoint: compat
        args:
        - config
        - set
        - hello-world
        - /root
        - "/mnt/assets/config_rules.yaml"
        mounts:
            compat: /mnt/assets
            main: /root
        io-format: yaml
    # This is a key value map specifying dependent services that this service needs in order to function. The keys are the package id's on which you depend. NOTE: if developing a standalone service, you may leave this stanza as an empty object (the key dependencies is required)
    dependencies:
        # Key must be the package id of another service that exists in the marketplace
        filebrowser:
            # The version range that is acceptable for this dependency
            version: "^2.14.1.1"
            # Describes if the dependency is critical to the service functioning. If the dependency is critical, the service will stop if this dependency is stopped.
            critical: false
            # Specifies the requirement type of the dependency
            requirement:
                # "Opt-out" means the dependency will be required according to the default config. "Opt-in" means the dependency may be required if you change the config. And "required" just means it's always required.
                type: "opt-out"
                # An explanation of how to opt-in or opt-out. This value is optional for type=required
                how: Optionally use the selected dependency
            # Description of the dependency relationship
            description: A dependency that demonstrates the way to configure a dependent service
            # This is a list of rules that levies requirements on the configuration of the dependency and suggests ways to remedy any incompatibilities. Documentation of this feature is outside the scope of this example.
            config: ~
    # This denotes any data, asset, or pointer volumes that should be connected when the "docker run" command is invoked
    volumes:
        # This is the image where files from the project asset directory will go
        main:
            type: data
        # This is an example of an asset volume
        compat:
            type: assets 
    # This specifies how to configure the port mapping for exposing the service over TOR and LAN (if applicable). Many interfaces can be specified depending on the needs of the service. If it can be launched over a Local Area Network connection, specify a `lan-config`. Otherwise, at minimum, a `tor-config` must be specified.
    interfaces:
        # This key is the internal name that the OS will use to configure the interface
        main:
            # A human readable name for display in the UI
            name: Network Interface
            # A descriptive description of what the interface does
            description: Specifies the interface to listen on for HTTP connections.
            tor-config:
                # Port mappings are from the external port to the internal container port
                port-mapping:
                    80: "80"
            # Port mappings are from the external port to the internal container port
            lan-config:
                80:
                    ssl: false
                    internal: 80
            # Denotes if the service has a user interface to display
            ui: true
            # Denotes the protocol specifications used by this interface
            protocols:
            - tcp
            - http
    # Alerts: omitting these will result in using the default alerts in EmbassyOS, except for start, which has no default.
    alerts:
        install-alert: This is an alert that will present before the user installs this service
        uninstall-alert: This is an alert that will present before the user uninstalls this service
        restore-alert: This is an alert that will present before the user restores this service from Embassy backup
        start-alert: This is an alert that will present before the user starts this service
    # Specifies how backups should be run for this service. The default EmbassyOS provided option is to use the duplicity backup library on a system image (compat)
    backup:
        create:
            # Currently, only docker actions are supported.
            type: docker
            # The docker image to use. In this case, a pre-loaded system image called compat
            image: compat
            # Required if the action uses a system image. The default value is false. 
            system: true 
            # The executable to run the command to begin the backup create process
            entrypoint: compat 
            # Arguments to pass into the entrypoint executable. In this example, the full command run will be: `compat duplicity hello-world /mnt/backup /root/data`
            args: 
            - duplicity
            - hello-world
            - /mnt/backup
            # For duplicity, the backup mount point needs to be something other than `/root`, so we default to `/root/data`
            - /root/data
            mounts:
                # BACKUP is the default volume that is used for backups. This is whatever backup drive is mounted to the device, or a network filesystem.  
                # The value here donates where the mount point will be. The backup drive is mounted to this location.
                BACKUP: "/mnt/backup" 
                main: "/root"
        # The action to execute the backup restore functionality. Details for the keys below are the same as above.
        restore:
            type: docker
            image: compat
            system: true
            entrypoint: compat
            args:
            - duplicity
            - hello-world
            - /root/data
            - /mnt/backup
            mounts:
                BACKUP: "/mnt/backup"
                main: "/root"
    # Commands that can be issued from the UI. NOTE: if no actions are required, this section can be left as an empty object 
    actions:
    hello-world-action:
        name: Hello World Action
        description: A description that describes what the action will accomplish.
        warning: |
        A warning message indicating and potential dangers associated with the action
        # Indicates what state the service can be in while executing the action
        allowed-statuses:
        - running
        # Defines how the action is run
        implementation:
            type: docker
            image: main
            entrypoint: sh
            args: ["-c", "echo 'hello-world'"]
            # Same as note on health-checks
            inject: true
            # Required - valid values are yaml, toml, json
            io-format: json

Instructions
============

An instructions file is a convenient way to share any steps users should take to setup or interact with your service. This file gets displayed within an EmbassyUI component and should be written in `Markdown <https://www.markdownguide.org/>`_ language. 

Let's add instructions to our hello world project:

.. code:: bash

    touch instructions.md

And add the following code to the file:

.. code:: bash
    
    # Instructions for Hello World

    Instructions go here.  These appear to the user in the UI on the Service page under 'Instructions.'

License
=======

Start9 ensures that the proper license is displayed for all open source software running on an EmbassyOS platform. Let's make sure to include the full open source license so users can view the distribution permissions of your service, among other licensing details.

The name and location of this file should be specified in the ``assets.license`` section of the Manifest. The default value if not specified is ``LICENSE``, located in the root of the project folder.

.. code:: bash

    touch ./hello-world/LICENSE

Icon
====

Icons are displayed throughout the EmbassyUI to reference to your service.

Simply add the icon file to the root of the project directory. The icon file can be named anything, but this must be specified in the ``assets.icon`` section of the Manifest. The default filename the SDk looks for when packaging the service assets is ``icon.png``.

.. code:: bash

    mv /local/path/to/icon ./hello-world/icon.png

Package into s9pk
=================

We now have all of the necessary components to package the service into the format needed for the OS. This format is a custom filetype with an extension of ``.s9pk``, short for Start9 Package. 

To package all components into an ``.s9pk``, run the following command from the root of your project directory:

.. code:: bash

    embassy-sdk pack

Let's also make sure to verify the validity of the package:

.. code:: bash

    embassy-sdk verify s9pk /path/to/hello-world.s9pk

If anything goes wrong, an error message will indicate the missing component or other failure.

**That's it!**

Wrapper Repo
============

In order for the Start9 team to review your package for submission to the Start9 Marketplace, we ask that you create a wrapper repository for the project and its components. Let's do that for our hello-world service.

For a quick start convenience, Start9 has made the finalized version of the `hello-world-wrapper <https://github.com/Start9Labs/hello-world-wrapper>`_ available as a *GitHub template*. Clicking "Use this template" in that repository will clone the entire contents to a specified location. Each file will still have to be manually edited to reflect the changes necessary for your service. 

If you want to proceed from scratch, follow these steps:

1. In GitHub, create a new public repository with the name "hello-world-wrapper" under your user profile. Go ahead and select the options to include a README file and a .gitignore file. You can always add these files later too.

2. Once the hosted repository is created, select the "Code" dropdown to copy the https or ssh URL for the repository. If you do not have git setup locally, follow the :ref:`setup steps <environment-setup#git>` first. 

    .. code:: bash

        git clone https://github.com/<username>/hello-world-wrapper.git
        cd hello-world-wrapper


3. Include the ``hello-world`` project in the wrapper repo. It can either be included directly, or it can be hosted separately. If it is hosted separately, it should be included as a `git submodule <https://git-scm.com/book/en/v2/Git-Tools-Submodules>`_ within the wrapper repository:

    .. code:: bash

        git submodule add <link_to_source_project>

4. Edit the ``.gitignore`` file to include the ``.s9pk`` file and ``image.tar`` bundle. This will exclude these files from being published remotely, as they can be large or binary representations.

    .. code:: bash

        hello-world.s9pk
        image.tar

5. Move the Dockerfile, docker_entrypoint.sh, LICENSE, icon, and Manifest to the root of the wrapper repository. At the end, your project structure should look similar to this:

    .. code:: bash

        ├── Dockerfile
        ├── LICENSE
        ├── Makefile
        ├── README.md
        ├── assets
        │   └── compat
        │       ├── config_rules.yaml
        │       └── config_spec.yaml
        ├── docker_entrypoint.sh
        ├── hello-world
        │   ├── Cargo.lock
        │   ├── Cargo.toml
        │   ├── src
        │   │   ├── index.html
        │   │   └── main.rs
        │   └── target
        │       ├── aarch64-unknown-linux-musl
        │       ├── debug
        │       └── release
        ├── hello-world.s9pk
        ├── icon.png
        ├── image.tar
        ├── instructions.md
        └── manifest.yaml

Makefile
========

For convenience and repeatability, let's combine all of these commands into a Makefile. Then, we can use `make <https://www.gnu.org/software/make/>`_ to rebuild our project quickly. 

.. code:: bash

    touch Makefile

1. Add the build rule with the target executable as the key, including a list of dependencies needed to build the target file. In this case, the ``hello-world`` binary compiled for aarch is the target, and the dependencies are the hello-world source files needed to compile this binary:

    .. code:: bash

        HELLO_WORLD_SRC := $(shell find ./hello-world/src) hello-world/Cargo.toml hello-world/Cargo.lock

        hello-world/target/aarch64-unknown-linux-musl/release/hello-world: $(HELLO_WORLD_SRC)
            docker run --rm -it -v ~/.cargo/registry:/root/.cargo/registry -v "$(shell pwd)"/hello-world:/home/rust/src start9/rust-musl-cross:aarch64-musl cargo build --release

2. Add the step to build the Docker image. Here, the target is the Docker `image.tar` artifact, and the dependencies are the Dockerfile, docker_entrypoint.sh, and the aarch64 compiled hello-world executable:

    .. code:: bash

        image.tar: Dockerfile docker_entrypoint.sh hello-world/target/aarch64-unknown-linux-musl/release/hello-world
            DOCKER_CLI_EXPERIMENTAL=enabled docker buildx build --tag start9/hello-world/main:$(VERSION) --platform=linux/arm64 -o type=docker,dest=image.tar .

3. Next, add the step for building the ``s9pk`` package, with the ``hello-world.s9p`k` as the target, and all the component files as the dependencies:

    .. code:: bash

        ASSETS := $(shell yq e '.assets.[].src' manifest.yaml)

        hello-world.s9pk: manifest.yaml assets/compat/config_spec.yaml assets/compat/config_rules.yaml image.tar instructions.md $(ASSET_PATHS)
         	embassy-sdk pack

4. Then, add the step to verify the package: 

    .. code:: bash

        S9PK_PATH=$(shell find . -name hello-world.s9pk -print)

        verify: hello-world.s9pk $(S9PK_PATH)
         	embassy-sdk verify s9pk $(S9PK_PATH)

5. Add steps to clean up the Makefile build artifacts when you want to build from a fresh slate: 

    .. code:: bash

        clean:
         	rm -f image.tar
         	rm -f hello-world.s9pk

6. Finally, add the ``all`` make target.

    .. code:: bash

        all: verify

    This serves as the entrypoint to build multiple targets, which we have in this case. When the ``make`` command is invoked here, it looks for the "verify" target. Since the "verify" target depends on the "hello-world.s9pk" target, make then runs this target. It continues down this graph until the first target and its dependencies are satisfied, then works its way back up. The final output of this Makefile is the ``image.tar`` and ``hello-world.s9pk`` files.

**That's it!** Our completed Makefile looks like this:

.. code:: make

    ASSETS := $(shell yq e '.assets.[].src' manifest.yaml)
    ASSET_PATHS := $(addprefix assets/,$(ASSETS))
    VERSION := $(shell yq e ".version" manifest.yaml)
    HELLO_WORLD_SRC := $(shell find ./hello-world/src) hello-world/Cargo.toml hello-world/Cargo.lock
    S9PK_PATH=$(shell find . -name hello-world.s9pk -print)

    # delete the target of a rule if it has changed and its recipe exits with a nonzero exit status
    .DELETE_ON_ERROR:

    all: verify

    verify: hello-world.s9pk $(S9PK_PATH)
        embassy-sdk verify s9pk $(S9PK_PATH)

    clean:
        rm -f image.tar
        rm -f hello-world.s9pk

    hello-world.s9pk: manifest.yaml assets/compat/config_spec.yaml assets/compat/config_rules.yaml image.tar instructions.md $(ASSET_PATHS)
        embassy-sdk pack

    image.tar: Dockerfile docker_entrypoint.sh hello-world/target/aarch64-unknown-linux-musl/release/hello-world
        DOCKER_CLI_EXPERIMENTAL=enabled docker buildx build --tag start9/hello-world/main:$(VERSION) --platform=linux/arm64 -o type=docker,dest=image.tar .

    hello-world/target/aarch64-unknown-linux-musl/release/hello-world: $(HELLO_WORLD_SRC)
        docker run --rm -it -v ~/.cargo/registry:/root/.cargo/registry -v "$(shell pwd)"/hello-world:/home/rust/src start9/rust-musl-cross:aarch64-musl cargo build --release

Install on EmbassyOS
====================

Now that we have a process for iterating on producing a valid package for EmbassyOS, let's try to load it onto an Embassy device! If you do not have one, you can either :ref:`purchase <purchasing>` a device or build one using our :ref:`DIY guide <diy>`. 

1. First, generate an ssh key for the Embassy:

    .. code:: bash

        ssh-keygen -t ed25519
        # Press Enter to leave filename as default
        # Press Enter to leave password empty
        # Press Enter to confirm password is empty
        # Copy file contents to clipboard. This is your ssh pubkey.
        pbcopy .ssh/id_ed25519.pub 

2. On an Embassy device, enter the ssh pubkey into your SSH settings:

    #. Click on Embassy in the menu
    #. Click on SSH under SETTINGS
    #. Click on + Add new key
    #. Paste pubkey from clipboard 
 
3. Copy the ``hello-world.s9pk`` to the Embassy device:

    .. code:: bash

        # Confirm you can ssh into your Embassy
        ssh root@<lan-url>
        # Log out of Embassy SSH session
        exit

        scp <package-id>.s9pk ssh root@<lan-url>:/working/directory/path

        eg. scp hello-world.s9pk ssh root@embassy-12345678.local:/root

4. Finally, install the package on an Embassy device:

    .. code:: bash

        ssh root@<lan-url>
        # log in to the command line interface using the Embassy password
        embassy-cli auth login
        embassy-cli package install hello-world.s9pk

**Congratulations!** You have successfully created and installed a package you created onto EmbassyOS. The package should now be viewable in the "Services" tab in EmbassyUI.

From here, you can play with viewing the results of your Manifest file settings, such as config, actions, interfaces, health checks, etc. You can also view the logs of your service right in the UI!

In order to verify your service is functioning as expected:

- Ensure your service is in "Running" state
- Make sure there are no apparent errors or warnings in the logs
- Ensure each UI component renders as expected:
  - Instructions
  - Config
  - Properties
  - Actions
  - Interfaces
  - Marketplace listing
  - Donation
- Launch or use your service in the intended way and make sure all aspects function 

Get help
========

If you get stuck or are having issues debugging why your service is not packaging or running as expected, reach out to our community `dev chat <https://matrix.to/#/#community-dev:matrix.start9labs.com>`_ with questions.

Submission Process
==================

When you have built and tested your project for EmbassyOS, please send Start9 a submission to dev@start9labs.com with a link to the wrapper repository. After being reviewed for security and compatibility, the service will be deployed to the Start9 Marketplace and available for all EmbassyOS users to download.

If you are deploying to an alternative marketplace, please shout it out in our community channels!
