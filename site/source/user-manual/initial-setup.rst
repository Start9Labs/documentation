.. _initial-setup:

=============
Initial Setup
=============
Check out the video below for a guide on setting up your Start9 server!

    .. youtube:: HI9WDq0tWm4
      :width: 60%

    .. raw:: html

        <br/><br/>

.. contents::
  :depth: 2
  :local:

Power On
--------
#. Connect your server to power and Ethernet.

    .. caution:: If you built StartOS from `source <https://github.com/start9labs/start-os>`_, it may take up to 20 minutes to first initialize.

#. Power the device on and select which mode you would like to continue in on the tab below:

  You can either boot your server as-is (headless mode) or add a monitor, mouse, and keyboard (kiosk mode).  Server Lite (Raspberry Pi) is currently headless **only**.  Headless is the default and recommended option.  All control of your server can be done from your computer or mobile device.

.. tabs::

    .. group-tab:: Headless Mode
        
        Ensure the device you are using (desktop/laptop or mobile) is connected to the same network as your server.
        
        .. caution:: Sometimes a router will have a "guest WiFi network," which might be different than the network your server is placed on via ethernet.
        
        Visit ``http://start.local`` from your web browser.
        
    .. group-tab:: Kiosk Mode
        
        Once your server boots, if you've attached a monitor, keyboard and mouse, you can set it up using the graphical kiosk mode.  A familiar browser interface will display the StartOS setup page.

#. Select "Start Fresh."

    .. figure:: /_static/images/setup/screen0-startfresh_or_recover.jpg
      :width: 60%
      :alt: Fresh Setup

    .. note:: The "Recover" button is used for :ref:`hardware upgrades <upgrade-hardware>`, :ref:`restoring from backup <backup-restore>`, data migration, or disaster recovery.

#. Select your storage drive

    .. figure:: /_static/images/setup/screen4-select_storage.jpg
      :width: 60%
      :alt: Select Drive

#. Create a master password for your server and click "Finish."

    .. warning:: Choose a strong master password.  Write it down.  Store it somewhere safe.  DO NOT LOSE IT.

   .. figure:: /_static/images/setup/screen5-set_password.jpg
      :width: 60%
      :alt: Create New Password

#. StartOS will initialize.  This can take up to a few minutes.

    .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
      :width: 60%
      :alt: SSD Initialization

#. You are now hosting your own private server!

    .. tip:: If you are in headless mode, click "Download This Page" to save your server address and certificate info to your computer.

    .. figure:: /_static/images/setup/screen7-startfresh_complete.jpg
      :width: 60%
      :alt: Setup Complete

#. You may now log in.  Continue to the section on :ref:`connecting<connecting>` to learn more about using your server over Tor and LAN.

    .. figure:: /_static/images/setup/screen9-startfresh_complete-savedfile-go_to_start_login.jpg
      :width: 60%
      :alt: Setup Complete

.. _setup-troubleshooting:

Troubleshooting
---------------
If you are experiencing issues with setup, try the following:

#. Confirm that the server is plugged into both power and Ethernet

   - An ethernet network with DHCP server must be available at setup.  Most routers provide one.  If such ethernet connectivity is not available, or there is another hardware issue, you may hear this sound:
      
#. Confirm your phone/computer is **not** connected to a "Guest" network
#. Confirm your phone/computer is not using a VPN, or that if you are, that it allows LAN connections, such as the examples below:

    - Mullvad - Go to "Settings -> VPN Settings -> Local Network Sharing"
    - ProtonVPN - Go to "Preferences -> Connection -> Allow LAN Connections"

#. Visit or refresh (ctrl+shift+R - Linux/Windows, cmd+shift+R - Mac) the start.local page in a web browser
#. To avoid networking issues, it is recommended to use your `primary` router, not an extender or mesh router.
#. Very rarely, your firewall settings may block mDNS. In this case:

    - From your browser, navigate to your router configuration settings. This is usually an IP address such as 192.168.1.1. A simple web search will usually reveal how to access the router configuration settings for a particular brand.
    - Once in the router config settings, find the section that lists the devices on your network. You should see a device labeled ``start``. Take note of the associated IP address and enter it into your browser's URL field to enter the setup.

You can always to :ref:`reach out to support<contact>` if you need a hand.

Server Models With Speakers
---------------------------

.. _sounds-bepchime:

Server Pure and Server One (2022 and older) have an internal speaker and may provide the following audio feedback:

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/BEP.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * "bep" - Starting up

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/CHIME.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * "chime" - Server is ready

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/FLATLINE.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * "flatline" - Server initialization failed / no network connection

Raspberry Pi Lights
-------------------
Server Lite has 2 status lights:

- Red - Power.  This will be on solid when powered up and running normally.
- Green - SD Card.  This will display when there is SD Card activity, such as during OS installation.  It may be off, flashing, or on solid during normal operation.

Server One (2022) has 2 additional lights:

- Blue power button - Power.  This will be on solid when powered up and running normally.
- Blue drive light - SSD.  This will display when there is SSD activity.  It may be off, flashing, or on solid during normal operation. 
