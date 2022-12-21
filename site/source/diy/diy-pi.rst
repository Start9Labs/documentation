.. _diy-pi:

========================
DIY Guide (Raspberry Pi)
========================

.. contents::
    :depth: 2 
    :local:

Start9 is committed to ensuring that embassyOS is accessible.  It will always be possible to build your own Embassy similar to the ones we sell.  This guide is to build a device exactly like Start9's Embassy One, available for purchase on the `Start9 Store <https://store.start9.com/products/embassy-one>`_.

For help with this guide or to share your experience with others, please `head to our community forum <https://community.start9.com/>`_.  Want to support Sovereign Computing?  Please consider a `donation to Start9 <https://btcpay.start9.com/apps/2Et1JUmJnDwzKncfVBXvspeXiFsa/crowdfund>`_.

    .. figure:: /_static/images/diy/pi.png
        :width: 40%
        :alt: Raspberry Pi

Hardware
--------
The first thing you'll need to do is gather the hardware and assemble it.  Below is the "official" hardware spec.  For an alternate build option, see this `Geekworm NAS Case guide <https://community.start9.com/t/diy-embassy-using-geekworm-nas-case-w-optional-ups>`_.

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

    .. note:: Estimated total cost: ~$375-460+ with 1-2TB of storage

Assembly
========
You can follow along with this `written guide <https://community.start9.com/t/diy-embassy-one-geekworm-naspi-case>`_ and/or our assembly video below:

    .. youtube:: Z1EW1TVgtow
        :width: 100%

.. raw:: html

    <div style="margin-bottom: 48px;">

Flash and Install embassyOS
---------------------------
After building your hardware build, you will need a copy of embassyOS.  Head over to our :ref:`Flashing (Raspberry Pi) Guide <flashing-pi>` to complete your Embassy One build.
