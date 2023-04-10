.. _flashing-x86:

==============
Flashing (x86)
==============
This guide is for flashing StartOS to a USB drive in order to install it to an x86 architecture device.  This will include most desktops, laptops, mini PCs, and servers.  For an up-to-date list of known-good hardware, please check out this `forum post <https://community.start9.com/t/known-good-hardware-master-list-hardware-capable-of-running-embassyOS-v0-3-3/66/2>`_.

 .. note:: You will need a USB drive of at least 16GB in size

Getting StartOS
---------------
#. Visit the `Github release page <https://github.com/Start9Labs/embassy-os/releases/latest>`_ to find the latest StartOS release.

#. Select ``embassyOS_amd64.iso`` from the "Assets" section at the bottom of the release.

    .. figure:: /_static/images/flashing/amd64-asset.png
        :width: 60%

Installing StartOS
--------------------
Once you have the StartOS image, you will need to flash it onto your USB drive.

#. Download `balenaEtcher <https://www.balena.io/etcher/>`_ onto your Linux, Mac, or Windows computer.

#. Insert the USB drive into your computer.

#. Open balenaEtcher.

    .. figure:: /_static/images/diy/balena.png
      :width: 60%
      :alt: Balena Etcher Dashboard

#. Click "Select Image" and select the ``embassyOS_amd64.iso`` file you just downloaded.

#. Click "Select Target" and select your USB drive, checking the size to make sure it's the correct drive.

    .. warning:: BE ABSOLUTELY CERTAIN you have selected the correct target flash drive. Whatever target you select will be **COMPLETELY ERASED**!!

#. Click "Flash!". You may be asked to (1) approve the unusually large disk target or (2) enter your password. Both are normal.

#. After this completes, you may remove the newly flashed drive from your computer, insert it into the device you intend to install StartOS onto.  You will need to allow/prioritize "Legacy boot" from your BIOS.  Look up your device or motherboard online for how to access the BIOS and make the change. This is *not* necessary when flashing the Embassy Pro.

    .. note:: Always perfer the fastest available USB 3.0 port - typically this is blue or labeled "SS" (SuperSpeed)

#. Finally, continue to the :ref:`Initial Setup <initial-setup>`, :ref:`Manual Update <manual-update>`, or :ref:`Reset Password <reset-password>` instructions - depending on your need.
