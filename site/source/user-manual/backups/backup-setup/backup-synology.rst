.. _backup-synology:

=======================
Synology Network Folder
=======================

.. contents::
  :depth: 2 
  :local:
    
.. note:: This guide was created by a Start9 community member.  This is not yet officially supported.  Please report any feedback that may help improve the process.

Setup Network Folder
--------------------

#. In Synology UI, go to *Control Panel > Shared Folder* and select the folder you want to use.

    .. note:: Do not select "Use this shared folder" as folder encryption is not supported at this time
        
#. Back in Synology UI, go to *Control Panel > File Services > SMB* and click the SMB drop down button if it isn't already selected. Ensure that "Enable SMB service" is checked.

    .. note:: Under Advanced Settings on the same dropdown, "Min SMB protocol" was set to SMB2 and "Max SMB protocol set to SMB3" - this may or may not be necessary

#. In the same dropdown, under "Note" will be "PC (Windows Explorer): \". This DeviceAddressName is the "Hostname" within the Embassy New Shared Folder dialog, and note that it is case sensitive and that the \ have been removed.

#. Back in Synonogy UI, click "File Station" and navigate so that you can see the the desired destination folder. Right click the folder, then *Properties > General*. Next to "Location" will be a folder location of the format ///, the / portion (so without the volume label) is the "Path" within the Embassy New Shared Folder dialog.

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
    * Path - This is the "Share Name" (name of the share in your samba config) and **not** the full directory path
    * Username - This is the user on the remote machine that you used to create the shared directory
    * Password - This is your user (from above) password

    .. figure:: /_static/images/config/embassy_backup1.png
        :width: 60%

#. Click "Save".

That's it!  You can now :ref:`Create<backup-create>` encrypted, private backups of all your Embassy data to your Linux machine or external drive!!
