.. _config_spec:

===========
Config Spec
===========

Introduction
============

Most self-hosted applications require the user to tell the application how to behave using a config file in a specific format, environment variables, command-line arguments, or some combination of these inputs. One of the coolest features of StartOS is that the services' configuration will be available to the user as a slick GUI that always produces a valid configuration no matter how little experience or skill the user has.

With StartOS, this means a services' configuration requires a file to define the particular format to ensure it integrates smoothly with the user interface. This format enables clean handling of improper values and dependency management.

This file defines the *structure* of the service's native config and should be curated according to the ``ConfigSpec`` type, which is a detailed mapping of the configuration options with acceptable values, defined patterns, and defaults.

For example, if the user chooses config option A, then config option B must be between 5 and 10. This enables a simple GUI configuration experience, complete with validations and protections, for users. They do not have to worry about the consequences of a wrong value or manually editing a config file.

Purpose
=======

The ``ConfigSpec`` exists primarily an input specification and secondarily for input validation. 


.. figure:: /_static/images/services/service5.png
  :width: 80%
  :alt: Synapse Config


The file containing the ``ConfigSpec`` defines the structure of configuration options your service depends on to run. It additionally can include configuration options that users might want to enable for more advanced or customized usage. Ultimately, these values influence the UI elements for a user to interact with. Specifically, they evaluate to the options available when managing a service, such as:

- Prior to service installation when the user needs to be made aware of any necessary dependency configurations
- When the user installs a service and the service is in the "Needs Config" state
- Whenever a user edits a service config
- When config pointers get updated

The neat part about this file is that each ``ValueSpec`` type gets translated into a specific front end component. For instance, boolean values display as a toggle button, such as in the Synapse example of ``Enable Registration``.

.. figure:: /_static/images/services/synapseconfig.png
  :width: 80%
  :alt: Example boolean toggle

Another advantage is the ability to define default values. These values automatically get populated if the user selects the ``Default`` option when setting up a service in ``Needs Config`` state. This is incredibly convenient for users who want to get up and running quickly.

Implementation
==============

The following section contains implementation specifications for the structure of the file containing the ``ConfigSpec``. This config specification if of the type:

.. code-block::
    :caption: ConfigSpec

    key: ValueSpec

    ValueSpec Type: Boolean | Enum | List | Number | Object | String | Union | Pointer


- All keys are ``kebab-case`` strings, which correspond to the package id
- All values are one the following specs (ie. ``ValueSpec`` type):

    - :ref:`boolean <boolean>`

    - :ref:`enum <enum>`

    - :ref:`list <list>`

    - :ref:`number <number>`

    - :ref:`object <object>`

    - :ref:`string <string>`

    - :ref:`union <union>`

    - :ref:`pointer <pointer>`

- In the examples for each value spec type below, ``Option`` means the key is optional. Otherwise, the key is required.
- Descriptions are optional, but recommended
- Name corresponds to the name of the config field
- Find a complete example :ref:`here <example_config_spec>`
- Change warning text displays when the value is altered

Specs
=====

These are the possible value types with examples for each key of the config specification.

.. _boolean:

Boolean
-------

Config value specification denoted as a boolean value. A default value is required.

.. code-block::
    :caption: ValueSpec Type

    type: boolean
    name: String
    description: Option<String>
    warning: Option<String>
    default: Boolean

Example
^^^^^^^^

.. code:: yaml

    fetch-blocks:
        type: boolean
        name: Fetch Blocks
        description: Fetch blocks from the network if pruned from disk
        default: true

.. _enum:

Enum
----

Config value specification denoted as an enum value. Enums values must be a unique set. If no default is provided, ``null`` will be the assumed value.

.. code-block::
    :caption: ValueSpec Type

    type: enum
    name: String
    description: Option<String>
    warning: Option<String>
    default: Option<Enum>
    values: Set<String>


Example
^^^^^^^

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
----

The list type describes an array of values. The values must consist of the same subtype, which can be any of the ValueSpec types available in the StartOS config specification.
Lists of any type do not contain the default for each item in list. The list *itself* can have a default. If no default is provided, ``null`` will be the assumed value.

Range is loosely based off mathematical range syntax, with infinity replaced with ``*``:

    ``[ || ]`` = inclusive

    ``( || )`` = noninclusive

    ``*`` = infinity on either end

eg:

.. code::

    [0,*) - all numbers to infinity including 0

.. code-block::
    :caption: ValueSpec Type

    type: list
    name: String
    description: Option<String>
    subtype: Enum<enum | number | object | string | union>
    range: NumRange<unsigned integer>
    spec: ValueSpec
    default: ValueSpec

Example:
^^^^^^^^

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
------

