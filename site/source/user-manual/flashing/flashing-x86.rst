.. _flashing-x86:

=================
Flashing (x86_64)
=================
This guide is for flashing StartOS to a USB drive in order to install it to an x86_64 architecture device.  This will include most desktops, laptops, mini PCs, and servers.  For an up-to-date list of known-good hardware, please check out this `forum post <https://community.start9.com/t/known-good-hardware-master-list-hardware-capable-of-running-embassyos-v0-3-3/66>`_.

 .. note:: You will need a USB drive of at least 8GB in size

Getting StartOS
---------------
Visit the `Github release page <https://github.com/Start9Labs/start-os/releases/latest>`_ to find the latest StartOS release.

At the bottom of the page, under "Assets," download the ``x86_64.iso`` or ``x86_64-nonfree.iso`` file.  The former image contains no proprietary software (built for the Server Pure).  As the title implies, the latter, ``nonfree`` image, contains non-free software.  This may be required for your hardware, especially for Kiosk mode or WiFi.

    .. figure:: /_static/images/flashing/x86_64-asset.png
        :width: 60%

(OPTIONAL) Select your OS to verify the image (be sure to use the correct file name):

.. tabs::

    .. group-tab:: Linux

        Verify the checksum against the one listed on GitHub by opening a terminal in the folder you downloaded the image to and running:
        
            (SHA256):
        
            .. code-block::
            
                sha256sum startos-0.3.4.2-bbd66e9-20230519_x86_64.iso

            or (BLAKE3):

            .. code-block::
            
                b3sum startos-0.3.4.2-bbd66e9-20230519_x86_64.iso
        
    .. group-tab:: Mac
            
        Verify the checksum against the one listed on GitHub by opening a terminal in the folder you downloaded the image to and running:

            .. code-block::

                openssl dgst -sha256 startos-0.3.4.2-bbd66e9-20230519_x86_64.iso

    .. group-tab:: Windows
            
        Verify the checksum against the one listed on GitHub by opening a ``cmd`` prompt "As Administrator" in the folder you saved the image to and running:

            .. code-block::

                Get-FileHash startos-0.3.4.2-bbd66e9-20230519_x86_64.iso

Installing StartOS
------------------
Once you have the StartOS image, you will need to flash it onto your USB drive.

#. Download `balenaEtcher <https://www.balena.io/etcher/>`_ onto your Linux, Mac, or Windows computer.

#. Insert your USB drive into your computer.

#. Open balenaEtcher.

    .. figure:: /_static/images/diy/balena.png
      :width: 60%
      :alt: Balena Etcher Dashboard

#. Click "Select Image" and select the ``.iso`` file you just downloaded.

#. Click "Select Target" and select your USB drive, checking the size to make sure it's the correct drive.

    .. warning:: BE ABSOLUTELY CERTAIN you have selected the correct target flash drive. Whatever target you select will be **COMPLETELY ERASED**!!

#. Click "Flash!". You may be asked to approve the unusually large disk target and/or enter your password. Both are normal.

#. After this completes, you may remove the newly flashed drive from your computer, insert it into the device you intend to install StartOS onto.

    .. note:: Always perfer the fastest available USB 3.0+ port - typically this is blue or labeled "SS" (SuperSpeed)

    .. tip:: Occasionally, you may need to make some changes in your BIOS, such as turning off Secure Boot, or allowing USB boot for install.  See the `Community Hub <https://community.start9.com>`_ for guides or to get help.

#. Finally, continue to the :ref:`Initial Setup <initial-setup>`, :ref:`Manual Update <manual-update>`, or :ref:`Reset Password <reset-password>` instructions - depending on your need.
