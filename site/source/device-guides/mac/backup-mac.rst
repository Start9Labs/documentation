.. _backup-mac:

==================
Mac Network Folder
==================

.. contents::
  :depth: 2 
  :local:

Setup a Network Folder
----------------------

#. Identify or create a folder you would like to use to store your Start9 server's backups.

    .. tip:: You can select an external drive or folder within an external drive connected to your Mac if you'd like.

#. Go to **System Settings**:

    .. figure:: /_static/images/backups/backup-macos-2.png
        :width: 50%
        :alt: System settings

#. Click on **General** then **Sharing**:

    .. figure:: /_static/images/backups/backup-macos-3.png
        :width: 50%
        :alt: general-sharing

#. Click the **info** icon:

    .. figure:: /_static/images/backups/backup-macos-4.png
        :width: 50%
        :alt: enable-cifs

#. Click the toggle to enable file sharing and the **"+"** icon and select the folder you would like to make backups to:

    .. figure:: /_static/images/backups/backup-macos-5.png
        :width: 50%
        :alt: click-plus

#. Once added, click **Options**:

    .. figure:: /_static/images/backups/backup-macos-6.png
        :width: 50%
        :alt: ventura-folder-added
    
#. Enable SMB sharing for the user you want to use and then click **Done**.

    .. figure:: /_static/images/backups/backup-macos-7.png
        :width: 50%
        :alt: ventura-smb

    .. tip:: If you don't see a user available in this SMB File Sharing dialog with whom you want to access the share with, you can create a new user by backing out of the **File Sharing** menu and select **Users & Groups** > **Add User...** within System Settings.

#. You can now move on to connecting your server.
    
    .. tip:: You can find the hostname at the top of sharing window. The hostname will be an address beginning with smb://. To use as hostname disregard the smb:// and simply enter the ip address that follows it. You will need this in the next step. (alternatively you can use the computer hostname. (See directions below) Either method will work.


Connect Your Server
-------------------

#. Go to the **System** tab and click **Create Backup**:

    .. figure:: /_static/images/backups/backup-macos-8.png
        :width: 60%
        :alt: system-create-backup

#. Click **Open New**:

    .. figure:: /_static/images/backups/backup-macos-9.png
        :width: 60%
        :alt: open-new

#. You will now see the following:

    .. figure:: /_static/images/backups/backup-macos-10.png
        :width: 60%
        :alt: cifs-blank

    Enter the credentials as follows:

    * **Hostname** - This is the name of your computer.

      .. tip:: Sometimes it can be unclear what your Mac's hostname is. Check the tip in Step 8 of the section above to find it.  On some versions of Mac, you may need to open up Terminal and type `hostname` as below:
    
          .. figure:: /_static/images/cifs/hostname-terminal-mac.png
              :width: 35%
              :alt: hostname-terminal-mac

    * **Path** - This is the *name of the shared folder* you are using and **not** the full directory path.

        .. tip:: If you copied the share name from the Mac computer and it contained a space, macOS will have replaced the space with the string "%20".  Please re-replace `%20` with a space in this `Path` field.

    * **Username** - This is the user on the remote machine that you used to create the shared directory.
    * **Password** - This is the password to the above user.

    .. figure:: /_static/images/backups/backup-macos-11.png
        :width: 60%

    .. note:: If you are on MacOS Catalina (version 10.15.7), and the backup fails, please `see this Apple support thread <https://discussions.apple.com/thread/253970425>`_.  If the provided solution still doesn't work, SMB file sharing probably will not work for this old Mac.  Consider backing up to a USB thumb drive instead.

    .. note:: If you recently updated to MacOS Ventura (version 13.2), and you cannot get the share to connect:

        #. Turn off file sharing switch in **General > Sharing**
        #. Restart macOS
        #. Turn on file sharing switch in **General > Sharing**

#. Click **Connect**.

That's it!  You can now :ref:`create encrypted, private backups<backup-create>` of all your Start9 server's data to your Mac.
