.. _flashing-pi:

=======================
Flashing (Raspberry Pi)
=======================
This guide is for flashing StartOS to a micro SD card in order to install it on a Raspberry Pi.

 .. note:: You will need a micro SD card of at least 16GB in size (32GB recommended) for the OS only (using an additional drive for storage), and at least 128GB is recommended if using the SD as your storage device.

Getting and Extracting the Image
--------------------------------
Visit the `Github release page <https://github.com/Start9Labs/start-os/releases/latest>`_ to find the latest StartOS release.

At the bottom of the page, under "Assets," download the ``raspberrypi.img.gz`` file.

    .. figure:: /_static/images/flashing/raspi-asset.png
      :width: 60%
      :alt: Raspberry Pi Asset

Select your OS to continue:

.. tabs::

    .. group-tab:: Linux

        #. Open a terminal in the folder you downloaded to and extract with:
        
            .. code-block::
            
                tar -xzvf startos-0.3.4.2-bbd66e9-20230519_raspberrypi.img.gz

        #. (Optional, but recommended) Verify the checksum against the one listed on GitHub (SHA256):
        
            .. code-block::
            
                sha256sum startos-0.3.4.2-bbd66e9-20230519_raspberrypi.img

            or (BLAKE3):

            .. code-block::
            
                b3sum startos-0.3.4.2-bbd66e9-20230519_raspberrypi.img
        
    .. group-tab:: Mac
            
        #. Right-click ``startos-0.3.4.2-bbd66e9-20230519_raspberrypi.img.gz``, click "Open with," then click Archive Utility to extract.

        #. (Optional, but recommended) Verify the checksum against the one listed on GitHub by opening a terminal and entering:

            .. code-block::

                openssl dgst -sha256 startos-0.3.4.2-bbd66e9-20230519_raspberrypi.img

    .. group-tab:: Windows
            
        #. Open a ``cmd`` prompt "As Administrator" in the folder you saved the image to and use the following command to extract it:

            .. code-block::
            
                tar -xzvf startos-0.3.4.2-bbd66e9-20230519_raspberrypi.img.gz

        #. (Optional, but recommended) Verify the checksum against the one listed on GitHub by running:

            .. code-block::

                Get-FileHash startos-0.3.4.2-bbd66e9-20230519_raspberrypi.img

Installing StartOS
------------------
Once you have extracted the StartOS ``.img`` file, you will need to flash it onto a microSD card.

#. Download `balenaEtcher <https://www.balena.io/etcher/>`_ onto your Linux, Mac, or Windows computer.

#. Insert the microSD card into your computer, either directly or using an adapter.

#. Open balenaEtcher.

    .. figure:: /_static/images/diy/balena.png
      :width: 60%
      :alt: Balena Etcher Dashboard

#. Click "Select Image" and select the ``.img`` file.

#. Click "Select Target" and select your microSD card.

    .. warning:: BE ABSOLUTELY CERTAIN you have selected the correct target microSD card. Whatever drive you select will be **COMPLETELY ERASED**!!

#. Click "Flash!". You may be asked to approve the unusually large disk target and/or enter your password. Both are normal.

#. After the flash completes, you may remove the newly flashed micro SD card from any adapter, and insert it into your server's SD card slot.

#. Finally, continue to the :ref:`Initial Setup <initial-setup>`, :ref:`Manual Update <manual-update>`, or :ref:`Reset Password <reset-password>` instructions - depending on your need.
