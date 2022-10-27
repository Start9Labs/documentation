.. _initial-setup:

=============
Initial Setup
=============

.. contents::
  :depth: 2
  :local:

Powering On
-----------

#. Connect your Embassy to power and Ethernet.

    .. tip:: To avoid networking issues, it is recommended to use your `primary` router, not an extender or mesh router.

    .. caution:: If there is something wrong with your hardware setup, such as ethernet being unavailable, you will hear this sound:
      
      .. raw:: HTML

        <audio controls>
          <source src="/_static/sounds/FLATLINE.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>

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

    .. caution:: If you followed the DIY guide and built embassyOS from source code, it may take up to 20 minutes to first initialize.

Claiming your Device
--------------------

#. Ensure the device you are using (desktop/laptop or mobile) is connected to the same network as your Embassy.

    .. caution:: Sometimes a router will have a "guest WiFi network," which might be different than the network your Embassy is placed on via ethernet.

#. Visit http://embassy.local from your web browser.

#. Select "Start Fresh"

    .. figure:: /_static/images/setup/screen0-startfresh_or_recover.jpg
      :width: 60%
      :alt: Fresh Setup

    .. note:: The "Recover" button is used for :ref:`migrating from 0.2.x <upgrade-02>` or :ref:`restoring from backup <backup-restore>`.

#. Select your storage drive. There should only be one drive in the list.

    .. figure:: /_static/images/setup/screen4-select_storage.jpg
      :width: 60%
      :alt: Select Drive

#. Create a master password for your Embassy and click "Finish".

    .. warning:: Choose a strong master password.  Write it down.  Store it somewhere safe.  DO NOT LOSE IT.

   .. figure:: /_static/images/setup/screen5-set_password.jpg
      :width: 60%
      :alt: Create New Password

#. The drive will be initialized for a few minutes

    .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
      :width: 60%
      :alt: SSD Initialization

#. Your Embassy is now a private website on the private web! Continue to the section on :ref:`connecting` to learn more about using your Embassy over Tor and LAN.

    .. tip:: Click "Download This Page" to save your Embassy address and certificate info on your computer.

    .. figure:: /_static/images/setup/screen7-startfresh_complete.jpg
      :width: 60%
      :alt: Setup Complete

Troubleshooting
---------------

If you are experiencing issues with setup, try the following:

#. Confirm that the Embassy is plugged into both power and Ethernet
#. Confirm the Embassy emitted two sounds when powering on: a bep and a chime
#. Confirm your phone/computer is **not** connected to a "Guest" network
#. Confirm your phone/computer is not using a VPN
#. Refresh the embassy.local browser page
#. Very rarely, a router may not support mDNS. In this case:

    - From your browser, navigate to your router configuration settings. This is usually an IP address such as 192.168.1.1. A simple web search will usually reveal how to access the router configuration settings for a particular brand.
    - Once in the router config settings, find the section that lists the devices on your network. You should see an item labeled "embassy". Take note of the associated IP address and enter it into your browser's URL field to enter the setup.

If you are still having issues, please :ref:`contact support <contact>`.
