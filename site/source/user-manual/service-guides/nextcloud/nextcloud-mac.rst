.. _nextcloud-mac:

=================
Nextcloud - MacOS 
=================

.. contents::
  :depth: 2 
  :local:

Initial Config
--------------
During initial configuration, notice the setting called "Enable Tor".

  - If OFF: You can use Nextcloud from the browser or from any mobile or desktop client using its .local URL while connected to the same Local Area Network (LAN) as your Embassy. Note: .onion will not work at all.  Make sure you have setup :ref:`LAN access<lan-mac>` on your system.
  
  - If ON: You can use NextCloud from the browser by visiting its .onion or .local URL. You can also use Nextcloud from any mobile or desktop client using its .onion URL. Note: .local will not work from mobile or desktop clients.  Make sure you have :ref:`Tor running on your device<tor-mac>`.

The default is Off for two reasons:

  1. Initial sync over LAN will be much faster.
  2. To use Tor with Nextcloud's desktop clients, you must first change a setting in the desktop client that can only be changed if you are already logged in. In other words, you must first login over LAN in order to be able to login over Tor.

Desktop Integration
-------------------
The smoothest experience will be using direct account integration with your Mac.  You can follow the `Official Nextcloud guide <https://docs.nextcloud.com/server/24/user_manual/en/groupware/sync_osx.html>`_ to get set up.

Standalone Clients
------------------
For those that prefer to use a desktop client.

File Syncing - Nextcloud Desktop
================================
This is Nextcloud's official client application for file syncing and account management.  The latest version of the official Nextcloud client is available on their `download page <https://nextcloud.com/install/#install-clients>`_.

LAN Setup
.........
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
.........
You will first need to have the :ref:`Tor daemon running<tor-mac>`.

1. First, enable Tor in the Nextcloud Config on Embassy, Services -> Nextcloud -> Config -> Enable Tor.
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

3. Download the TBSync and Provider for CalDAV & CardDAV add-ons by searching for them in the "Tools -> Add-ons and Themes" menu.
4. Go back to the "Tools -> Add-ons and Themes" menu and click the 'wrench' icon next to TBSync.
5. Click "Account Actions" in the bottom left of the resulting screen, then "Add New Account -> CalDAV & CardDAV."
6. Select "Automatic."
7. Enter a name for your account, your nextcloud user name (found in Properties, default is 'embassy'), password (found in Properties), and server LAN address (found in Interfaces, ending in `.local`) - then click "Next."
8.  After connecting, click "Finish."
9.  In the resulting window, click "Enable and synchronize this account."
10. Select the items you want to sync, such as contacts and a calendar. 