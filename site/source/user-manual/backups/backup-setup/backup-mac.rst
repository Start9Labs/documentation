.. _backup-mac:

=====================
Mac LAN Shared Folder
=====================

.. contents::
  :depth: 2 
  :local:

Check out the video below, and follow along with the steps in this guide to setup a LAN Shared Folder on your Mac (or attached drive), such that you may create encrypted, private backups of all your Embassy data.

   .. youtube:: Uv7ul6ZKW5k
      :width: 100%

Setup LAN Shared Folder
-----------------------
#. Either select or create a folder you would like to use to store your Embassy backups

#. Go to "System Preferences" and click "Sharing"

    .. figure:: /_static/images/cifs/cifs-mac0.png
        :width: 60%

#. Click file sharing

    .. figure:: /_static/images/cifs/cifs-mac1.png
        :width: 60%

#. Click the "+" under "Shared Folders" and add the folder you would like to back up to

    .. figure:: /_static/images/cifs/cifs-mac2.png
        :width: 60%

#. After selecting your folder, click "Options"

    .. figure:: /_static/images/cifs/cifs-mac3.png
        :width: 60%

#. Enable file sharing with "SMB" for the user you would like to use to authenticate and click "Done"

    .. figure:: /_static/images/cifs/cifs-mac4.png
        :width: 60%

You'll need the "Computer Name," and the name of the "Shared Folder" you chose above, as well as your Mac username and password for the following section

Connect Embassy
---------------

#. Go to *Embassy > Create Backup*.

    .. figure:: /_static/images/config/embassy_backup.png
        :width: 60%

#. Click "Open".

    .. figure:: /_static/images/config/embassy_backup0.png
        :width: 60%

#. Fill in the following fields:

    * Hostname - This is the name of your Computer, as shown in the "Sharing" menu earlier
    * Path - This is the *name of the shared folder* you are using and **not** the full directory path
    * Username - This is the user on the remote machine that you used to create the shared directory
    * Password - This is your user (from above) password

    .. figure:: /_static/images/cifs/cifs-mac5.png
        :width: 60%

#. Click "Save".

That's it!  You can now :ref:`Create<backup-create>` encrypted, private backups of all your Embassy data to your Mac or external drive!!
