.. _embassy-sdk:

===========
Embassy SDK
===========

The embassyOS embedded Software Development Kit (SDK), is a CLI (Command Line Interface) tool that aids in building and packaging services you wish to deploy to the Embassy.

It helps validate that the necessary components of the package exist, and package all of those components into a special file type (``s9pk``) that is understood by embassyOS.

Installation
============

You can install this component on any system, without needing to run embassyOS, by running the following command:

    .. code-block::

        git clone -b latest --recursive https://github.com/Start9Labs/embassy-os.git && cd embassy-os/backend && ./install-sdk.sh

    
Next, initialize the SDK and verify the installation was successful:

    .. code-block::

        embassy-sdk init
        embassy-sdk --version


Commands
========

To see a list of all available commands provided, run the following from an terminal window:

.. code:: bash

    embassy-sdk --help


embassy-sdk init
----------------

Initialize the developer key for interacting with the SDK.

By default, this creates the developer key at `/etc/embassy`. You might need to change ownership of this folder depending on your system permissions.

.. code:: bash

    chown <user> /etc/embassy

Alternatively, you can write a config file with your desired developer location, it simply needs the following format:

    .. code:: yaml

        developer-key-path: /desired/path/to/key

And load it by running:

    .. code:: bash

        embassy-sdk -c /path/to/config init


embassy-sdk pack
----------------

This command takes the necessary package components and assembles them into the `s9pk` file format needed to install a service on embassyOS. It expects the following files to exist:

    - Manifest
    - Instructions
    - License
    - Icon
    - Dockerfile

If this command fails, the error response will indicate which component is missing.

embassy-sdk verify
-------------------

This command verifies aspects about the components assembled into the `s9pk`, such as:

    - Ensures that all mounts are real volumes in the manifest
    - Ensures all cert volumes point to real interfaces in the manifest
    - Ensures all actions refer to real images in the manifest
    - Ensures all images are tagged correctly in the manifest
    - Ensures the icon is less than 100KB

It should be run _after_ `embassy-sdk pack` in order to verify the validity of each component.

If this command fails, the error message will indicate the mismatched details.

embassy-sdk git-info
--------------------

This command outputs the git commit hash of the SDK version installed on your platform.

embassy-sdk inspect
-------------------

This command contains several utilities for reading components once packaged into the `s9pk`. In development, it can be helpful to determine if each component is successfully included in the `s9pk` package.

It contains the following subcommands, and requires the path to the `<pacakge-id>.s9pk` file as the last argument:

    - docker-images
    - hash
    - icon
    - instructions
    - license
    - manifest

For example:

.. code:: bash

    embassy-sdk inspect instructions /path/to/<package-id>.s9pk
