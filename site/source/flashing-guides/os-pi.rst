.. _flashing-os-pi:

======================
StartOS (Raspberry Pi)
======================
This guide is for flashing StartOS to a microSD card in order to install it on a Raspberry Pi.

.. warning:: If you are running in a "Lite" configuration (everything on an SD card), then flashing that SD card in the manner proscribed below WILL ERASE ALL YOUR DATA!  If you need to reflash and you are NOT using an external SSD (ie. you have a Server Lite), please `contact support <https://start9.com/contact>`_ for assistance instead.

Getting StartOS
---------------
Visit the `Github release page <https://github.com/Start9Labs/start-os/releases/latest>`_ to find the latest StartOS release.

At the bottom of the page, under "Assets," download the ``startos-..._raspberrypi.img.gz`` file.

    .. figure:: /_static/images/flashing/raspi-asset.png
      :width: 60%
      :alt: Raspberry Pi Asset

Select your OS to continue:

.. tabs::

    .. group-tab:: Linux

        (Optional, but recommended) Verify the checksum against the one listed on GitHub (SHA256):
        
            .. code-block::
            
                sha256sum startos-0.3.4.2-efc56c0-20230525_raspberrypi.img.gz
        
    .. group-tab:: Mac
            
        (Optional, but recommended) Verify the checksum against the one listed on GitHub by opening a terminal and entering:

            .. code-block::

                openssl dgst -sha256 startos-0.3.4.2-efc56c0-20230525_raspberrypi.img.gz

    .. group-tab:: Windows
        
        (Optional, but recommended) Verify the checksum against the one listed on GitHub by opening Windows PowerShell, changing your directory to where you downloaded the .img.gz file, and running `Get-FileHash`:

            .. code-block::

                cd Downloads
                Get-FileHash startos-0.3.4.2-efc56c0-20230525_raspberrypi.img.gz

Installing StartOS
------------------
Once you have the StartOS ``.img.gz`` file, you will need to flash it onto a microSD card.

#. Download and install `balenaEtcher <https://www.balena.io/etcher/>`_ onto your Linux, Mac, or Windows computer.

#. Insert the microSD card into your computer, either directly or using an adapter.

#. Open balenaEtcher.

    .. figure:: /_static/images/diy/balena.png
      :width: 60%
      :alt: Balena Etcher Dashboard

#. Click "Flash from file" and select the ``.img.gz`` file.

#. Click "Select Target" and select your microSD card.

    .. warning:: BE ABSOLUTELY CERTAIN you have selected the correct target microSD card. Whatever drive you select will be **COMPLETELY ERASED**!!

#. Click "Flash!". You may be asked to approve the unusually large disk target and/or enter your password. Both are normal.

#. After the flash completes, you may remove the newly flashed micro SD card from any adapter, and insert it into your server's SD card slot.

#. Finally, continue to the :ref:`Initial Setup <initial-setup>`, :ref:`Manual Update <manual-update>`, or :ref:`Reset Password <reset-password>` instructions - depending on your need.
