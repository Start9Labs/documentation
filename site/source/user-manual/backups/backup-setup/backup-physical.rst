.. _backup-physical:

================================
Backup to Powered Physical Drive
================================

.. warning:: Create frequent backups to avoid loss of data!

The recommended method of backup (including with external drives) is to setup a :ref:`LAN Shared Folder<backup-setup>` via your OS.  However, you may use a powered external drive, or external drive via a powered USB 3.0 hub, connected directly to your Embassy if you prefer.

.. warning:: If you still choose to plug into your Embassy, this drive MUST have external power, or be connected via a powered USB hub in order to prevent any data corruption due to power constraints!

#. Ensure your backup drive is properly formatted. The recommended format at this time is ``exFAT``. **Do not** use ``fat32``.

#. If your drive is self-powered, you can plug it directly into your Embassy blue USB 3.0 slot. If not, first plug the drive into a powered USB hub, then plug the hub into your Embassy. Then you may power it up.

#. Go to *Embassy > Create Backup*

    .. figure:: /_static/images/config/physical-backup0.png
        :width: 60%

#. Select your drive.

    .. figure:: /_static/images/config/physical-backup1.png
        :width: 60%

    .. figure:: /_static/images/config/physical-backup2.png
        :width: 60%

#. Enter your EmbassyOS master password.

    .. figure:: /_static/images/config/physical-backup3.png
        :width: 60%

When the backup is complete, you will receive a notification.  If successful, you will see the date and time of your most recent backup updated under "Backups" in the Embassy tab.

    .. figure:: /_static/images/config/physical-backup4.png
        :width: 60%
