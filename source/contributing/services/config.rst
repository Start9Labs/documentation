.. _service_config:

****************************
Service Config Specification
****************************

Configuration options are a crucial component of any application. EmbassyOS requires a particular format to ensure your service integrates smoothly with the user interface. This enables clean handling of improper values and dependency management.

The outcome of this step is two files:

:ref:`config_spec.yaml <config_spec>`

:ref:`config_rules.yaml <config_rules>`

These files contain a detailed mapping of configuration options with acceptable values, defaults and relational rule-sets. 

For example, if the user chooses config option A, then config option B must be between 5 and 10. This enables a simple GUI configuration experience, complete with validations and protections, for users. They do not have to worry about the consequences of a wrong value in a ``.conf`` file. 

.. _config_spec:

Config Spec
===========

Overview
--------

.. figure:: /_static/images/service/bitcoin_config.png
  :width: 80%
  :alt: Bitcoin Config

This file defines the structure of configuration options your service depends on to run. It additionally can include configuration options that users might want to enable for more advanced or customized usage. Ultimately, these values influence the UI elements for a user to interact with. Specifically, they evaluate to the options available when managing a service, such as:

- Prior to service installation when the user needs to be made aware of any necessary dependency configurations
- When the user installs a service and the service is in the "Needs Config" state
- Whenever a user edits a service config
- When config pointers get updated

The neat part about this file is that each ValueSpec type gets translated into a specific front end component. For instance, boolean values display as a toggle button.

.. figure:: /_static/images/service/boolean_toggle.png
  :width: 80%
  :alt: Example boolean toggle

Another advantage is the ability to define default values. These values automatically get populated if the user selects the ``Default`` option when setting up a service in ``Needs Config`` state. This is super convenient for users who want to get up and running quickly.

Types
-----

ConfigSpec Type:

.. code::

    key: ValueSpec

    ValueSpec Type: Boolean | Enum | List | Number | Object | String | Union | Pointer (see below for details)

Implementation Guide
--------------------

The following section contains implementation specifications for the ``config_spec.yaml`` file.

- All keys are ``kebab-case`` strings, which correspond to the service (app) id
- All values are one the following specs (ie. ``ValueSpec`` type):

    :ref:`boolean <boolean>`

    :ref:`enum <enum>`

    :ref:`list <list>`

    :ref:`number <number>`

    :ref:`object <object>`

    :ref:`string <string>`

    :ref:`union <union>`

    :ref:`pointer <pointer>`

- In the examples for each value spec type below, ``Option`` means the key is optional. Otherwise, the key is required.
- Descriptions are optional but recommended
- Name corresponds to the name of the config field
- Find a complete example :ref:`here <example_config_spec>`
- Change warning text displays when the value is altered

.. _boolean:

Boolean
^^^^^^^

Config value specification denoted as a boolean value. A default value is required.

``ValueSpec`` Type:

.. code::

    type: boolean
    name: String
    description: Option<String>
    changeWarning: Option<String>
    default: Boolean

Example:

.. code:: yaml

    fetch-blocks:
        type: boolean
        name: Fetch Blocks
        description: Fetch blocks from the network if pruned from disk
        default: true

.. _enum:

Enum
^^^^

Config value specification denoted as an enum value. Enums values must be a unique set. If no default is provided, ``null`` will be the assumed value.

ValueSpec Type:

.. code::

    type: enum
    name: String
    description: Option<String>
    changeWarning: Option<String>
    default: Option<Enum>
    values: Set<String>

.. code:: yaml

    theme-mode:
        type: enum
        name: Theme Mode
        values:
                - NIGHT
                - DAY
        valueNames:
                NIGHT: Night
                DAY: Day
        default: NIGHT

.. _list:

List
^^^^

The list type describes an array of values. The values must consist of the same subtype, which can be any of the ValueSpec types available in the EmbassyOS config specification. 
Lists of any type do not contain the default for each item in list. The list *itself* can be have a default. If no default is provided, ``null`` will be the assumed value.

Range is loosely based off mathematical range syntax, with infinity replaced with ``*``:

    ``[ || ]`` = inclusive

    ``( || )`` = noninclusive

    ``*`` = infinity on either end

eg:

.. code::

    [0,*) - all numbers to infinity including 0

ValueSpec Type:

.. code:: 

    type: list
    name: String
    description: Option<String>
    subtype: enum || number || object || string || union
    range: NumRange<unsigned integer>
    spec: ValueSpec
    default: ValueSpec

Example:

.. code:: yaml

    allowed-calls:
        type: list
        name: Allowed Calls
        description: The list of all RPC methods this user is allowed to make
        subtype: enum
        range: "[0, *)"
        spec:
            type: enum
            values:
                - item
                - item


.. _number:

Number
^^^^^^

A number value within an optionally defined range. Nullable field is required. If ``nullable`` is true, the default is assumed to be ``null`` if it is not provided.

