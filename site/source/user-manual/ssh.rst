.. _ssh:

=========
Using SSH
=========

.. contents::
  :depth: 2
  :local:

Creating an SSH Key (Linux/Mac)
-------------------------------

#. Open a terminal and enter the following command:

    .. code-block:: bash

        ssh-keygen -t ed25519

    You will be asked to ``Enter a file in which to save the key`` - we recommend you press ``Enter`` to use the default location

#. Create a strong passphrase and save it somewhere safe, or press ``Enter`` for no passphrase

#. It will inform you that your public key has been saved.  Take note of this path:

    .. code-block:: bash

        Your public key has been saved in /home/user/.ssh/id_ed25519.pub

#. Next, start your system's ``ssh-agent``:

    .. code-block:: bash

        eval "$(ssh-agent -s)"

#. Now add your key to it:

    .. code-block:: bash

        ssh-add ~/.ssh/id_ed25519

    Note that if you changed the file name/location in step 1, you will need to use that file/path in this step

Registering an SSH Key
----------------------

#. In your Start9 server's web interface, navigate to *System > SSH*.
#. Click "Add New Key".
#. Back in the terminal of your workstation, display and copy your SSH *public* key (created above):

    On Mac simply copy your key to clipboard by typing the following into a terminal:
  
    .. code-block:: bash

        pbcopy < ~/.ssh/id_ed25519.pub

    On Linux:
  
      .. code-block:: bash

          cat ~/.ssh/id_ed25519.pub

    Copy the whole resulting line that looks similar to:

      .. code-block:: bash

          ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINH3tqX71XsPlzYhhoo9CqAP2Yx7gsGTh43bQXr1zqoq user@ema.il

#. Paste that line into the `Add New Key` text field of your Start9 server

    .. figure:: /_static/images/walkthrough/ssh_key_add.jpg

#. Click **Submit**

You are now ready to SSH into your server!

.. _connecting-via-ssh:

Connecting via CLI (Linux/Mac)
------------------------------

#. You can now access your Start9 server from the command line (Linux and Mac) using:

    .. code-block:: bash

        ssh start9@<SERVER-HOSTNAME>

Replacing ``<SERVER-HOSTNAME>`` with your Start9 server's LAN (``server-hostname.local``) hostname

.. note:: If you get a scary looking warning that says something like "WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!" - fear not!  This is most likely happening because you have recently reflashed or did an update from pre-v0.3.3, which would cause a change in the key for your device's hostname (e.g. `xxxxxxxx.local`) or IP address (e.g. `192.168.1.x`).  The solution is to delete the existing entry from your `known_hosts` file, which is typically located at `~/.ssh/known_hosts`.  This should be named in the warning, along with a helpful line number (in case your file is lengthy).

Connecting via PuTTY on Windows
-------------------------------

Community member `BrewsBitcoin <https://brewsbitcoin.com>`_ has created `a guide for connecting via SSH using PuTTY on Windows. <https://medium.com/@brewsbitcoin/ssh-to-start9-embassy-from-windows-4a4e17891b5a>`_

Using SSH Over Tor
------------------

.. note:: The following guide requires that you have already added an :ref:`SSH key to your Start9 server<ssh>`.

.. caution:: SSH over Tor is only supported on Linux and macOS, although it can also work on Windows with in PuTTY `like this <https://tor.stackexchange.com/a/143>`_.  Note that those instructions use port 9150 but we've configured Tor in Windows on the traditional port: ``9050``.

Setup
.....

#. First, you need to enable SSH over tor on your Start9 server:

    .. code-block:: bash

        ssh start9@SERVER-HOSTNAME.local

#. Elevate yourself to root in chroot edit mode (which will make your changes persist across reboots):

    .. code-block:: bash

        sudo /usr/lib/embassy/scripts/chroot-and-upgrade

#. Using Vim or Nano, add the following 2 lines to ``/etc/tor/torrc``

    .. code-block:: bash

        HiddenServiceDir /var/lib/tor/ssh
        HiddenServicePort 22 127.0.0.1:22

    .. tip:: You can also add these lines by running the following command:

        .. code-block:: bash

            echo "HiddenServiceDir /var/lib/tor/ssh" >> /etc/tor/torrc && echo "HiddenServicePort 22 127.0.0.1:22" >> /etc/tor/torrc

#. Restart your Start9 server by exiting chroot edit mode:

    .. code-block:: bash

        exit

#. SSH in to your Start9 server again and gather the ".onion" address that was generated:

    .. code-block:: bash

        cat /var/lib/tor/ssh/hostname

.. note:: Your newly generated .onion address is unique for SSH access only and should not be confused with the main .onion address for the server.

Configure local SSH client
.....

#. You'll need to add the following configuration to your SSH config file, which will allow you to use SSH over Tor on any Unix-based system:

    .. code-block:: bash

        echo -e "Host *.onion\n  ProxyCommand nc -xlocalhost:9050 %h %p\n" >> ~/.ssh/config

    This command adds a wildcard setting for .onion domains to your SSH config file. Any .onion domains you connect to using SSH will use the specified proxy command.

    Note: You only need to run this command only once to set up the SSH Over Tor configuration.


Access
======

To log in, simply use the following command, using the ".onion" hostname you printed above:

    .. code-block::

        ssh start9@xxxxxxxxxxxxxxxxx.onion
