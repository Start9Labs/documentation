.. _flashing-firmware:

===================
Flashing (Firmware)
===================
This page is for existing Librem Mini owners ONLY.  This will allow you to flash the custom firmware on your Librem to neutralize the Intel Management Engine (IME) and add embassyOS-specific tweaks to your system, such that it will operate just as an Embassy Pro bought from Start9 would.  If you need hardware and want all the benefits listed here, you'll have to `buy an Embassy Pro <https://store.start9.com/products/embassy-pro>`_.

The source code can be viewed on Purism's `firmware git repo <https://source.puri.sm/firmware/pureboot/-/tree/start9-intel-wifi>`_.

.. note:: USB drive *must* be formatted for FAT32

#. Download the firmware (``pureboot-librem_mini_v2-basic_usb_autoboot.rom.gz``) from `Purism's git repository <https://source.puri.sm/firmware/releases/-/tree/master/librem_mini_v2/custom>`_ and extract it.

#. Copy or move the resulting ``pureboot-librem_mini_v2-basic_usb_autoboot.rom`` file onto your USB drive, then eject the drive and insert it into your (powered down) Librem Mini.  USB 3.0 (blue ports) are faster.

    .. note:: You'll need a monitor and keyboard plugged into your Librem Mini for this operation

#. Turn on the Librem Mini while pressing the ``ESC`` key on the keyboard repeatedly, until you see the PureBoot Basic Boot Menu appear.

#. Select "Options -->"

    .. figure:: /_static/images/flashing/flash_firmware-pro-step1-pureboot_basic_boot_menu-options.jpg
        :width: 30%

#. Select "Flash/Update the BIOS"

    .. figure:: /_static/images/flashing/flash_firmware-pro-step2-flash_update_the_bios.jpg
        :width: 30%

#. Select "Flash the firmware with a new ROM, erase settings"

    .. figure:: /_static/images/flashing/flash_firmware-pro-step3-flash_firmware_with_new_rom.jpg
        :width: 30%

#. The system will ask if you want to proceed to flash the BIOS with a new ROM, select "Yes"

    .. figure:: /_static/images/flashing/flash_firmware-pro-step4-proceed_yes.jpg
        :width: 30%

#. Choose the file that we downloaded and copied to the USB stick earlier: ``pureboot-librem_mini_v2-basic_usb_autoboot.rom``

    .. figure:: /_static/images/flashing/flash_firmware-pro-step5-select_your_file.jpg
        :width: 30%

#. Confirm you want to proceed with the flash by selecting "Yes"

    .. figure:: /_static/images/flashing/flash_firmware-pro-step6-proceed_yes.jpg
        :width: 30%

#. The BIOS will be reflashed with the custom firmware.  This may take a few minutes.  When complete, remove the firmware USB (and insert your embassyOS USB if you are ready to install), then select "OK" to complete the process.

    .. figure:: /_static/images/flashing/flash_firmware-pro-step7-flashed_successfully.jpg
        :width: 30%