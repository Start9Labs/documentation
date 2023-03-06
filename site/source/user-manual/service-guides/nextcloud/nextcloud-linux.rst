.. _nextcloud-linux:

=================
Nextcloud - Linux 
=================

.. contents::
  :depth: 2 
  :local:

Initial Config
--------------
It is advised to setup your Nextcloud devices on LAN for the best experience.  Once set up, Tor can be used for remote syncing, but remember that large files will likely fail or take a very long time, so it is best to use remote sync only for low-bandwidth activity, such as Calendar, Contacts, Tasks, and Notes.  Streaming your music is also possible.  Later in 2023, new connection options will unlock Nextcloud's full feature-set.

Desktop Integrations
--------------------
Many Linux distributions ship with a Desktop Environment (DE) that supports Nextcloud account integration directly for use with their built-in calendars and other applications.  It is recommended to try these first for the best possible experience with your particular flavor of Linux.

You will first need to :ref:`add your Embassy Root CA to your system<lan-linux-system>`.

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

1. On your desktop application. Click the account in the top left -> Settings, then in Settings, click Network, then "Specify proxy manually as" and "SOCKS5 proxy." Enter "127.0.0.1" for the Host and "9050" for the port.
2. Close the Settings screen and click the account in the top left again, then "Add Account."
3. On the following screen, click "Log in," then enter your Nextcloud Tor server address, which you can copy from the Nextcloud page on your Embassy -> Interfaces - Tor. This must start with http:// and end with .onion. Click Next.
4. This will launch your browser and prompt you to log in to your account. Log in and then grant access as we did for LAN.
5. That's it! You may wish to set up some select folders for remote sync, but for large files, it is best to sync on LAN only, so you can "Skip folders configuration" on the resulting screen if you wish. Check your connection by clicking the newly created account in the client app.

Calendar & Contacts Syncing - Thunderbird
=========================================
If you wish to use a standalone client for Calendar and Contacts, we recommend Mozilla's `Thunderbird <https://www.thunderbird.net>`_.

1. Install the Contacts and Calendar apps in Nextcloud.
2. Make sure you are on Thunderbird version 102.3.0 or greater and then import your LAN certificate:

    - :ref:`Download your certificate<connecting-lan>` and then add it in "Thunderbird -> Settings -> Privacy & Security -> Manage Certificates -> Authorities tab -> Import"
    - Check the box for "This certificate can identify websites"

3. Download the `TBSync` and `Provider for CalDAV & CardDAV` add-ons by searching for them in the "Tools -> Add-ons and Themes" menu.
4. Go back to "Tools -> Add-ons and Themes -> Extensions" and click the 'wrench' icon next to TBSync.
5. Click "Account Actions" in the bottom left of the resulting screen, then "Add New Account -> CalDAV & CardDAV"
6. Select "Automatic Configuration" and click `Next`
7. Enter a name for your account, your nextcloud user name (found in Properties, default is 'embassy'), password (found in Properties), and server LAN address (found in Interfaces, ending in `.local`) - then click "Next."
8.  After connecting, click "Finish."
9.  In the resulting window, click "Enable and synchronize this account."
10. Select the items you want to sync, such as contacts and a calendar.