.. _backup-physical:

========================
Backup to Physical Drive
========================
.. tip:: Create frequent backups to avoid loss of data!

.. youtube:: KJRO9wGOOVw
    :width: 100%

The recommended method of backup (including with external drives) is to setup a :ref:`Network Folder<backup>` via your OS.  However, you may use an external drive plugged directly into your server.

.. warning:: If you are using a low-powered device (like a RasPi), this drive MUST have external power, or be connected via a powered USB hub in order to prevent any data corruption due to power constraints!  Server One and Server Pure users can safely ignore this warning.

#. Ensure your backup drive is properly formatted. The recommended format at this time is ``exFAT``. **Do not** use ``fat32``.

#. If your drive is self-powered, you can plug it directly into your Start9 server blue USB 3.0 slot. If not, first plug the drive into a powered USB hub, then plug the hub into your Start9 server. Then you may power it up.

#. Go to *System > Create Backup*

    .. figure:: /_static/images/config/backup.png
        :width: 60%

#. Select your drive.

    .. figure:: /_static/images/config/physical-backup1.png
        :width: 60%

    .. figure:: /_static/images/config/physical-backup2.png
        :width: 60%

#. Enter your StartOS master password.

    .. figure:: /_static/images/config/backup3.png
        :width: 60%

#. When the backup is complete, you will receive a notification.  If successful, you will see the date and time of your most recent backup updated under "Backups" in the System tab.

    .. figure:: /_static/images/config/backup4.png
        :width: 60%
