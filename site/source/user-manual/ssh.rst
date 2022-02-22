.. _ssh:

=========
Using SSH
=========

.. warning:: This is an advanced feature and should be used with caution. Start9 is not responsible for any damage you might cause while using SSH access.

.. tip:: An ED25519 key is strongly recommended.  If you have issues with any other type of key, please consider using an ED25519.

Setting Up SSH Access
---------------------

Connecting via CLI (Linux / Mac)
================================

#. Navigate to the ``Embassy`` tab, then under ``Settings``, click ``SSH``
#. Click the ``+ Add New Key`` button
#. Paste in your SSH public key and hit ``Submit``

    .. tip:: This is typically found under your ``home`` in the ``.ssh`` directory and the file should end in ``.pub`` - copy the entire contents of the file.

#. You can now access your Embassy from the command line (Linux and Mac) using:

    .. code-block:: bash

        ssh root@<LAN URL>

Replacing ``<LAN URL>`` with your Embassy's LAN (``embassy-xxxxxxx.local``) address

Connecting via SSH on Windows, using PuTTY
==========================================

One of our community members, `@brewsbitcoin <https://twitter.com/brewsbitcoin>`_ (https://brewsbitcoin.com/), has put together this `Guide <https://medium.com/@brewsbitcoin/ssh-to-start9-embassy-from-windows-4a4e17891b5a>`_ for connecting via PuTTY on Windows.

Setting Up Remote SSH Access (Tor)
----------------------------------

.. note:: The following guide requires that you have already added an `SSH key to your Embassy<ssh>`.

This guide will allow you remote SSH access via Tor.  Currently only supported on Linux, but may work on Windows with `Torifier <https://torifier.com/>`_.  Currently, this setup will not persist after a reboot.

Setup
=====

#. First, you'll need one dependency, ``torsocks``, which will allow you to use SSH over Tor on the machine that you want access with.  Select your Linux flavor to install:

    .. tabs::

        .. group-tab:: Debian / Ubuntu

            .. code-block:: bash

                apt install torsocks

        .. group-tab:: Arch / Garuda / Manjaro

            .. code-block:: bash

                pacman -S torsocks

#. SSH in:

    .. code-block:: bash

        ssh root@embassy-xxxxxxx.local

#. Add the following 2 lines to ``/etc/tor/torrc`` **EITHER** by using your preferred text editor (such as ``nano`` or ``vim``):

    ``HiddenServiceDir /var/lib/tor/ssh``
    ``HiddenServicePort 22 127.0.0.1:22``

    **OR** by entering the following 2 commands:

    .. code-block:: bash

        echo "HiddenServiceDir /var/lib/tor/ssh" >> /etc/tor/torrc
        echo "HiddenServicePort 22 127.0.0.1:22" >> /etc/tor/torrc

#. Then reload the Tor configuration with your edits:

    .. code-block:: bash

        systemctl reload tor

#. Next, gather the ``.onion`` address you just created:

    .. code-block:: bash

        cat /var/lib/tor/ssh/hostname

    .. note:: All these changes are on the overlay and won't persist after a restart of your Embassy

#. Add an additional SSH key in your EmbassyUI if you want to access from a machine other than the one you did this setup with.

Access
======

Now to log in, simply use the following command, using the ``.onion`` hostname you printed above:

    .. code-block::

        torsocks ssh root@xxxxxxxxxxxxxxxxx.onion
