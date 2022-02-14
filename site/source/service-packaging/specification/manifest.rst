.. _service_manifest:

========
Manifest
========

Overview
--------

This file describes the service and it's requirements. It is used to:

- create a listing in the marketplace
- denote any installation considerations
- define dependency requirements
- define actions such as health checks, backups, and configuration
- define alerts and other messaging / descriptions for the user interface

Each time a service is updated, the Manifest should be updated to include the new version, release notes, and any pertinent updates to the install, uninstall, or restoration flows. All this information is displayed in the marketplace listing, and the optionally denoted alerts will be displayed when appropriate to provide the user with more information.

There is nothing you need to do as a developer to set up Tor for running a service. This is *completely* handled by EmbassyOS - a Tor address will be automatically generated when the service is installed. Just define an interface with a tor config in the Manifest file. You do, however, need to ensure the service is in fact capable of running over Tor.

The Manifest is also responsible for outlining service :ref:`dependencies <dependencies>`. By defining rules using the :ref:`EmbassyOS DSL specification <config_rules>`, users can easily and selectively install, uninstall, and update any service without getting stuck in dependency hell. EmbassyOS presents this information in a polished install/uninstall/update wizard, so there's no need for editing configuration files or jumping into the command line. For you as a developer, this simply means populating this key in the manifest!

Formatting
----------

- Serialization language:``.yaml``
- Case style: ``kebab-case``

Type definitions
----------------

Below are the types and sub-type definitions, with necessary elaborations. Any item that contains ``Option<>`` is an optional field.

