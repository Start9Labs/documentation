.. _backup:

======
Backup
======

.. contents::
  :depth: 2 
  :local:

Backing up your Embassy is easy and secure. Backups are encrypted with your master password.

.. warning:: Create frequent backups to avoid loss of data!

Setup Device
------------

Select your platform for detailed instructions on how to create a network folder for creating backups (recommended).  Otherwise, you may backup to a physical drive, attached in addition to your main Embassy SSD.

.. toctree::
  :maxdepth: 1

  Linux network folder <backup-setup/backup-linux>
  Mac network folder <backup-setup/backup-mac>
  Windows network folder <backup-setup/backup-windows>
  Synology network folder <backup-setup/backup-synology>
  Physical Drive via Embassy <backup-setup/backup-physical>

.. _backup-create:

Create Backup
-------------

#. Go to *System > Create Backup*

    .. figure:: /_static/images/config/embassy_backup.png
        :width: 60%

#. You will see your previously created network folder backup location (or Physical Drive) available.  Click it, then click "Create Backup".

    .. figure:: /_static/images/config/embassy_backup2.png
        :width: 60%

#. You can continue to use your Embassy while the backup is in progress.

    .. figure:: /_static/images/config/embassy_backup3.png
        :width: 60%

#. When the backup is complete, you will receive a notification.  If successful, you will see the date and time of your most recent backup updated under "Backups" in the System tab.

    .. figure:: /_static/images/config/embassy_backup4.png
        :width: 60%
