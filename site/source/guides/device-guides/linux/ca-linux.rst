.. _ca-linux:

=======================================
Trusting Your Server's Root CA on Linux
=======================================

.. caution:: If you cannot connect following this guide, you may be using an application (such as Firefox) that is installed in a jailed environment, such as an appimage, flatpak, or snap. Please try an alternate install method if so.

.. tabs::

    .. group-tab:: Debian/Ubuntu

        These instructions will work for most Debian-based Linux distributions, such as Debian, Linux Mint, PopOS, Ubuntu, etc.

        #. Ensure you have already `downloaded your server's Root CA </getting-started/trust-ca/#download-root-ca>`_

        #. Perform the following commands in the Terminal:

            .. code-block:: bash

                sudo apt update
                sudo apt install -y ca-certificates p11-kit

        #. Move into the folder where you downloaded your Start9 server's Root CA (usually ``~/Downloads``), and run the following commands to add your Start9 server's CA certificate to the OS trust store:

            .. caution:: BE CERTAIN to replace ``adjective-noun`` with your server's unique hostname in the 3rd and 4th commands below!

            .. code-block:: bash
            
                cd ~/Downloads
                sudo mkdir -p /usr/share/ca-certificates/start9
                sudo cp "adjective-noun.local.crt" /usr/share/ca-certificates/start9/
                sudo bash -c "echo 'start9/adjective-noun.local.crt' >> /etc/ca-certificates.conf"
                sudo update-ca-certificates

            In the output it should say ``1 added`` if it was successful.  For most applications, you will now be able to securely connect via ``https``.  We highly recommend continuing on to our :ref:`Configuring Firefox <ff-linux>` guide.

    .. group-tab:: Arch/Garuda

        #. Ensure you have already `downloaded your server's Root CA </getting-started/trust-ca/#download-root-ca>`_

        #. From the folder you have downloaded your Start9 server's Root CA, run the following commands. Take care to replace `adjective-noun` with your server's unique adjective-noun combination in the command below.  If you have changed the certificate's filename, be sure to change it here.

            .. code-block:: bash

                sudo pacman -S ca-certificates
                sudo cp "adjective-noun.local.crt" /etc/ca-certificates/trust-source/anchors/
                sudo update-ca-trust

            Despite no output from the last command, you can test your app right away.

    .. group-tab:: CentOS/Fedora

        #. Ensure you have already `downloaded your server's Root CA </getting-started/trust-ca/#download-root-ca>`_
        
        #. In `/etc/systemd/resolved.conf`, ensure you have ``MulticastDNS=Yes``

        #. Restart systemd-resolved

            .. code-block:: bash
                
                sudo systemctl restart systemd-resolved

        #. From the folder you have downloaded your Start9 server's Root CA, run the following commands.  Take care to replace `adjective-noun`` with your server's unique adjective-noun combination in the command below.  If you have changed the certificate's filename, be sure to change it here.

            .. code-block:: bash
                
                sudo yum install ca-certificates
                sudo cp "adjective-noun.local.crt" /etc/pki/ca-trust/source/anchors/
                sudo update-ca-trust
