.. _service_config:

**********************
Service Configurations
**********************

These files define the configuration spec, a structure that defines the set of values the config can hold, and the configuration rules, the rule-set that define dependencies between config variables in order to coexist. 

Config Spec
===========

This file defines the structure of the configuration of a service. Ultimately, these values influence the UI elements for a user to interact with. Specifically, they evaluate to the options available when:

TODO include screenshots

- Prior to service installation when the user needs to be made aware of any necessary dependency configurations
- The user installs a service and the service is in the "Needs Config" state
- Whenever a use edits a service config (ie. TODO)
- When config pointers get updated (TODO define)

All keys in Config Spec are in camelCase. Due to a backwards compatibility issue, ``app-id`` is an exception and will always be kebab case, as will the ``String`` value of ``app-id``. 

If null by default is true, nullable must be true. 
If null by default is false, nullable could be either.

Lists of any type do not contain the nullable/default for each item in list. The list *itself* can be nullable/have default. 

Descriptions are encouraged but not required.

``Tag`` is the key that will be rendered on the UI element.

The ``Config`` type is written in the same syntax as the config rules:

Range is loosely based off mathematical range syntax, with infinity replaced with ``*``:

    ``[ || ]`` = inclusive

    ``( || )`` = noninclusive

    ``*`` = infinity on either end

eg:

.. code::

    [0,*) - all numbers to infinity including 0

Types
-----

.. code:: typescript

    interface ConfigSpec {
        serviceId: ValueSpecAny
    }

    interface ListSpec<T> {
        spec: T
        range: NumRange<usize> TODO define Range
        default: String
    }

    interface ValueSpec {
        Boolean: {
            type: String (ie. "boolean")
            name: String
            description?: String
            changeWarning?: String
            default: Boolean
        }
        Enum: {
            type: String (ie. "enum")
            name: String
            description?: String
            changeWarning?: String
            default: Enum
            values: new Set(String)
        }
        Number: {
            type: String (ie. "number")
            name: String
            description?: String
            changeWarning?: String
            default: Boolean
            nullable: Boolean
            range?: Range
            integral: Boolean
            units?: String
        }
        Object: {
            type: String (ie. "object")
            name: String
            description?: String
            changeWarning?: String
            nullable: Boolean
            null-by-default: Boolean
            spec: ConfigSpec
        }
        String: {
            type: String (ie. "string")
            name: String
            description?: String
            changeWarning?: String
            nullable: Boolean
            default: String | Entropy
            pattern?: {
                pattern: Regex
                pattern-description: String
            }
        }
        Union: {
            type: String (ie. "union")
            name: String
            description?: String
            changeWarning?: String
            default: Boolean
            variants: {
                key: ConfigSpec
            }
            tag: {
                id: String,
                name: String,
                description?: String,
                variantNames: {
                    key: String
                },
            }
        }
        Pointer: {
            type: String (ie. "pointer")
            name: String
            description?: String
            changeWarning?: String
            subtype: PointerType
            app-id: String (*always* kebab case)
            target: AppPointerSpecVariants | SystemPointerSpecVariants
            index?: String (dependent on target being AppPointerSpecVariants)
        }
        List: {
            name: String
            type: String (ie. "list")
            subtype: String
            description?: String
            changeWarning?: String
            range: Range (ie. "[0,*)")
            default: ListSpec || []
            spec: {
              type: String // can only be Enum | Number | Object | String
            }
        }
        Map: {
            name: String
            type: String (ie. "map")
            description?: String
            changeWarning?: String
            default: {}
            range: Range
            tag: {
                name: String
                description: String
            }
            spec: ConfigSpec
        }
    }
    type Range = String
    type PointerType = App | System
    interface AppPointerSpecVariants { LanAddress | TorAddress | Config }
    interface SystemPointerSpecVariants {}
    interface Config {
        index: String
    }


Examples:

.. code:: yaml

    password:
    type: string
    nullable: false
    name: "Password"
    description: "The password for connecting to the server."
    default:
        charset: "a-k,m-z,2-9"
        len: 20
    pattern: '^[^\n"]*$'
    patternDescription: "Must not contain newline or quote characters."

.. code:: yaml

    bitcoind:
        type: union
        name: Bitcoin Core
        description: |
            The Bitcoin Core node to connect to:
            - internal: The Bitcoin Core RPC Proxy service installed to your Embassy
            - external: An unpruned Bitcoin Core node running on a different device
        tag: type
        default: internal
        variants:
            internal:
            address:
                type: pointer
                name: Local Address
                description: The LAN IP address of your Bitcoin Core RPC Proxy service
                subtype: app
                app-id: btc-rpc-proxy
                target: lan-address
            user:
                type: pointer
                name: RPC Username
                description: The username for the RPC user allocated to c-lightning
                subtype: app
                app-id: btc-rpc-proxy
                target: config
                index: 'users.[first(item => ''item.name = "c-lightning")].name'
            password:
                type: pointer
                name: RPC Password
                description: The password for the RPC user allocated to c-lightning
                subtype: app
                app-id: btc-rpc-proxy
                target: config
                index: 'users.[first(item => ''item.name = "c-lightning")].password'
            external:
            address:
                type: string
                name: Public Address
                description: The public address of your Bitcoin Core RPC server
                nullable: false
            user:
                type: string
                name: RPC Username
                description: The username for the RPC user on your Bitcoin Core RPC server
                nullable: false
            password:
                type: string
                name: RPC Password
                description: The password for the RPC user on your Bitcoin Core RPC server
                nullable: false
            btc-standup:
            quick-connect-url:
                type: string
                name: Quick Connect URL
                description: The Quick Connect URL for your Bitcoin Core RPC server
                nullable: false
                pattern: 'btcstandup://[^:]*:[^@]*@[a-zA-Z0-9.-]+:[0-9]+(/(\?(label=.+)?)?)?'
                patternDescription: Must be a valid Quick Connect URL. For help, check out https://github.com/BlockchainCommons/Gordian/blob/master/Docs/Quick-Connect-API.md
    rpc:
        type: object
        name: RPC Options
        description: Options for the HTTP RPC interface
        nullable: false
        nullByDefault: false
        spec:
            enabled:
            type: boolean
            name: Enable
            description: Whether to enable the RPC webserver
            default: true
            user:
            type: string
            name: RPC Username
            description: The username for the RPC user on your c-lightning node
            nullable: false
            default: lightning
            password:
            type: string
            name: RPC Password
            description: The password for the RPC user on your c-lightning node
            nullable: false
            default:
                charset: 'a-z,A-Z,0-9'
                len: 22

Config Rules
============

These rules define application level rules. A rule is a boolean expression that we demand to be true. If it is failing, it is not true.

They follow the `Backus–Naur <https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form>`_ metasyntax for writing rules.

Rules are composed of two main concepts:

* Variables - accessor into a configuration
* Terms - either a variable or type literal (ie. a boolean term is a boolean variable, a boolean expression, or a comparison operation between numbers or strings.)

Variables can be: 

- booleans, numbers, strings
- different syntax depending on what you want it to be
- ``?`` casts to boolean value. if not a boolean, whether or not its null
- ``#`` treat as a number. If not a number, will parse as NaN. String numbers are not currently supported. 
- ``'`` cast into a string. Applies to any value except for an object or a list.
- ``!`` equals not

If application does not satisfy a rule, give a set of suggestions, in the form of operation to preform:

    - Set 

    - Push

    - Delete

.. code::typescript 

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


