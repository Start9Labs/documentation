.. _embassy-cli:

==============================
StartOS Command Line Interface
==============================

.. warning:: This is for advanced users only!! Anything you do while SSH'd into StartOS is NOT SUPPORTED, unless under the guidance of a Start9 technician.

When interacting with StartOS directly, you will invariably want to use ``start-cli``.  start-cli can control StartOS in many of the same ways that the UI can, but with finer controls and deeper insights.

In order to use start-cli, you will first need to authorize yourself with the following command...

    .. code-block:: bash

        start-cli auth login

    and enter your StartOS Master Password at the prompt.


You can enter ``start-cli help`` or ``start-cli <option> help`` to get an overview of capabilities:

    .. code-block:: bash

        StartOS-CLI

        USAGE:
            start-cli [OPTIONS] <SUBCOMMAND>

        OPTIONS:
            -c, --config <config>
            -h, --host <host>
                --help       Prints help information
            -p, --proxy <proxy>
            -V, --version    Prints version information

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
