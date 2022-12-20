.. _initial-setup:

=============
Initial Setup
=============

Check out the video below for a guide on setting up your Embassy!

        .. youtube:: HI9WDq0tWm4
          :width: 60%

        .. raw:: html

            <br/><br/>

.. contents::
  :depth: 2
  :local:

Powering On
-----------

.. _sounds-bepchime:

#. Connect your Embassy to power and Ethernet.



#. If all is well, you will hear 2 distinct sounds:

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

    * "chime" - Embassy is ready

    .. caution:: Glance through the :ref:`troubleshooting<setup-troubleshooting>` section if you hear any different sounds.
      
      If you followed the DIY guide and built embassyOS from source code, it may take up to 20 minutes to first initialize.

You can either boot your Embassy with no monitor (headless mode) or with a monitor, mouse, and keyboard (kiosk mode).  The Embassy One (based on a Raspberry Pi) currently does not have the ability to do kiosk mode.  The Embassy One and the Embassy Pro (x86_64) both work in headless mode, as the local ethernet network must be available to setup your Embassy.

Power the device on and select which mode you would like to continue in on the tab below:

.. tabs::

    .. group-tab:: Headless Mode
    
        Claiming your Device
        --------------------
        
        Ensure the device you are using (desktop/laptop or mobile) is connected to the same network as your Embassy.
        
        .. caution:: Sometimes a router will have a "guest WiFi network," which might be different than the network your Embassy is placed on via ethernet.
        
        Visit http://embassy.local from your web browser.
        
    .. group-tab:: Kiosk Mode
        
        Once your Embassy boots, if you've attached a monitor, keyboard and mouse, you can set it up using the graphical kiosk mode.  A familiar browser interface will display the embassyOS setup page.

        .. caution:: If you followed the DIY guide and your graphics card or monitor is unsupported hardware, you may not see the intended setup screen.  If so, simply click on the "Headless Mode" tab above.

#. Select "Start Fresh"

    .. figure:: /_static/images/setup/screen0-startfresh_or_recover.jpg
      :width: 60%
      :alt: Fresh Setup

    .. note:: The "Recover" button is used for :ref:`migrating from 0.2.x <upgrade-02>`, :ref:`restoring from backup <backup-restore>`, transferring data from a disk used in an old Embassy into a new one, or simply attaching an old Embassy's data drive to a new setup.

#. Select your storage drive

    .. figure:: /_static/images/setup/screen4-select_storage.jpg
      :width: 60%
      :alt: Select Drive

#. Create a master password for your Embassy and click "Finish"

    .. warning:: Choose a strong master password.  Write it down.  Store it somewhere safe.  DO NOT LOSE IT.

   .. figure:: /_static/images/setup/screen5-set_password.jpg
      :width: 60%
      :alt: Create New Password

#. The drive will be initialized for a few minutes

    .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
      :width: 60%
      :alt: SSD Initialization

#. Your Embassy is now a private website on the private web!

    .. tip:: If you used headless mode, click "Download This Page" to save your Embassy address and certificate info to your computer.

    .. figure:: /_static/images/setup/screen7-startfresh_complete.jpg
      :width: 60%
      :alt: Setup Complete

#. Finally, you will be able to login to your newly setup Embassy.  Continue to the section on :ref:`connecting` to learn more about using your Embassy over Tor and LAN.

    .. figure:: /_static/images/setup/screen9-startfresh_complete-savedfile-go_to_embassy_login.jpg
      :width: 60%
      :alt: Setup Complete

.. _setup-troubleshooting:

Troubleshooting
---------------

If you are experiencing issues with setup, try the following:

#. Confirm that the Embassy is plugged into both power and Ethernet

   - An ethernet network with DHCP server must be available at setup.  Most routers provide one.  If such ethernet connectivity is not available, or there is another hardware issue, you may hear this sound:
      
      .. raw:: HTML

        <audio controls>
          <source src="/_static/sounds/FLATLINE.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
#. Confirm the Embassy emitted two sounds when powering on: :ref:`a bep and a chime<sounds-bepchime>`
#. Confirm your phone/computer is **not** connected to a "Guest" network
#. Confirm your phone/computer is not using a VPN
#. Visit or Refresh the embassy.local page in a web browser
#. To avoid networking issues, it is recommended to use your `primary` router, not an extender or mesh router.
#. Very rarely, your firewall settings may block mDNS. In this case:

    - From your browser, navigate to your router configuration settings. This is usually an IP address such as 192.168.1.1. A simple web search will usually reveal how to access the router configuration settings for a particular brand.
    - Once in the router config settings, find the section that lists the devices on your network. You should see an item labeled "embassy". Take note of the associated IP address and enter it into your browser's URL field to enter the setup.
    - In some cases, if you are working with a very old image of embassyOS, the device name will show up as `start9-shortcode`.  If this is the case, and you want to start fresh, wiping out the previous install and all data residing on it, :ref:`flash the newest version of embassyOS<flashing>`.

If you are still having issues, please :ref:`contact support <contact>`.
