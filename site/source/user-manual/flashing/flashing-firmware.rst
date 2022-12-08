.. _flashing-firmware:

===================
Flashing (Firmware)
===================
This page is for existing Librem Mini owners ONLY.  This will allow you to flash the custom firmware on your Librem to neutralize the Intel Management Engine (IME) and add embassyOS-specific tweaks to your system, such that it will operate just as an Embassy Pro bought from Start9 would.  If you need hardware and want all the benefits listed here, you'll have to `buy an Embassy Pro <https://store.start9.com>`_.

The source code can be viewed on Purism's `firmware git repo <https://source.puri.sm/firmware/pureboot/-/tree/start9-intel-wifi>`_.

.. note:: You will need a USB drive

#. Download the firmware from `Purism's git repository <https://source.puri.sm/firmware/releases/-/tree/master/librem_mini_v2/custom>`_.  It does not need to be extracted.

    * ``pureboot-librem_mini_v2-basic_usb_autoboot.rom.gz``

#. Copy or move the file onto your USB drive, then eject the drive and insert it into your (powered down) Librem Mini.  USB 3.0 (blue ports) are faster.

    .. note:: You'll need a monitor and keyboard plugged into your Librem Mini for this operation

#. Turn on the Librem Mini while pressing the ``ESC`` key on the keyboard repeatedly, until you see the PureBoot Bassic Boot Menu appear.

#. Select "Options -->."

#. Select "Flash/Update the BIOS".

#. Select "Flash the firmware with a new ROM, erase settings."

#. The system will ask if you want to proceed to flash the BIOS, select "Yes."

#. Choose the file that we downloaded earlier: ``pureboot-librem_mini_v2-basic_usb_autoboot.rom.gz``.

#. Confirm you want to proceed by selecting "Yes."

#. The BIOS will be reflashed with the custom firmware.  This may take a few minutes.  When complete, remove the firmware USB (and insert your embassyOS USB if you are ready to install), then select "OK" to complete the process.
