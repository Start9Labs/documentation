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

1. Download the appropriate iOS client from `App Store <https://apps.apple.com/us/app/nextcloud/id1125420102>`_.
2. Open the client and click "Log In".
   
   .. figure:: /_static/images/services/nextcloud/nextcloud-iOS-step2.png
    :width: 40%
    :alt: nextcloud-ios-login   
  
3. From your server's Nextcloud Service page, go to "Interfaces" and copy the LAN address.
   
   .. figure:: /_static/images/services/nextcloud/nextcloud-stabdalone-client-macos-step3.png
    :width: 40%
    :alt: nextcloud-ios-login

4. Enter your LAN address under "Server Address" and click "Next".
   
   .. figure:: /_static/images/services/nextcloud/nextcloud-iOS-step3.png
    :width: 40%
    :alt: nextcloud-ios-login

5. You will be shown the "Connect to your account" screen, and then click "Log In".

   .. figure:: /_static/images/services/nextcloud/nextcloud-iOS-step4.png
    :width: 40%
    :alt: nextcloud-ios-login

6. Next, you will be asked to enter the username and password, which can be found on the startOS Nextcloud Service page under the "Properties" tab.

   .. figure:: /_static/images/services/nextcloud/nextcloud-iOS-step5.png
    :width: 40%
    :alt: nextcloud-ios-login

7. The account access page will be displayed, then click "Grant access".

   .. figure:: /_static/images/services/nextcloud/nextcloud-iOS-step6.png
    :width: 40%
    :alt: nextcloud-ios-login

8. Files will begin syncing immediately, and you will see your username and account icon in the top left corner.

   .. figure:: /_static/images/services/nextcloud/nextcloud-iOS-step7.png
    :width: 40%
    :alt: nextcloud-ios-login
    
9.  That's it! From this desktop client you will recieve notifications, control accounts and syncing, and quickly access your Apps' WebUI pages

Tor Setup
=========
You will first need to have the :ref:`Tor daemon running<tor-ios>`.

1. On your desktop application, click the account in the top left -> Settings, then in Settings, click Network, then "Specify proxy manually as" and "SOCKS5 proxy." Enter "127.0.0.1" for the Host and "9050" for the port.
2. Close the Settings screen and click the account in the top left again, then "Add Account."
3. On the following screen, click "Log in," then enter your Nextcloud Tor server address, which you can copy from Nextcloud -> Interfaces - Tor. This must start with http:// and end with .onion. Click Next.
4. This will launch your browser and prompt you to log in to your account. Log in and then grant access as we did for LAN.
5. That's it! You may wish to set up some select folders for remote sync, but for large files, it is best to sync on LAN only, so you can "Skip folders configuration" on the resulting screen if you wish. Check your connection by clicking the newly created account in the client app.

Device Integration
------------------
In order to sync calendars and contacts with your iOS device, follow the steps below, which are adapted from the `Official Nextcloud guide <https://docs.nextcloud.com/server/25/user_manual/en/groupware/sync_ios.html>`_.  First head into the top-righthand menu of your Nextcloud's WebUI and click "Apps," then search for and install the Calendar and/or Contacts Apps. Next folow this guide for iOS.

1. Open the "Settings" app.

  .. note:: You will need to perform 2 individual setups, one for Calendar and one for Contacts.

2. Select "Calendar" (or "Contacts") -> "Accounts" -> "Add Account" -> "Other" -> "either CalDAV (for Calendar setup) or CardDAV (for Contacts setup)".Return to this step after completing one in order to add the other.

  .. figure:: /_static/images/services/nextcloud/native-nextcloud-iOS-step1.PNG
    :width: 50%
    :alt: nextcloud account settings

3. Enter the following fields and clik "Next":

  .. figure:: /_static/images/services/nextcloud/native-nextcloud-iOS-step2.PNG
    :width: 40%
    :alt: nextcloud account settings

  - Server - Enter your Nextcloud server LAN URL (found in "Interfaces" in the Nextcloud service page), and add `/remote.php/dav` after `.local`
  
  - User name - Your Nextcloud user (Default is "admin")
  
  - Password - Your Nextcloud user's password (Default found in "Properties" in the Nextcloud service page)

  - Description - Anything to describe this account, such as "Nextcloud CalDAV"

4. If you get a warning about verifying the server identity, it is safe to "Continue."  Add the apps you want to use, such as Calendars, Contacts, and/or Reminders, then tap "Save."

  - That's it!  Go back to step 2 above to set up your other account (CalDAV / CardDAV)