
.. _config_rules:

============
Config Rules
============

This file defines the configuration rules, or the rule-set that defines dependencies between config variables. In practice, config rules are for auto-configuring self dependencies. Self dependencies are internal dependencies of a service, such as if the setting of one config variable informs the option of another setting. These "dependencies" are configured as rules.

A rule is a boolean expression that we demand to be true. It is not true if the expression fails the rule parser. Set of predicates. xt

They follow the `Backus–Naur <https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form>`_ meta-syntax for writing rules.

Rules are composed of two main concepts:

* Variables - accessor into a configuration
* Terms - either a variable or type literal (ie. a boolean term is a boolean variable, a boolean expression, or a comparison operation between numbers or strings)

Variables can be booleans, numbers, or strings, and have a different syntax depending on the type. These type annotations check your config rules against your config spec and throw an error if invalid.

- ``?`` - Casts to boolean value. If the value is not a boolean, this notes whether or not the value is null.
- ``#`` - Treat the value as a number. If it is not a number, the value will be parsed as NaN. String numbers are not currently supported.
- ``'`` - Cast the value into a string. Applies to any value except for an object or a list.
- ``!`` - Equals not.

.. note::
    Config rules are processed in order.

If application does not satisfy a rule, a set of suggestions should be provided. These suggestions are in the form of the operation to preform:

    - ``Set`` - set the value

    - ``Push`` - add to the value (such as to a list)

    - ``Delete`` - delete the value

.. code:: typescript

    enum SuggestionVariant = Set | Delete | Push

    interface Set {
        var: String, // fully qualified path without typecast
        // one of the following three variants are required
        to: Option<String> // a string expression, use when tying another config value
        to-value: Option<String>
        to-entropy: Option<{
            charset: String (eg. 'a-z,A-Z,0-9')
            len: Number
        }>
    }

    interface Delete {
        src: String, // path to key - removes if in a list
    }

    interface Push {
        to: String,
        value: String, // string literal of value to be set
    }

SET Examples
------------

.. code:: yaml

    - SET:
        # the key in config you want to set
        var: 'users.[first(item => ''item.name = "c-lightning")].password'
        # the value in config that you will set
        to-entropy:
            charset: "a-z,A-Z,0-9"
            len: 22

    - SET:
        var: 'users.[first(item => ''item.name = "c-lightning")].fetch-blocks'
        to-value: true


PUSH Examples
-------------

.. code:: yaml

    - PUSH:
        to: "users"
        value:
            name: c-lightning
            allowed-calls: []

    - PUSH:
        to: 'users.[first(item => ''item.name = "c-lightning")].allowed-calls'
        value: "getnetworkinfo"

Full example from `c-lightning manifest <https://github.com/Start9Labs/c-lightning-wrapper/blob/master/manifest.yaml>`_:

.. code:: yaml

    config:
        - rule: '''users.*.name = "c-lightning"'
        description: 'Must have an RPC user named "c-lightning"'
        suggestions:
            - PUSH:
                to: "users"
                value:
                    name: c-lightning
                    allowed-calls: []
            - SET:
                var: 'users.[first(item => ''item.name = "c-lightning")].password'
                to-entropy:
                    charset: "a-z,A-Z,0-9"
                    len: 22
