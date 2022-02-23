.. _backup-create:

=============
Backup Create
=============

Backing up your Embassy is easy and secure. Backups are encrypted with your master password.

Backup Using LAN Shared Folder
------------------------------

.. tip:: This is the recommended approach for creating backups.

#. Follow instructions for creating a :ref:`LAN Shared Folder<cifs-setup>` on your laptop/desktop.

#. Go to *Embassy > Create Backup*.

    .. figure:: /_static/images/config/embassy_backup.png
        :width: 60%

#. Next, click on "New Shared Folder".

    .. figure:: /_static/images/config/embassy_backup0.png
        :width: 60%

#. Fill in the following fields:

    * Hostname - This is the hostname of the machine that your shared folder is located on
    * Path - This is the directory path to the shared folder. If you configured Samba yourself (Linux), this is the "comment" (name of the share in your samba config file) and not the path.
    * Username - This is the user on the remote machine that you used to create the shared directory
    * Password - This is your user (from above) password

    .. figure:: /_static/images/config/embassy_backup1.png
        :width: 60%

#. Click "Save".

#. You will see a freshly created "cloud" backup location available, click it, then click "Create Backup".

    .. figure:: /_static/images/config/embassy_backup2.png
        :width: 60%

#. You can continue to use your Embassy while the backup is in progress.

    .. figure:: /_static/images/config/embassy_backup3.png
        :width: 60%

#. When the backup is complete you will receive a notification in the Notifications tab, and you will see the date and time of your most recent backup updated under "Backups" in the Embassy tab.

    .. figure:: /_static/images/config/embassy_backup4.png
        :width: 60%

Backup Using a Physical Drive
-----------------------------

.. tip:: You can backup to a physical drive using the recommended method above, rather than plugging the drive directly into the Embassy, which can cause problems.

.. caution:: If using the Raspberry Pi, you MUST use external power to attach a physical drive in order to prevent any data corruption due to power constraints.

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

After backup, you will receive a notice that the backup is complete, and you will see the latest backup date appear on the Embassy tab.

    .. figure:: /_static/images/config/physical-backup4.png
        :width: 60%
