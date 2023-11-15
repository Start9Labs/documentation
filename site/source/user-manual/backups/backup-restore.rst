.. _backup-restore:

==============
Backup Restore
==============

.. warning:: Restoring from backup is for disaster recovery purposes only. To re-use an existing data drive with a fresh copy of StartOS (after re-flashing, for example), follow :ref:`this guide <attach-drive>`. To transfer data from one drive drive to another (to upgrade your storage, for example), follow :ref:`this guide <transfer-data>`.

If you are still reading, it means disaster has struck, and you need to restore your data from an encrypted backup.

.. tabs::

    .. group-tab:: Restore specific services

        #. Go to *System > Restore From Backup*.

            .. figure:: /_static/images/config/restore0.png
                :width: 60%

        #. Select existing backup from either Network Folders or Physical. In this example, we'll select a Network Folder backup.

            .. figure:: /_static/images/config/restore1.png
                :width: 60%

        #. Enter your master password.

            .. figure:: /_static/images/config/restore2.png
                :width: 60%

        #. Previously backed up services will appear in the window. Select the service(s) you'd like to restore and click "Restore Selected".

            .. figure:: /_static/images/config/restore3.png
                :width: 60%

        It is not possible to recover services that are already installed. If you wish to recover a service that is already installed, please uninstall it first to permit recovery.

    .. group-tab:: Restore entire server

        #. During :ref:`Initial Setup<initial-setup>`, select "Recover."

            .. figure:: /_static/images/setup/screen0-recover.jpg
                :width: 60%

        #. Select "Restore From Backup."

            .. figure:: /_static/images/restore/recover0.png
                :width: 60%

        #. (Physical drive only) Select your backup drive. If it does not appear, try another USB 3.0 (blue) port and hit refresh.

            .. figure:: /_static/images/restore/recover1.png
                :width: 60%

        #. (Network folder only) Click "Open". Enter the details for your Network Folder and click "Verify".

            .. figure:: /_static/images/restore/recover2.png
                :width: 60%

        #. Enter the encryption password for the drive (the master password of your server when the backup was created).

            .. figure:: /_static/images/restore/recover3.png
                :width: 60%

        #. Select the drive (from your new hardware) where the data will be stored on the new server.

            .. warning:: This will **PERMANENTLY ERASE** any existing data on that drive.  If you re-using an old drive, ensure that you have first removed all your data!!

            .. figure:: /_static/images/restore/recover4.png
                :width: 60%

            .. figure:: /_static/images/restore/recover5.png
                :width: 60%

        #. Your server will now prepare and then copy the data to the new drive.  The time required can vary greatly depending on how much data you are migrating and from where that data is coming.  Be prepared for this to take many hours, especially if you have 1-2TB+ of data.  Go have a sandwich and contemplate other aspects of your sovereignty.

            .. figure:: /_static/images/restore/recover6.png
                :width: 60%