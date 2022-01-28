.. _embassy-sdk:

===========
Embassy-SDK
===========

.. warning:: This is for developers only!! Anything you do while SSH'd into your Embassy is NOT SUPPORTED, unless under the guidance of a Start9 technician.

You can install to your system by running the following from you ``embassy-os`` directory:

    .. code-block:: bash

        cargo install --bin=embassy-sdk --path=. --no-default-features --verbose


You can enter ``embassy-sdk help`` or ``embassy-sdk <option> help`` to get an overview of capabilities:

    .. code-block:: bash

        embassy-sdk --help
        Embassy SDK

        USAGE:
            embassy-sdk [OPTIONS] <SUBCOMMAND>

        FLAGS:
            -h, --help       Prints help information
            -V, --version    Prints version information

        OPTIONS:
            -c, --config <config>

        SUBCOMMANDS:
            git-info    Print current git hash
            help        Prints this message or the help of the given subcommand(s)
            init        Initialize
            inspect     Inspect a .s9pk
            pack        Package a service into the .s9pk format
            verify      Verify a .s9pk is valid


Please visit https://github.com/Start9Labs/embassy-os/tree/master/backend for more details
