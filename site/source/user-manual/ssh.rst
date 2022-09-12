.. _ssh:

=========
Using SSH
=========

.. contents::
  :depth: 2
  :local:

Creating an SSH Key (Linux/Mac)
-------------------------------

#. Open a terminal and enter the following command, replacing the example email address with your own (or, alternatively, a comment):

    .. code-block:: bash

        ssh-keygen -t ed25519 -C "your_email@example.com"

    You will be asked to ``Enter a file in which to save the key`` - we recommend you press ``Enter`` to use the default location

#. Create a strong passphrase and save it somewhere safe, or press ``Enter`` for no passphrase

#. It will inform you that your public key has been saved.  Take note of this path:

    .. code-block:: bash

        Your public key has been saved in /home/user/.ssh/id_ed25519.pub

#. Next, start your system's ``ssh-agent`` and add your key to it:

    .. code-block:: bash

        eval "$(ssh-agent -s)"
        ssh-add ~/.ssh/id_ed25519

    Note that if you changed the file name/location in step 1, you will need to use that file/path in this step

Registering an SSH Key
----------------------

#. In your Embassy's web interface, navigate to *Embassy > SSH*.
#. Click "Add New Key".
#. Back in the terminal of your workstation, display and copy your SSH *public* key (created above):

    .. code-block:: bash

        cat ~/.ssh/id_ed25519.pub

#. Copy the whole resulting line that looks similar to:

    .. code-block:: bash

        ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINH3tqX71XsPlzYhhoo9CqAP2Yx7gsGTh43bQXr1zqoq user@ema.il

#. Paste that line into the `Add New Key` text field of your Embassy

    .. figure:: /_static/images/walkthrough/ssh_key_add.jpg

#. Click **Submit**

You are now ready to SSH into your Embassy!

Connecting via CLI (Linux/Mac)
------------------------------

#. You can now access your Embassy from the command line (Linux and Mac) using:

    .. code-block:: bash

        ssh start9@<LAN URL>

Replacing ``<LAN URL>`` with your Embassy's LAN (``embassy-xxxxxxx.local``) address

Connecting via PuTTY on Windows
-------------------------------

Community member `BrewsBitcoin <https://brewsbitcoin.com>`_ has created `a guide for connecting via SSH using PuTTY on Windows. <https://medium.com/@brewsbitcoin/ssh-to-start9-embassy-from-windows-4a4e17891b5a>`_

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

                sudo apt install torsocks

        .. group-tab:: Arch / Garuda / Manjaro

            .. code-block:: bash

                sudo pacman -S torsocks

#. SSH in:

    .. warning:: The changes you make here are on the overlay and won't persist after a restart of your Embassy.

    .. code-block:: bash

        ssh start9@embassy-xxxxxxx.local

#. Elevate yourself to root for the rest of the ssh session:

    .. code-block:: bash

        sudo -i

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

        torsocks ssh start9@xxxxxxxxxxxxxxxxx.onion
