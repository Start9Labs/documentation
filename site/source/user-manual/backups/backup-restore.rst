.. _backup-restore:

==============
Backup Restore
==============

There are 3 different ways that you may choose to recover server data, as well as a 4th option to migrate/transfer data between hardware.

#. "Restore [individual services] from Backup" to your currently running server.  This is specifically for service data.
#. "Use Existing Drive" a drive with existing server data on it during setup.  Use this when re-flashing your SD card, for example.
#. "Restore [entire server] from Backup" (as in, disaster recovery) all server data in the event that your backup is the **only** thing you have left.
#. "Transfer" data from an existing server.  This is a total migration for use when upgrading hardware only.

.. warning:: If you are restoring data from a drive that you are attaching *directly to your server,* (if using a RasPi or other low-powered board) please ensure that it is getting adequate power.  This is best accomplished via external power to the drive (such as a powered USB hub).  Server One (2022 and newer) and Server Pure users can safely ignore this warning.

Select the appropriate tab below to restore your data:

.. tabs::

    .. group-tab:: Restore

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

    .. group-tab:: Attach

        #. During :ref:`Initial Setup<initial-setup>`, select "Recover."

            .. figure:: /_static/images/setup/screen0-startfresh_or_recover.png
                :width: 60%

        #. Next, select "Use Existing Drive."

            .. figure:: /_static/images/setup/screen3-use_existing.png
                :width: 60%

        #. Select your server's data drive.

            .. figure:: /_static/images/setup/screen4-use_existing_drive_selection.png
                :width: 60%

        #. Enter and confirm a new password.

            .. figure:: /_static/images/setup/screen5-set_password.jpg
                :width: 60%
        
        #. Your server will initialize again (all previous data will be recovered).

            .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
                :width: 60%

    .. group-tab:: Recover

        #. During :ref:`Initial Setup<initial-setup>`, select "Recover."

            .. figure:: /_static/images/setup/screen0-startfresh_or_recover.png
                :width: 60%

        #. Select "Restore From Backup."

            .. figure:: /_static/images/restore/recover0.png
                :width: 60%

        #. If you have a physical backup, plug it in and select the drive.  If it does not appear, try another USB 3.0 (blue) port and hit refresh, then select the drive and skip to step 5 (enter drive encryption password).  If you are using a Network Folder, click "Open."

            .. figure:: /_static/images/restore/recover1.png
                :width: 60%

        #. Enter the details for your Network Folder and click "Verify".

            .. figure:: /_static/images/restore/recover2.png
                :width: 60%

        #. Enter the encryption password for the drive (this is your server's master password).

            .. figure:: /_static/images/restore/recover3.png
                :width: 60%

        #. Select the drive (from your new hardware) that you are recovering onto.

            .. warning:: This will **PERMANENTLY ERASE** any existing data on that drive.  If you re-using an old drive, ensure that you have first removed all your data!!

            .. figure:: /_static/images/restore/recover4.png
                :width: 60%

            .. figure:: /_static/images/restore/recover5.png
                :width: 60%

        #. Your server will now prepare and then copy the data to the new drive.  The time required can vary greatly depending on how much data you are migrating and from where that data is coming.  Be prepared for this to take many hours, especially if you have 1-2TB+ of data.  Go have a sandwich and contemplate other aspects of your sovereignty.

            .. figure:: /_static/images/restore/recover6.png
                :width: 60%

    .. group-tab:: Transfer

        #. During :ref:`Initial Setup<initial-setup>`, select "Recover."

            .. figure:: /_static/images/setup/screen0-startfresh_or_recover.png
                :width: 60%

        #. Select "Transfer"
        
            .. figure:: /_static/images/transfer/transfer0.png
                :width: 60%

        #. Plug in the drive (make sure it is powered on) of the server you are migrating **from** and select it (in this example, /dev/sda).  You may need to try a different USB port and hit "Refresh" if you don't see it immediately.  You will see a warning about using the old drive again; read and understand it.
        
            .. figure:: /_static/images/transfer/transfer1.png
                :width: 60%

        #. Select the drive on your new server (that you are migrating **onto**).
        
            .. figure:: /_static/images/transfer/transfer2.png
                :width: 60%
         
            .. warning:: This will **PERMANENETLY ERASE** any existing data on that drive.  If you re-using an old drive, ensure that you have first removed all your data!!

        #. Set your new master password.  *Make it good.  Write it down.*  Click finish.
        
            .. figure:: /_static/images/transfer/transfer3.png
                :width: 60%

            .. figure:: /_static/images/transfer/transfer4.png
                :width: 60%

        #. Your server will now initialize and migrate the old data to the new drive.  The time required can vary greatly depending on how much data you are migrating.  Be prepared for this to take many hours, especially if you have 1-2TB+ of data.  Go have a sandwich and contemplate other aspects of your sovereignty.

            .. figure:: /_static/images/transfer/transfer5.png
                :width: 60%
