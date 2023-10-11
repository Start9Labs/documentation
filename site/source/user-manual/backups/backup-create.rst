.. _backup:

======
Backup
======
Backing up your server is easy and secure. Backups are encrypted with your master password.

.. contents::
  :depth: 2 
  :local:

.. tip:: Create frequent backups to keep your data safe!

Setup Device
------------
Select your platform for detailed instructions on how to create a Network Folder for creating backups.  This can include a drive in, or attached to, a device on your network.  Otherwise, you may backup directly to a :ref:`physical drive<backup-physical>`, attached to your server.

  * :ref:`Linux Network Folder <backup-linux>`

  * :ref:`Mac Network Folder <backup-mac>`

  * :ref:`Windows Network Folder <backup-windows>`

  * :ref:`Synology Network Folder <backup-synology>`

  * :ref:`TrueNAS Network Folder <backup-truenas>`

  * :ref:`Physical Drive <backup-physical>`

.. _backup-create:

Create Backup
-------------
#. Go to *System > Create Backup*

    .. figure:: /_static/images/config/backup.png
        :width: 60%

#. You will see your previously created Network Folder backup location (or Physical Drive) available.  Click it, select the services you wish to backup, then click "**BACK UP SELECTED**":

    .. figure:: /_static/images/config/backup2.png
        :width: 60%

#. You will be prompted for your server's master password:

    .. figure:: /_static/images/config/backup2.5.png
        :width: 60%

#. The backup will begin.  You can continue to use your server while the backup is in progress.

    .. figure:: /_static/images/config/backup3.png
        :width: 60%

#. When the backup is complete, you will receive a notification where a detailed report is available.

    .. figure:: /_static/images/config/backup4.png
        :width: 60%

#. If successful, you will also see the date and time of your most recent backup under **BACKUPS** in the **System** tab:

    .. figure:: /_static/images/config/backup5.png
        :width: 60%