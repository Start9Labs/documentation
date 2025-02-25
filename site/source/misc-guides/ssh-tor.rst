.. _ssh-tor:

==================
Using SSH Over Tor
==================

.. note:: The following guide requires that you have already added an :ref:`SSH key to your server<ssh>` and run :ref:`Tor s a global process on your client<connecting-tor>`.

.. caution:: SSH over Tor is only supported on Linux and macOS, although it can also work on Windows with in PuTTY `like this <https://tor.stackexchange.com/a/143>`_.  Note that those instructions use port 9150 but we've configured Tor in Windows on the traditional port: ``9050``.

.. note:: You might not need to complete this guide if you have already :ref:`set up SSH<ssh>` on your server and you have regular access to your local network. SSH over Tor is for those who may be away from their server for a long time, who regularly access it over Tor rather than a VPN, and think they may need to do some heavy debugging while away.

Configure StartOS server:
.........................

    .. warning:: After each server reboot, a new .onion address will be generated, rendering the old one inactive.

    #. SSH into your server.

        .. code-block:: 

            ssh start9@<custom-address>.local

    #. Elevate yourself to root in chroot edit mode which will make your changes persist across reboots:

        .. code-block:: 

            sudo /usr/lib/startos/scripts/chroot-and-upgrade

    #. Add these two lines to ``/etc/tor/torrc``
      
            *HiddenServiceDir /var/lib/tor/ssh*

            *HiddenServicePort 22 127.0.0.1:22*

        With the following command...

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


