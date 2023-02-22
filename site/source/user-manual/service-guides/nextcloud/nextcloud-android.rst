.. _nextcloud-android:

===================
Nextcloud - Android 
===================

.. contents::
  :depth: 2 
  :local:

Initial Config
--------------
It is advised to setup your Nextcloud devices on LAN for the best experience.  Once set up, Tor can be used for remote syncing, but remember that large files will likely fail or take a very long time, so it is best to use remote sync only for low-bandwidth activity, such as Calendar, Contacts, Tasks, and Notes.  Streaming your music is also possible.  Later in 2023, new connection options will unlock Nextcloud's full feature-set.

Nextcloud App
-------------
The latest version of the official Nextcloud client is available on their `download page <https://nextcloud.com/install/#install-clients>`_.  This is for file syncing and account management.

LAN Setup
=========
Make sure you have first set up :ref:`LAN access<lan-android>`.

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
You will first need to have the :ref:`Tor daemon running<tor-android>`.

1. On your desktop application, click the account in the top left -> Settings, then in Settings, click Network, then "Specify proxy manually as" and "SOCKS5 proxy." Enter "127.0.0.1" for the Host and "9050" for the port.
2. Close the Settings screen and click the account in the top left again, then "Add Account."
3. On the following screen, click "Log in," then enter your Nextcloud Tor server address, which you can copy from the Nextcloud page on your Embassy -> Interfaces - Tor. This must start with http:// and end with .onion. Click Next.
4. This will launch your browser and prompt you to log in to your account. Log in and then grant access as we did for LAN.
5. That's it! You may wish to set up some select folders for remote sync, but for large files, it is best to sync on LAN only, so you can "Skip folders configuration" on the resulting screen if you wish. Check your connection by clicking the newly created account in the client app.

Device Integration
------------------
In order to sync calendars and contacts with your Android device, follow the steps below, which are adapted from the `Official Nextcloud guide <https://docs.nextcloud.com/server/25/user_manual/en/groupware/sync_android.html>`_.  First head into the top-righthand menu of your Nextcloud's WebUI and click "Apps," then search for and install the Calendar and/or Contacts Apps.

1. Download the WebDAV sync management client `DAVx5 <https://www.davx5.com/download/>`_ from your app store of choice, such as F-Droid or the Play Store.

2. Add account:

   - If you are on Android 12+ and already have the Nextcloud file-syncing app (recommended - guide above), then open it and enter the "Settings" menu from the top-lefthand hamburger (3 lines) menu.  Then under the section titled, "More," tap "Sync Calendar & Contacts."

     - This will open Nextcloud's WebFlow login in a browser, where you will need to log in and "Grant Access" - you will then be returned to DAVx5
     
     - Set an account name when asked, then set "Contact Group Method" to "Groups are per-contact categories" - DAVx5 will close and Nextcloud will reappear.
     
     - Manually launch DAVx5 again and top on the account that was just created.  Grant access to Calendars and Contacts when requested, and optionally tasks, if you added that feature in setup.  Choose the address books and calendars you wish to sync and you're done!

   - If you are NOT using the Nextcloud app already, then open DAVx5 and after going through the introduction (optionally selecting additional features), tap the "+" icon to add a new account, then select "Login with URL and user name," and fill in the following fields:

     - Base URL - Enter your Nextcloud LAN address from "Interfaces" on your Nextcloud service page and add `/remote.php/dav` after `.local`

     - User name - Your Nextcloud user (defaults are found in "Properties" on your Nextcloud service page)

     - Password - Your Nextcloud user's password (defaults are found in "Properties" on your Nextcloud service page)

     - If given the option, select "Groups are per-contact categories," then tap "Login."  Select the data you want to sync, grant access for contacts, calendars, and optionally tasks if you added that feature in setup.  That's it, you're done!

.. tip:: You may also wish to add the `ICSx5 <https://icsx5.bitfire.at/>`_ app, which allows subscription to remote WebCal or local iCal files (such as public event schedules, iCloud/Google calendars, etc).  It can be found in your favorite app store.