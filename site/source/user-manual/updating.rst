.. _updating-eos:

================
Updating StartOS
================

.. contents::
  :depth: 2
  :local:

.. note:: StartOS will **NEVER** update itself without your approval. But we highly recommended keeping StartOS up to date for the latest security and performance patches, as well as to take advantage of new features.

How to Update
-------------

#. When a new version of StartOS is available, a badge will appear on the "Embassy" tab.
#. Go to *System > Software Update*.

    .. warning:: Ensure you have a stable Internet connection before beginning an OS update, and do not unplug your Embassy while StartOS is downloading.

#. Read the release notes and click "Begin Update".
#. While the new version of StartOS is downloading, you may continue to use your device as usual.
#. Once the download is complete, you will be prompted to restart Embassy.
#. After restart, but before the web interface becomes available again, there may be an upgrade period of up to thirty minutes while data is transitioned.  
  
  **Do not unplug or otherwise power off the embassy during this period.**

Next, you may be prompted to refresh the browser window.

.. _manual-update:

Manual Update by Re-flashing
----------------------------

    .. tip:: This guide will cover how to recover existing Embassy 0.3.x service and user data with a newly flashed SD card or Embassy Pro.

#. Obtain the latest copy of StartOS either by `downloading <https://github.com/Start9Labs/embassy-os/releases/latest>`_ or `building from source <https://github.com/Start9Labs/embassy-os/tree/latest/build>`_.
#. :ref:`Flash the downloaded image <flashing>` to your microSD card.
#. Insert the microSD card into your Embassy and power it on.

    .. note:: Embassy will power up and then initialize, a process of less than 5 minutes if you downloaded an image, or about 10-20 minutes if you built from source. Once complete you will hear a _bep_ to indicate it is initialized and then a _chime_ sound to indicate it is online.

#. On your computer, open up a browser and go to http://embassy.local

#. Select "Recover"

   .. figure:: /_static/images/setup/screen0-startfresh_or_recover.png
      :width: 60%

#. Select "Use Existing Drive"

   .. figure:: /_static/images/setup/screen3-use_existing.png
      :width: 60%

#. Select the drive you were using previously.

   .. figure:: /_static/images/setup/screen4-use_existing_drive_selection.png
      :width: 60%


#. Create a master password for your Embassy and click "Finish."

    .. warning:: Choose a strong master password.  If you don't wish to change your password from the previous version, just set it to the same thing it was before you began the upgrade.  Write this password down.  Store it somewhere safe.  DO NOT LOSE IT.

   .. figure:: /_static/images/setup/screen5-set_password.png
      :width: 60%
      :alt: Create A Password

#. Your Embassy is now on the new version and the old version's data has been migrated to it!  Continue to the section on :ref:`connecting` to learn more about using your Embassy over Tor and LAN.

    .. tip:: The "Go to Emassy Login" button will not be usable until you click download. The address information and root certificate contained in this download will not have changed from what you were using before this whole process so if you do not require it you can close this tab and simply go to your Embassy's Lan or Tor address.

    .. figure:: /_static/images/setup/setup_complete_pre_download.png
      :width: 60%
      :alt: Setup Complete
