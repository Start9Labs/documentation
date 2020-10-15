.. _service_config:

**********************
Service Configurations
**********************


Config Spec
===========

This file defines the structure of the configuration of a service. Ultimately, these values influence the UI elements for a user to interact with. Specifically, they evaluate to the options available when:

TODO include screenshots

- Prior to service installation when the user needs to be made aware of any necessary dependency configurations
- The user installs a service and the service is in the "Needs Config" state
- Whenever a use edits a service configuration (ie. TODO)
- When config pointers get updated (TODO define)

@aiden are all keys kebab case? (some snake, some camel in code)

TODO commas or no commas

Types
-----

.. code::typescript

    interface ConfigSpec {
        serviceId: ValueSpecAny
    }

    pub enum ValueSpecAny {
        Boolean(WithDescription<WithDefault<ValueSpecBoolean>>),
        Enum(WithDescription<WithDefault<ValueSpecEnum>>),
        List(ValueSpecList),
        Number(WithDescription<WithDefault<WithNullable<ValueSpecNumber>>>),
        Object(WithDescription<WithNullable<ValueSpecObject>>),
        String(WithDescription<WithDefault<WithNullable<ValueSpecString>>>),
        Union(WithDescription<WithDefault<ValueSpecUnion>>),
        Pointer(WithDescription<ValueSpecPointer>),
    }

    interface ValueSpec {
        Boolean: {
            type: String (ie. "boolean")
            name: String
            description: String TODO char length
            default: Boolean
        },
        Enum: {
            type: String (ie. "enum")
            name: String
            description: String TODO char length
            default: Enum
            values: new Set(String),
        },
        List: [ValueSpec.Enum | ValueSpec.Object | ValueSpec.Number | ValueSpec.String],
        Number: {
            type: String (ie. "number")
            name: String
            description: String TODO char length
            default: Boolean
            nullable: Boolean
            range?: Number TODO f64?,
            integral: Boolean,
            units?: String,
        },
        Object: {
            type: String (ie. "object")
            name: String
            description: String TODO char length
            nullable: Boolean
            null-by-default: Boolean,
            spec: ConfigSpec,
        },
        String: {
            type: String (ie. "string")
            name: String
            description: String TODO char length
            nullable: Boolean
            pattern?: {
                pattern: Regex,
                pattern-description: String,
            },
        },
        Union: {
            type: String (ie. "union")
            name: String
            description: String TODO char length
            default: Boolean
            variants: {
                key: ConfigSpec,
            },
            tag: String,
        },
        Pointer: {
            type: String (ie. "pointer")
            name: String
            description: String TODO char length
            subtype: app
            app-id: String
            target: AppPointerSpecVariants,
            index: String
        },
    }

Examples:

.. code:: yaml

    ---
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

Rules are composed of _ concepts:

* Variables
* Terms

Variables can be: booleans, numbers, strings
	- different syntax depending on what you want it to be
	- ? casts to boolean value. if not a boolean, whether or not its null
	- # treat as a number. If not a number, will parse as NaN. String numbers are not currently supported. 
	- ‘ cast into a string. Applies to any value except for an object or a list.

Term: token that yields a value 

A boolean term is a boolean variable, a boolean expression, or a comparison operation between numbers or strings.

If application does not satisfy a rule, give a set of suggestions, in the form of operation to preform:
- Set 
- Push
- Delete

.. code:: yaml

    ---
    - rule: 'rpc.enable? OR !(''advanced.pruning.mode = "manual")'
    description: "RPC must be enabled for manual pruning."


