.. _ssh-setup:

=========
SSH Setup
=========

.. warning:: This is an advanced feature and should be used with caution. Start9 is not responsible for any damage you might cause while using SSH access.

.. tip:: An ED25519 key is strongly recommended.  If you have issues with any other type of key, please consider using an ED25519.

Connecting via CLI (Linux / Mac)
--------------------------------

#. Navigate to the ``Embassy`` tab, then under ``Settings``, click ``SSH``
#. Click the ``+ Add New Key`` button
#. Paste in your SSH public key and hit ``Submit``
#. You can now access your Embassy from the command line (Linux and Mac) using:

    .. code-block:: bash

        ssh root@<LAN URL>

Replacing ``<LAN URL>`` with your Embassy's LAN (``embassy-xxxxxxx.local``) address

Connecting via SSH on Windows, using PuTTY
------------------------------------------

One of our community members, `@brewsbitcoin <https://twitter.com/brewsbitcoin>`_ (https://brewsbitcoin.com/), has put together this `Guide <https://medium.com/@brewsbitcoin/ssh-to-start9-embassy-from-windows-4a4e17891b5a>`_ for connecting via PuTTY on Windows.
