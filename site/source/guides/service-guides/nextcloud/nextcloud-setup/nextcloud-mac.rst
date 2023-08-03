.. _nextcloud-mac:

=================
Nextcloud - MacOS 
=================

.. contents::
  :depth: 3 
  :local:

Initial Config
--------------
It is advised to setup your Nextcloud devices on LAN (if available) for the best experience.  Once set up, Tor can be used for remote syncing, but remember that large files will likely fail or take a very long time, so it is best to use remote sync only for low-bandwidth activity, such as Calendar, Contacts, Tasks, and Notes.  Streaming your music is also possible.  Later in 2023, new connection options will unlock Nextcloud's full feature-set.

Native Desktop Integration
--------------------------
The smoothest experience will be using direct account integration with your Mac.  First head into the top-righthand menu of your Nextcloud's WebUI and click "Apps," then search for and install the Calendar and/or Contacts Apps if you don't have them already (these are installed by default on the latest Nextcloud for StartOS).  The steps below are adapted from the `Official Nextcloud guide <https://docs.nextcloud.com/server/24/user_manual/en/groupware/sync_osx.html>`_ and updated for the latest MacOS (Ventura).  Make sure you have first set up :ref:`LAN access<lan-mac>`.

.. tabs::
  
  .. group-tab:: Ventura

    1. Open the "System Settings" and select "Internet Accounts," click "Add Account." and then select "Add Other Account".
      
      .. figure:: /_static/images/nextcloud/native-nextcloud-integration-macos-step1.png
          :width: 60%
          :alt: macOS add account
    
      .. figure:: /_static/images/nextcloud/native-nextcloud-integration-macos-step1.2.png
        :width: 60%
        :alt: macOS add account
    
    2. Select CalDAV for calendar setup or CardDAV for contacts setup. If you want to do both, you will need to return to this step after finishing the setup of the first.
      
      .. note:: You will need to perform 2 individual setups, one for Calendar and one for Contacts.
    
      .. figure:: /_static/images/nextcloud/native-nextcloud-integration-macos-step2.png
        :width: 60%
        :alt: macOS select account
    
    3. Select "Advanced" from the "Account Type" dropdown menu and fill in the following fields.

       .. figure:: /_static/images/nextcloud/native-nextcloud-integration-macos-step3.png
        :width: 60%
        :alt: macOS setup account

    - Username - The default user is "admin," but this is your user within Nextcloud, so be sure it is the correct user if you have more than one

    - Password - In your Nextcloud WebUI, visit the top-right-hand menu and select "Personal Settings" -> "Security." At the bottom, under Devices & Sessions, create a new app password with a name of your choice, such as "MacCalDAV." Then, copy the resulting password into your Mac's account configuration. 

      .. figure:: /_static/images/nextcloud/native-nextcloud-integration-macos-step3.1.png
        :width: 60%
        :alt: nextcloud app password 
    
    - Server Address - copy your LAN address from the "Interfaces" section of your Nextcloud service page then paste.

      .. figure:: /_static/images/nextcloud/native-nextcloud-integration-macos-step3.2.png
        :width: 60%
        :alt: nextcloud app password
  
    - Server Path - For CalDav enter this path `/remote.php/dav/principals/users/embassy/`. You can find complete path in Nextcloud -> Calendar settings -> Copy iOS/macOS CalDav address. For setting up contacts/CardDav use this path `/remote.php/dav`.

      .. figure:: /_static/images/nextcloud/native-nextcloud-integration-macos-step3.3.png
        :width: 60%
        :alt: nextcloud app password

    - Port - Set port to `443`.
  
    4. Click "Sign In."

      - You can now select the apps you want to use on your Mac, such as Calendars, Reminders.
      - Return to Step 3 to set up CalDAV/CardDAV, whichever you have not done yet.
  
  .. group-tab:: Pre-Ventura

    1. Open the "System Settings" and select "Internet Accounts," then click "Add Account."

    2. Select "Add Other Account"
      
      .. note:: You will need to perform 2 individual setups, one for Calendar and one for Contacts.

    3. Select CalDAV for Calendar setup OR CardDAV for Contacts setup.  If you want to do both, you will need to return to this step after finishing setup of the first.

    4. Select "Manual" from the "Account Type" dropdown menu and fill in the following fields:

      - Username - The default user is "admin," but this is your user within Nextcloud, so be sure it is the correct user if you have more than one
      
      - Password - In your Nextcloud WebUI, visit the top-righthand menu and select "Personal Settings" -> "Security."  At the bottom, under Devices & Sessions, create a new app password with a name of your choice, such as "MacCalDAV," and then copy the resulting password into your Mac's account config
      
      - Server Address - copy your LAN address from the "Interfaces" section of your Nextcloud service page then add `/remote.php/dav` after `.local`

    5. Click "Sign In."

      - You can now select the apps you want to use on your Mac, such as Calendars, Reminders, or Contacts
      - Return to Step 3 to continue setup

Standalone Clients
------------------

