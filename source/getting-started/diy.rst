.. _diy:

***
DIY
***

.. figure:: /_static/images/diy/pi.png
  :width: 90%
  :alt: Raspberry Pi

  Raspberry Pi Board

By popular demand, we are pleased to present this "Do it Yourself" (DIY) guide for the Start9 Embassy personal server!

Motivation
==========

There are four reasons you might prefer to build your own Embassy instead of purchasing one from us.

#. You already have a Raspberry Pi and would like to re-purpose it

#. You live outside the United States and want to save on shipping/duties fees

#. You prefer not to divulge your physical shipping address

#. You just like building things.

Hardware
========

Components
----------
#. `Raspberry Pi 4B (4GB) <https://www.raspberrypi.org/products/raspberry-pi-4-model-b/?variant=raspberry-pi-4-model-b-4gb>`_
#. `Power supply for Raspberry Pi 4B <https://www.raspberrypi.org/products/type-c-power-supply/F>`_
#. Case for Raspberry Pi 4B (plenty on Amazon)
#. High endurance microSD card (recommended 128GB or more)
#. `GPIO mini speaker/buzzer <https://www.amazon.com/dp/B07F8NXHGP/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B07F8NXHGP&pd_rd_w=TTBRH&pf_rd_p=7d37a48b-2b1a-4373-8c1a-bdcc5da66be9&pd_rd_wg=56LGK&pf_rd_r=ZZDK9N77R3ZJATC9ED7J&pd_rd_r=ff5067b4-2a86-4302-b9ac-1d2576dd78ba&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExOEYyOVhBUkRaT0xSJmVuY3J5cHRlZElkPUEwMjc5NjgxM1g1WDdLOFRUR0tDJmVuY3J5cHRlZEFkSWQ9QTA0Njk1MTIzQldOTjZaWVFLRklXJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==D>`_
#. Ethernet cable
#. MicroSD → USB adapter (if no microSD port on your computer)

Assembly Instructions
---------------------

#. Insert mini speaker/buzzer into GPIO pins 6/8/10/12 with the word "speaker" facing out, `away from the board`.

.. figure:: /_static/images/diy/pins.png
  :width: 90%
  :alt: Speaker board spec

#. That's it. Place the Raspberry Pi 4 board (with speaker attached), into its case.

Getting EmbassyOS
=================

Purchasing
----------

You can purchase EmbassyOS `here <https://images.start9labs.com/order>`_. This is by far the easiest path to get up and running.

Depending on your Internet speed, the download should take between 5 and 30 minutes.

Building from Source
--------------------

If you have the proper tooling and are comfortable using the command line, you can build EmbassyOS from `source <https://github.com/Start9Labs/embassy-os>`_, which is made available under the `Start9 Personal Use License <https://start9labs.com/license>`_.

Installing EmbassyOS
--------------------

Whether you purchase EmbassyOS from us or build it yourself, you need to flash it onto a microSD card.

1. Download `balenaEtcher <https://www.balena.io/etcher/>`_ onto your Mac, Windows, or Linux computer.
2. Insert the microSD card into your computer, either directly or using an adapter.
3. Open balenaEtcher.
4. Click `Select Image`, then find and select your copy of EmbassyOS.
5. Click `Select Target`, then find and select your micro SD card.
6. Click `Flash!` You may be asked to (1) approve the unusually large disk target or (2) enter your password. Both are normal.

.. figure:: /_static/images/diy/balena.png
  :width: 90%
  :alt: Balena Etcher Dashboard

7. Once the image is flashed and verified, you may remove the micro SD and insert it into your Embassy.
8. The Embassy is now ready for use, and you may following the normal :ref:`setup <initial-setup>` instructions. *

``*`` The first time you power it on, your Embassy will make more noises than future attempts, and it may take several minutes to finally complete.