.. _backup-physical:

=================================
Backup to Secondary Embassy Drive
=================================

The recommended method of backup is to setup a :ref:`LAN Shared Folder<backup-setup>`.  However, you may use a powered external drive, or external drive via a powered USB 3.0 hub, connected directly to your Embassy if you prefer.

.. warning:: This drive MUST have external power, or connected via a powered USB hub in order to prevent any data corruption due to power constraints!

.. tip:: You can backup to a physical drive using the recommended method above, rather than plugging the drive directly into the Embassy, which can cause problems.

#. Ensure your backup drive is properly formatted. The recommended format at this time is ``exFAT``. **Do not** use ``fat32``.

#. If your drive is self-powered, you can plug it directly into your Embassy blue USB 3.0 slot. If not, first plug the drive into a powered USB hub, then plug the hub into your Embassy. Then you may power it up.

#. Go to "Embassy" > "Create Backup"

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

After backup, you will receive a notice that the backup was successful, and you will see the latest backup date and time appear on the Embassy tab.

    .. figure:: /_static/images/config/physical-backup4.png
        :width: 60%
