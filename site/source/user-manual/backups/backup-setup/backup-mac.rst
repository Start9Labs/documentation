.. _backup-mac:

==================
Mac Network Folder
==================

.. contents::
  :depth: 2 
  :local:

Check out the video below, and follow along with the steps in this guide to setup a Network Folder on your Mac (or attached drive), such that you may create encrypted, private backups of all your Embassy data.

   .. youtube:: Uv7ul6ZKW5k
      :width: 100%

Setup Network Folder
--------------------
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

#. Go to *System > Create Backup*.

    .. figure:: /_static/images/config/embassy_backup.png
        :width: 60%

#. Click "Open".

    .. figure:: /_static/images/config/embassy_backup0.png
        :width: 60%

#. Fill in the following fields:

    * Hostname - This is the name of your Computer, as shown in the "Sharing" menu earlier

      .. tip:: Sometimes it can be unclear what your Mac's hostname is. One way to establish it for good is to open up Terminal and type `hostname` as below:
    
          .. figure:: /_static/images/config/hostname-terminal-mac.png
              :width: 60%


    * Path - This is the *name of the shared folder* you are using and **not** the full directory path.

        .. tip:: If you copied the share name from the Mac computer and it contained a space, macOS will have replaced the space with the string "%20".  Please re-replace `%20` with a space in this `Path` field.

    * Username - This is the user on the remote machine that you used to create the shared directory
    * Password - This is your user (from above) password

    .. figure:: /_static/images/cifs/cifs-mac5.png
        :width: 60%

    .. note:: If you are on MacOS Catalina (version 10.15.7), and the backup fails, please `see this Apple support thread <https://discussions.apple.com/thread/253970425>`_.  If the provided solution still doesn't work, SMB file sharing probably will not work for this old Mac.  Consider backing up to a USB thumb drive instead.

    .. note:: If you recently updated to MacOS Ventura (version 13.2), and you cannot get the share to connect:

        #. Turn off file sharing switch in **General > Sharing**
        #. Restart macOS
        #. Turn on file sharing switch in **General > Sharing**

#. Click "Save".

That's it!  You can now :ref:`Create<backup-create>` encrypted, private backups of all your Embassy data to your Mac or external drive!!
