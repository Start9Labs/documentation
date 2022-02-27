.. _cifs-synology:

==================
Backup to Synology
==================

.. note:: This guide was created by a Start9 community member.  This is not yet officially supported.  Please report any feedback that may help improve the process.

#. In Synology UI, go to *Control Panel > Shared Folder* and select the folder you want to use. Click "Permissions" and make sure you have read/write permissions for the user you're going to be logging in as. Click "Save".

#. Back in Synology UI, go to *Control Panel > File Services > SMB* and click the SMB drop down button if it isn't already selected. Ensure that "Enable SMB service" is checked.

    .. note:: Under Advanced Settings on the same dropdown, "Min SMB protocol" was set to SMB2 and "Max SMB protocol set to SMB3" - this may or may not be necessary

#. In the same dropdown, under "Note" will be "PC (Windows Explorer): \". This DeviceAddressName is the "Hostname" within the Embassy New Shared Folder dialog, and note that it is case sensitive and that the \ have been removed.

#. Back in Synonogy UI, click "File Station" and navigate so that you can see the the desired destination folder. Right click the folder, then *Properties > General*. Next to "Location" will be a folder location of the format ///, the / portion (so without the volume label) is the "Path" within the Embassy New Shared Folder dialog.

.. tip:: Keeping a strong password and making regular backups are the humble responsibilities of digital independence, remain ever vigilant!
