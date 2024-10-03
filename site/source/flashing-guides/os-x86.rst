.. _flashing-os-x86:

=============
StartOS (x86)
=============
This guide is for flashing StartOS to a USB drive in order to install it to an x86_64 architecture device.  This will include most desktops, laptops, mini PCs, and servers.  For an up-to-date list of known-good hardware, please check out this `forum post <https://community.start9.com/t/known-good-hardware-master-list-hardware-capable-of-running-startos/>`_.

 .. note:: You will need a USB drive of at least 8GB in size

Getting StartOS
---------------
Visit the `Github release page <https://github.com/Start9Labs/start-os/releases/latest>`_ to find the latest StartOS release.

At the bottom of the page, under "Assets," download the ``x86_64.iso`` or ``x86_64-nonfree.iso`` file.

-------------------------
Server Pure (*x86_64.iso*)
-------------------------

The ``x86_64.iso`` image contains no proprietary software and is built especially for the Server Pure.

-------------------------------
Server One (*x86_64-nonfree.iso*)
-------------------------------

The ``x86_64-nonfree.iso`` image contains non-free (closed-source) software. This is needed for the Server One and most DIY hardware, especially for graphics and/or network device support. 

*For a DIY virtual machine build, if using a x86 chip, you'd use the non-free image if the free version does not work for you, but for an Apple Silicon chip you would use* ``aarch64.iso`` *and follow* `this guide <https://blog.start9.com/running-startos-on-apple-silicon/>`_.


    .. figure:: /_static/images/flashing/x86_64-asset.png
        :width: 90%

Select the client OS you are using to continue:

.. tabs::

    .. group-tab:: Linux

        (Optional, but recommended) Verify the checksum against the one listed on GitHub (SHA256):
        
            .. code-block::
            
                sha256sum startos-0.3.4.2-efc56c0-20230525_x86_64.iso
        
    .. group-tab:: Mac
            
        (Optional, but recommended) Verify the checksum against the one listed on GitHub by opening a terminal, changing your directory to where you downloaded the .iso file, and entering:

            .. code-block::

                openssl dgst -sha256 startos-0.3.5.1-39de098_x86_64.iso
    .. group-tab:: Windows
        
        (Optional, but recommended) Verify the checksum against the one listed on GitHub by opening Windows PowerShell, changing your directory to where you downloaded the .img.gz file, and running `Get-FileHash`:

            .. code-block::

                cd Downloads
                Get-FileHash startos-0.3.4.2-efc56c0-20230525_x86_64.iso

Installing StartOS
------------------
Once you have the StartOS image, you will need to flash it onto your USB drive.

#. Download `balenaEtcher <https://www.balena.io/etcher/>`_ onto your Linux, Mac, or Windows computer.

#. Insert your USB drive into your computer.

#. Open balenaEtcher.

    .. figure:: /_static/images/diy/balena.png
      :width: 60%
      :alt: Balena Etcher Dashboard

#. Click "Flash from file" and select the ``.iso`` file you just downloaded.

#. Click "Select Target" and select your USB drive, checking the size to make sure it's the correct drive.

    .. warning:: BE ABSOLUTELY CERTAIN you have selected the correct target flash drive. Whatever target you select will be **COMPLETELY ERASED**!!

#. Click "Flash!". You may be asked to approve the unusually large disk target and/or enter your password. Both are normal.

#. After this completes, you may remove the newly flashed drive from your computer, and insert it into the device you intend to install StartOS onto.

#. Plug the USB drive into the device and power on. Follow the on-screen instructions to Install StartOS (use "Re-Install" to preserve data, or "Factory Reset" to wipe the device). After install is complete, you will be prompted to remove your USB drive.

    .. note:: Always prefer the fastest available USB 3.0+ port - typically this is blue or labeled "SS" (SuperSpeed)

    .. tip:: Occasionally, you may need to make some changes in your BIOS, such as turning off Secure Boot, or allowing USB boot for install.  See the `Community Hub <https://community.start9.com>`_ for guides or to get help.

#. Finally, continue to the :ref:`Initial Setup <initial-setup>`, :ref:`Manual Update <manual-update>`, or :ref:`Reset Password <reset-password>` instructions - depending on your need.
