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

                sudo apt update
                sudo apt install -y ca-certificates p11-kit

            For each Mozilla-based application (Firefox, Firefox ESR, LibreWolf, Thunderbird, etc) you plan on using, in order for them to trust your Start9 server's CA certificate directly from your Linux distribution's certificate trust store, do the following:

            #. Select the hamgurger menu, then *Settings*, then search for "*security devices*", then select "*Security Devices...*"

                .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-1.png
                    :width: 60%
                    :alt: Mozilla application p11kit trust #1

            #. When the Device Manager dialog window opens, select "*Load*"

                .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-2.png
                    :width: 60%
                    :alt: Mozilla application p11kit trust #2

            #. Give the Module Name a title such as "*System CA Trust Module*" and for the Module filename, paste in ``/usr/lib/x86_64-linux-gnu/pkcs11/p11-kit-trust.so`` and hit *OK*:

                .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-3.png
                    :width: 60%
                    :alt: Mozilla application p11kit trust #3

            #. Verify that the new module shows up on the left hand side and select *OK* at the bottom right:

                .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-4.png
                    :width: 60%
                    :alt: Mozilla application p11kit trust #4

            Finally, we will change directory to the folder where you downloaded your Start9 server's Root CA (usually `~/Downloads`), and run the following commands (after carefully replacing `adjective-noun` with your server's unique hostname, below) to add your Start9 server's CA certificate to the OS trust store:

            .. code-block:: bash
            
                cd ~/Downloads
                sudo mkdir -p /usr/share/ca-certificates/start9
                sudo cp "adjective-noun.local.crt" /usr/share/ca-certificates/start9/
                sudo bash -c "echo 'start9/adjective-noun.local.crt' >> /etc/ca-certificates.conf"
                sudo update-ca-certificates

        In the output it should say ``1 added`` if it was successful.

        Now restart Firefox (or other Mozilla application) and login to your server using ``https://``.  No SSL warning should appear.  If you still encounter issues, `contact support <https://start9.com/contact>`_.

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