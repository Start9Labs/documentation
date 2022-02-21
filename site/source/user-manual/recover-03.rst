.. _recover-03:

======================
Recover 0.3 Data Drive
======================

This guide will cover how to recover existing Embassy 0.3.x service and user data (on an SSD) to a new OS install (sd card).

Instructions
------------

#. Plug up all your hardware

   - New EOS install, flashed on sd card
   - Old SSD with 0.3.x data that you are recovering from
   - Ethernet cable
   - Finally, power cable to boot device

#. Embassy will power up and then initialize, a process of less than 5 minutes if you purchased an image, or about 10-20 minutes if you built from source. Once complete you will hear a _bep_ to indicate it is initialized and then a _chime_ sound to indicate it is online.

#. On your computer, open up a browser and go to ``embassy.local``.  You will be asked to enter a product key.  This can be located on the bottom of your Embassy if you purchased, or in the repository folder if you built from source.

   .. figure:: /_static/images/setup/migrate0.png
      :width: 60%

#. Once entered, select ``Recover`` then select the ``Use Drive`` from the pop-up.  If you don't see the drive, you may get a message asking you to unplug, then plug back in the drive, and refresh the page.  Do so, then select the drive.

   .. figure:: /_static/images/setup/migrate1.png
      :width: 60%

   .. figure:: /_static/images/setup/migrate3.png
      :width: 60%

   .. note:: If it does not show up, please power down Embassy, unplug it, plug it back in, and boot Embassy again

#. If this drive is not empty, you will see a warning first, indicating all data will be overwritten. If you are happy to proceed, click ``Continue``.

   .. figure:: /_static/images/setup/migrate4.png
      :width: 60%

#. You will now need to make a password for your Embassy. It needs to be a strong password. This password protects your Embassy. It can be the same one that you used prior to recovery, or a new one.  Either way, make it strong, and make a backup of it.  Without this you will **LOSE ALL ACCESS** to your Embassy!

#. Embassy will now recover all your data from your old Embassy and once finished, you will hear a _bep_ then a _chime_.

   .. figure:: /_static/images/setup/migrate5.png
      :width: 60%

#. Now you will be provided with both a Tor and LAN address with which you can access your Embassy. A file download will contain this important information, which you should keep somewhere safe.  It is also a good idea to make bookmarks on the devices that you will use to access your Embassy.  These will be the same as your Embassy previous to recovery.

   .. figure:: /_static/images/setup/migrate6.png
      :width: 60%

#. To use LAN safely, the SSL certificate will need to be added to whatever device you are using to access. This can be downloaded by clicking on ``Download root CA`` and installed by following the :ref:`instructions<lan-setup>`.

#. You can now log in to your Embassy via Tor or LAN, and you will be given the option of recovering your data on a service-by-service basis.

.. note:: For those recovering Bitwarden - it is now called Vaultwarden.