.. note:: The desktop version of NextCloud doesn't have much of a user interface.  Once installed, it solely lives in the top right hand corner of the Mac desktop in the navbar, near the WiFi icon.  When it's synced, the icon turns into a checkmark with a circle around it.

For those that prefer to use a desktop client.

File Syncing - Nextcloud Desktop
================================
This is Nextcloud's official client application for file syncing and account management.  The latest version of the official Nextcloud client is available on their `download page <https://nextcloud.com/install/#install-clients>`_.

LAN Setup
.........
Make sure you have first set up :ref:`LAN access<lan-mac>`.  Then do the following:

1. Download the appropriate desktop client from the `Nextcloud website <https://nextcloud.com/install/#install-clients>`_.
2. Open the client and click "Log In".

  .. figure:: /_static/images/nextcloud/nextcloud-mac-step2.png
    :width: 40%
    :alt: nextcloud-login

3. From your server's Nextcloud Service page, go to "Interfaces" and copy the LAN address.

  .. figure:: /_static/images/nextcloud/nextcloud-mac-step3-lan.png
    :width: 60%
    :alt: nextcloud-login

4. Enter your LAN address under "Server Address" and click "Next".

  .. figure:: /_static/images/nextcloud/nextcloud-mac-step4.png
    :width: 40%
    :alt: nextcloud-login

5. This will launch a page in your web browser, click "Log In" and then "Grant access" to link the desktop client. You can close this browser window afterwards.

  .. figure:: /_static/images/nextcloud/nextcloud-mac-step5.png
    :width: 40%
    :alt: nextcloud-login

6. Next, configure the local directory that you want to sync with Nextcloud. You may use the default or change it, and edit the sync settings to desired. When satisfied, click "Connect".

  .. figure:: /_static/images/nextcloud/nextcloud-mac-step6.png
    :width: 60%
    :alt: nextcloud-login

7. Files will begin to sync immediately and you will see a green check when this is complete.

  .. figure:: /_static/images/nextcloud/nextcloud-mac-step7.png
    :width: 50%
    :alt: nextcloud-login
    
8. That's it! From this desktop client you can receive notifications, control accounts and syncing, and quickly access your apps' WebUI pages.

Tor Setup
.........
You will first need to have the :ref:`Tor daemon running<tor-mac>`.

1. On your desktop application, click the account in the top left -> Settings.

  .. figure:: /_static/images/nextcloud/nextcloud-mac-tor1.png
    :width: 40%
    :alt: nextcloud-login

2. On the following screen, click "Network" tab and then “Specify proxy manually as” and “SOCKS5 proxy.” Enter “127.0.0.1” for the Host and “9050” for the port.

  .. figure:: /_static/images/nextcloud/nextcloud-mac-tor2.png
    :width: 40%
    :alt: nextcloud-login

3. Close the Settings screen and click the account in the top left again, then “Add Account.”

  .. figure:: /_static/images/nextcloud/nextcloud-mac-tor3.png
    :width: 40%
    :alt: nextcloud-login

4. On the following screen, click “Log in,” then enter your Nextcloud Tor server address, which you can copy from Nextcloud -> Interfaces - Tor. This must start with http:// and end with .onion. Click Next.

  .. figure:: /_static/images/nextcloud/nextcloud-mac-step2.png
    :width: 40%
    :alt: nextcloud-login

  .. figure:: /_static/images/nextcloud/nextcloud-mac-step4.png
    :width: 40%
    :alt: nextcloud-login

5. This will launch your browser and prompt you to log in to your account. Log in and then grant access as we did for LAN.

6. That’s it! You may wish to set up some select folders for remote sync, but for large files, it is best to sync on LAN only, so you can “Skip folders configuration” on the resulting screen if you wish. Check your connection by clicking the newly created account in the client app.
   
Calendar & Contacts Syncing - Thunderbird
=========================================
If you wish to use a standalone client for Calendar and Contacts, we recommend Mozilla's `Thunderbird <https://www.thunderbird.net>`_.

1. Install the Contacts and Calendar apps in Nextcloud.
2. Make sure you are on Thunderbird version 102.3.0 or greater and then import your LAN certificate:

    - First, follow the :ref:`instructions for adding your Root CA to your system<lan-mac>` and then the :ref:`Thunderbird-specific instructions<lan-thunderbird>`.

3. Download the `TBSync` and `Provider for CalDAV & CardDAV` add-ons by searching for them in the "Tools -> Add-ons and Themes" menu.
4. Go back to "Tools -> Add-ons and Themes -> Extensions" and click the 'wrench' icon next to TBSync.
5. Click "Account Actions" in the bottom left of the resulting screen, then "Add New Account -> CalDAV & CardDAV"
6. Select "Automatic Configuration" and click `Next`
7. Enter a name for your account, your nextcloud user name (found in Properties, default is 'admin'), password (found in Properties), and server LAN address (found in Interfaces, ending in `.local`) - then click "Next."
8.  After connecting, click "Finish."
9.  In the resulting window, click "Enable and synchronize this account."
10. Select the items you want to sync, such as contacts and a calendar.
