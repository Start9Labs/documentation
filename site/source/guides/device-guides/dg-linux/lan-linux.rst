.. _lan-linux:

================================
Trusting Your Start9 CA on Linux
================================
Complete this guide to download your Start9 server's Root Certificate Authority (CA), and trust it on your client device (Windows).  This allows you to use encrypted ``https`` connections to your ``.local`` (LAN) and ``.onion`` (tor) server addresses, access services on LAN, and enhances performance on tor.  The Root CA was created by your server when you perfomed the initial setup, and signs the certificate of your server's main UI, as well as that of all services.

.. caution:: If you cannot connect following this guide, you may be using an application (such as Firefox) that is installed in a jailed environment, such as an appimage, flatpak, or snap.  Please try an alternate install method if so.

Download Root CA
----------------
First, download your Start9 server's Root CA, if you have not already.

    - Navigate to **System** -> **Root CA**, then click "Download Root CA".

      .. figure:: /_static/images/ssl/lan_setup.png
        :width: 40%
        :alt: Navigate to System > Root CA

Alternatively, you can download to another machine, then transfer the file to your device.

Trust Root CA
-------------
.. tabs::

    .. group-tab:: Debian/Ubuntu

        These instructions will work for most Debian-based Linux distributions, such as Debian, Linux Mint, PopOS, Ubuntu, etc.

        #. Perform the following commands in the Terminal:

            .. code-block:: bash

                sudo apt update
                sudo apt install -y ca-certificates p11-kit

        #. Change directory into the folder where you downloaded your StartOS server's Root CA (usually ``~/Downloads``), and run the following commands to add your Start9 server's CA certificate to the OS trust store:

            .. caution:: Be careful to replace ``adjective-noun`` with your server's unique hostname in the 3rd and 4th commands below!

            .. code-block:: bash
            
                cd ~/Downloads
                sudo mkdir -p /usr/share/ca-certificates/start9
                sudo cp adjective-noun.local.crt /usr/share/ca-certificates/start9/
                sudo bash -c "echo 'start9/adjective-noun.local.crt' >> /etc/ca-certificates.conf"
                sudo update-ca-certificates

        In the output it should say ``1 added`` if it was successful.  For most applications, you will now be able to securely connect via ``https``.  We highly recommend continuing on to our :ref:`Configuring Firefox <ff-linux>` guide.

    .. group-tab:: Arch/Garuda

        Change directory to the folder where you downloaded your StartOS server's Root CA, and run the following commands, being careful to replace ``adjective-noun`` with your server's unique hostname in the 3rd command below:

            .. code-block:: bash

                cd ~/Downloads
                sudo pacman -S ca-certificates
                sudo cp adjective-noun.local.crt /etc/ca-certificates/trust-source/anchors/
                sudo update-ca-trust

        Despite no output from the last command, you can test your app right away.

    .. group-tab:: CentOS/Fedora
        
        First, ensure mDNS resolution is turned on so you can reach your server:

        Ensure ``MulticastDNS=Yes`` is set in /etc/systemd/resolved.conf and then restart systemd-resolved:

        .. code-block:: bash
            
            sudo systemctl restart systemd-resolved

        Trust your server's CA certificate:

        Change directory to the folder where you downloaded your StartOS server's Root CA, and run the following commands, being careful to replace ``adjective-noun`` with your server's unique hostname in the 3rd command below:

        .. code-block:: bash
            
            cd ~/Downloads
            sudo yum install ca-certificates
            sudo cp adjective-noun.local.crt /etc/pki/ca-trust/source/anchors/
            sudo update-ca-trust

You're now ready to browse your service UIs with encryption, either via the browser, or with native client apps.  For Mozilla apps, such as Firefox, you will need to follow the :ref:`Firefox Config <lan-ff>` guide, which we highly recommend.
