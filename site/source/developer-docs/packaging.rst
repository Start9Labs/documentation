.. _service-packaging:

=================
Service Packaging
=================

.. contents::
  :depth: 2 
  :local:

Welcome! Thank you for your interest in contributing to the growing ecosystem of open software. We call the software applications that run on :ref:`embassyOS<embassy-os>` "services."  This distinction is made to differentiate from "applications" (apps), which are generally run on a client, and used to access server-side software (services).  To run services on embassyOS, a package of file components needs to be composed. This guide will dive into the basic structure of how to compose this package.

Check out the :ref:`glossary <glossary>` to get acquainted with unfamiliar terms.  The bottom of this guide also includes :ref:`support <packaging-support>` links, including a master checklist. 

Let's get started! 

Steps
-----

#. :ref:`Choose software to package <choosing-software>`
#. :ref:`Set up the development environment <development-environment>`
#. :ref:`Try out the hello-world demo project <hello-world-example>`
#. :ref:`Package the service <package-the-service>`
    
    #. :ref:`Build a Dockerfile <build-a-dockerfile>`
    #. :ref:`Create the file structure <create-file-structure>`
    #. :ref:`Format the package <format-package>`

#. :ref:`Test the service on embassyOS <testing>`
#. :ref:`Submit and/or distribute <submission-and-distribution>`

.. _choosing-software:

Choosing Software
=================

Almost any type of open source software can be run on embassyOS. No matter what programming language, framework, database or interface the service has, it can be adapted for embassyOS. This is made possible by the power of Docker containers (don't worry, we'll get to this). We do have a few recommendations for choosing a service that will perform optimally across platforms:

#. It either has a web user interface (it can be interacted with in a web browser), or is server software that external applications or internal services can connect to. Please keep in mind that embassyOS users are not expected to have SSH and/or CLI access.

    - The interfaces supported are: HTTP, TCP, and REST APIs

#. It can be compiled for ARM (``arm64v8`` - namely, the Raspberry Pi) and/or x86_64 (``amd64`` - most desktops, laptops, and servers)
#. It can be served over TOR
#. It creates a container image that is optimized for size (under 1GB) to save device space and expedite installation time

.. _development-environment:

Development Environment
=======================

A basic development and testing environment includes:

#. An Embassy One or Pro with latest `embassyOS <https://github.com/start9labs/embassy-os/releases>`_
    
    - Use your own hardware to `DIY <https://start9.com/latest/diy>`_
    - Purchase a device from the `Start9 Store <https://store.start9.com>`_
    - x86/VM support coming soon

#. A development machine
    
    - Linux is highly recommended, and this walkthrough will assume a Debian-based (Ubuntu) distribution

Dependencies - Recommended
..........................
These tools may or may not be necessary, depending on your environment and the package you are building.

- Code Editor (IDE) - We recommend `Visual Studio Code <https://code.visualstudio.com/>`_
  
- Build essentials (Ubuntu) - Common build tools and encryption libraries.

    .. code-block::
    
        sudo apt-get install -y build-essential openssl libssl-dev libc6-dev clang libclang-dev ca-certificates
    
- Git - This is a version control system that is used widely in Open Source development.
    
    .. code-block::

        sudo apt install git
    
    Use the following verify installation:
    
    .. code-block::
        
        git --version
    
    .. note:: Anytime you use a ``git clone`` command in this guide, it will create a new directory with code in it, so make sure you are executing this command from a directory that you want to store code in, such as your ``home`` folder.

- yq - A lightweight and portable command-line YAML, JSON and XML processor.
    
    .. code-block::
        
        sudo snap install yq

Dependencies - Required
.......................
- `Docker <https://docs.docker.com/get-docker/>`_ - Docker is currently the only supported containerization method for embassyOS. This declares the necessary environment and building stages for your package to run. Install the desktop GUI or via the command line:

    .. code-block::
        
        curl -fsSL https://get.docker.com | bash
        sudo usermod -aG docker "$USER"
        exec sudo su -l $USER
    
    We need to enable cross-arch emulated builds in Docker (unless you are building on an ARM machine, such as an M1 Mac - in which case, skip this step).
    
    .. code-block::

        docker run --privileged --rm linuxkit/binfmt:v0.8
    
- `Buildx <https://docs.docker.com/buildx/working-with-buildx/>`_ - This adds desirable new features to the Docker build experience. It is included by default with Docker Desktop GUI. If Docker was installed via command line, additionally run:
    
    .. code-block::

        docker buildx install
        docker buildx create --use
        
- Rust & Cargo - Cargo is the package management solution for the Rust programming language. It is needed to build the Embassy SDK. The following will install both Rust and Cargo:
    
    .. code-block::

        curl https://sh.rustup.rs -sSf | sh
        source $HOME/.cargo/env
    
    Verify install:
    
    .. code-block::

        cargo --version
    
