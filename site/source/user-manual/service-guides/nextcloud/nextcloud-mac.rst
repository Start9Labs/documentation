.. _nextcloud-mac:

=================
Nextcloud - MacOS 
=================

.. contents::
  :depth: 2 
  :local:

Initial Config
--------------
It is advised to setup your Nextcloud devices on LAN for the best experience.  Once set up, Tor can be used for remote syncing, but remember that large files will likely fail or take a very long time, so it is best to use remote sync only for low-bandwidth activity, such as Calendar, Contacts, Tasks, and Notes.  Streaming your music is also possible.  Later in 2023, new connection options will unlock Nextcloud's full feature-set.

Native Desktop Integration
--------------------------

.. note:: The desktop version of NextCloud doesn't have much of a user interface.  Once installed, it solely lives in the top right hand corner of the Mac desktop in the navbar, near the WiFi icon.  When it's synced, the icon turns into a checkmark with a circle around it.

The smoothest experience will be using direct account integration with your Mac.  First head into the top-righthand menu of your Nextcloud's WebUI and click "Apps," then search for and install the Calendar and/or Contacts Apps.  The steps below are adapted from the `Official Nextcloud guide <https://docs.nextcloud.com/server/24/user_manual/en/groupware/sync_osx.html>`_ and updated for the latest MacOS (Ventura).  Make sure you have first set up :ref:`LAN access<lan-mac>`.

1. Open the "System Settings" and select "Internet Accounts," then click "Add Account."

2. Select "Add Other Account"
  
  .. note:: You will need to perform 2 individual setups, one for Calendar and one for Contacts.

3. Select CalDAV for Calendar setup OR CardDAV for Contacts setup.  If you want to do both, you will need to return to this step after finishing setup of the first.

4. Select "Manual" from the "Account Type" dropdown menu and fill in the following fields:

  - Username - The default user is "embassy," but this is your user within Nextcloud, so be sure it is the correct user if you have more than one
  
  - Password - In your Nextcloud WebUI, visit the top-righthand menu and select "Personal Settings" -> "Security."  At the bottom, under Devices & Sessions, create a new app password with a name of your choice, such as "MacCalDAV," and then copy the resulting password into your Mac's account config
  
  - Server Address - copy your LAN address from the "Interfaces" section of your Nextcloud service page then add `/remote.php/dav` after `.local`

5. Click "Sign In."

  - You can now select the apps you want to use on your Mac, such as Calendars, Reminders, or Contacts
  - Return to Step 3 to continue setup

Standalone Clients
------------------
For those that prefer to use a desktop client.

File Syncing - Nextcloud Desktop
================================
This is Nextcloud's official client application for file syncing and account management.  The latest version of the official Nextcloud client is available on their `download page <https://nextcloud.com/install/#install-clients>`_.

LAN Setup
.........
Make sure you have first set up :ref:`LAN access<lan-mac>` and completed the :ref:`Thunderbird-specific instructions<lan-thunderbird>`.  Then do the following:

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

1. Close the Settings screen and click the account in the top left again, then "Add Account."
2. On the following screen, click "Log in," then enter your Nextcloud Tor server address, which you can copy from the Nextcloud page on your Embassy -> Interfaces - Tor. This must start with http:// and end with .onion. Click Next.
3. This will launch your browser and prompt you to log in to your account. Log in and then grant access as we did for LAN.
4. That's it! You may wish to set up some select folders for remote sync, but for large files, it is best to sync on LAN only, so you can "Skip folders configuration" on the resulting screen if you wish. Check your connection by clicking the newly created account in the client app.

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