.. _diy:

*********
DIY Guide
*********

.. figure:: /_static/images/diy/pi.png
  :width: 40%
  :alt: Raspberry Pi

  Raspberry Pi Board

By popular demand, we are pleased to present this "Do it Yourself" (DIY) guide for the Start9 Embassy personal server!

.. warning:: This DIY guide is for EmbassyOS version 0.2.13. A substantive change will be made to this guide for EmbassyOS v0.3.0 scheduled for release in Q3 2021.  When 0.3.0 launches it will REQUIRE hardware updates, which you can find `here <https://start9.com/eos-0.3.0>`_.



Motivation
==========

There are four reasons you might prefer to build your own Embassy instead of purchasing one from us.

#. You already own the necessary hardware and would like to re-purpose it.

#. You live outside the US and want to save on shipping costs.

#. You do not trust Start9's supply chain.

#. You do not want to share your shipping address.

#. You just like building things.

Hardware
========

Components (EmbassyOS versions 0.2.x)
-------------------------------------

.. note:: For newer versions of EmbassyOS (0.3.0 and above), please see the new hardware requirements `here <https://start9.com/eos-0.3.0>`_.  These pieces are *in addition* to the hardware below.

#. `Raspberry Pi 4B (8GB) <https://raspberrypi.org/products/raspberry-pi-4-model-b/?variant=raspberry-pi-4-model-b-8gb>`_
#. `Power supply for Raspberry Pi 4B <https://raspberrypi.org/products/type-c-power-supply/>`_
#. Case for Raspberry Pi 4B (`passive cooling recommended <https://www.amazon.com/Geekworm-Raspberry-Aluminum-Passive-Heatsink/dp/B07Z6FYHCH/>`_ `*`)
#. `High endurance microSD <https://amazon.com/SanDisk-Endurance-microSDXC-Adapter-Monitoring/dp/B07NY23WBG/>`_ (recommended 128GB or more)
#. `GPIO mini speaker/buzzer <https://amazon.com/dp/B07F8NXHGP/>`_
#. Ethernet cable
#. MicroSD → USB adapter (if no microSD port on your computer)

`*` If you use a fan, **DO NOT** use the official Raspberry Pi fan, as it requires the same GPIO pins as the audio speaker. Instead, we recommend `this fan <https://www.amazon.com/Raspberry-iUniker-30x30x7mm-Brushless-RetroFlag/dp/B076H3TKBP/>`_.

Assembly Instructions
---------------------

#. Insert mini speaker/buzzer into GPIO pins 6/8/10/12 with the word "speaker" facing out, `away from the board`.

   .. figure:: /_static/images/diy/pins.png
    :width: 60%
    :alt: Speaker board spec

That's it. Place the Raspberry Pi 4 board (with speaker attached), into its case.

Getting EmbassyOS
=================

Purchasing
----------

You can purchase EmbassyOS `here <https://store.start9.com/collections/embassy/products/embassyos-software-download>`_. This is by far the easiest path to get up and running.

Depending on your Internet speed, the download should take between 5 and 30 minutes.

Building from Source
--------------------

If you have the proper tooling and are comfortable using the command line, you can build EmbassyOS from `source <https://github.com/Start9Labs/embassy-os>`_, which is made available under the `Start9 Personal Use License <https://start9.com/license>`_.

Thanks to our community members who have kindly put together these guides!

* A comprehensive and user friendly guide by `Bitcoin Mechanic <https://medium.com/@lex10/building-my-wife-an-embassy-from-scratch-19cb87193fb2>`_
* A technically focused guide by `t0mmysm1th <https://github.com/t0mmysm1th/embassy-os/blob/master/BuildGuide.md>`_

Installing EmbassyOS
====================

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

#. Once the image is flashed and verified, you may remove the micro SD and insert it into your Embassy.
#. The Embassy is now ready for use, and you may following the normal :ref:`setup <initial-setup>` instructions. ``*``

``*`` The first time you power it on, your Embassy will make more noises than future attempts, and it may take several minutes to finally complete.
