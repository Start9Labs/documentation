.. _reset-password:

===================
Reset Your Password
===================

.. contents::
  :depth: 2
  :local:

#. Download and flash the latest version of StartOS, using the appropriate :ref:`flashing guide <flashing>` for your hardware.
#. Plug the flashed drive into a USB port (preferably USB3 - blue in color).  Power on your server, ensuring it is plugged in to Ethernet.

    .. note:: Server will power up and then initialize.  If you have a speaker, you will hear first hear a _bep_ then a _chime_ sound to indicate the device is ready.

#. Using a phone or computer connected to the same network, open up a browser and go to http://start.local.  Follow the directions to "Re-install OS, preserving data".  Follow the prompts after removing the drive and rebooting, visit http://start.local again.

#. Select "Recover".

   .. figure:: /_static/images/setup/screen0-startfresh_or_recover.png
      :width: 60%

#. Select "Use Existing Drive".

   .. figure:: /_static/images/setup/screen3-use_existing.png
      :width: 60%

#. Select your server's data drive.

   .. figure:: /_static/images/setup/screen4-use_existing_drive_selection.png
      :width: 60%

#. Enter and confirm a new password. This time, save it somewhere safe!

   .. figure:: /_static/images/setup/screen5-set_password.jpg
      :width: 60%

#. Your server will initialize again (all previous data will be recovered).

   .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
      :width: 60%

#. Your password change is complete!

    .. tip:: The "Go to Emassy Login" button will not be usable until you click download. The address information and root certificate contained in this download will not have changed from what you were using before this whole process so if you do not require it you can close this tab and simply go to your server's Lan or Tor address.
   
   .. figure:: /_static/images/setup/setup_complete_pre_download.png
      :width: 60%
