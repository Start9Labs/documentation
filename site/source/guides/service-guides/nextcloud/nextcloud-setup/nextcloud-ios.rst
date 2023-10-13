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

1. Download the iOS Nextcloud client from `App Store <https://apps.apple.com/us/app/nextcloud/id1125420102>`_.
2. Open the client and tap "Log In".

   .. figure:: /_static/images/nextcloud/nextcloud-iOS-step2.png
    :width: 30%
    :alt: nextcloud-ios-login   
   
3. From your server's Nextcloud Service page, go to "Interfaces" and copy the LAN address.
   
   .. figure:: /_static/images/nextcloud/nextcloud-mac-step3-lan.png
    :width: 60%
    :alt: nextcloud-ios-login

4. Enter your LAN address under "Server Address" and tap "Next".
   
   .. figure:: /_static/images/nextcloud/nextcloud-iOS-step4.png
    :width: 30%
    :alt: nextcloud-ios-login

5. You will be shown the "Connect to your account" screen, and then click "Log In" and "Grant Access".

  .. figure:: /_static/images/nextcloud/nextcloud-iOS-step5.png
    :width: 30%
    :alt: nextcloud-ios-login
  
  .. figure:: /_static/images/nextcloud/nextcloud-mac-step3-lan.png
    :width: 60%
    :alt: nextcloud-ios-login

6. Next, you will be asked to enter the username and password, which can be found on the startOS Nextcloud Service page under the "Properties" tab.
  
  .. figure:: /_static/images/nextcloud/nextcloud-iOS-step5.png
    :width: 30%
    :alt: nextcloud-ios-login

7. The account access page will be displayed, tap "Grant access".

   .. figure:: /_static/images/nextcloud/nextcloud-iOS-step6.png
    :width: 30%
    :alt: nextcloud-ios-login

8. Files will begin syncing immediately, and you will see your username and account icon in the top left corner.

   .. figure:: /_static/images/nextcloud/nextcloud-iOS-step7.png
    :width: 30%
    :alt: nextcloud-ios-login
    
9.  That's it! From this mobile client you can receive notifications, control accounts and syncing, and quickly access your apps' WebUI pages.

Tor Setup
=========
You will first need to have the :ref:`Tor daemon running<tor-ios>`.

1. Click the account in the top left again, then "Add Account."
2. On the following screen, click "Log in," then enter your Nextcloud Tor server address, which you can copy from Nextcloud -> Interfaces - Tor. This must start with `http://` and end with .onion. Click Next.
3. This will launch your browser and prompt you to log in to your account. Log in and then grant access as we did for LAN.
4. That's it! You may wish to set up some select folders for remote sync, but for large files, it is best to sync on LAN only, so you can "Skip folders configuration" on the resulting screen if you wish. Check your connection by clicking the newly created account in the client app.

Device Integration
------------------
In order to sync calendars and contacts with your iOS device, follow the steps below, which are adapted from the `Official Nextcloud guide <https://docs.nextcloud.com/server/25/user_manual/en/groupware/sync_ios.html>`_.  

First head into the top-righthand menu of your Nextcloud's WebUI and click "Apps," then search for and install the Calendar and/or Contacts Apps. Next folow guide for iOS.

.. figure:: /_static/images/nextcloud/nextcloud-iOS-native.png
    :width: 60%
    :alt: nextcloud account settings

1. Open the "Settings" app on iOS device.

  .. note:: You will need to perform 2 individual setups, one for Calendar and one for Contacts.

2. Select "Calendar" (or "Contacts") -> "Accounts" -> "Add Account" -> "Other" -> "either CalDAV (for Calendar setup) or CardDAV (for Contacts setup)".  Return to this step after completing one in order to add the other.

.. figure:: /_static/images/nextcloud/nextcloud-iOS-native-step1.png
  :width: 60%
  :alt: nextcloud account settings

3. Enter the following fields and tap "Next":

  - Server - Enter your Nextcloud WebDAV Base LAN URL (found in "Properties" in the Nextcloud service page).
  
  - User name - The default user is "embassy," but this is your user within Nextcloud, so be sure it is the correct user if you have more than one.
  
  - Password - Your Nextcloud user's password (Default found in "Properties" in the Nextcloud service page).

  - Description - Anything to describe this account, such as "Nextcloud CalDAV".

.. figure:: /_static/images/nextcloud/nextcloud-iOS-native-step2.png
  :width: 30%
  :alt: nextcloud account settings

4. If you get a warning about verifying the server identity, it is safe to "Continue."  Add the apps you want to use, such as Calendars, Contacts, and/or Reminders, then tap "Save."

  - That's it!  Go back to step 2 above to set up your other account (CalDAV / CardDAV).

