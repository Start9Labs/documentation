.. _nextcloud-linux:

=================
Nextcloud - Linux 
=================

.. contents::
  :depth: 2 
  :local:

Basic Config
------------

In the Config Menu you will be able to select one of the following options:

    - If you select `LAN Only Connection` you will be able to use the Desktop Sync App with your .local address, but all Tor access will be disabled.  This is the default as it allows instant access from most systems, and easier setup.  Make sure you have :ref:`LAN access setup<lan-linux>` on your system.

    - If you select `Both LAN and Tor Connections` you will be able to use your browser to navigate to both .local and .onion addresses for your NextCloud instance. However, you will not be able to connect to your instance using the Desktop Sync App with your .local address, only your .onion address will work with this option. You will also need to change your sync app's network settings to accept socks5 proxy connections, and :ref:`Tor must be running on your device<tor-linux>`.

Desktop Integrations
--------------------
Many Linux distributions ship with a Desktop Environment (DE) that supports Nextcloud account integration directly for use with their built-in calendars and other applications.  It is recommended to try these first for the best possible experience with your particular flavor of Linux.

The following desktop environments support integrated account syncing, including Nextcloud:

    - Gnome (Ubuntu default)
    - Cinnamon (Linux Mint default)
    - KDE
    - Budgie

Check out this `Linuxhint guide <https://linuxhint.com/linux_file_managers_nextcloud/>`_ and our `Nextcloud Master Thread <https://community.start9.com/t/nextcloud-master-thread/>`_ for assistance.  Please share your feedback - it is very valuable to our community!

Standalone Clients
------------------
For if your desktop environment does not support account integrations, or if you just prefer to use a desktop client.

File Syncing - Nextcloud Desktop
================================
This is Nextcloud's official client application for file syncing and account management.  It is available in your favorite package manager (usually as `nextcloud`).  You can also see this `full list of available packages <https://help.nextcloud.com/t/linux-packages-status/>`.   or you can get the latest version as an AppImage from the `Download for Desktop <https://nextcloud.com/install/#install-clients>`_ section of Nextcloud's website.

LAN Setup
.........
Make sure you have first set up :ref:`LAN access<lan-linux>`.

1. Open the client and click "Log In"
2. From your Embassy's Nextcloud Service page, go to "Interfaces" and copy the LAN address
3. Enter your LAN address under "Server Address" and click "Next"
4. You will be asked to Trust your Embassy's certificate, which is safe to do as you generate and sign this during LAN Setup
5. Tick the box for "Trust this certificate anyway" and click "Next"
6. This will launch a page in your web browser, click "Log In" and then "Grant access" to link the desktop client. You can close this browser window afterwards
7. Next, configure the local directory that you want to sync with Nextcloud. You may use the default or change it, and edit the sync settings to desired. When satisfied, click "Connect"
8. Files will begin to sync immediately and you will see a green check when this is complete.
9.  That's it! From this desktop client you will recieve notifications, control accounts and syncing, and quickly access your Apps' WebUI pages

Tor Setup
.........
You will first need to have the :ref:`Tor daemon running<tor-linux>`.

1. First, enable Tor in the Nextcloud Config on Embassy, Services -> Nextcloud -> Config -> Connection Settings -> Connection Type -> LAN and Tor.
2. On your desktop application. Click the account in the top left -> Settings, then in Settings, click Network, then "Specify proxy manually as" and "SOCKS5 proxy." Enter "127.0.0.1" for the Host and "9050" for the port.
3. Close the Settings screen and click the account in the top left again, then "Add Account."
4. On the following screen, click "Log in," then enter your Nextcloud Tor server address, which you can copy from the Nextcloud page on your Embassy -> Interfaces - Tor. This must start with http:// and end with .onion. Click Next.
5. This will launch your browser and prompt you to log in to your account. Log in and then grant access as we did for LAN.
6. That's it! You may wish to set up some select folders for remote sync, but for large files, it is best to sync on LAN only, so you can "Skip folders configuration" on the resulting screen if you wish. Check your connection by clicking the newly created account in the client app.

Calendar & Contacts Syncing - Thunderbird
=========================================
If you wish to use a standalone client for Calendar and Contacts, we recommend Mozilla's `Thunderbird <https://www.thunderbird.net>`_.

1. Install the Contacts and Calendar apps in Nextcloud.
2. Make sure you are on Thunderbird version 102.3.0 or greater and then import your LAN certificate:

    - :ref:`Download your certificate<connecting-lan>` and then add it in "Thunderbird -> Settings -> Privacy & Security -> Manage Certificates -> Authorities tab -> Import"
    - Check the box for "This certificate can identify websites"

3. Download the TBSync and Provider for CalDAV & CardDAV add-ons by searching for them in the "Tools -> Add-ons and Themes" menu.
4. Go back to the "Tools -> Add-ons and Themes" menu and click the 'wrench' icon next to TBSync.
5. Click "Account Actions" in the bottom left of the resulting screen, then "Add New Account -> CalDAV & CardDAV."
6. Select "Automatic."
7. Enter a name for your account, your nextcloud user name (found in Properties, default is 'embassy'), password (found in Properties), and server LAN address (found in Interfaces, ending in `.local`) - then click "Next."
8.  After connecting, click "Finish."
9.  In the resulting window, click "Enable and synchronize this account."
10. Select the items you want to sync, such as contacts and a calendar. 