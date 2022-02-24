.. _initial-setup:

=============
Initial Setup
=============

Check out our quick setup video below, and follow along with the steps in this guide:

.. youtube:: DmTlwp5_zvY

Powering On
-----------

#. Connect your Embassy to power and Ethernet.

    .. tip:: To avoid networking issues, it is recommended to use your `primary` router, not an extender or mesh router.

#. Insert your external drive to one of the blue USB 3.0 ports on Embassy.

#. You will hear 2 distinct sounds:

    * "bep" - Starting up
    * "chime" - Embassy is ready
  
    .. caution:: If you followed the DIY guide and built EmbassyOS from source code, it may take up to 20 minutes to first initialize.

Claiming your Device
--------------------

#. Ensure the device you are using (desktop/laptop or mobile) is connected to the same network as your Embassy.

    .. caution:: Sometimes a router will have a "guest WiFi network," which might be different than the network your Embassy is placed on via ethernet.

#. Visit http://embassy.local from your web browser. You will be prompted to enter your :ref:`Product Key<product-key>`. If you purchased a device from Start9, your Product Key is engraved on the bottom of your device.

    .. figure:: /_static/images/setup/setup0.png
      :width: 60%
      :alt: Enter Product Key

    .. note::

      The product key is used to discover your Embassy's IP address on the Local Area Network using a hashing function and a protocol named :ref:`MDNS (or Zeroconf) <mdns>`.

#. Select "Start Fresh"

    .. figure:: /_static/images/setup/setup1.png
      :width: 60%
      :alt: Fresh Install

    .. note:: The "Recover" button is used for :ref:`migrating from 0.2.x <migrate-02>` and :ref:`restoring from backup <backup-restore>`.

#. Select your storage drive. You should only have one drive plugged into your Embassy at this time, but always verify it is what you expect before clicking (such as, is it a 1TB drive?)

    .. figure:: /_static/images/setup/setup2.png
      :width: 60%
      :alt: Select Drive

#. Create your *permanent* master password and click "Finish".

    .. warning:: There is currently no way to change your password. Choose a strong master password. Write it down. Store it somewhere safe. DO NOT LOSE IT. If you lose this password, you may be forced to reset the device, resulting in permanent loss of data.  **This one responsibility is the price of sovereignty.**

    .. figure:: /_static/images/setup/setup3.png
      :width: 60%
      :alt: Enter a New Password

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
