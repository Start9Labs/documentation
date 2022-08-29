.. _updating-eos:

==================
Updating EmbassyOS
==================

.. contents::
  :depth: 2
  :local:

.. note:: EmbassyOS will **NEVER** update itself without your approval. But we highly recommended keeping EmbassyOS up to date for the latest security and performance patches, as well as to take advantage of new features.

How to Update
-------------

#. When a new version of EmbassyOS is available, a badge will appear on the "Embassy" tab.
#. Go to *Embassy > Software Update*.

    .. warning:: Ensure you have a stable Internet connection before beginning an OS update, and do not unplug your Embassy while EmbassyOS is downloading.

#. Read the release notes and click "Begin Update".
#. While the new version of EmbassyOS is downloading, you may continue to use your device as usual.
#. Once the download is complete, you will be prompted to restart Embassy.
#. After restart, you may be prompted to refresh the browser window.

Disabling Auto Check for Updates
--------------------------------

By default, Embassy will automatically check for available updates. To disable this check, do the following:

#. Navigate to the *Embassy > Preferences*.
#. Click "Auto Check for Updates" and click "Disable".

    .. note:: With auth check for updates disabled, you will need to manually check for updates. This can be done by going to *Embassy > Software Update*.

This guide will cover how to recover existing Embassy 0.3.x service and user data (on an SSD) to a new OS install (sd card).

.. _manual-update:

Manual Update by Re-flashing
----------------------------

#. Obtain the latest copy of EmbassyOS with your product key included, either by `downloading <https://github.com/Start9Labs/embassy-os/releases/latest>`_ or `building from source <https://github.com/Start9Labs/embassy-os/tree/latest/build>`_.
#. `Flash the downloaded image <../flashing>`_ to your microSD card.
#. Insert the microSD card into your Embassy and power it on.

    .. note:: Embassy will power up and then initialize, a process of less than 5 minutes if you purchased an image, or about 10-20 minutes if you built from source. Once complete you will hear a _bep_ to indicate it is initialized and then a _chime_ sound to indicate it is online.

#. On your computer, open up a browser and go to http://embassy.local.
#. When prompted, enter your Product Key:

   .. figure:: /_static/images/setup/migrate0.png
      :width: 60%

#. Select "Recover".

   .. figure:: /_static/images/setup/migrate1.png
      :width: 60%

#. Assuming you have you fully-intact EmbassyOS data drive plugged in, you will receive a popup declaring that a valid data drive has been detected. Click "Use Drive" from the pop-up. If you don't see the drive, you may get a message asking you to unplug, then plug back in the drive, and refresh the page.

   .. figure:: /_static/images/setup/use-drive.png
      :width: 60%
