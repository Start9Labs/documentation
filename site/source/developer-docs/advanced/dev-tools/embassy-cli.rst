.. _embassy-cli:

==============================
StartOS Command Line Interface
==============================

.. warning:: This is for advanced users only!! Anything you do while SSH'd into your Embassy is NOT SUPPORTED, unless under the guidance of a Start9 technician.

When interacting with StartOS directly, you will invariably want to use ``embassy-cli``.  Embassy-CLI can control StartOS in many of the same ways that the UI can, but with finer controls and deeper insights.

In order to use Embassy-CLI, you will first need to authorize yourself with the following command...

    .. code-block:: bash

        embassy-cli auth login

    and enter your StartOS Master Password at the prompt.


You can enter ``embassy-cli help`` or ``embassy-cli <option> help`` to get an overview of capabilities:

    .. code-block:: bash

        Embassy-CLI

        USAGE:
            embassy-cli [OPTIONS] <SUBCOMMAND>

        FLAGS:
                --help       Prints help information
            -V, --version    Prints version information

        OPTIONS:
            -c, --config <config>
            -h, --host <host>
            -p, --proxy <proxy>

        SUBCOMMANDS:
            auth            Login/logout and manage sessions
            backup          Manage backups
            db              Interact with the Database
            disk            Information on the external drive
            echo            Echoes
            git-info        Print the current git hash
            help            Prints this message or the help of the given subcommand(s)
            inspect         Details on services and their components
            net             Network information
            notification    Control UI notifications
            package         Interact with packages
            server          StartOS operations and information
            ssh             Manage SSH keys
            wifi            Manage WiFi networks
