.. _initial-setup:

=============
Initial Setup
=============

.. contents::
  :depth: 2
  :local:

Check out the video below, and follow along with the steps in this guide to setup your new Embassy!

    .. youtube:: cWFLUH6jrqA
      :width: 100%

Powering On
-----------

#. Connect your Embassy to power and Ethernet.

    .. tip:: To avoid networking issues, it is recommended to use your `primary` router, not an extender or mesh router.

#. Insert your external drive to one of the blue USB 3.0 ports on Embassy.

#. You will hear 2 distinct sounds:

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

    .. caution:: If you followed the DIY guide and built EmbassyOS from source code, it may take up to 20 minutes to first initialize.

Claiming your Device
--------------------

#. Ensure the device you are using (desktop/laptop or mobile) is connected to the same network as your Embassy.

    .. caution:: Sometimes a router will have a "guest WiFi network," which might be different than the network your Embassy is placed on via ethernet.

#. Visit http://embassy.local from your web browser.

#. Select "Start Fresh"

    .. figure:: /_static/images/setup/screen0-startfresh_or_recover.jpg
      :width: 60%
      :alt: Fresh Install

    .. note:: The "Recover" button is used for :ref:`migrating from 0.2.x <upgrade-02>` or :ref:`restoring from backup <backup-restore>`.

#. Select your storage drive. You should only have one drive plugged into your Embassy at this time, but always verify it is what you expect before clicking (such as, is it a 1TB drive?)

    .. figure:: /_static/images/setup/screen4-select_storage.jpg
      :width: 60%
      :alt: Select Drive

#. Create a master password for your Embassy and click "Finish".

    .. warning:: Choose a strong master password.  Write it down.  Store it somewhere safe.  DO NOT LOSE IT.

   .. figure:: /_static/images/setup/screen5-set_password.jpg
      :width: 60%
      :alt: Enter a New Password

#. The drive will be initialized for a few minutes

    .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
      :width: 60%
      :alt: SSD Initialization

#. Your Embassy is now a private website on the private web! Continue to the section on :ref:`connecting` to learn more about using your Embassy over Tor and LAN.

    .. tip:: Click "Download This Page" to save your Embassy address and certificate info on your computer.

    .. figure:: /_static/images/setup/setup4.png
      :width: 60%
      :alt: Setup Complete

Troubleshooting
---------------

If you are experiencing issues with setup, try the following:

#. Confirm that the Embassy is plugged into both power and Ethernet
#. Confirm your SSD is plugged into one of the blue USB 3.0 slots.
#. Confirm the Embassy emitted two sounds when powering on: a bep and a chime.
#. Confirm you are entering the correct product key.
#. Confirm your connecting device is **not** connected to a "Guest" network.
#. Confirm your connecting device is not using a VPN.
#. Refresh the embassy.local browser page.
#. Very rarely, a router may not support mDNS. In this case:

    - On your desktop or laptop computer, navigate to your router configuration settings within the browser. This is usually an IP address such as 192.168.1.1. A simple web search will usually reveal how to access the router configuration settings for a particular brand.
    - Once in the router config settings, find the section that lists the devices on your network. You should see an item labeled "embassy". Take note of the associated IP address and enter it into your browser's URL field to enter the setup.

If you are still having issues, please :ref:`contact support <contact>`.
