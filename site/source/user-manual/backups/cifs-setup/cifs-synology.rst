.. _cifs-synology:

========
Synology
========

The following will guide you through the prerequisite configuration to backup to a Synology NAS device.

Go to the Synology UI > Control Panel > Shared Folder > select the folder you want to use > Permissions tab > make sure that you have read/write permissions for the user you're going to be logging in as (probably unnecessary but I made a separate user for this to keep things segregated) > Save

Then go to the Synology UI > Control Panel > File Services > SMB Tab > Click the SMB drop down button if it isn't already selected > Ensure that "Enable SMB service" is checked.
Under Advanced Settings on the same dropdown I have "Min SMB protocol" set to SMB2 and "Max SMB protocol set to SMB3", I got the impression somewhere that it might be important but I don't know if those are default values or if they actually matter).

On the same dropdown, under "Note" will be "PC (Windows Explorer): \". This DeviceAddressName is the "Hostname" within the Embassy New Shared Folder dialog, and note that it is case sensitive and that the \ have been removed.

Go to Synology UI > File Station > navigate so that you can see the the desired destination folder > right click on it > Properties > General Tab, next to Location: will be an folder location of the format ///, the / portion (so without the volume label) is the "Path" within the Embassy New Shared Folder dialog.

Fill in the Username and Password appropriately for the previously checked user.