A number value within an optionally defined range. Nullable field is required. If ``nullable`` is true, the default is assumed to be ``null`` if it is not provided.

.. code-block::
    :caption: ValueSpec Type

    type: number
    name: String
    description: Option<String>
    change-warning: Option<String>
    default: Boolean
    nullable: Boolean
    range: Option<NumRange<64 bit floating point>>
    integral: Boolean
    units: Option<String>

Example
^^^^^^^

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
-----------

A nested representation of a ``ConfigSpec``. The object type takes the same structure under the ``spec`` key as a ``ConfigSpec``: a key indicates the field name, and the value denotes the ``ValueSpec`` type for that field.

.. code-block::
    :caption: ValueSpec Type

    type: object
    name: String
    description: Option<String>
    warning: Option<String>
    display-as: Option<String>
    # indicates whether duplicates can be permitted
    unique-by: UniqueBy
    spec: ConfigSpec

    type UniqueBy = null | string | { any: UniqueBy[] } | { all: UniqueBy[] }

Example
^^^^^^^

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
------

There are various options for string values. They can optionally be marked as copyable or masked, such as for passwords, which will reflect the UI element display. A pattern, expressed in regex, can be denoted. If it exists, this field requires both the pattern type (ie. Regex) and pattern description (ie. an explanation of the pattern requirements).

If the default type is ``Entropy``, the charset can optionally specify an inclusive ranged character set (ie. "a-f,0-9").

.. code-block::
    :caption: ValueSpec Type

    type: string
    name: String
    description: Option<String>
    warning: Option<String>
    masked: Option<boolean>
    copyable: Option<boolean>
    # Placeholder text in UI input box
    placeholder: Option<String>
    nullable: Boolean
    default: String | Entropy
    pattern: Option<Regex>
    pattern-description: Option<String>

.. code-block::
    :caption: Entropy Type

    charset: Option<String>
    len: integer

Examples
^^^^^^^^

.. code::

    color:
        type: string
        name: Color
        description: Color value for the Lightning Network
        nullable: false
        pattern: "[0-9a-fA-F]{6}"
        pattern-description: |
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
--------

The pointer type *points* to a config value on another service installed on StartOS (ie. package subtype) or to the StartOS system (ie. system subtype). When pointing to another service, the ``selector`` field indicates the path to the desired config variable.

.. code-block::
    :caption: ValueSpec Type

    type: pointer
    name: String
    description: Option<String>
    warning: Option<String>
    subtype: Enum< package | system>
    package-id: String (*always* kebab case)
    target: AppPointerSpecVariants | SystemPointerSpecVariants
    selector: Option<String> (dependent on target being AppPointerSpecVariants)

    AppPointerSpecVariants = TorAddress | TorKey | Config
    SystemPointerSpecVariants = HostIp

Example
^^^^^^^

.. code::

    user:
        type: pointer
        name: RPC Username
        description: The username for the RPC user for Bitcoin Core
        subtype: package
        package-id: bitcoind
        target: config
        selector: "rpc.username"

.. _union:

Union
-----

This type describes a necessary dependency. Multiple variants can be expressed to enable the user the option to connect to another service (internal dependency) or outside source (external dependency).

For example, the Bitcoin Proxy service is united with an instance of Bitcoin. Three variants are defined: internal, external, and a quick connect. In this case, internal refers to the Bitcoin Core instance running on StartOS, and defines the RPC credentials necessary for connecting; external refers to a Bitcoin Core node running on a different device, and defines the RPC credentials necessary for connecting; quick connect refers to yet another method of connecting to a Bitcoin Core node, optimized for convenience.

Default is required and corresponds to one of the variants.

``Tag`` is the key that will be rendered on the UI element.

.. code-block::
    :caption: ValueSpec Type

    type: union
    name: String
    description: Option<String>
    change-warning: Option<String>
    default: Boolean
    tag: Tag
    variants: Map<String, ConfigSpec>
    display-as: Option<String>
    unique-by: any | all | exactly | notUnique

.. code-block::
    :caption: Tag Type

    id: String
    name: String
    description: Option<String>
    variant-names: Map<String, String>

.. _example_config_spec:

Example
^^^^^^^

.. code:: yaml

    bitcoind:
        type: union
        name: Bitcoin Core
        description: The Bitcoin Core node to connect to
        tag:
            id: type
            name: Type
            description: |
            - Internal: The Bitcoin Core service installed to your server
            - External: A Bitcoin Core node running on a different device
            - Quick Connect: A Quick Connect URL for an unpruned Bitcoin Core node
            variant-names:
            internal: Internal
            external: External
            quick-connect: Quick Connect
        default: internal
        variants:
            internal:
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
