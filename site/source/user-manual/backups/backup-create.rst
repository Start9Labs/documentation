.. _backup-create:

================
Creating Backups
================

There are 2 options for backing up your Embassy and service data:

1. Use a Shared Network Folder (recommended) on another device that connected to the same network as your Embassy, such as a laptop/desktop or external drive that is plugged into your laptop/desktop.
2. Use a physical drive, which must be externally powered or plugged into a powered USB hub.

LAN Backups
-----------

This is the recommended approach for creating backups.

#. Follow instructions for creating a :ref:`Shared Network Folder<cifs-setup>` on your laptop/desktop.

#. Go to the :ref:`Embassy tab<embassy-tab>`, then click on ``Create Backup``.

    .. figure:: /_static/images/config/embassy_backup.png
        :width: 60%

#. Next, click on ``+ New Shared Folder`` to use your previously created backup folder.

    .. figure:: /_static/images/config/embassy_backup0.png
        :width: 60%

#. Fill in the following fields:

    * Hostname - This is the hostname of the machine that your folder or drive is located on
    * Path - This is the directory path to the shared folder.  If you setup Samba yourself (Linux), this may be the name of the share in your samba config file and not the path.
    * Username - This is the user on the remote machine that you used to create the shared directory
    * Password - This is your user (from above) password

    .. figure:: /_static/images/config/embassy_backup1.png
        :width: 60%

    Then click ``Save``

#. You will see a freshly created "cloud" backup location available, click it for options, and click ``Create Backup`` to begin.

    .. figure:: /_static/images/config/embassy_backup2.png
        :width: 60%

#. You can continue to use your Embassy while the backup is in progress.

    .. figure:: /_static/images/config/embassy_backup3.png
        :width: 60%

#. When the backup is complete you will be notified in the :ref:`Notifications tab<notifications-tab>`, and you will see the date and time of your most recent backup updated under ``Backups`` in the Embassy tab.

    .. figure:: /_static/images/config/embassy_backup4.png
        :width: 60%

Physical Backups
----------------

You may use a drive by attaching to Embassy directly if you prefer.

.. caution:: If using the Raspberry Pi, you MUST use external power to attach a physical drive in order to prevent any data corruption due to power constraints.

#. If your drive is self-powered, you can plug it directly into your Embassy USB 3.0 (blue) slot. If not, first plug the drive into a powered USB hub, then plug the hub into your Embassy USB 3.0 slot.

#. Go to ``Embassy`` -> ``Create Backup``

    .. figure:: /_static/images/config/physical-backup0.png
        :width: 60%

#. Select the drive