- Embassy SDK - embassyOS has an embedded Software Development Kit (SDK). You can install this component on any system, without needing to run embassyOS.
    
    .. code-block::

        git clone -b latest --recursive https://github.com/Start9Labs/embassy-os.git && cd embassy-os/backend && ./install-sdk.sh

    Initialize sdk & verify install

    .. code-block::

        embassy-sdk init
        embassy-sdk --version
    
- Deno (an optional component for more advanced SDK features) - A simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust. It is used to enable the scripting API portion of the SDK.
    
    .. code-block::

        sudo snap install deno
        
.. _hello-world-example:

Demo with Hello World
=====================
Check your environment setup by building a demo project and installing it to embassyOS.

#. Get Hello World
    
    .. code-block::

        git clone https://github.com/Start9Labs/hello-world-wrapper.git
        cd hello-world-wrapper
        git submodule update --init
    
#. Build to create ``hello-world.s9pk``
    
    .. code-block::

        make
    
#. Sideload & Run
    - In the embassyOS web UI menu, navigate to `Embassy -> Settings -> Sideload Service`
    - Drag and drop or select the ``hello-world.s9pk`` from your filesystem to install
    - Once the service has installed, navigate to `Services -> Hello World` and click "Start"
    - Once the Health Check is successful, click "Launch UI" and verify you see the Hello World page

.. _package-the-service:

Package the service
===================
The package file produced by this process has a ``s9pk`` extension. This file is what is installed to run a service on embassyOS.

.. _build-a-dockerfile:

Build a Dockerfile
..................
A Dockerfile defines the recipe for building the environment to run a service. Currently, embassyOS only supports one Dockerfile per project (i.e. no Docker compose), so it should include any necessary database configurations. There are several methods to build a Dockerfile for your service.

