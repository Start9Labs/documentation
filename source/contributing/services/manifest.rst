.. _service_manifest:

****************
Service Manifest
****************

Overview
========

This file describes the service and it's requirements. It is used by the marketplace to create a service listing. 

Important of note is the :ref:`dependencies <dependencies>` key, which contains rules for optional or required other services that are depended on for the service to successfully run.

Formatting
==========

- Serialization language:``.yaml``
- Case style: ``kebab-case``

Type definitions
================
Below are the types and sub-type definitions, with necessary elaborations. Any item that contains ``Option<>`` is an optional field.

Example
=======

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
    # a notification message that should caution the user with any service particularities, eg. beta tech
    install_alert: Option<String>
    # a notification message warning users of potential problems with uninstalling, such as dependency failures or data loss
    uninstall_alert: Option<String>
    # a notification message containing warning or details about backup restoration
    restore_alert: Option<String>
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
    # shared memory container size
    shm_size_mb: Option<usize>
    # path to mount the image on the volume, ie: /root/bitcoind
    mount: String
    # public directory path
    public: Option<String>
    # shared directory path
    shared: Option<String>
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

.. _dependencies:

Dependencies
------------

Many services depend on other libraries and services on EmbassyOS (such as Bitcoin), sometimes even a particular version of those services, which need to be specified by the developers so that EmbassyOS can handle installing these dependencies under the hood.

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
        version: String // ie. 0.11.1.1
        optional?: String,
        description?: String,
        config: [ConfigRule],
        ],
    }

    interface ConfigRule {
        rule: String, // ie. '''users.*.name = "lnd"'
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

----

Examples
--------

Actual ``manifest.yaml`` files for existing services:

LND
^^^

.. code:: yaml

    compat: v0
    id: lnd
    version: 0.11.1.1
    title: Lightning Network Daemon
    description:
    short: "A complete implementation of a Lightning Network node by Lightning Labs"
    long: "LND fully conforms to the Lightning Network specification (BOLTs). BOLT stands for: Basis of Lightning Technology. In the current state lnd is capable of: creating channels, closing channels, managing all channel states (including the exceptional ones!), maintaining a fully authenticated+validated channel graph, performing path finding within the network, passively forwarding incoming payments, sending outgoing onion-encrypted payments through the network, updating advertised fee schedules, and automatic channel management (autopilot)."
    release-notes: https://github.com/lightningnetwork/lnd/releases/tag/v0.11.1-beta
    ports:
    - internal: 8080
        tor: 8080
    - internal: 9735
        tor: 9735
    - internal: 9911
        tor: 9911
    - internal: 10009
        tor: 10009
    image:
    type: tar
    mount: /root/.lnd
    public: public
    has-instructions: true
    os-version-required: ">=0.2.8"
    os-version-recommended: ">=0.2.8"
    install-alert: |
    READ CAREFULLY! LND and the Lightning Network are considered beta software. Please use with caution and do not risk more money than you are willing to lose. We encourage frequent backups. If for any reason, you need to restore LND from a backup, your on-chain wallet will be restored, but all your channels will be closed and their funds returned to your on-chain wallet, minus fees. It may also take some time for this process to occur.
    uninstall-alert: "READ CAREFULLY! Uninstalling LND will result in permanent loss of data, including its private keys for its on-chain wallet and all channel states. Please make a backup if you have any funds in your on-chain wallet or in any channels. Recovering from backup will restore your on-chain wallet, but due to the architecture of the Lightning Network, your channels cannot be recovered. All your channels will be closed and their funds returned to your on-chain wallet, minus fees. \n"
    restore-alert: |
    Restoring LND will overwrite its current data, including its on-chain wallet and channels. Any channels opened since the last backup will be forgotten and may linger indefinitely, and channels contained in the backup will be closed and their funds returned to your on-chain wallet, minus fees.
    assets: []
    hidden-service-version: v3
    dependencies:
    btc-rpc-proxy:
        version: "^0.2.4"
        optional: Can alternatively configure an external bitcoin node.
        description: Used to fetch validated blocks.
        config:
        - rule: '''users.*.name = "lnd"'
            description: 'Must have an RPC user named "lnd"'
            suggestions:
            - PUSH:
                to: "users"
                value:
                    name: lnd
                    allowed-calls: []
            - SET:
                var: 'users.[first(item => ''item.name = "lnd")].password'
                to-entropy:
                    charset: "a-z,A-Z,0-9"
                    len: 22
        - rule: '''users.[first(item => ''item.name = "lnd")].allowed-calls.* = "getinfo"'
            description: 'RPC user "lnd" must have "getinfo" enabled'
            suggestions:
            - PUSH:
                to: 'users.[first(item => ''item.name = "lnd")].allowed-calls'
                value: "getinfo"
        - rule: '''users.[first(item => ''item.name = "lnd")].allowed-calls.* = "getbestblockhash"'
            description: 'RPC user "lnd" must have "getbestblockhash" enabled'
            suggestions:
            - PUSH:
                to: 'users.[first(item => ''item.name = "lnd")].allowed-calls'
                value: "getbestblockhash"
        - rule: '''users.[first(item => ''item.name = "lnd")].allowed-calls.* = "gettxout"'
            description: 'RPC user "lnd" must have "gettxout" enabled'
            suggestions:
            - PUSH:
                to: 'users.[first(item => ''item.name = "lnd")].allowed-calls'
                value: "gettxout"
        - rule: '''users.[first(item => ''item.name = "lnd")].allowed-calls.* = "getblockchaininfo"'
            description: 'RPC user "lnd" must have "getblockchaininfo" enabled'
            suggestions:
            - PUSH:
                to: 'users.[first(item => ''item.name = "lnd")].allowed-calls'
                value: "getblockchaininfo"
        - rule: '''users.[first(item => ''item.name = "lnd")].allowed-calls.* = "sendrawtransaction"'
            description: 'RPC user "lnd" must have "sendrawtransaction" enabled'
            suggestions:
            - PUSH:
                to: 'users.[first(item => ''item.name = "lnd")].allowed-calls'
                value: "sendrawtransaction"
        - rule: '''users.[first(item => ''item.name = "lnd")].allowed-calls.* = "getblockhash"'
            description: 'RPC user "lnd" must have "getblockhash" enabled'
            suggestions:
            - PUSH:
                to: 'users.[first(item => ''item.name = "lnd")].allowed-calls'
                value: "getblockhash"
        - rule: '''users.[first(item => ''item.name = "lnd")].allowed-calls.* = "getblock"'
            description: 'RPC user "lnd" must have "getblock" enabled'
            suggestions:
            - PUSH:
                to: 'users.[first(item => ''item.name = "lnd")].allowed-calls'
                value: "getblock"
        - rule: '''users.[first(item => ''item.name = "lnd")].allowed-calls.* = "getblockheader"'
            description: 'RPC user "lnd" must have "getblockheader" enabled'
            suggestions:
            - PUSH:
                to: 'users.[first(item => ''item.name = "lnd")].allowed-calls'
                value: "getblockheader"
        - rule: '''users.[first(item => ''item.name = "lnd")].allowed-calls.* = "estimatesmartfee"'
            description: 'RPC user "lnd" must have "estimatesmartfee" enabled'
            suggestions:
            - PUSH:
                to: 'users.[first(item => ''item.name = "lnd")].allowed-calls'
                value: "estimatesmartfee"
        - rule: '''users.[first(item => ''item.name = "lnd")].allowed-calls.* = "getnetworkinfo"'
            description: 'RPC user "lnd" must have "getnetworkinfo" enabled'
            suggestions:
            - PUSH:
                to: 'users.[first(item => ''item.name = "lnd")].allowed-calls'
                value: "getnetworkinfo"
        - rule: 'users.[first(item => ''item.name = "lnd")].fetch-blocks?'
            description: 'RPC user "lnd" must have "Fetch Blocks" enabled'
            suggestions:
            - SET:
                var: 'users.[first(item => ''item.name = "lnd")].fetch-blocks'
                to-value: true
    bitcoind:
        version: "^0.21.0"
        optional: Can alternatively configure an external bitcoin node.
        description: Used to subscribe to new block events.
        config:
        - rule: "zmq-enabled?"
            description: "Must have an ZeroMQ enabled"
            suggestions:
            - SET:
                var: "zmq-enabled"
                to-value: true

Cups
^^^^

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
