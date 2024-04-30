.. _ssh:

=========
Using SSH
=========
Like most Linux distributions, you can go "under-the-hood" via SSH (Secure Shell Protocol) if you choose.  It's a good idea to have set up, but generally, all server access is recommended via the UI.  If you are auditing, doing dev work, hacking (with an understanding of the consequences), or are directed to by a Start9 support tech, then you may need SSH access.

For security reasons, password access is not available, so you will need to add an SSH key to your server via the method below.

.. contents::
  :depth: 2
  :local:

Creating an SSH Key
-------------------

#. Open a terminal and enter the following command:

    .. code-block:: 

        ssh-keygen -t ed25519

    You will be asked to ``Enter a file in which to save the key`` - we recommend you press ``Enter`` to use the default location

#. Create a strong passphrase and save it somewhere safe, or press ``Enter`` for no passphrase

    .. note:: The next 3 steps only apply to Linux and macOS.  If you are on Windows, please skip down to :ref:`Registering an SSH Key<registering-an-ssh-key>`.

#. It will inform you that your public key has been saved.  Take note of this path:

    .. code-block:: 

        Your public key has been saved in /home/user/.ssh/id_ed25519.pub

#. Next, start your system's ``ssh-agent``:

    .. code-block:: 

        eval "$(ssh-agent -s)"

#. Now add your key to it:

    .. code-block:: 

        ssh-add ~/.ssh/id_ed25519

    Note that if you changed the file name/location in step 1, you will need to use that file/path in this step

.. _registering-an-ssh-key:

Registering an SSH Key
----------------------

#. In the StartOS dashboard, navigate to *System > SSH*.
#. Click "Add New Key".
#. Back in the terminal of your workstation, display and copy your SSH *public* key (created above):

    On Mac simply copy your key to clipboard by typing the following into a terminal:
  
    .. code-block:: 

        pbcopy < ~/.ssh/id_ed25519.pub

    On Linux:
  
      .. code-block:: 

        cat ~/.ssh/id_ed25519.pub

    On Windows:

      .. code-block:: 

        type .ssh\id_ed25519.pub

    Copy the whole resulting line that looks similar to:

      .. code-block:: 

          ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINH3tqX71XsPlzYhhoo9CqAP2Yx7gsGTh43bQXr1zqoq user@ema.il

#. Paste that line into the `Add New Key` text field

    .. figure:: /_static/images/walkthrough/ssh-add-key.png
        :width: 50%

#. Click **Submit**

You are now ready to SSH into your server!

.. _connecting-via-ssh:

Connecting via CLI
------------------

#. You can now access your Start9 server from the command line (Linux and Mac) using:

    .. code-block:: 

        ssh start9@SERVER-HOSTNAME

Replacing ``<SERVER-HOSTNAME>`` with your server's LAN (``<custom-address>.local``) address

.. note:: 
    The first time you connect, you will see something like this:

    ``The authenticity of host 'pregame-margin.local (192.168.1.175)' can't be established.``
    
    ``ED25519 key fingerprint is SHA256:BgYhzyIDbshm3annI1cfySd8C4/lh6Gfk2Oi3FdIVAa.``
    
    ``This key is not known by any other names.``

    ``Are you sure you want to continue connecting (yes/no/[fingerprint])?``

    Type ``yes`` and hit Enter to start trusting the server's SSH public key.

    If you get a scary looking warning that says something like ``WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!`` - fear not!  This is most likely happening because you have recently reflashed or did an update from pre-v0.3.3, which would cause a change in the key for your device's hostname (e.g. `xxxxxxxx.local`) or IP address (e.g. `192.168.1.x`).  The solution is to delete the existing entry from your `known_hosts` file, which is typically located at `~/.ssh/known_hosts`.  This will be specified in the warning, along with a helpful line number (in case your file is lengthy).

Connecting via PuTTY on Windows
-------------------------------

Following the commands above for Windows will get you in.  However, if you prefer a GUI tool, `BrewsBitcoin <https://brewsbitcoin.com>`_ has created `a guide for connecting via SSH using PuTTY on Windows. <https://medium.com/@brewsbitcoin/ssh-to-start9-embassy-from-windows-4a4e17891b5a>`_

Using SSH Over Tor
------------------

.. note:: The following guide requires that you have already added an :ref:`SSH key to your server<ssh>`.

.. caution:: SSH over Tor is only supported on Linux and macOS, although it can also work on Windows with in PuTTY `like this <https://tor.stackexchange.com/a/143>`_.  Note that those instructions use port 9150 but we've configured Tor in Windows on the traditional port: ``9050``.

Configure StartOS server:
.........................

    .. warning:: After each server reboot, a new .onion address will be generated, rendering the old one inactive.

    #. SSH into your server.

        .. code-block:: 

            ssh start9@<custom-address>.local

    #. Elevate yourself to root in chroot edit mode which will make your changes persist across reboots:

        .. code-block:: 

            sudo /usr/lib/startos/scripts/chroot-and-upgrade

    #. Using Vim or Nano, add the following 2 lines to ``/etc/tor/torrc``

        .. code-block:: 

            HiddenServiceDir /var/lib/tor/ssh
            HiddenServicePort 22 127.0.0.1:22

        .. tip:: You can also add these lines by running the following command:

        .. code-block:: 

            echo -e "\nHiddenServiceDir /var/lib/tor/ssh\nHiddenServicePort 22 127.0.0.1:22" >> /etc/tor/torrc

    #. Restart your Start9 server by exiting chroot edit mode:

        .. code-block:: 

            exit

    #. SSH in to your Start9 server again and gather the ".onion" address that was generated:

        .. code-block:: 

            sudo cat /var/lib/tor/ssh/hostname

    .. note:: Your newly generated .onion address is unique for SSH access only and should not be confused with the main .onion address for the server.

Configure local SSH client
..........................

.. tabs::

        .. group-tab:: Linux

            #. Install ``torsocks`` dependency.

                Debian / Ubuntu

                    .. code-block:: 

                        sudo apt install torsocks

                Arch / Garuda / Manjaro

                    .. code-block:: 

                        sudo pacman -S torsocks

            #. Run this command to set up your SSH config file to work with .onion domains.

                .. code-block:: 

                    echo -e "\nHost *.onion\n\tProxyCommand nc -xlocalhost:9050 %h %p" >> ~/.ssh/config

               .. Note:: You only need to run this command only once to set up the SSH Over Tor configuration.

        .. group-tab:: macOS

            #. Run this command to set up your SSH config file to work with .onion domains.

                .. code-block::

                    echo -e "\nHost *.onion\n  ProxyCommand /usr/bin/nc -x localhost:9050 -X5 %h %p" >> ~/.ssh/config

            .. Note:: You only need to run this command only once to set up the SSH Over Tor configuration.


SSH Over Tor
............

To log in, simply use the following command, using the ".onion" hostname you printed above:

    .. code-block::

        ssh start9@xxxxxxxxxxxxxxxxx.onion
