.. _diy:

=========
DIY Guide - ***UPDATE BUILD GUIDE LINK***
=========

.. figure:: /_static/images/diy/pi.png
  :width: 40%
  :alt: Raspberry Pi

  Raspberry Pi Board

By popular demand, we are pleased to present this "Do it Yourself" (DIY) guide for the Start9 Embassy personal server!

Motivation
----------

There are four reasons you might prefer to build your own Embassy instead of purchasing one from us.

#. You already own the necessary hardware and would like to re-purpose it.

#. You live outside the US and want to save on shipping costs.

#. You do not trust Start9's supply chain.

#. You do not want to share your shipping address.

#. You just like building things.

Building an Embassy
-------------------

Hardware: Components
....................

#. `Raspberry Pi 4B (8GB) <https://raspberrypi.org/products/raspberry-pi-4-model-b/?variant=raspberry-pi-4-model-b-8gb>`_
#. `Power supply for Raspberry Pi 4B <https://raspberrypi.org/products/type-c-power-supply/>`_ Make sure this is at minimum 15w and 3.5a.
#. Case for Raspberry Pi 4B (`passive cooling recommended <https://www.amazon.com/Geekworm-Raspberry-Aluminum-Passive-Heatsink/dp/B07Z6FYHCH/>`_ `*`)
#. A `16GB microSD card <https://amazon.com/SanDisk-Endurance-microSDXC-Adapter-Monitoring/dp/B07NY23WBG/>`_ (no need for bigger). If you have ABSOLUTELY NO data to migrate, you may choose to re-use the card already in your Embassy.
#. `GPIO mini speaker/buzzer <https://www.amazon.com/Corporate-Computer-Motherboard-Internal-Speaker/dp/B01527H4W2/>`_ (These often sell out, please let us know if this link needs to be refreshed)
#. Ethernet cable
#. MicroSD → USB adapter (or you may have a microSD port on your computer)
#. An external drive (1TB minimum, 2TB SSD recommended), or an `internal drive <https://www.amazon.com/Crucial-MX500-NAND-SATA-Internal/dp/B078211KBB>`_ with an `USB enclosure <https://www.amazon.com/gp/product/B07T9D8F6C>`_, as sold with our upgrade kits. MUST CONNECT OVER USB 3.0

`*` If you use a fan, **DO NOT** use the official Raspberry Pi fan, as it requires the same GPIO pins as the audio speaker. Instead, we recommend `this fan <https://www.amazon.com/Raspberry-iUniker-30x30x7mm-Brushless-RetroFlag/dp/B076H3TKBP/>`_.

Hardware: Assembly Instructions
...............................

#. Insert mini speaker/buzzer into GPIO pins 6/8/10/12 with the word "speaker" facing out, `away from the board`.

   .. figure:: /_static/images/diy/pins.png
    :width: 60%
    :alt: Speaker board spec

#. Place the Raspberry Pi 4 board (with speaker attached), into its case.
#. Plug in the external drive to one of the USB 3.0 (blue) slots

Getting EmbassyOS
-----------------

Getting EmbassyOS: Purchasing
.............................

You can purchase EmbassyOS `here <https://store.start9.com/collections/embassy/products/embassyos-software-download>`_. This is by far the easiest path to get up and running.

Depending on your Internet speed, the download should take between 5 and 30 minutes.

Getting EmbassyOS: Building from Source
.......................................

***Placehodler for build guide - https://github.com/Start9Labs/embassy-os/tree/integration/0.3.0/build***

Installing EmbassyOS
--------------------

Whether you purchase EmbassyOS from us or build it yourself, you need to flash it onto a microSD card.

#. Download `balenaEtcher <https://www.balena.io/etcher/>`_ onto your Mac, Windows, or Linux computer.
#. Insert the microSD card into your computer, either directly or using an adapter.
#. Open balenaEtcher.
#. Click `Select Image`, then find and select your copy of EmbassyOS.
#. Click `Select Target`, then find and select your micro SD card.
#. Click `Flash!` You may be asked to (1) approve the unusually large disk target or (2) enter your password. Both are normal.

   .. figure:: /_static/images/diy/balena.png
    :width: 60%
    :alt: Balena Etcher Dashboard

#. Once the image is flashed and verified, you may remove the micro SD, insert it into your Embassy, and power up the device.
#. The Embassy is now ready for use, and you may following the normal :ref:`setup <initial-setup>` instructions. ``*``

``*`` The first time you power it on, your Embassy will make more noises than future attempts, and it may take several minutes to finally complete.
