.. _lan-linux:

============================
Trusting Embassy CA on Linux
============================

Nothing specific needs to be configured for the Linux environment at an OS level if you are only connecting over LAN through a **browser**.

However, if you want to connect over LAN using a **native app** (e.g. the Bitwarden app or ``git``) you will need to trust the Root CA.

Trusting Embassy CA on Ubuntu / Debian
--------------------------------------

From the folder you have downloaded your Embassy’s Root CA, run the following commands:

    .. code-block:: bash

        sudo apt-get install -y ca-certificates
        sudo cp Embassy\ Local\ CA.crt /usr/local/share/ca-certificates
        sudo update-ca-certificates


In the output it should say ``1 added`` if it was successful.