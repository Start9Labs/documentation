.. _backups:

==============
Making Backups
==============

There are 2 options for backing up your Embassy and all its service data.  You can setup a shared folder on a remote machine, such as a laptop, desktop, or external drive on your network, or you can backup to a local drive, which must be externally powered or plugged into a powered USB hub before plugging into Embassy.

.. note:: For remote backups, you will first need to configure the machine you want to backup to.  Check our :ref:`Backup Setup<backup-setup>` guide for your OS first.

Remote Backups
--------------

#. Go to the :ref:`Embassy tab<embassy-tab>`, then click on ``Create Backup``.

    .. figure:: /_static/images/config/embassy_backup.svg
        :width: 60%

#. Next, click on ``+ New Shared Folder`` to use your previously created backup folder.

    .. figure:: /_static/images/config/embassy_backup0.svg
        :width: 60%

#. Fill in the following fields:

    * Hostname - This is the hostname of the machine that your folder or drive is located on
    * Path - This is the directory path to the shared folder.  If you setup Samba yourself (Linux), this may be the name of the share in your samba config file and not the path.
    * Username - This is the user on the remote machine that you used to create the shared directory
    * Password - This is your user (from above) password

    .. figure:: /_static/images/config/embassy_backup1.svg
        :width: 60%

    Then click ``Save``

#. You will see a freshly created "cloud" backup location available, click it for options, and click ``Create Backup`` to begin.

    .. figure:: /_static/images/config/embassy_backup2.svg
        :width: 60%

#. You can continue to use your Embassy while the backup is in progress.

    .. figure:: /_static/images/config/embassy_backup3.svg
        :width: 60%

#. When the backup is complete you will be notified in the :ref:`Notifications tab<notifications-tab>`, and you will see the date and time of your most recent backup updated under ``Backups`` in the Embassy tab.

    .. figure:: /_static/images/config/embassy_backup4.svg
        :width: 60%

Local Backups
-------------

#. With Embassy powered down, plug in your external drive to the powered hub if you are using one, or directly into Embassy's available USB 3.0 (blue) slot if it is externally powered.

#. Plug in power to your hub or drive

#. Boot Embassy and go to ``Embassy`` -> ``Create Backup``

#.
