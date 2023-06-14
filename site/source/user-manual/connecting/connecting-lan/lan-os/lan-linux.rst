.. _lan-linux:

.. _lan-linux-system:

================================
Trusting Your Start9 CA on Linux
================================

Here we will insert your Start9 server's CA certificate into Linux's trust store to ensure that applications will trust your Start9 server's services.

.. tabs::

    .. group-tab:: Debian/Ubuntu

        These instructions should work for Debian, Ubuntu, or any Debian or Ubuntu-based Linux, such as Linux Mint, PopOS, etc.

        Perform the following commands in the Terminal:

            .. code-block:: bash

                sudo apt install -y ca-certificates p11-kit

            .. note:: For each Mozilla-based application you plan on using, in order for them to trust your Start9 server's CA certificate directly from your Linux distribution's certificate trust store, execute the following command(s):


                If you use Firefox:

                .. code-block:: bash

                    libnssckbiso=/usr/lib/firefox/libnssckbi.so && sudo mv $libnssckbiso $libnssckbiso.bak && sudo ln -s /usr/lib/x86_64-linux-gnu/pkcs11/p11-kit-trust.so $libnssckbiso

                If you use Firefox ESR:

                .. code-block:: bash
                    
                    libnssckbiso=/usr/lib/firefox-esr/libnssckbi.so && sudo mv $libnssckbiso $libnssckbiso.bak && sudo ln -s /usr/lib/x86_64-linux-gnu/pkcs11/p11-kit-trust.so $libnssckbiso

                If you use Librewolf:

                .. code-block:: bash
                    
                    libnssckbiso=/usr/share/librewolf/libnssckbi.so && sudo mv $libnssckbiso $libnssckbiso.bak && sudo ln -s /usr/lib/x86_64-linux-gnu/pkcs11/p11-kit-trust.so $libnssckbiso

                If you use Thunderbird (Useful for LAN access to NextCloud's calendar/contacts):

                .. code-block:: bash

                    libnssckbiso=/usr/lib/thunderbird/libnssckbi.so && sudo mv $libnssckbiso $libnssckbiso.bak && sudo ln -s /usr/lib/x86_64-linux-gnu/pkcs11/p11-kit-trust.so $libnssckbiso

                If you performed any of the commands above, now we need to move the the mozilla apps' old trust store out of the way so the next time it starts it will use the system trust store:

                .. code-block:: bash

                    mv ~/.pki ~/.pki.mozilla-old

                .. note:: This step is unnecessary on some systems like Pop-OS, so if you get an error, you can safely ignore it.

            Finally, we will change directory to the folder where you downloaded your Start9 server's Root CA (usually `~/Downloads`), and run the following commands (after carefully replacing `adjective-noun` with your server's unique hostname, below) to add your Start9 server's CA certificate to the OS trust store:

            .. code-block:: bash
            
                cd ~/Downloads
                sudo mkdir -p /usr/share/ca-certificates/start9
                sudo cp "adjective-noun.local.crt" /usr/share/ca-certificates/start9/
                sudo bash -c "echo 'start9/adjective-noun.local.crt' >> /etc/ca-certificates.conf"
                sudo update-ca-certificates

        In the output it should say ``1 added`` if it was successful.

    .. group-tab:: Arch/Garuda

        From the folder you have downloaded your Start9 server's Root CA, run the following commands (if you have changed the certificate's filename, be sure to change it here):

            .. code-block:: bash

                sudo pacman -S ca-certificates
                sudo cp "<custom-address>.crt" /etc/ca-certificates/trust-source/anchors/
                sudo update-ca-trust

        Despite no output from the last command, you can test your app right away.

    .. group-tab:: CentOS/Fedora
        
        First, ensure mDNS resolution is turned on so you can reach your server:

        Ensure ``MulticastDNS=Yes`` is set in /etc/systemd/resolved.conf and then restart systemd-resolved:

        .. code-block:: bash
            
            sudo systemctl restart systemd-resolved

        Trust your server's CA certificate:

        From the folder you have downloaded your Start9 server's Root CA, run the following commands (if you have changed the certificate's filename, be sure to change it here):

        .. code-block:: bash
            
            sudo yum install ca-certificates
            sudo cp "<custom-address>.crt" /etc/pki/ca-trust/source/anchors/
            sudo update-ca-trust