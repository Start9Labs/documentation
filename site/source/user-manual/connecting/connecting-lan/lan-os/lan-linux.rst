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

        From the folder you have downloaded your Embassy's Root CA, run the following commands:

            .. code-block:: bash

                sudo apt-get install -y ca-certificates
                sudo cp Embassy\ Local\ CA.crt /usr/local/share/ca-certificates
                sudo update-ca-certificates


        In the output it should say ``1 added`` if it was successful.

    .. group-tab:: Arch/Garuda

        From the folder you have downloaded your Embassy's Root CA, run the following commands (if you have changed the certificate's filename, be sure to change it here):

            .. code-block:: bash

                sudo pacman -S ca-certificates
                sudo cp Embassy\ Local\ CA.crt /etc/ca-certificates/trust-source/anchors
                sudo update-ca-trust

        There will be no output to verify success; you can test your app right away.

    .. group-tab:: CentOS/Redhat

        .. code-block:: bash

            sudo yum install ca-certificates
            sudo cp Embassy\ Local\ CA.crt /etc/pki/ca-trust/source/anchors
            sudo update-ca-trust