.. code:: yaml

    # The package identifier used by the OS
    id: String
    # A human readable service title
    title: String
    # Service version - accepts up to four digits, where the last confirms to revisions necessary for EmbassyOS - see documentation: https://github.com/Start9Labs/emver-rs. This value will change with each release of the service. 
    version: Number
    # Release notes for the update - can be a string, paragraph or URL
    release-notes: String
    # The type of license for the project. Include the LICENSE in the root of the project directory. A license is required for a Start9 package.
    license: String
    # The Start9 wrapper repository URL for the package. This repo contains the manifest file (this), any scripts necessary for configuration, backups, actions, or health checks (more below). This key must exist. But could be embedded into the source repository. 
    wrapper-repo: String
    # The original project repository URL. There is no upstream repo in this example
    upstream-repo: String
    # URL to the support site / channel for the project. This key can be omitted if none exists, or it can link to the original project repository issues.
    support-site: String
    # URL to the marketing site for the project. This key can be omitted if none exists, or it can link to the original project repository. 
    marketing-site: String
    # The series of commands to build the project into an s9pk for arm64/v8. In this case we are using a Makefile with the simple build command "make".
    build: List<String>
    # Minimum required version of EmbassyOS
    min-os-version: Number
    # Human readable descriptors for the service. These are used throughout the EmbassyOS user interface, primarily in the marketplace.
    description:
    # This is the first description visible to the user in the marketplace.
    short: String
    # This description will display with additional details in the service's individual marketplace page
    long: String
    # These assets are static files necessary for packaging the service for Start9 (into an s9pk). Each value is a path to the specified asset. If an asset is missing from this list, or otherwise denoted, it will be defaulted to the values denoted below. 
    assets:
    # Default = LICENSE.md
    license: String
    # Default = icon.png
    icon: String
    # Default = INSTRUCTIONS.md
    instructions: String
    # Default = image.tar
    docker-images: String
    # The main action for initializing the service. Currently, the only type of action available is docker.
    main:
    # Docker is currently the only action implementation
    type: String
    # Identifier for the main image volume, which will be used when other actions need to mount to this volume.
    image: String
    # The executable binary for starting the initialization action. For docker actions, this is typically a "docker_entrypoint.sh" file. See the Dockerfile and the docker_entrypoint.sh in this project for additional details.
    entrypoint: String
    # Any arguments that should be passed into the entrypoint executable 
    args: List<String>
    # Specifies where to mount the data volume(s), if there are any. Mounts for pointer dependency volumes are also denoted here. These are necessary if data needs to be read from / written to these volumes. 
    mounts:
        # Specifies where on the service's file system its persistence directory should be mounted prior to service startup
        main: String
    # Health checks 
    health-checks:
    main:
        name: String
        description: String
        type: String
        image: String
        entrypoint: String
        args: List<String>
        # When `inject` is true, the health check will use the main image to run the health check. This is faster as there is no need to spin up an additional docker container
        # When `inject` is false, the health check will use whatever image is specified. This is useful when using a system image with additional utilities to run a health check. If inject=false, then system must equal true
        inject: Boolean
        # Optional if false - indicates if an image that is preloaded onto the system will be used
        system: Boolean
        # Required - valid values are yaml, toml, json
        io-format: Enum<json|yaml|toml>
    # Specifies how to get and set configuration file values for the service. NOTE: This stanza can be left empty (null) if the service has no configuration options.
    config:
    # The config action to run to get the specified config file (default is config.yaml)
    get:
        # The type of implementation to run this action (currently, only Docker is available)
        type: String
        # The Docker image to run the action command in. This could be the service's main image, or an image that is preloaded onto the system, like compat (which holds compatible helper functions for default functionality)
        image: String
        # Indicates if an image that is preloaded onto the system will be used
        system: Boolean
        # The initial run command to execute the config get action
        entrypoint: String
        # Any arguments that need to be passed into the run command
        args: List<String>
        # The locations at which to mount the specified Docker images
        mounts:
            compat: String
            main: String
        # Required - valid values are yaml, toml, json
        io-format: Enum<yaml|json|toml>
    # The config action to run to set the specified config file (default is config.yaml). Details for the keys below are the same as above.
    set:
        type: String
        image: String
        system: Boolean
        entrypoint: String
        args: List<String>
        mounts:
            compat: String
            main: String
        io-format: Enum<yaml|json|toml>
    # This is a key value map specifying dependent services that this service needs in order to function. The keys are the package id's on which you depend. NOTE: if developing a standalone service, you may leave this stanza as an empty object (the key dependencies is required)
    dependencies:
        # Key must be the package id of another service that exists in the marketplace
        filebrowser:
            # The version range that is acceptable for this dependency
            version: Emver
            # Describes if the dependency is critical to the service functioning. If the dependency is critical, the service will stop if this dependency is stopped.
            critical: Boolean
            # Specifies the requirement type of the dependency
            requirement:
                # "Opt-out" means the dependency will be required according to the default config. "Opt-in" means the dependency may be required if you change the config. And "required" just means it's always required.
                type: Enum<opt-in|opt-out|required>
                # An explanation of how to opt-in or opt-out. This value is optional for type=required
                how: String
            # Description of the dependency relationship
            description: String
            # This is a list of rules that levies requirements on the configuration of the dependency and suggests ways to remedy any incompatibilities. Documentation of this feature is outside the scope of this example.
            config: ~
    # This denotes any data, asset, or pointer volumes that should be connected when the "docker run" command is invoked
    volumes:
    # This is the image where files from the project asset directory will go
    main:
        type: Enum<data|asset>
    # This is an example of an asset volume
    compat:
        type: Enum<data|asset> 
    # This specifies how to configure the port mapping for exposing the service over TOR and LAN (if applicable). Many interfaces can be specified depending on the needs of the service. If it can be launched over a Local Area Network connection, specify a `lan-config`. Otherwise, at minimum, a `tor-config` must be specified.
    interfaces:
        # This key is the internal name that the OS will use to configure the interface
        main:
            # A human readable name for display in the UI
            name: String
            # A descriptive description of what the interface does
            description: String
            tor-config:
                # Port mappings are from the external port to the internal container port
                port-mapping:
                    80: String
            # Port mappings are from the external port to the internal container port
            lan-config:
                80:
                    ssl: Boolean
                    internal: Number
            # Denotes if the service has a user interface to display
            ui: Boolean
            # Denotes the protocol specifications used by this interface
            protocols: List<String>
    # Alerts: omitting these will result in using the default alerts in EmbassyOS, except for start, which has no default.
    alerts:
        install-alert: String
        uninstall-alert: String
        restore-alert: String
        start-alert: String
    # Specifies how backups should be run for this service. The default EmbassyOS provided option is to use the duplicity backup library on a system image (compat)
    backup:
        create:
            type: String
            image: String
            system: Boolean 
            entrypoint: String 
            # Arguments to pass into the entrypoint.
            args: List<String>
            mounts:
                # BACKUP is the default volume that is used for backups. This is whatever backup drive is mounted to the device, or a network filesystem.  
                # The value here donates where the mount point will be. The backup drive is mounted to this location.
                BACKUP: String
                main: String
        restore:
            type: String
            image: String
            system: Boolean
            entrypoint: String
            args: List<String>
            mounts:
                BACKUP: String
                main: String
    # Commands that can be issued from the UI. NOTE: if no actions are required, this section can be left as an empty object 
    actions:
    hello-world-action:
        name: String
        description: String
        warning: Option<String>
        # Indicates what state the service can be in while executing the action
        allowed-statuses: List<String>
        # Defines how the action is run
        implementation:
            type: String
            image: String
            entrypoint: String
            args: [List<String>
            # Same as note on health-checks
            inject: Boolean
            # Required - valid values are yaml, toml, json
            io-format: Enum<yaml|json|toml>

.. _dependencies-spec:

Dependencies
------------

Many services depend on other libraries and services on EmbassyOS (such as Bitcoin), sometimes even a particular version of those services, which need to be specified by the developers so that EmbassyOS can handle installing these dependencies under the hood.

The key of each field in the dependencies object is the lowercase, kebab-case app ID of the service that is depended on. Each dependency contains a set of rules that need to be fulfilled as true if the dependency is to be properly installed. The "config rules" here are for auto-configuring dependencies - the action defined by the rule will be executed if the service is auto configured with defaults during initial setup. This simplifies and streamlines the user experience. The interface should provide suggestions for the behavior if the denoted rule cannot be met with previous configurations.

Let's take this snippet for example:

.. code:: yaml

    ...
    btc-rpc-proxy:
        version: ">=0.3.2.1 <0.4.0"
        requirement:
        type: "opt-in"
        how: Can alternatively configure an external bitcoind node.
        critical: false
        description: Used to fetch validated blocks.
        config:
            check:
                type: docker
                image: compat
                system: true
                entrypoint: compat
                args:
                - dependency
                - check
                - btcpayserver
                - "btc-rpc-proxy"
                - /datadir
                - "/mnt/assets/btc-rpc-proxy_config_rules.yaml"
                mounts:
                    main: /datadir
                    compat: /mnt/assets
                io-format: yaml
        auto-configure:
            type: docker
            image: compat
            system: true
            entrypoint: compat
            args:
              - dependency
              - "auto-configure"
              - btcpayserver
              - "btc-rpc-proxy"
              - /datadir
              - "/mnt/assets/btc-rpc-proxy_config_rules.yaml"
            mounts:
                main: /datadir
                compat: /mnt/assets
            io-format: yaml
    ...

.. role:: raw-html(raw)
    :format: html

:raw-html:`<br />`

TODO update for accuracy

The service ``btc-rpc-proxy`` is a dependency of the service ``c-lightning``. ``c-lightning`` requires it to be installed at a version >=0.3.2.1 but <0.4.0. There exists a rule that states the config option ``user.name`` must be equal to "c-lightning". If this value does not exist for ``user.name`` when accessed, ``PUSH`` the value "c-lighting" to the field. This all takes place during the initial service configuration, before the service is started for the first time.

.. note::
    Dependency config rules are processed in order.

Type definitions
================

Types for ``manifest.yaml`` fields: TODO check accuracy

.. code:: typescript

    interface Dependencies [{
        serviceId: DepInfo
    }]

    interface DepInfo {
        version: String // ie. 0.11.1.1
        optional?: String,
        description?: String,
        config: [ConfigRule],
        ],
    }

    interface ConfigRule {
        rule: String, // ie. 'users.*.name = "lnd"
        description: String,
        suggestions: [SuggestionVariant]
    }

    interface SuggestionVariant {
        SET: {
            var: String,
            to: SetVariant,
        },
        DELETE: {
            src: String,
        },
        PUSH: {
            to: String,
            value: Value,
        },
    }

    interface SetVariant {
        to: Option<String>,
        to-value: Option<Value>, // ie. true/false
        to-entropy: Option<{
            charset: String // ie. 'a-z,A-Z,0-9'
            len: number
        }>
    }

.. role:: raw-html(raw)
    :format: html

:raw-html:`<br />`

Examples
========

- `Hello World <https://github.com/Start9Labs/hello-world-wrapper/blob/master/manifest.yaml>`__
- `Filebrowser <https://github.com/Start9Labs/filebrowser-wrapper/blob/master/manifest.yaml>`__
- `Embassy-pages <https://github.com/Start9Labs/embassy-pages-wrapper/blob/master/manifest.toml>`__
- `Photoview <https://github.com/Start9Labs/embassyos-photoview-wrapper/blob/master/manifest.yaml>`__
- `BTCPay Server <https://github.com/Start9Labs/btcpayserver-wrapper/blob/master/manifest.yaml>`__
- `Synapse <https://github.com/Start9Labs/synapse-wrapper/blob/master/manifest.yaml>`__
