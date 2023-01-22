.. _lan-linux:

============================
Trusting Embassy CA on Linux
============================
Nothing specific needs to be configured for the Linux environment at an OS level if you are only connecting over LAN through a **browser**.

.. _lan-linux-system:

Trusting Embassy CA System-Wide
-------------------------------
If you want to connect over LAN using a **native app** (e.g. Bitwarden, Nextcloud integrations, or ``git``) you will need to trust the Root CA for your distribution:

.. tabs::

    .. group-tab:: Debian/Ubuntu

        These instructions should work for any Debian or Ubuntu-based Linux, such as Linux Mint, PopOS, etc.

            .. code-block:: bash

                sudo apt-get install -y ca-certificates p11-kit

            .. note:: For each Mozilla-based application you plan on using, in order for them to trust your Embassy's CA certificate directly from your Linux distribution's certificate trust store, execute the following command(s):


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

            Then finally, from the folder you have downloaded your Embassy's Root CA, run the following to add your Embassy's CA certificate to the OS trust store:

            .. code-block:: bash
            
                sudo cp "Embassy Local CA.crt" /usr/local/share/ca-certificates/
                sudo update-ca-certificates

        In the output it should say ``1 added`` if it was successful.

    .. group-tab:: Arch/Garuda

        From the folder you have downloaded your Embassy's Root CA, run the following commands (if you have changed the certificate's filename, be sure to change it here):

            .. code-block:: bash

                sudo pacman -S ca-certificates
                sudo cp Embassy\ Local\ CA.crt /etc/ca-certificates/trust-source/anchors
                sudo update-ca-trust

        Despite no output from the last command, you can test your app right away.

    .. group-tab:: CentOS/Redhat
        
        From the folder you have downloaded your Embassy's Root CA, run the following commands (if you have changed the certificate's filename, be sure to change it here):

        .. code-block:: bash

            sudo yum install ca-certificates
            sudo cp Embassy\ Local\ CA.crt /etc/pki/ca-trust/source/anchors
            sudo update-ca-trust