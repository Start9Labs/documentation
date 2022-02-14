.. _packaging-create-manifest:

========================
Step 5 - Create Manifest
========================

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

**That's it!** You now have the structure for your service's Manifest.