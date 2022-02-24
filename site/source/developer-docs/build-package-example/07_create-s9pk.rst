.. _packaging-create-s9pk:

=======================
Step 7 - Format Package
=======================

We now have all of the necessary components to package the service into the format needed for the OS. This format is a custom filetype with an extension of ``.s9pk``, short for Start9 Package. 

To package all components into an ``.s9pk``, run the following command from the root of your project directory:

.. code:: bash

    embassy-sdk pack

Let's also make sure to verify the validity of the package:

.. code:: bash

    embassy-sdk verify s9pk /path/to/hello-world.s9pk

If anything goes wrong, an error message will indicate the missing component or other failure.

**That's it!**
