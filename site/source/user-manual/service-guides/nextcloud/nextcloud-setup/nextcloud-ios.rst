.. _nextcloud-ios:

===============
Nextcloud - iOS 
===============

.. contents::
  :depth: 2 
  :local:

Initial Config
--------------
It is advised to setup your Nextcloud devices on LAN (if available) for the best experience.  Once set up, Tor can be used for remote syncing, but remember that large files will likely fail or take a very long time, so it is best to use remote sync only for low-bandwidth activity, such as Calendar, Contacts, Tasks, and Notes.  Streaming your music is also possible.  Later in 2023, new connection options will unlock Nextcloud's full feature-set.

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

1. On your desktop application, click the account in the top left -> Settings, then in Settings, click Network, then "Specify proxy manually as" and "SOCKS5 proxy." Enter "127.0.0.1" for the Host and "9050" for the port.
2. Close the Settings screen and click the account in the top left again, then "Add Account."
3. On the following screen, click "Log in," then enter your Nextcloud Tor server address, which you can copy from the Nextcloud page on your Embassy -> Interfaces - Tor. This must start with http:// and end with .onion. Click Next.
4. This will launch your browser and prompt you to log in to your account. Log in and then grant access as we did for LAN.
5. That's it! You may wish to set up some select folders for remote sync, but for large files, it is best to sync on LAN only, so you can "Skip folders configuration" on the resulting screen if you wish. Check your connection by clicking the newly created account in the client app.

Device Integration
------------------
In order to sync calendars and contacts with your iOS device, follow the steps below, which are adapted from the `Official Nextcloud guide <https://docs.nextcloud.com/server/25/user_manual/en/groupware/sync_ios.html>`_.  First head into the top-righthand menu of your Nextcloud's WebUI and click "Apps," then search for and install the Calendar and/or Contacts Apps.

1. Open the "Settings" app.

  .. note:: You will need to perform 2 individual setups, one for Calendar and one for Contacts.

2. Select "Calendar" (or "Contacts") -> "Accounts" -> "Add Account" -> "Other" (return to this step after completing one in order to add the other).

3. Select either CalDAV (for Calendar setup) or CardDAV (for Contacts setup), and enter the following fields:

  - Server - Enter your Nextcloud server LAN URL (found in "Interfaces" in the Nextcloud service page on your Embassy), and add `/remote.php/dav` after `.local`
  
  - User name - Your Nextcloud user (Default is "embassy")
  
  - Password - Your Nextcloud user's password (Default found in "Properties" in the Nextcloud service page on your Embassy)

  - Description - Anything to describe this account, such as "Nextcloud CalDAV"

4. If you get a warning about verifying the server identity, it is safe to "Continue."  Add the apps you want to use, such as Calendars, Contacts, and/or Reminders, then tap "Save."

  - That's it!  Go back to step 2 above to set up your other account (CalDAV / CardDAV)