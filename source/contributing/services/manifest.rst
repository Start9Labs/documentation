.. _service_manifest:

****************
Service Manifest
****************

This file describes the service and it's requirements. Important to note is the dependencies key, which contains rules for optional or required other services that are depended on for the developed service to successfully run. 

Formatting: 
    - Serialization language:``.yaml``
    - Case style: ``kebab-case``

Below are the types and sub-type definitions, with necessary elaborations:

Example ``manifest.yaml`` with field notes:

.. code:: yaml

    # manifest version compatibility ie. v0 (this is currently the only option)
    compat: v0
    # service id, used for uniqueness and BE identification ie. bitcoind
    id: String
    # version number of the release conforming to the semantic versioning scheme
    version: String
    # display name of service
    title: String
    # an object containing a short and long description of the service. TODO character lengths
    description:
        short: String
        long: String
    # a link to the release tag notes in GitHub, or a short description TODO character length
    release_notes: String
    # denoting the existence of instructions.md
    has_instructions: Boolean
    # required semver version range of EmbassyOS to run service eg. ">=1.0.0"
    os_version_required: VersionReq
    # recommended semver version range of EmbassyOS to run service eg."^1.0.0"
    os_version_recommended: VersionReq
    # a list of objects of ports to run the service on localhost and tor
    ports:
        - internal: String
          tor: String
    # currently only tar is supported
    image:
        type: String 
    # path to mount the image on the volume, ie: /root/bitcoind
    mount: String
    # a list of objecting containing the source and destination directories of persistent assets, either that should be copied over during build, or to persist when service started, and if the volume directory should be overwritten when the release is copied over
    # src: path to file within the assets directory that is in the build directory
    # dst: path within volume to place it
    assets:
      - src: String TODO confirm type
        dst: String TODO confirm type
        overwrite: Boolean
    # version of tor support, eg. v1, v2, v3
    hidden_service_version: String
    # A map of dependent services, see below for more details
    dependencies: Dependencies

Dependencies
------------

The key of each field in the dependencies object is the lowercase, kebab-case app ID of the service that is depended on. Each dependency contains a set of rules that need to be fulfilled as true if the dependency is to be properly installed. The interface should provide suggestions for the behavior if the denoted rule cannot be met with previous configurations.

Let's take this snippet for example:

.. code:: yaml

    ...
    dependencies:
        btc-rpc-proxy:
            version: "^0.1.0"
            optional: Can configure an external bitcoin node.
            description: Required for fetching validated blocks.
            config:
            - rule: '''users.*.name = "c-lightning"'
                description: 'Must have an RPC user named "c-lightning"'
                suggestions:
                - PUSH:
                    to: 'users'
                    value:
                        name: c-lightning
    ...

.. role:: raw-html(raw)
    :format: html
:raw-html:`<br />`

The service ``btc-rpc-proxy`` is a dependency of the service ``c-lightning``. ``c-lightning`` requires it to be installed at a version >=0.1.0 <0.2.0. There exists a rule that states the config option ``user.name`` must be equal to "c-lightning". If this value does not exist for ``user.name`` when accessed, ``PUSH`` the value "c-lighting" to the field. 

Types for ``manifest.yaml`` fields:

.. code:: typescript

    interface Dependencies [{
        serviceId: DepInfo
    }]

    interface DepInfo {
        version: String -- TODO correct for VersionReq?,
        optional?: String,
        description?: String,
        config: [
            entry: {
                rule: ConfigRule,
                description: String,
            },
            suggestions: [{
                condition?: ConfigRule,
                variant: SuggestionVariant,
            }],
        ],
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
            value: Value, @aiden define Value
        },
    }

    interface SetVariant {
        to: string,
        to-value: Value,
        to-entropy: {
            charset: String // 'a-z,A-Z,0-9'
            len: number
        },
    }

----

Examples of actual ``manifest.yaml`` files for existing services:

.. code:: yaml

    compat: v0
    id: c-lightning
    version: "0.1.0"
    title: c-lightning
    description:
    short: "The Lightning Node implementation by Blockstream"
    long: "A lightweight, highly customizable and standard compliant implementation of the Lightning Network protocol."
    release-notes: https://github.com/ElementsProject/lightning/releases/tag/v0.1.0
        ports:
        - internal: 8080
          tor: 8080
    image:
    type: tar
    mount: /root/.lightning
    has-instructions: true
    os-version-required: ">=0.2.5"
    os-version-recommended: ">=0.2.5"
    assets: []
    hidden-service-version: v3
    dependencies:
        btc-rpc-proxy:
            version: "^0.1.0"
            optional: Can configure an external bitcoin node.
            description: Required for fetching validated blocks.
            config:
            - rule: '''users.*.name = "c-lightning"'
                description: 'Must have an RPC user named "c-lightning"'
                suggestions:
                - PUSH:
                    to: 'users'
                    value:
                        name: c-lightning
            - rule: 'users.[first(item => ''item.name = "c-lightning")].password?'
                description: 'RPC user "c-lightning" must have a password'
                suggestions:
                - SET:
                    var: 'users.[first(item => ''item.name = "c-lightning")].password'
                    to-entropy:
                        charset: 'a-z,A-Z,0-9'
                        len: 22
            - rule: 'users.[first(item => ''item.name = "c-lightning")].fetch-blocks?'
                description: 'RPC user "c-lightning" must have "Fetch Blocks" enabled'
                suggestions:
                - SET:
                    var: 'users.[first(item => ''item.name = "c-lightning")].fetch-blocks'
                    to-value: true

.. code:: yaml

    compat: v0
    id: cups
    version: "0.3.6"
    title: "Cups Messenger"
    description:
    short: "Real private messaging"
    long: "Cups is a private, self-hosted, peer-to-peer, Tor-based, instant messenger. Unlike other end-to-end encrypted messengers, with Cups on the Embassy there are no trusted third parties."
    release-notes: |
    Features
        - Adds instructions defined by EmbassyOS 0.2.4 instructions feature
    ports:
        - internal: 59001
            tor: 59001
        - internal: 80
            tor: 80
    image:
    type: tar
    mount: /root
    has-instructions: true
    os-version-required: ">=0.2.4"
    os-version-recommended: ">=0.2.4"
    assets:
        - src: httpd.conf
            dst: "."
            overwrite: true
        - src: www
            dst: "."
            overwrite: true
    hidden-service-version: v3
