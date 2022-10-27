.. _package:

==============
Package Bundle
==============

All assets get bundled into a custom filetype with an extension of ``.s9pk``, short for Start9 Package. This is the file that will be downloaded from a marketplace. When the user clicks a service's "Install" button, embassyOS unpacks and installs the service.

The minimum necessary files for this bundle are:

- image.tar (the result of a Dockerfile build)
- instructions.md
- LICENSE
- icon.png

Each new version release of a service should include the updated version of these files re-bundled into a new ``.s9pk``. . 

Building
--------

To package all components into an ``.s9pk``, run the following command from the root of your project directory:

.. code:: bash

    embassy-sdk pack

Let's also make sure to verify the validity of the package:

.. code:: bash

    embassy-sdk verify s9pk /path/to/hello-world.s9pk

If anything goes wrong, an error message will indicate the missing component or other failure.