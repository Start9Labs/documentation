.. _packaging-create-assets:

=================
6 - Create Assets
=================

Each ``s9pk`` package contains a set of assets. They include:

- Instructions
- License
- Icon

Instructions
------------

An instructions file is a convenient way to share any steps users should take to setup or interact with your service. This file gets displayed within an EmbassyUI component and should be written in `Markdown <https://www.markdownguide.org/>`_ language. 

Let's add instructions to our hello world project:

.. code:: bash

    touch instructions.md

And add the following code to the file:

.. code:: bash
    
    # Instructions for Hello World

    Instructions go here.  These appear to the user in the UI on the Service page under 'Instructions.'

License
-------

Start9 ensures that the proper license is displayed for all open source software running on an EmbassyOS platform. Let's make sure to include the full open source license so users can view the distribution permissions of your service, among other licensing details.

The name and location of this file should be specified in the ``assets.license`` section of the Manifest. The default value if not specified is ``LICENSE``, located in the root of the project folder.

.. code:: bash

    touch ./hello-world/LICENSE

Icon
----

Icons are displayed throughout the EmbassyUI to reference to your service.

Simply add the icon file to the root of the project directory. The icon file can be named anything, but this must be specified in the ``assets.icon`` section of the Manifest. The default filename the SDk looks for when packaging the service assets is ``icon.png``.

.. code:: bash

    mv /local/path/to/icon ./hello-world/icon.png