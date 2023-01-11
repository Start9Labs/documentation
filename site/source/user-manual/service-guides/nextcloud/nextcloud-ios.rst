.. _nextcloud-ios:

===============
Nextcloud - iOS 
===============

.. contents::
  :depth: 2 
  :local:

Initial Config
--------------
During initial configuration, notice the setting called "Enable Tor".

  - If OFF: You can use Nextcloud from the browser or from any mobile or desktop client using its .local URL while connected to the same Local Area Network (LAN) as your Embassy. Note: .onion will not work at all.  Make sure you have setup :ref:`LAN access<lan-ios>` on your system.
  
  - If ON: You can use NextCloud from the browser by visiting its .onion or .local URL. You can also use Nextcloud from any mobile or desktop client using its .onion URL. Note: .local will not work from mobile or desktop clients.  Make sure you have :ref:`Tor running on your device<tor-ios>`.

The default is Off for two reasons:

  1. Initial sync over LAN will be much faster.
  2. To use Tor with Nextcloud's desktop clients, you must first change a setting in the desktop client that can only be changed if you are already logged in. In other words, you must first login over LAN in order to be able to login over Tor.

Standalone Client
-----------------
The latest version of the official Nextcloud client is available on their `download page <https://nextcloud.com/install/#install-clients>`_.

LAN Setup
=========
Make sure you have first set up :ref:`LAN access<lan-ios>`.

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
You will first need to have the :ref:`Tor daemon running<tor-ios>`.

1. First, enable Tor in the Nextcloud Config on Embassy, Services -> Nextcloud -> Config -> Connection Settings -> Connection Type -> LAN and Tor.
2. On your desktop application, click the account in the top left -> Settings, then in Settings, click Network, then "Specify proxy manually as" and "SOCKS5 proxy." Enter "127.0.0.1" for the Host and "9050" for the port.
3. Close the Settings screen and click the account in the top left again, then "Add Account."
4. On the following screen, click "Log in," then enter your Nextcloud Tor server address, which you can copy from the Nextcloud page on your Embassy -> Interfaces - Tor. This must start with http:// and end with .onion. Click Next.
5. This will launch your browser and prompt you to log in to your account. Log in and then grant access as we did for LAN.
6. That's it! You may wish to set up some select folders for remote sync, but for large files, it is best to sync on LAN only, so you can "Skip folders configuration" on the resulting screen if you wish. Check your connection by clicking the newly created account in the client app.

Device Integration
------------------
In order to sync calendars and contacts with your iOS device, follow the steps below, which are adapted from the `Official Nextcloud guide <https://docs.nextcloud.com/server/25/user_manual/en/groupware/sync_ios.html>`_.  First head into the top-righthand menu of your Nextcloud's WebUI and click "Apps," then search for and install the Calendar and/or Contacts Apps.

1. Open the "Settings" app.

  .. note:: You will need to perform 2 individual setups, one for Calendar and one for Contacts.

2. Select "Calendar" -> "Accounts" -> "Add Account" -> "Other."

3. Select either CalDAV or CardDAV (return to this step after completing one in order to add the other), and enter the following fields:

  - Server - Enter your Nextcloud server LAN URL (found in "Interfaces" in the Nextcloud service page on your Embassy), and add `/remote.php/dav` after `.local`
  
  - User name - Your Nextcloud user (Default is "embassy")
  
  - Password - Your Nextcloud user's password (Default found in "Properties" in the Nextcloud service page on your Embassy)

  - Description - Anything to describe this account, such as "Nextcloud CalDAV"

4. If you get a warning about verifying the server identity, it is safe to "Continue."  Add the apps you want to use, such as Calendars, Contacts, and/or Reminders, then tap "Save."

  - That's it!  Go back to step 3 above to set up your other account (CalDAV / CardDAV)