ValueSpec Type:

.. code::

    type: number
    name: String
    description: Option<String>
    changeWarning: Option<String>
    default: Boolean
    nullable: Boolean
    range: Option<NumRange<64 bit floating point>>
    integral: Boolean
    units: Option<String>

Example:

.. code:: yaml

    type: number
    name: Peer Message Timeout
    description: How long to wait for a response from a peer before failing
    nullable: false
    integral: true
    units: Seconds
    range: "[0, *)"
    default: 30

.. _object:

Object Type
^^^^^^^^^^^

A nested representation of a ConfigSpec. The object type takes the same structure under the ``spec`` key as a ConfigSpec: a key indicates the field name, and the value denotes the ValueSpec type for that field. 

There is no default option for the object type. Rather, the option ``null-by-default`` should be used to indicate the default as ``null``. If null by default is true, nullable must be true. If null by default is false, nullable could be either.

``unique-by`` indicates whether duplicates can be permitted in the list.

ValueSpec Type:

.. code::

    type: object
    name: String
    description: Option<String>
    changeWarning: Option<String>
    nullable: Boolean
    null-by-default: Boolean
    display-as: Option<String>
    unique-by: UniqueBy
    spec: ConfigSpec

    type UniqueBy = null | string | { any: UniqueBy[] } | { all: UniqueBy[] }

Example:

.. code:: yaml

    type: object
    name: Advanced
    description: Advanced settings for Bitcoin Proxy
    nullable: false
    spec:
        tor-only:
            type: boolean
            name: Only Tor Peers
            description: Use Tor for all peer connections
            default: false
        peer-timeout:
            type: number
            name: Peer Message Timeout
            description: How long to wait for a response from a peer before failing
            nullable: false
            integral: true
            units: Seconds
            range: "[0, *)"
            default: 30
        max-peer-age:
            type: number
            name: Maximum Peer Age
            description: How long to wait before refreshing the peer list
            nullable: false
            integral: true
            units: Seconds
            range: "[0, *)"
            default: 300
        max-peer-concurrency:
            type: number
            name: Maximum Peer Concurrency
            description: How many peers to reach out to concurrently for block data
            nullable: true
            integral: true
            range: "[1, *)"
            default: 1

.. _string:

String
^^^^^^

There are various options for string values. They can optionally be marked as copyable or masked, such as for passwords, which will reflect the UI element display. A pattern, expressed in regex, can be denoted. If it exists, this field requires both the pattern type (ie. Regex) and pattern description (ie. an explanation of the pattern requirements).

If the default type is ``Entropy``, the charset can optionally specify an inclusive ranged character set (ie. "a-f,0-9").

ValueSpec Type:

.. code::

    type: string
    name: String
    description: Option<String>
    changeWarning: Option<String>
    copyable: Option<boolean>
    masked: Option<boolean>
    nullable: Boolean
    default: String | Entropy
    pattern: Option<Regex>
    pattern-description: Option<String>

Entropy Type:

.. code::

    charset: Option<String>
    len: integer

Examples:

.. code::

    color:
        type: string
        name: Color
        description: Color value for the Lightning Network
        nullable: false
        pattern: "[0-9a-fA-F]{6}"
        patternDescription: |
                Must be a valid 6 digit hexadecimal RGB value. The first two digits are red, middle two are green and final two are
                blue
        default:
                charset: "a-f,0-9"
                len: 6

    password:
        type: string
        name: Password
        description: The password for the RPC User
        nullable: false
        copyable: true
        masked: true
        default:
            charset: "a-z,A-Z,0-9"
            len: 22

.. _pointer:

Pointer
^^^^^^^

The pointer type *points* to a config value on another service installed on EmbassyOS (ie. app subtype) or to the EmbassyOS system (ie. system subtype). When pointing to another service, the ``index`` field indicates the path to the desired config variable.

ValueSpec Type:

.. code::

    type: pointer
    name: String
    description: Option<String>
    changeWarning: Option<String>
    subtype: app | system
    app-id: String (*always* kebab case)
    target: AppPointerSpecVariants | SystemPointerSpecVariants
    index: Option<String> (dependent on target being AppPointerSpecVariants)

    AppPointerSpecVariants = LanAddress | TorAddress | TorKey | Config 
    SystemPointerSpecVariants = HostIp

Example:

.. code::

    user:
        type: pointer
        name: RPC Username
        description: The username for the RPC user for Bitcoin Core
        subtype: app
        app-id: bitcoind
        target: config
        index: "rpc.username"

.. _union:

Union
^^^^^
This type describes a necessary dependency. Multiple variants can be expressed to enable the user the option to connect to another service (internal dependency) or outside source (external dependency).

