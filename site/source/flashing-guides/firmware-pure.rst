.. _flashing-firmware-pure:

======================
Firmware (Server Pure)
======================
This page is for Server Pure / Purism Librem Mini users ONLY.  This firmware is custom for these devices.

Generally, you do not need to manually flash your device using this guide, as the firmware is now automatically updated on supported devices.  Please only use this method if directed by a Start9 Support Technician.

Downloading the right firmware
------------------------------

The source code can be viewed on Purism's `firmware git repo <https://source.puri.sm/firmware/releases/-/tree/master/librem_mini_v2/custom>`_.  You will need a USB flash drive, formatted FAT32, to flash the firmware to your server.



.. tabs::

    .. group-tab:: Server Pure 2024
        
        Download the latest firmware from Purism's git repository: `Standard release <https://source.puri.sm/firmware/releases/-/blob/75631ad6dcf7e6ee73e06a517ac7dc4e017518b7/librem_mini_v2/custom/pureboot-librem_mini_v2-basic_usb_autoboot-Release-29.zip>`_.
        
    .. group-tab:: Server Pure (2023 and before)
        
        This model of the Server Pure (formally Embassy Pro) supports WiFi. You may choose between firmware that allows for WiFi and firmware that disables and locks it down.

        Download the latest firmware from Purism's git repository:
        `Standard release <https://source.puri.sm/firmware/releases/-/blob/75631ad6dcf7e6ee73e06a517ac7dc4e017518b7/librem_mini_v2/custom/pureboot-librem_mini_v2-basic_usb_autoboot-Release-29.zip>`_
        or `Jailed WiFi <https://source.puri.sm/firmware/releases/-/blob/75631ad6dcf7e6ee73e06a517ac7dc4e017518b7/librem_mini_v2/custom/pureboot-librem_mini_v2-basic_usb_autoboot_blob_jail-Release-29.zip>`_.


Flashing the firmware
---------------------

#. Copy or move the zip of the firmware file onto your USB drive formatted to FAT32, then eject the drive and insert it into your (powered down) server.  USB 3.0 (blue ports) will be faster.

    .. note:: You'll need a monitor and keyboard plugged into your server for this operation
    .. caution:: USB drive **must** be formatted with the FAT32 filesystem

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

#. Choose the file that we downloaded and copied to the USB stick earlier: ``pureboot-librem_mini_v2-basic_usb_autoboot-Release-29.zip``

    .. figure:: /_static/images/flashing/flash_firmware-pro-step5-select_your_file.jpg
        :width: 30%

#. Confirm you want to proceed with the flash by selecting "Yes"

    .. figure:: /_static/images/flashing/flash_firmware-pro-step6-proceed_yes.jpg
        :width: 30%

#. The BIOS will be reflashed with the new firmware.  This may take a few minutes.  When complete, remove the firmware USB, then select "OK" to complete the process.

    .. figure:: /_static/images/flashing/flash_firmware-pro-step7-flashed_successfully.jpg
        :width: 30%