.. _upgrade-kit:

======================
Setup with Upgrade Kit
======================

.. contents::
  :depth: 2
  :local:

This guide will cover how to upgrade from StartOS version 0.2.x to version 0.3.x.

.. note::
   If you purchased your own equipment please follow :ref:`this guide<upgrade-diy>`.

Migrating Data
--------------

You may like to follow along with this video for clarity while migrating:
   .. youtube:: A5Z7aX3x5eU
      :width: 100%


#. Begin by going into your Start9 server, stopping all running services, and shutting down the device in the System tab.

#. Once you've heard the power-off sound, wait a few more seconds and then safely unplug the Start9 server.

#. Next, remove the OLD SD card that is in your Start9 server and place it into the SD card adaptor, and then connect the adaptor to any USB port on your Start9 server.

#. Then take the NEW 32GB microSD card with 0.3 on it and place it into the microSD card slot on your Start9 server. Be careful not to confuse the two microSD cards!

#. Next, plug the SSD into one of the USB 3.0 ports (the blue ones) on your Start9 server, then reconnect the Ethernet cable if not already connected.

#. Now the power cable can be connected and the Start9 server powered up.

Power Up
--------

#. The Start9 server will power up and then initialize, a process of less than 5 minutes. Once complete you will hear a _bep_ to indicate it is initialized and then a _chime_ sound to indicate it is online.

#. On your computer, open up a browser and go to http://start.local

#. Pick `Recover`

   .. figure:: /_static/images/setup/screen0-startfresh_or_recover.jpg
      :width: 60%

#. Next, pick `Restore From Backup`

   .. figure:: /_static/images/setup/screen1-restore_or_useexisting.jpg
      :width: 60%

#. You will be asked to select your old Start9 server SD card - select rootfs

   .. figure:: /_static/images/setup/screen3-restore_drive.jpg
      :width: 60%

#. On the next page you will be asked to select a storage device - here you should select your SSD.

   .. figure:: /_static/images/setup/screen4-select_storage.jpg
      :width: 60%

   .. note:: If your SSD does not show up, unplug it from the USB port and plug it back in a different USB 3.0 (blue) port

#. You will now need to make a password for your server. It needs to be a strong password. This password protects your server. It can be the same one that you used prior to migration, or a new one.  Either way, make it strong, and make a backup of it.

   .. figure:: /_static/images/setup/screen5-set_password.jpg
      :width: 60%

#. StartOS will now recover all your data from your old server and once finished, you will hear a _bep_, followed by a _chime_.

   .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
      :width: 60%

#. Now you will be provided with both a Tor and LAN address with which you can access your server. A file download will contain this important information, which you should keep somewhere safe.  It is also a good idea to make bookmarks on the devices that you will use to access your server.

   .. figure:: /_static/images/setup/screen7-upgrade_complete.jpg
      :width: 60%

#. To use LAN safely, the SSL certificate will need to be added to whatever device you are using to access. This can be downloaded by clicking on "Download root CA" and installed by following the :ref:`instructions<connecting-lan>`.

#. You can now log in to your server via Tor or LAN, and you will be given the option of recovering your data on a service-by-service basis.

IMPORTANT NOTES
---------------
- You may remove your 0.2.x SD Card once you reach the success page.  It is highly recommended to keep this card in a safe place for a few weeks to ensure your migrated server is working smoothly.  After this you may wipe and repurpose the card however you wish.

- Do NOT use the old 0.2.x card again, unless instructed by a Start9 Support Tech, especially if you have funds on the Lightning Network, as it can lead to loss of funds!

- Please note that some services, such as LND, will have new Tor interfaces, and so you will need to add your new credentials to your integrations, such as Zap and Zeus wallets.

- For those recovering Bitwarden - it is now called Vaultwarden.

- For those recovering Bitcoin and changing to a full archival node: You will need to "Disable Pruning" in the config, and run the "Reindex Blockchain" Action, then restart the service upon completion of the sync.
