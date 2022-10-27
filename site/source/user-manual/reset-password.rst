.. _reset-password:

===================
Reset Your Password
===================

.. contents::
  :depth: 2
  :local:

#. Obtain the latest copy of embassyOS by `downloading it from Github <https://github.com/Start9Labs/embassy-os/releases/latest>`_.  Under `Assets` near the bottom of the page, click to download eos.tar.gz.
#. Flash the downloaded image to your microSD card, using :ref:`this guide <flashing>`.
#. Insert the microSD card into your Embassy and power it on.

    .. note:: Embassy will power up and then initialize.  Once complete, you will hear a _bep_ to indicate it is initialized and then a _chime_ sound to indicate it is online.

#. On your computer, open up a browser and go to http://embassy.local.

#. Select "Recover".

   .. figure:: /_static/images/setup/screen0-startfresh_or_recover.jpg
      :width: 60%

#. Select "Use Existing Drive".

   .. figure:: /_static/images/setup/screen1-restore_or_useexisting.jpg
      :width: 60%

#. As instructed, plug in your embassyOS data drive and it will be detected.

   .. figure:: /_static/images/setup/screen4-select_storage.jpg
      :width: 60%

   .. note:: If your SSD does not show up, unplug it from the USB port and plug it back in a different (blue) USB 3.0 port

#. Wait a moment while it reads the data from your drive.

   .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
      :width: 60%

#. Enter and confirm a new password of at least 12 characters when prompted.  Save this password somewhere safe.

   .. figure:: /_static/images/setup/screen5-set_password.jpg
      :width: 60%

#. Your password change is complete!

   .. figure:: /_static/images/setup/pw_reset-s6-reset_complete.jpg
      :width: 60%
