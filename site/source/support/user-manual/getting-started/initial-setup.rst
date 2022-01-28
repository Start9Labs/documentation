.. _initial-setup:

=============
Initial Setup
=============

Connect and Power Up
--------------------

Check out our quick setup video below, and follow along with the steps in this guide:

.. youtube:: DmTlwp5_zvY

1. Connect your Embassy to power and Internet, normally using an ethernet port on your home Internet router.

.. tip:: To avoid networking issues, it is recommended to use your primary router, not an extender or mesh router.

2. Plug in your external drive to one of the USB 3.0 (blue) ports on Embassy.

Embassy will initialize, which may take 10-15min.  You will hear 2 distinct sounds:

* "bep" - Starting up
* "chime" - Embassy is ready

Setup Your Embassy
------------------

1. Ensure the device you are using (desktop/laptop or mobile) is connected to the same network as your router.

.. caution:: Sometmies a router will have a "guest WiFi network," which might be different than the network your Embassy is placed on via ethernet.

2. Visit ``embassy.local`` from your web browser. You will be prompted to enter your :ref:`Product Key<product-key>`.  This is found on the bottom side of your device.

.. figure:: /_static/images/setup/setup0.svg
    :width: 60%
    :alt: Enter Product Key

.. admonition:: Explanation
    :class: toggle expand

    The product key is used to discover your Embassy's IP address on the Local Area Network using a hashing function and a protocol named :ref:`MDNS (or Zeroconf) <mdns>`.

3. Next, select "Start Fresh" if this is your first time using an Embassy.  If you'd like to "Recover" from an existing Embassy, please follow the guide for :ref:`versions 0.2.x <recover-02x>` or :ref:`versions 0.3.x <recover-03x>`.

.. figure:: /_static/images/setup/setup1.svg
    :width: 60%
    :alt: Fresh Install

4. Select your storage drive.  You should only have one drive plugged into your Embassy at this time, but always verify it is what you expect before clicking (such as, is it a 1TB drive?)

.. figure:: /_static/images/setup/setup2.svg
    :width: 60%
    :alt: Select Drive

5. Create your *permanent* master password and complete setup.

.. figure:: /_static/images/setup/setup3.svg
    :width: 60%
    :alt: Enter a New Password

.. admonition:: Explanation
    :class: toggle expand

    In this step, the setup process will provide your Embassy with three pieces of critical information:

    * An ed25519 private key. Used by the Embassy to create a .onion public address for encrypted and anonymous communication over Tor.
    * A 4096 bit RSA private key. Used by the Embassy to create a SSL certificate for encrypted communication over LAN.
    * A master password. Used by the Embassy to authenticate you as its owner.

    All three secrets are packaged together and transmitted to the Embassy encrypted with its :ref:`Product Key<product-key>`.

.. warning:: There is also currently no way to change your password. Choose a strong master password. Write it down. Store it somewhere safe. DO NOT LOSE IT. If you lose this password, you may be forced to reset the device, resulting in permanent loss of data.  **This one responsibility is the price of sovereignty.**

6. That's it!

.. figure:: /_static/images/setup/setup4.svg
    :width: 60%
    :alt: Setup Complete

Your Embassy is now hosted on the private web!  After setup is complete you will be presented with connection information.  You can view and manage your Embassy by visiting its unique Tor Address from any Tor-enabled browser, or by accessing it's ``.local`` address from your LAN (see :ref:`LAN Setup<lan-setup>` for assistance).

Enjoy!
------

.. figure:: /_static/images/setup/setup5.svg
    :width: 60%
    :alt: Fresh Embassy

Upon accessing your Embassy for the first time, you will be greeted with an empty Services page.  Start9 firmly believe that the only software that should be on your device is the software you choose to be on there.  So go ahead and visit the Marketplace to get your first Service!!

Troubleshooting
---------------

Try these steps if you have any issues with setup.

    #. Confirm that the Embassy is plugged into both power and Ethernet, with the USB drive in a USB 3.0 (blue) slot.
    #. Confirm the Embassy emitted two sounds when powering on: a bep and a chime.
    #. Confirm you are entering the product key correctly and exactly.
    #. Confirm your device you are using is not connected to a "Guest" network
    #. Confirm your device is not using a VPN.
    #. Try to refresh the ``embassy.local`` page.
    #. Very rarely, a router may not support mDNS. In this case:

    - On your desktop or laptop computer, navigate to your router configuration settings within the browser. This is usually an IP address such as 192.168.1.1. A simple web search will usually reveal how to access the router configuration settings for a particular brand.
    - Once in the router config settings, find the section that lists the devices on your network. You should see an item labeled "embassy". Take note of the associated IP address and enter it into your browser's URL field to enter the setup.

If you are still having issues, please reach out to us for :ref:`Assistance<contact>`.
