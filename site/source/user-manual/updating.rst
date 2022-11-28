.. _updating-eos:

==================
Updating embassyOS
==================

.. contents::
  :depth: 2
  :local:

.. note:: embassyOS will **NEVER** update itself without your approval. But we highly recommended keeping embassyOS up to date for the latest security and performance patches, as well as to take advantage of new features.

How to Update
-------------

#. When a new version of embassyOS is available, a badge will appear on the "Embassy" tab.
#. Go to *Embassy > Software Update*.

    .. warning:: Ensure you have a stable Internet connection before beginning an OS update, and do not unplug your Embassy while embassyOS is downloading.

#. Read the release notes and click "Begin Update".
#. While the new version of embassyOS is downloading, you may continue to use your device as usual.
#. Once the download is complete, you will be prompted to restart Embassy.
#. After restart, but before the web interface becomes available again, there may be a brief upgrade period of up to thirty minutes where data is transitioned.  You will hear this sound every ten seconds until the upgrade is complete:

    .. raw:: HTML

        <audio controls>
          <source src="/_static/sounds/UPDATING.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>


  **Do not unplug or otherwise power off the embassy during this period.**

#. Next, you may be prompted to refresh the browser window.

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

#. Obtain the latest copy of embassyOS with your product key included, either by `downloading <https://github.com/Start9Labs/embassy-os/releases/latest>`_ or `building from source <https://github.com/Start9Labs/embassy-os/tree/latest/build>`_.
#. :ref:`Flash the downloaded image <flashing>` to your microSD card.
#. Insert the microSD card into your Embassy and power it on.

    .. note:: Embassy will power up and then initialize, a process of less than 5 minutes if you downloaded an image, or about 10-20 minutes if you built from source. Once complete you will hear a _bep_ to indicate it is initialized and then a _chime_ sound to indicate it is online.

#. On your computer, open up a browser and go to http://embassy.local

#. Select "Recover"

   .. figure:: /_static/images/setup/screen0-startfresh_or_recover.jpg
      :width: 60%

#. Select "Use Existing Drive"

   .. figure:: /_static/images/setup/screen3-use_existing.jpg
      :width: 60%

#. Assuming you have you fully-intact embassyOS data drive plugged in, it will be automatically detected and begin the upgrade.

   .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/UPDATING.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

      <br />This sound will play every ten seconds until the upgrade is done.  <b>Do not unplug or otherwise power off the embassy during this period.</b><br /><br />

#. Create a master password for your Embassy and click "Finish."

    .. warning:: Choose a strong master password.  If you don't wish to change your password from the previous version, just set it to the same thing it was before you began the upgrade.  Write this password down.  Store it somewhere safe.  DO NOT LOSE IT.

   .. figure:: /_static/images/setup/screen5-set_password.jpg
      :width: 60%
      :alt: Create A Password

#. Your Embassy is now on the new version and the old version's data has been migrated to it!  Continue to the section on :ref:`connecting` to learn more about using your Embassy over Tor and LAN.

    .. tip:: You will see the following screen and also be prompted to save your Embassy address and certificate info on your computer.  We recommand you backup this html file somewhere safe so that you can reference it if you ever need to connect to your Embassy from a new computer.

    .. figure:: /_static/images/setup/screen7-startfresh_complete.jpg
      :width: 60%
      :alt: Setup Complete

Upgrading from an External Drive Setup
--------------------------------------
If you already have an Embassy with an external drive, you can follow along from the `written guide appendix <https://start9dave.substack.com/i/68242394/appendix-transfer-embassy-from-existing-case>`_ and/or check out the video below:

  .. youtube:: 355BENA42s8
    :width: 100%
