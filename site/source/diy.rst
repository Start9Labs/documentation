.. _diy:

=========
DIY Guide
=========

.. contents::
  :depth: 2 
  :local:

.. figure:: /_static/images/diy/pi.png
  :width: 40%
  :alt: Raspberry Pi

  Raspberry Pi Board

By popular demand, we are pleased to present this "Do it Yourself" (DIY) guide for the Start9 Embassy personal server!

Motivation
----------

There are several reasons you might prefer to build your own Embassy instead of purchasing one from us:

  #. You already own the necessary hardware and would like to re-purpose it.
  #. You live outside the US and want to save on shipping costs.
  #. You do not trust Start9's supply chain.
  #. You do not want to share your shipping address.
  #. You just like building things.

Hardware
--------

The first thing you'll need to do is gather the hardware and assemble it.

Parts
.....

* `Raspberry Pi 4B (8GB) <https://raspberrypi.org/products/raspberry-pi-4-model-b/?variant=raspberry-pi-4-model-b-8gb>`_
* `Power supply for Raspberry Pi 4B <https://raspberrypi.org/products/type-c-power-supply/>`_ Make sure this is at minimum 15w and 3.5a.
* Case for Raspberry Pi 4B (`passive cooling <https://www.amazon.com/Geekworm-Raspberry-Aluminum-Passive-Heatsink/dp/B07Z6FYHCH/>`_ is recommended).  This means no moving parts and no noise.

    .. warning:: If you prefer to use a fan, **do not** use the official Raspberry Pi fan, as it requires the same GPIO pins as the audio speaker. Instead, we recommend `this fan <https://www.amazon.com/Raspberry-iUniker-30x30x7mm-Brushless-RetroFlag/dp/B076H3TKBP/>`_.

* A `16GB microSD card <https://amazon.com/SanDisk-Endurance-microSDXC-Adapter-Monitoring/dp/B07NY23WBG/>`_ (no need for bigger).
* `GPIO mini speaker/buzzer <https://www.amazon.com/Corporate-Computer-Motherboard-Internal-Speaker/dp/B01527H4W2/>`_ (These often sell out, please let us know if this link needs to be refreshed)
* Ethernet cable
* MicroSD to USB adapter (or you may have a microSD port on your computer)
* SSD (minimum 1TB) that `connects over USB 3.0` This can be an `external drive <https://www.samsung.com/us/computing/memory-storage/portable-solid-state-drives/>`_, or an `internal drive <https://www.amazon.com/Crucial-MX500-NAND-SATA-Internal/dp/B078211KBB>`_ with an `USB enclosure <https://www.amazon.com/gp/product/B07T9D8F6C>`_. Currently the only tested and supported external drives are the Samsung T5 and T7

Assembly
........

#. Insert mini speaker/buzzer into GPIO pins 6/8/10/12 with the word "speaker" facing out, `away from the board`.

    .. figure:: /_static/images/diy/pins.png
      :width: 60%
      :alt: Speaker board spec

#. Place the Raspberry Pi 4 board (with speaker attached), into its case.
#. Plug in the external drive to one of the USB 3.0 (blue) slots

Getting EmbassyOS
-----------------

After building your device, you need a copy of EmbassyOS.

* **Purchasing from Start9** - You can purchase a copy of EmbassyOS `here <https://store.start9.com/collections/embassy/products/embassyos-software-download>`_. This is by far the easiest path to get up and running.

* **Building from Source** - If you prefer to build EmbassyOS from source, Following `this guide <https://github.com/Start9Labs/embassy-os/tree/master/build>`_.

Installing EmbassyOS
--------------------

Whether you purchase EmbassyOS from us or build it yourself, you'll need to flash it onto a microSD card.

#. Download `balenaEtcher <https://www.balena.io/etcher/>`_ onto your Mac, Windows, or Linux computer.
#. Insert the microSD card into your computer, either directly or using an adapter.
#. Open balenaEtcher.

    .. figure:: /_static/images/diy/balena.png
      :width: 60%
      :alt: Balena Etcher Dashboard

#. Click "Select Image" and select your downloaded copy of EmbassyOS.
#. Click "Select Target" and select your 16GB microSD card.

    .. warning:: Be certain you have selected the correct target microSD card. Whatever target you select will be completely erased and replaced with EmbassyOS.

#. Click "Flash!". You may be asked to (1) approve the unusually large disk target or (2) enter your password. Both are normal.
#. After the flash completes, you may remove the micro SD from the adapter, insert it into your Embassy's SD card slot, and continue to the :ref:`Initial Setup <initial-setup>` instructions.
