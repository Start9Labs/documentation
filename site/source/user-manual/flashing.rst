.. _flashing:

========
Flashing
========

Getting embassyOS
-----------------
After building your device, you need a copy of embassyOS.

* Visit the `latest embassyOS release page on Github <https://github.com/Start9Labs/embassy-os/releases/latest>`_ to download an image of embassyOS.  It is ``eos.tar.gz`` for Linux/Mac and ``eos.zip`` for Windows.

Extracting the image
--------------------

    .. warning:: Make sure you have at least 16gb available on your drive.

Linux
=====
#. Download the ``eos.tar.gz`` file and open a terminal in the directory you save it to
#. Extract with:

    .. code-block::

       tar -xzvf eos.tar.gz

#. (Optional, but recommended) Verify the checksum against the one listed on GitHub:

    .. code-block::

        sha256sum eos.img

Mac
===
#. Download the ``eos.tar.gz`` file
#. Right-click eos.tar.gz, click "open with," then click Archive Utility to extract
#. (Optional, but recommended) Verify the checksum against the one listed on GitHub:

    .. code-block::

        openssl dgst -sha256 eos.img

Windows
=======
#. Download the ``eos.zip`` file
#. Right-click eos.zip and click "Extract all"
#. (Optional, but recommended) Verify the checksum against the one listed on GitHub:

    .. code-block::

        Get-FileHash eos.img

Installing embassyOS
--------------------
Once you have the embassyOS image, you will need to flash it onto a microSD card.

#. Download `balenaEtcher <https://www.balena.io/etcher/>`_ onto your Linux, Mac, or Windows computer.
#. Insert the microSD card into your computer, either directly or using an adapter.
#. Open balenaEtcher.

    .. figure:: /_static/images/diy/balena.png
      :width: 60%
      :alt: Balena Etcher Dashboard

#. Click "Select Image" and select eos.img.
#. Click "Select Target" and select your 32GB microSD card.

    .. warning:: Be certain you have selected the correct target microSD card. Whatever target you select will be completely erased and replaced with embassyOS.

#. Click "Flash!". You may be asked to (1) approve the unusually large disk target or (2) enter your password. Both are normal.
#. After the flash completes, you may remove the newly flashed micro SD card from any adapter, insert it into your Embassy's SD card slot, and continue to the :ref:`Initial Setup <initial-setup>` or :ref:`Update by reflashing <manual-update>` instructions.
