.. _nextcloud-mac:

=================
Nextcloud - MacOS 
=================

.. contents::
  :depth: 2 
  :local:

Basic Config
------------
In the Config Menu you will be able to select one of the following options:

    - If you select `LAN Only Connection` you will be able to use the Desktop Sync App with your .local address, but all Tor access will be disabled.  This is the default as it allows instant access from most systems, and easier setup.  Make sure you have :ref:`LAN access setup<lan-mac>` on your system.

    - If you select `Both LAN and Tor Connections` you will be able to use your browser to navigate to both .local and .onion addresses for your NextCloud instance. However, you will not be able to connect to your instance using the Desktop Sync App with your .local address, only your .onion address will work with this option. :ref:`Tor must be running on your device<tor-mac>`.

Desktop Integration
-------------------
The smoothest experience will be using direct account integration with your Mac.  You can follow the `Official Nextcloud guide <https://docs.nextcloud.com/server/24/user_manual/en/groupware/sync_osx.html>`_ to get set up.

Standalone Client
-----------------
The latest version of the official Nextcloud client is available on their `download page <https://nextcloud.com/install/#install-clients>`_.

LAN Setup
=========
Make sure you have first set up :ref:`LAN access<lan-mac>`.

1. Download the appropriate desktop client from https://nextcloud.com/install/#install-clients
2. Open the client and click "Log In"
3. From your Embassy's Nextcloud Service page, go to "Interfaces" and copy the LAN address
4. Enter your LAN address under "Server Address" and click "Next"
5. You will be asked to Trust your Embassy's certificate, which is safe to do as you generate and sign this during LAN Setup
6. Tick the box for "Trust this certificate anyway" and click "Next"
7. This will launch a page in your web browser, click "Log In" and then "Grant access" to link the desktop client. You can close this browser window afterwards
8. Next, configure the local directory that you want to sync with Nextcloud. You may use the default or change it, and edit the sync settings to desired. When satisfied, click "Connect"
9. Files will begin to sync immediately and you will see a green check when this is complete.
10. That's it! From this desktop client you will recieve notifications, control accounts and syncing, and quickly access your Apps' WebUI pages

Tor Setup
=========
You will first need to have the :ref:`Tor daemon running<tor-mac>`.

1. First, enable Tor in the Nextcloud Config on Embassy, Services -> Nextcloud -> Config -> Connection Settings -> Connection Type -> LAN and Tor.
2. Close the Settings screen and click the account in the top left again, then "Add Account."
3. On the following screen, click "Log in," then enter your Nextcloud Tor server address, which you can copy from the Nextcloud page on your Embassy -> Interfaces - Tor. This must start with http:// and end with .onion. Click Next.
4. This will launch your browser and prompt you to log in to your account. Log in and then grant access as we did for LAN.
5. That's it! You may wish to set up some select folders for remote sync, but for large files, it is best to sync on LAN only, so you can "Skip folders configuration" on the resulting screen if you wish. Check your connection by clicking the newly created account in the client app.
