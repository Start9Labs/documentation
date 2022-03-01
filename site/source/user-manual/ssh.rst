.. _ssh:

=========
Using SSH
=========

.. contents::
  :depth: 2 
  :local:

Creating an SSH Key
-------------------

@TODO

Registering an SSH Key
----------------------

#. Navigate to the *Embassy > SSH*.
#. Click "Add New Key".
#. Paste in your SSH *public* key (created above) and click "Submit".

Connecting via CLI on Linux/Mac
-------------------------------

#. You can now access your Embassy from the command line (Linux and Mac) using:

    .. code-block:: bash

        ssh root@<LAN URL>

Replacing ``<LAN URL>`` with your Embassy's LAN (``embassy-xxxxxxx.local``) address

Connecting via PuTTY on Windows 
-------------------------------

@TODO

Using SSH Over Tor
------------------

.. note:: The following guide requires that you have already added an :ref:`SSH key to your Embassy<ssh>`.

.. caution:: SSH over Tor is only supported on Linux, though it may also work on Windows with `Torifier <https://torifier.com/>`_.

Setup
.....

#. First, you'll need one dependency, ``torsocks``, which will allow you to use SSH over Tor on the machine that you want access with. Select your Linux flavor to install:

    .. tabs::

        .. group-tab:: Debian / Ubuntu

            .. code-block:: bash

                apt install torsocks

        .. group-tab:: Arch / Garuda / Manjaro

            .. code-block:: bash

                pacman -S torsocks

#. SSH in:

    .. warning:: The changes you make here are on the overlay and won't persist after a restart of your Embassy.

    .. code-block:: bash

        ssh root@embassy-xxxxxxx.local

#. Using Vim or Nano, add the following 2 lines to ``/etc/tor/torrc``

    .. code-block:: bash

        HiddenServiceDir /var/lib/tor/ssh
        HiddenServicePort 22 127.0.0.1:22

    .. tip:: You can also add these lines by running the following command:

        .. code-block:: bash

            echo "HiddenServiceDir /var/lib/tor/ssh" >> /etc/tor/torrc && echo "HiddenServicePort 22 127.0.0.1:22" >> /etc/tor/torrc

#. Reload the Tor configuration with your edits:

    .. code-block:: bash

        systemctl reload tor

#. Gather the ".onion" address you just created:

    .. code-block:: bash

        cat /var/lib/tor/ssh/hostname

Access
======

To log in, simply use the following command, using the ".onion" hostname you printed above:

    .. code-block::

        torsocks ssh root@xxxxxxxxxxxxxxxxx.onion
