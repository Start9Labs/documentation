.. _upgrade-diy:

=======================
Using your own hardware
=======================

.. contents::
  :depth: 2
  :local:

This guide will cover how to upgrade from EmbassyOS version 0.2.x to version 0.3.0 with your own equipment.

Hardware Requirements
---------------------

.. note::
   If you purchased the `upgrade kit <https://store.start9.com/collections/embassy/products/upgrade-kit>`_ from Start9, you should follow :ref:`this guide<upgrade-kit>`.

#. `32GB microSD card <https://www.amazon.com/dp/B07P14QHB7/>`_

#. `1TB solid state drive <https://www.amazon.com/Crucial-MX500-NAND-SATA-Internal/dp/B078211KBB>`_ minimum, 2TB+ recommended.

#. `Connector <https://www.amazon.com/Sabrent-2-5-Inch-Adapter-Optimized-EC-SSHD/dp/B011M8YACM>`_ or `enclosure <https://www.amazon.com/gp/product/B07T9D8F6C>`_ for your drive.

#. `SD card adapter <https://www.amazon.com/gp/product/B000WR3Z3A>`_ for getting data from your SD card.

Flashing
--------

#. Once you have all these you will need to download an 0.3.0 image from https://images.start9.com. This is free for all existing users. Anyone who is running 0.2.x who compiled it themselves will need to either compile 0.3.0 themselves or purchase an 0.3.0 image.

#. Once you have the image, flash it on to the 16GB SD card - the new one, **NOT** the one currently in your Embassy!

.. tip:: The flashing software we recommend is `Balena Etcher <https://www.balena.io/etcher/>`_

.. _migrate-02-migrate:

Migrate Data
------------

You may like to follow along with this video for clarity while migrating:
   .. youtube:: ySd8uFJTbvQ
      :width: 100%

#. Begin by going into your Embassy, stopping all running services, and shutting down the device in the Embassy tab.

#. Once you've heard the power-off sound, wait a few more seconds and then safely unplug the Embassy.

#. Next, remove the SD card that is in your Embassy and place it into the SD card adaptor, and then connect the adaptor to a USB port on your Embassy.

#. Then take the new SD card with 0.3.0 on it and place it into the microSD card slot on your Embassy (not into the adaptor - that is for the old SD card!)

#. Next, plug the SSD into one of the USB 3.0 ports (blue) on your Embassy, then reconnect the Ethernet cable if not already connected.

#. Now the power cable can be connected and the Embassy powered up.

Power Up
--------

#. Embassy will power up and then initialize, a process of less than 5 minutes if you purchased an image, or about 10-20 minutes if you built from source. Once complete you will hear a _bep_ to indicate it is initialized and then a _chime_ sound to indicate it is online.

#. On your computer, open up a browser and go to http://embassy.local

#. You will be asked to enter your product key.  This can be located on the bottom of your Embassy if you purchased, or in the repository folder if you built from source.

   .. figure:: /_static/images/setup/migrate0.png
      :width: 60%


#. Once entered, select "Recover" then select the microSD card - this will be labelled ``rootfs``.

   .. figure:: /_static/images/setup/migrate1.png
      :width: 60%

   .. figure:: /_static/images/setup/migrate2.png
      :width: 60%

#. On the next page you will be asked to select a storage device - here you should select your SSD.

   .. figure:: /_static/images/setup/migrate3.png
      :width: 60%

   .. note:: If it does not show up, please power down Embassy, unplug it, plug it back in, and boot Embassy again

#. If this drive is not empty, you will see a warning first, indicating all data will be overwritten. If you are happy to proceed, click "Continue".

   .. figure:: /_static/images/setup/migrate4.png
      :width: 60%

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
