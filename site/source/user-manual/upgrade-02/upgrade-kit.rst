.. _upgrade-kit:

======================
Setup with Upgrade Kit
======================

.. contents::
  :depth: 2
  :local:

This guide will cover how to upgrade from EmbassyOS version 0.2.x to version 0.3.0.

.. note::
   If you purchased your own equipment please follow :ref:`this guide<upgrade-diy>`.

Backing up
----------

We recommend creating fresh backups of your 0.2.x services before getting started with your upgrade kit.

*Please don't use the microSD card we sent you as a backup device!*

Migrating Data
--------------

You may like to follow along with this video for clarity while migrating:
   .. youtube:: A5Z7aX3x5eU
      :width: 100%


#. Begin by going into your Embassy, stopping all running services, and shutting down the device in the Embassy tab.

#. Once you've heard the power-off sound, wait a few more seconds and then safely unplug the Embassy.

#. Next, remove the OLD SD card that is in your Embassy and place it into the SD card adaptor, and then connect the adaptor to any USB port on your Embassy.

#. Then take the NEW 16GB microSD card with 0.3.0 on it and place it into the microSD card slot on your Embassy. Be careful not to confuse the two microSD cards!

#. Next, plug the SSD into one of the USB 3.0 ports (the blue ones) on your Embassy, then reconnect the Ethernet cable if not already connected.

#. Now the power cable can be connected and the Embassy powered up.

Power Up
--------

#. Embassy will power up and then initialize, a process of less than 5 minutes. Once complete you will hear a _bep_ to indicate it is initialized and then a _chime_ sound to indicate it is online.

#. On your computer, open up a browser and go to http://embassy.local

#. Next, you will be asked to select your old Embassy SD card - select rootfs

   .. figure:: /_static/images/setup/migrate2.png
      :width: 60%

#. You will now be prompted to enter your Product key

   .. figure:: /_static/images/setup/migrate0.png
      :width: 60%

#. On the next page you will be asked to select a storage device - here you should select your SSD.

   .. figure:: /_static/images/setup/migrate3.png
      :width: 60%

   .. note:: If it does not show up, please power down Embassy, unplug it, plug it back in, and boot Embassy again

#. You will now need to make a password for your Embassy. It needs to be a strong password. This password protects your Embassy. It can be the same one that you used prior to migration, or a new one.  Either way, make it strong, and make a backup of it.  Without this you will **LOSE ALL ACCESS** to your Embassy!

#. Embassy will now recover all your data from your old Embassy and once finished, you will hear a _bep_, followed by a _chime_.

   .. figure:: /_static/images/setup/migrate5.png
      :width: 60%

#. Now you will be provided with both a Tor and LAN address with which you can access your Embassy. A file download will contain this important information, which you should keep somewhere safe.  It is also a good idea to make bookmarks on the devices that you will use to access your Embassy.

   .. figure:: /_static/images/setup/migrate6.png
      :width: 60%

#. To use LAN safely, the SSL certificate will need to be added to whatever device you are using to access. This can be downloaded by clicking on "Download root CA" and installed by following the :ref:`instructions<connecting-lan>`.

#. You can now log in to your Embassy via Tor or LAN, and you will be given the option of recovering your data on a service-by-service basis.

IMPORTANT NOTES
---------------
- You may remove your 0.2.x SD Card once you reach the success page.  It is highly recommended to keep this card in a safe place for a few weeks to ensure your migrated Embassy is working smoothly.  After this you may wipe and repurpose the card however you wish.

- Do NOT use the old 0.2.x card again, unless instructed by a Start9 Support Tech, especially if you have funds on the Lightning Network, as it can lead to loss of funds!

- Please note that some services, such as LND, will have new Tor interfaces, and so you will need to add your new credentials to your integrations, such as Zap and Zeus wallets.

- For those recovering Bitwarden - it is now called Vaultwarden.

- For those recovering Bitcoin and changing to a full archival node: You will need to "Disable Pruning" in the config, and run the "Reindex Blockchain" Action, then restart the service upon completion of the sync.
