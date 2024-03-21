.. _backup-create:

=============
Backup Create
=============

Choose your backup target
-------------------------

You can back up your data to a physical drive plugged into the server, or over-the-air to a network folder shared from another device on the same LAN.

Physical Drive
..............

.. warning:: Backing up to USB thumb drive or SD card media is highly discouraged, as low-quality flash memory is easily corruptible.

#. Ensure your backup drive is properly formatted. The recommended format at this time is ``EXT4``. **Do not** use ``fat32`` or ``exFAT``.

#. Plug your physical drive into your server.

    .. warning:: If you are using a low-powered device (like a RasPi), this drive MUST have external power, or be connected via a powered USB hub in order to prevent any data corruption due to power constraints!  Server One and Server Pure users can safely ignore this warning.


Network Folder
..............

Choose your destination platform below for instructions on creating and sharing a network folder.

  * :ref:`Linux <backup-linux>`

  * :ref:`Mac <backup-mac>`

  * :ref:`Windows <backup-windows>`

  * :ref:`Synology <backup-synology>`

  * :ref:`TrueNAS <backup-truenas>`


Create the Backup
-----------------

#. Go to *System > Create Backup*

    .. figure:: /_static/images/config/backup.png
        :width: 60%

#. Select the network folder or physical drive you want to target, then select the services you want to back up.

    .. figure:: /_static/images/config/backup2.png
        :width: 60%

#. You will be prompted for your server's master password.

    .. figure:: /_static/images/config/backup2.5.png
        :width: 60%

#. The backup will begin. You can continue to use your server while the backup is in progress.

    .. figure:: /_static/images/config/backup3.png
        :width: 60%

#. When the backup is complete, you will receive a notification where a detailed report is available.

    .. figure:: /_static/images/config/backup4.png
        :width: 60%

#. If successful, you will also see the date and time of your most recent backup under **BACKUPS** in the **System** tab:

    .. figure:: /_static/images/config/backup5.png
        :width: 60%