.. _flashing-pi:

==============
Flashing (Raspberry Pi)
==============
This guide is for flashing embassyOS to a micro SD card in order to install it on a Raspberry Pi.

 .. note:: You will need a micro SD card of at least 16GB in size, 32GB recommended

Getting and Extracting the embassyOS Image
------------------------------------------
Visit the `Github release page <https://github.com/Start9Labs/embassy-os/releases/latest>`_ to find the latest embassyOS release.  Select your OS below to get the correct Asset and extraction directions.

.. tabs::

    .. group-tab:: Linux

        #. At the bottom of the page, under "Assets," download the ``embassyos_raspberrypi.tar.gz`` file and open a terminal in the directory you save it to.

                .. figure:: /_static/images/flashing/raspi-tar-asset.png
                    :width: 60%
            
        #. (Optional, but recommended) Verify the checksum against the one listed on GitHub:
        
            .. code-block::
            
                sha256sum embassyos_raspberrypi.tar.gz
        
        #. Extract with:
        
            .. code-block::
            
                tar -xzvf embassyos_raspberrypi.tar.gz
        
    .. group-tab:: Mac
        
        #. At the bottom of the page, under "Assets," download the ``embassyos_raspberrypi.tar.gz`` file.

                .. figure:: /_static/images/flashing/raspi-tar-asset.png
                    :width: 60%
            
        #. (Optional, but recommended) Verify the checksum against the one listed on GitHub by opening a terminal and entering:

            .. code-block::

                openssl dgst -sha256 embassyos_raspberrypi.tar.gz

        #. Right-click ``embassyos_raspberrypi.tar.gz``, click "open with," then click Archive Utility to extract.

    .. group-tab:: Windows

        #. At the bottom of the page, under "Assets," download the ``embassyos_raspberrypi.zip`` file

                .. figure:: /_static/images/flashing/raspi-zip-asset.png
                    :width: 60%
            
        #. (Optional, but recommended) Verify the checksum against the one listed on GitHub by opening a CMD terminal and entering:

            .. code-block::

                Get-FileHash embassyos_raspberrypi.zip
    
        #. Right-click eos.zip and click "Extract all"

Installing embassyOS
--------------------
Once you have extracted the embassyOS ``.img`` file, you will need to flash it onto a microSD card.

#. Download `balenaEtcher <https://www.balena.io/etcher/>`_ onto your Linux, Mac, or Windows computer.

#. Insert the microSD card into your computer, either directly or using an adapter.

#. Open balenaEtcher.

    .. figure:: /_static/images/diy/balena.png
      :width: 60%
      :alt: Balena Etcher Dashboard

#. Click "Select Image" and select the ``.img`` file.

#. Click "Select Target" and select your microSD card.

    .. warning:: BE ABSOLUTELY CERTAIN you have selected the correct target microSD card. Whatever target you select will be **COMPLETELY ERASED**!!

#. Click "Flash!". You may be asked to (1) approve the unusually large disk target or (2) enter your password. Both are normal.

#. After the flash completes, you may remove the newly flashed micro SD card from any adapter, and insert it into your Embassy's SD card slot.

#. Finally, continue to the :ref:`Initial Setup <initial-setup>`, :ref:`Manual Update <manual-update>`, or :ref:`Reset Password <reset-password>` instructions - depending on your need.
