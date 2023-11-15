.. _flashing-firmware-pure:

======================
Firmware (Server Pure)
======================
This page is for Server Pure / Purism Librem Mini users ONLY.  This firmware is custom for these devices.

If you're about to install StartOS, you do not need to manually flash your device using this guide, as the latest firmware that was available when StartOS was most recently released is embedded in the ``startos-...x86_64.iso`` file and will automatically be flashed when you install StartOS, if the appropriate underlying hardware is detected.  In that case, simply follow the :ref:`x86_64 StartOS flashing guide<os-x86>` and the latest firmware will be automatically flashed upon install.

The source code can be viewed on Purism's `firmware git repo <https://source.puri.sm/firmware/releases/-/tree/master/librem_mini_v2/custom>`_.  You will need a USB flash drive, formatted FAT32, to flash the firmware to your server.

    .. caution:: USB drive **must** be formatted FAT32

#. `Download the latest firmware from Purism's git repository <https://source.puri.sm/firmware/releases/-/raw/master/librem_mini_v2/custom/pureboot-librem_mini_v2-basic_usb_autoboot_blob_jail-Release-28.3.rom.gz>`_ and extract it.
    
#. Copy or move the resulting ``pureboot-librem_mini_v2-basic_usb_autoboot_blob_jail-Release-28.3.rom`` file onto your USB drive, then eject the drive and insert it into your (powered down) server.  USB 3.0 (blue ports) will be faster.

    .. note:: You'll need a monitor and keyboard plugged into your server for this operation

#. Turn on the server while pressing the ``ESC`` key on the keyboard repeatedly until you see the PureBoot Basic Boot Menu screen.  Select "Options -->"

    .. figure:: /_static/images/flashing/flash_firmware-pro-step1-pureboot_basic_boot_menu-options.jpg
        :width: 30%

#. Select "Flash/Update the BIOS"

    .. figure:: /_static/images/flashing/flash_firmware-pro-step2-flash_update_the_bios.jpg
        :width: 30%

#. Select "Flash the firmware with a new ROM, erase settings"

    .. figure:: /_static/images/flashing/flash_firmware-pro-step3-flash_firmware_with_new_rom.jpg
        :width: 30%

#. The system will ask if you want to proceed flashing the BIOS with a new ROM, select "Yes"

    .. figure:: /_static/images/flashing/flash_firmware-pro-step4-proceed_yes.jpg
        :width: 30%

#. Choose the file that we downloaded and copied to the USB stick earlier: ``pureboot-librem_mini_v2-basic_usb_autoboot_blob_jail-Release-28.3.rom``

    .. figure:: /_static/images/flashing/flash_firmware-pro-step5-select_your_file.jpg
        :width: 30%

#. Confirm you want to proceed with the flash by selecting "Yes"

    .. figure:: /_static/images/flashing/flash_firmware-pro-step6-proceed_yes.jpg
        :width: 30%

#. The BIOS will be reflashed with the new firmware.  This may take a few minutes.  When complete, remove the firmware USB, then select "OK" to complete the process.

    .. figure:: /_static/images/flashing/flash_firmware-pro-step7-flashed_successfully.jpg
        :width: 30%