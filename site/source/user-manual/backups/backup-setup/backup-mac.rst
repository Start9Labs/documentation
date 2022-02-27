.. _backup-mac:

=============
Backup to Mac
=============

.. warning:: Create frequent backups to avoid loss of data!
    
Use this guide to setup a LAN Shared Folder on your Mac (or attached drive), such that you may create encrypted, private backups of all your Embassy data.

Setup LAN Shared Folder
-----------------------

#. Go to system settings

#. Click sharing

#. Click file sharing

#. Click the + under shared folders

#. Add a folder and click options

#. Enable Windows file sharing for the user you would like to use to authenticate and click Done

#. Enter the name of your macbook, as shown in the computer name field at the top of the sharing page into the hostname field in embassy ui

#. Enter the name of the folder as shown in the shared folders section as the path

#. Enter your macbook username and password for the user that you enabled windows file sharing for

Connect Embassy
---------------

#. Go to *Embassy > Create Backup*.

    .. figure:: /_static/images/config/embassy_backup.png
        :width: 60%

#. Click "Open".

    .. figure:: /_static/images/config/embassy_backup0.png
        :width: 60%

#. Fill in the following fields:

    * Hostname - This is the hostname of the machine that your shared folder is located on
    * Path - This is the *name of the shared folder* you are using and **not** the full directory path
    * Username - This is the user on the remote machine that you used to create the shared directory
    * Password - This is your user (from above) password

    .. figure:: /_static/images/config/embassy_backup1.png
        :width: 60%

#. Click "Save".

That's it!  You can now create encrypted, private backups of all your Embassy data to your Mac or external drive!!