For example, the Bitcoin Proxy service is united with an instance of Bitcoin. Three variants are defined: internal, external, and a quick connect. In this case, internal refers to the Bitcoin Core instance running on EmbassyOS, and defines the RPC credentials necessary for connecting; external refers to a Bitcoin Core node running on a different device, and defines the RPC credentials necessary for connecting; quick connect refers to yet another method of connecting to a Bitcoin Core node, optimized for convenience.

Default is required and corresponds to one of the variants. 

``Tag`` is the key that will be rendered on the UI element.

ValueSpec Type;

.. code::

    type: union
    name: String
    description: Option<String>
    changeWarning: Option<String>
    default: Boolean
    tag: Tag
    variants: Map<String, ConfigSpec>
    display-as: Option<String>
    unique-by: any | all | exactly | notUnique

Tag Type:

.. code::

    id: String
    name: String
    description: Option<String>
    variant-names: Map<String, String>

.. _example_config_spec:

Example:

.. code:: yaml

    bitcoind:
        type: union
        name: Bitcoin Core
        description: The Bitcoin Core node to connect to
        tag:
            id: type
            name: Type
            description: |
            - Internal: The Bitcoin Core service installed to your Embassy
            - External: A Bitcoin Core node running on a different device
            - Quick Connect: A Quick Connect URL for an unpruned Bitcoin Core node
            variant-names:
            internal: Internal
            external: External
            quick-connect: Quick Connect
        default: internal
        variants:
            internal:
                address:
                    type: pointer
                    name: Local Address
                    description: The LAN IP address of your Bitcoin Core service
                    subtype: app
                    app-id: bitcoind
                    target: lan-address
                user:
                    type: pointer
                    name: RPC Username
                    description: The username for the RPC user for Bitcoin Core
                    subtype: app
                    app-id: bitcoind
                    target: config
                    index: "rpc.username"
                password:
                    type: pointer
                    name: RPC Password
                    description: The password for the RPC user for Bitcoin Core
                    subtype: app
                    app-id: bitcoind
                    target: config
                    index: "rpc.password"
            external:
                addressext:
                    type: string
                    name: Public Address
                    description: The public address of your Bitcoin Core RPC server
                    nullable: false
                userext:
                    type: string
                    name: RPC Username
                    description: The username for the RPC user on your Bitcoin Core RPC server
                    nullable: false
                passwordext:
                    type: string
                    name: RPC Password
                    description: The password for the RPC user on your Bitcoin Core RPC server
                    nullable: false
            quick-connect:
                quick-connect-url:
                    type: string
                    name: Quick Connect URL
                    description: The Quick Connect URL for your Bitcoin Core RPC server
                    nullable: false
                    pattern: 'btcstandup://[^:]*:[^@]*@[a-zA-Z0-9.-]+:[0-9]+(/(\?(label=.+)?)?)?'
                    patternDescription: Must be a valid Quick Connect URL. For help, check out https://github.com/BlockchainCommons/Gordian/blob/master/Docs/Quick-Connect-API.md


.. _config_rules:

Config Rules
============

This file defines the configuration rules, or the rule-set that defines dependencies between config variables. 

A rule is a boolean expression that we demand to be true. It is not true if the expression fails the rule parser.

They follow the `Backus–Naur <https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form>`_ meta-syntax for writing rules.

Rules are composed of two main concepts:

* Variables - accessor into a configuration
* Terms - either a variable or type literal (ie. a boolean term is a boolean variable, a boolean expression, or a comparison operation between numbers or strings)

Variables can be booleans, numbers, or strings, and have a different syntax depending on the type:

- ``?`` - Casts to boolean value. If the value is not a boolean, this notes whether or not the value is null.
- ``#`` - Treat the value as a number. If it is not a number, the value will be parsed as NaN. String numbers are not currently supported. 
- ``'`` - Cast the value into a string. Applies to any value except for an object or a list.
- ``!`` - Equals not.

If application does not satisfy a rule, a set of suggestions should be provided. These suggestions are in the form of the operation to preform:

    - ``Set`` - set the value 

    - ``Push`` - add to the value (such as to a list)

    - ``Delete`` - delete the value

.. code:: typescript 

    enum SuggestionVariant = Set | Delete | Push

    interface Set {
        var: String,
        to: SetVariant,
    }
    interface Delete {
        src: String,
    }
    interface Push {
        to: String,
        value: Value,
    }

    enum SetVariant = To | ToValue | ToEntropy

    type To = String
    type ToValue = Value
    interface ToEntropy {
        charset: String (eg. 'a-z,A-Z,0-9')
        len: Number
    }

SetVariant Examples:

.. code:: yaml

    to: 'users'

    to-entropy: {
        charset: 'a-z,A-Z,0-9'
        len: 22
    }

    to: true

.. code:: yaml

    - rule: 'rpc.enable? OR !(''advanced.pruning.mode = "manual")'
      description: "RPC must be enabled for manual pruning."