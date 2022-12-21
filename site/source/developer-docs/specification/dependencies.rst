.. _dependencies-spec:

============
Dependencies
============

Background
----------

When it comes to running your own server, managing dependencies is perhaps the most difficult part. The term "dependency hell" emerged from this sentiment. Even the best developers have lost significant amounts of time trying to find, correct, or clarify documentation for dependencies or dependency configuration. Individuals who manage their own servers have specific technical skills and are willing to devote the time and effort necessary to maintain them. Companies have entire departments dedicated to this task.

Some other personal server products aimed at non-technical individuals tackle this problem by simply hard coding dependencies. Since embassyOS is a platform for running all open-source, self-hosted software, it is not possible to hard code every possible service, service dependency, and service dependency configuration forever. Instead, Start9 built a new, unprecedented operating system that touts a generalized, intuitive approach to dependency management and service configuration. embassyOS enables users to easily and selectively install, uninstall, and update any service they want without getting stuck in dependency hell.

This may sound cool or neat, but it is more than that: *it's novel*. This has never been done before.

The key to making the system work is a new, domain-specific-language (DSL) and set of standards that are used by developers to define the rules and requirements of their services. Run in the context of embassyOS, these rules and requirements appear as simple UI elements, such as inputs, toggles, and drop downs, and they are enforced by validations and clear user instructions. Using this system, what previously required serious time and expertise, can now be done by anyone in a matter of seconds.

This DSL is utilized in the :ref:`config rules <config_rules>` and :ref:`dependencies <service-dependencies>` key in the service manifest.

Context
-------

Many services depend on other libraries and services on embassyOS (such as Bitcoin), sometimes even a particular version of those services. These need to be specified by the developers so that embassyOS can handle installing these dependencies under the hood.

Requirement
-----------

Dependencies are defined in the Manifest. 

The key of each field in the dependencies object is the lowercase, kebab-case package id of the service that is depended on. 

Only the type of requirement must be defined. Requirement types include:

- "Required" - which means it's always required.
- "Opt-in" - which means the dependency may be required if you change the service's config ie. you can opt into the selection
- "Opt-out" - which means the dependency will be required according to the default service config ie. you can opt out of the selection

Advanced Configuration
----------------------

If a dependency requires a more advanced configuration, rule checks and auto configurations can be implemented. These functions utilize a preloaded Docker image within embassyOS entitled _compat_. This system utility provides the mechanisms for checking dependency configuration compatibility by providing a file with the defined rules as input.

In this case, each dependency contains a set of rules that need to be fulfilled as true if the dependency is to be properly installed. The "config rules" here are for auto-configuring dependencies - the action defined by the rule will be executed if the service is auto configured with defaults during initial setup. This simplifies and streamlines the user experience. The interface should provide suggestions for the behavior if the denoted rule cannot be met with previous configurations.

Example
-------

Here is an example from BTCPay Server. 

First, an except from the dependencies section of the Manifest. We see here that ``bitcoind`` is a dependency of BTCPay Server. It is required to be installed at at least version 0.21.1.2. 

There also exists a rule that states the ``advanced.peers.listen`` config option in bitcoind must be equal to ``true``. If this value is not set as such, ``SET`` the value to true. 

These actions all take place during the initial service configuration, before the service is started for the first time.

.. code:: yaml

    ...
    dependencies:
        # Key must be the package id of another service that exists in the marketplace
        bitcoind:
            # The version range that is acceptable for this dependency
            version: "^0.21.1.2"
            # Describes if the dependency is critical to the service functioning. If the dependency is critical, the service will stop if this dependency is stopped.
            critical: false
            requirement:
                # "Opt-out" means the dependency will be required according to the default config. "Opt-in" means the dependency may be required if you change the config. And "required" just means it's always required.
                type: "opt-in"
                # An explanation of how to opt-in or opt-out. This value is optional for type=required
                how: Can alternatively configure an external bitcoind node.
            # Description of the necessity of the dependency relationship
            description: Used to fetch validated blocks.
            # This defines the actions to check dependency rules and auto configure them if possible
            config:
                # This levies requirements on the configuration of the dependency and suggests ways to remedy any incompatibilities.
                check:
                    type: docker
                    image: compat
                    system: true
                    entrypoint: compat
                    args:
                        - dependency
                        - check
                        - btcpayserver
                        - "bitcoind"
                        - /datadir
                        - "/mnt/assets/bitcoind_config_rules.yaml"
                    mounts:
                        main: /datadir
                        compat: /mnt/assets
                    io-format: yaml
                # This implements default values on the configuration of the dependency
                auto-configure:
                    type: docker
                    image: compat
                    system: true
                    entrypoint: compat
                    args:
                        - dependency
                        - "auto-configure"
                        - btcpayserver
                        - "bitcoind"
                        - /datadir
                        - "/mnt/assets/bitcoind_config_rules.yaml"
                    mounts:
                        main: /datadir
                        compat: /mnt/assets
                    io-format: yaml
    ...

Secondly, an except from it's dependency's configuration rules file:

.. code:: yaml

    - rule: "advanced.peers.listen?"
      description: Peer port must be listening on the network.
      suggestions:
        - SET:
            var: advanced.peers.listen
            to-value: true

.. note::

    Dependency config rules are processed in order.

Optional Dependencies
---------------------

Configuring a service to have multiple optional dependencies is also possible. This can be done by defining a file that specifies the condition under which the dependency should become activated.

For example, in BTCPay Server's config, a user can select either LND or Core Lightning (CLN) as an internal lightning node implementation. To do this, we define the following file:

.. code:: yaml

    lnd:
        condition: '''lightning.type = "lnd"'
        health_checks: []
    c-lightning:
        condition: '''lightning.type = "core lightning"'
        health_checks: []

This file gets passed in as an argument during BTCPay Server's config set function in its Manifest, shown `here <https://github.com/Start9Labs/btcpayserver-wrapper/blob/master/manifest.yaml#L86>`__.