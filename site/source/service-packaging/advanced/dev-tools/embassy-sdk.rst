.. _embassy-sdk:

================================
Embassy Software Development Kit
================================

.. warning:: This is for developers only!! Anything you do while SSH'd into your Embassy is NOT SUPPORTED, unless under the guidance of a Start9 technician.

You can install to your system by running the following from your ``embassy-os`` directory:

    .. code-block:: bash

        cd backend
        ./install-sdk.sh


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


Please visit the `EmbassyOS backend <https://github.com/Start9Labs/embassy-os/tree/master/backend>`_ for more details
