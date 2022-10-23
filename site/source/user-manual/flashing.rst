.. _flashing:

========
Flashing
========

Getting EmbassyOS
-----------------
After building your device, you need a copy of EmbassyOS.

* Visit the `latest EmbassyOS release page on Github <https://github.com/Start9Labs/embassy-os/releases/latest>`_ to download an image of EmbassyOS.  It is `eos.tar.gz`.

Extracting the image (eos.tar.gz)
---------------------------------

* On Linux, open a terminal and run

    .. code-block::

       tar -xzvf eos.img.gz

* On Mac right click eos.tar.gz, click "open with" and click Unarchive

   .. figure:: /_static/images/unarchive.png
    :width: 40%

* On Windows download `7zip <https://www.7-zip.org/>`_ and use it to extract the image.

In all cases you should be left with the file eos.img

Installing embassyOS
--------------------
Once you have the EmbassyOS image, you will need to flash it onto a microSD card.

#. Download `balenaEtcher <https://www.balena.io/etcher/>`_ onto your Linux, Mac, or Windows computer.
#. Insert the microSD card into your computer, either directly or using an adapter.
#. Open balenaEtcher.

    .. figure:: /_static/images/diy/balena.png
      :width: 60%
      :alt: Balena Etcher Dashboard

#. Click "Select Image" and select eos.img.
#. Click "Select Target" and select your 32GB microSD card.

    .. warning:: Be certain you have selected the correct target microSD card. Whatever target you select will be completely erased and replaced with EmbassyOS.

#. Click "Flash!". You may be asked to (1) approve the unusually large disk target or (2) enter your password. Both are normal.
#. After the flash completes, you may remove the newly flashed micro SD card from any adapter, insert it into your Embassy's SD card slot, and continue to the :ref:`Initial Setup <initial-setup>` or :ref:`Update by reflashing <manual-update>` instructions.