First, check to see if the upstream project has already built one. This is usually your best source for finding Docker images that are compatible with ARM. Next, you can:

   - Download an image from [Docker Hub](https://hub.docker.com/)

   - Make a new Dockerfile, and pull in an image the upstream project hosted on Docker Hub as the base 

   - Make a new Dockerfile, and pull in a small distribution base (eg. alpine) and compile the build environment yourself using the upstream project source code

After coding the build steps, build the Docker image using ``docker buildx``, replacing the placeholder variables:

    .. code-block::

        docker buildx build --tag start9/$(PKG_ID)/main:$(PKG_VERSION) --platform=linux/arm64 -o type=docker,dest=image.tar .

The resulting ``docker-images/aarch64.tar`` or ``docker-images/x86_64.tar`` artifact (depending on if you used ``--platform=linux/arm64`` or ``--platform=linux/amd64`` is the Docker image that needs to be included in the ``s9pk`` package.

.. _create-file-structure:

Create File Structure
.....................

Once we have a Docker image, we can create the service wrapper. A service wrapper is a repository of a new git committed project that "wraps" an existing project (i.e. the upstream project). It contains the set of metadata files needed to build a ``s9pk``, define information displayed in the user interface, and establish the data structure of your package. This repository can exist on any hosted git server - it does not need to be a part of the Start9 GitHub ecosystem. 

The following files should be included in the service wrapper repository:

- ``manifest.yaml``, which defines:

      - The package id - a unique lowercase and hyphenated package identifier (eg. hello-world)

      - Essential initialization details, such as version

      - Where you are persisting your data on the filesystem (i.e. mounts and volumes)

      - Port mappings (i.e. interfaces)

       - Check out the `Hello World example <https://github.com/Start9Labs/hello-world-wrapper/blob/master/manifest.yaml>`_ to see line-by-line details

- ``instructions.md``

       - Instructions for the user
    
       - Appears as a menu item in the service page UI

- ``LICENSE``

       - The Open Source License for your wrapper

- ``icon.png``

       - The image that will be associated with the service throughout the UI, including in a marketplace

- ``MAKEFILE``

       - Build instructions to create the s9pk
    
       - `Example MAKEFILE <https://github.com/Start9Labs/hello-world-wrapper/blob/f44899be8523b784861aac92e43fe60f0bf219eb/Makefile#L1-L28>`_

- ``Dockerfile``
 
       - A recipe for service creation
    
       - Add here any prerequisite environment variables, files, or permissions
    
       - Examples:

        - `Using an existing docker image <https://github.com/kn0wmad/robosats-wrapper/blob/d4a0bd609ce18036dfd7ee57e88d437e54d8efb9/Dockerfile#L1>`_
        - `Implementing a database <https://github.com/Start9Labs/photoview-wrapper/blob/ba399208ebfaabeafe9bea0829f494aafeaa9422/Dockerfile#L3-L9>`_
        - `Using a submodule <https://github.com/Start9Labs/ride-the-lightning-wrapper/blob/3dfe28b13a3886ae2f685d10ef1ae79fc4617207/Dockerfile#L9-L28>`_

- ``docker_entrypoint.sh``

       - Starts and governs the operation of a service container
    
       - Gracefully handles container errors and user preferences, i.e. username/password, SIGTERMs
    
       - Examples:
       
          - `Robosats <https://github.com/kn0wmad/robosats-wrapper/blob/master/docker_entrypoint.sh>`_
        
          - `Photoview <https://github.com/Start9Labs/photoview-wrapper/blob/master/docker_entrypoint.sh>`_
        
          - `RTL <https://github.com/Start9Labs/ride-the-lightning-wrapper/blob/master/docker_entrypoint.sh>`_

.. _format-package:

Format Package
..............

Building the final ``s9pk`` artifact depends on the existence of the files listed above, and the execution of the following steps (which should be added to the Makefile):

- Package the ``s9pk``:

        .. code-block::

            embassy-sdk pack

- Verify the ``s9pk`` (replace PKG_ID with your package identifier):

        .. code-block::

            embassy-sdk verify s9pk PKG_ID.s9pk

    The verification step will provide details about missing files, or fields in the service manifest file. 

That's it! You now have a package!

.. _testing:

Testing
=======

#. Run the ``make`` command from the root folder of your wrapper repository to execute the build instructions defined in the ``MAKEFILE``

#. Install the package, via either:

    #. Drag and drop:

        - In the embassyOS web UI menu, navigate to `Embassy -> Settings -> Sideload Service`

        - Drag and drop or select the ``<package>.s9pk`` from your filesystem to install

    #. Use the CLI:

        - Create a config file with the IP address of the device running embassyOS:
            
            .. code-block::

                touch /etc/embassy/config.yaml
                echo "host: <IP_ADDRESS_REPLACE_ME>" > /etc/embassy/config.yaml
        
        - Login with master password 
        
            .. code-block::

                embassy-cli auth login
                embassy-cli package install <PACKAGE_ID_REPLACE_ME>.s9pk
            

    .. figure:: /_static/images/dev/nc-install.png
        :width: 60%
        :alt: Installing a service

#. Once the service has installed, navigate to `Services -> <Service Name>` and click "Start"

#. Check that the service operations function as expected by either launching the UI, or querying if a server application

#. Check that each UI element on the service's page displays the proper information and is accurately formatted

#. Ensure the service can be stopped, restarted, and upgraded (if applicable)

    .. figure:: /_static/images/dev/nc-service.png
        :scale: 40%
        :alt: An eOS service page

.. _submission-and-distribution:

Submission and Distribution
===========================

The ``s9pk`` file can be uploaded for distribution to any website, repository, or marketplace. You can also submit your package for publication consideration on a Start9 Marketplace by emailing us at submissions@start9labs.com or by contacting us in one of our [community channels](https://start9.com/latest/about/contact). Please include a link to the wrapper repository with a detailed README in the submission.

Advanced configuration
======================

Scripting on embassyOS
......................

Start9 has developed a highly extensible scripting API for developers to create the best possible user experience. This is your toolkit for creating the most powerful service possible by enabling features such as:

- Configuration
- Version migration
- Dependencies
- Health checks
- Properties

Use is optional. To experiment, simply use the existing skeleton from the Hello World wrapper `example <https://github.com/Start9Labs/hello-world-wrapper/tree/master/scripts>`_, changing only the package version in the `migration file <https://github.com/Start9Labs/hello-world-wrapper/blob/f44899be8523b784861aac92e43fe60f0bf219eb/scripts/procedures/migrations.ts#L4>`_.

Check out the specification `here <https://start9.com/latest/developer-docs/specification/js-procedure>`_.

.. _packaging-support:

Support
=======
Have a question?  Need a hand? Please jump into our `Community <https://community.start9.com>`_, or our `Matrix Community Dev Channel <https://matrix.to/#/#community-dev:matrix.start9labs.com>`_.  You can also check out our full list of :ref:`Community Channels <contact>`.

Need more details?  Check out the :ref:`Service Packaging Specification <service-packaging-spec>`

You may like to use this handy :ref:`Checklist <packaging-checklist>` to be sure you have everything covered.

.. _glossary:

Glossary
========

`service` - open software applications that run on embassyOS

`package` - the composed set of a Docker image, a service manifest, and service instructions, icon, and license, that are formatted into a file with the `s9pk` extension using `embassy-sdk`

`wrapper` - the project repository that "wraps" the upstream project, and includes additionally necessary files for building and packaging a service for eOS

`scripts` - a set of developer APIs that enable advanced configuration options for services

`embassy-sdk` - the Software Development Toolkit used to package and verify services for embassyOS

`open source software` - computer software that is released under a license in which the copyright holder grants users the rights to use, study, change, and distribute the software and its source code to anyone and for any purpose

`upstream project` - the original, source project code that is used as the base for a service

`embassyOS` - a browser-based, graphical operating system for a personal server

`eOS` - shorthand for embassyOS

`s9pk` - the file extension for the packaged service artifact needed to install and run a service on embassyOS


:ref:`Back to Top <service-packaging>`
