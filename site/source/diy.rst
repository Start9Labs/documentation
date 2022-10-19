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

Start9 is committed to ensuring that embassyOS is accessible.  It will always be possible to build a comprable device to those sold in the Start9 Store.  You can use the following guide to build your own Embassy One with readily available hardware.  If any links are broken or sold out, please :ref:`let us know<contact>`.

Motivation
----------
There are several reasons you might prefer to build your own Embassy instead of purchasing one from us:

  #. You already own the necessary hardware and would like to re-purpose it.
  #. You want to save on shipping or import costs to your location.
  #. You do not trust Start9's supply chain.
  #. You do not want to share your shipping address.
  #. You like building things.

Hardware
--------
The first thing you'll need to do is gather the hardware and assemble it.

Parts
=====
#. `Geekworm NASPi v2.0 <https://geekworm.com/products/geekworm-naspi-2-5-sata-hdd-ssd-kit-for-raspberry-pi-4-model-b?_pos=2&_sid=06be31b61&_ss=r&variant=39426059731032>`_ ~$60 USD

    - It is important to get the 2.0 version as it has the ability to power back on automatically following a power outage.
    - MAKE SURE YOU GET THE CORRECT POWER SUPPLY FOR YOUR REGION

#. `Raspberry Pi 4 (8GB RAM model) <https://www.amazon.com/LANDZO-Raspberry-Pi-Model-8gb/dp/B08R87H4RR/>`_ ~$75-200 USD

    - These have more than doubled in price in 2022. You may want to shop around, or buy used if need be.

#. `Internal SSD (1TB minimum) <https://www.amazon.com/Crucial-MX500-NAND-SATA-Internal/dp/B078211KBB>`_ ~$80 USD+

    - 1TB minimum is recommended, however this all depends on your use-case.
    - 1TB is plenty for a full Bitcoin/Lightning stack OR a good amount of file storage, but not both if you want your device to be useful for years to come. 2TB or more is recommended if it is in your budget.  You can always upgrade this later, and storage keeps getting cheaper.

#. `SD Card (32GB) <https://www.amazon.com/dp/B07P14QHB7>`_ ~$10 USD

    - A larger size is not necessary as it adds no benefit.

#. `Ethernet Cable (Cat5 or Cat6) <https://www.amazon.com/Monoprice-Flexboot-Ethernet-Patch-Cable/dp/B00AJHBZLM/>`_ ~$2 USD

    - You may have one laying around. Keep in mind the length you will require, e.g., how far away will your Embassy be from your router? 3-6ft is normally plenty.

#. `Speaker <https://www.amazon.com/Corporate-Computer-Motherboard-Internal-Speaker/dp/B01527H4W2/>`_ ~$5 USD

    - Not strictly required, but HIGHLY recommended.

#. `2-Pin Male-to-Male Power Wire <https://geekworm.com/products/usb3-0-connector?variant=33744636674136>`_ ~$5 USD

    - Required if using a speaker or Noctua fan.

#. (Optional) `Noctua NF-A4x10 5v Fan (Get all below) <https://www.amazon.com/Noctua-Cooling-Bearing-NF-A4X10-FLX-5V/dp/B00NEMGCIA/>`_ ~$15 USD

    - Recommended over the less-than-great Geekworm factory fan.
    - None of the included screws are long enough, so you will need 2 screws (M3-.50x12), available online or at any hardware store for <$1 USD.
    - 2x Male-to-Female jumper wires - unfortunately these only come in high quantities, so you may want to organize a group buy. ~$9

#. (Optional) MicroSD to USB adapter

    - For flashing the OS. Not necessary if you have a way to mount an SD card already, such as an SD card slot on a laptop.

Estimated total cost:

    - ~$375-460+ with 1-2TB of storage

Assembly
========
You can follow along with this `written guide <https://start9dave.substack.com/p/embassy-one-diy-guide>`_ and/or our assembly video below:

  .. youtube:: Z1EW1TVgtow
    :width: 100%


Getting EmbassyOS
-----------------
After building your device, you need a copy of EmbassyOS.

    - Download the latest release of EmbassyOS from `our github <https://github.com/start9labs/embassy-os/releases/latest>`_, scroll to the Assets section, and download eos.tar.gz.
    - This will soon be available as a more convenient download from our website.

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
#. Click "Select Target" and select your 32GB microSD card.

    .. warning:: Be certain you have selected the correct target microSD card. Whatever target you select will be completely erased and replaced with EmbassyOS.

#. Click "Flash!". You may be asked to (1) approve the unusually large disk target or (2) enter your password. Both are normal.
#. After the flash completes, you may remove the micro SD from the adapter, insert it into your Embassy's SD card slot, and continue to the :ref:`Initial Setup <initial-setup>` instructions.

Upgrading from an External Drive Setup
--------------------------------------
If you already have an Embassy with an external drive, you can follow along from the `written guide appendix <https://start9dave.substack.com/i/68242394/appendix-transfer-embassy-from-existing-case>`_ and/or check out the video below:

  .. youtube:: 355BENA42s8
    :width: 100%