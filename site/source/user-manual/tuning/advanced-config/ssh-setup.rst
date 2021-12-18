.. _ssh-setup:

=========
SSH Setup
=========

.. warning:: This is an advanced feature and should be used with caution. Start9 is not responsible for any damage you might cause through SSH access.

Connecting via CLI
------------------

#. Navigate to the ``Embassy`` tab, then under ``Settings``, click ``SSH``
#. Click the ``+ Add New Key`` button
#. Paste in your SSH key and hit ``Submit``
#. You can now access your Embassy from the command line (Linux and Mac) using:

    .. code-block:: bash

        ssh root@<LAN URL>

Replacing ``<LAN URL>`` with your Embassy's LAN (``embassy-xxxxxxx.local``) address

Connecting via SSH on Windows, using PuTTY
------------------------------------------

One of our community members, @brewsbitcoin, has put together this guide for connecting via PuTTY on Windows: https://medium.com/@brewsbitcoin/ssh-to-start9-embassy-from-windows-4a4e17891b5a
