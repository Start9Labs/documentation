.. _backup-windows:

======================
Windows Network Folder
======================

.. contents::
  :depth: 2 
  :local:

Check out the video below, and follow along with the steps in this guide to setup a Network Folder on your Windows machine (or attached drive), such that you may create encrypted, private backups of all your Embassy data.

   .. youtube:: wqbXRjttJQY 
      :width: 100%

Setup Network Folder
--------------------

#. Create a folder, or select an existing one.  Right-click the folder and select "Properties"

    .. figure:: /_static/images/cifs/cifs-win0.png
        :width: 60%

#. Click the "Sharing" tab...

    .. figure:: /_static/images/cifs/cifs-win1.png
        :width: 60%

    then click "Share"

    .. figure:: /_static/images/cifs/cifs-win2.png
        :width: 60%

#. Select a user you want to use for login and click "Share"

    .. figure:: /_static/images/cifs/cifs-win3.png
        :width: 60%

    .. note::

        If you get the following dialogue box, you have designated your network "Public."  You may wish to change to "Private" if this is your home network.  Otherwise you may turn on network sharing for public networks.

            .. figure:: /_static/images/cifs/cifs-win4.png
                :width: 60%

#. Note the share's name, "SharedFolder" displayed in black text in the example screenshot below, above the long hostname and Windows directory path in grey text, both highlighted in blue.  We will take the share's name and enter it in the final step below.

    .. figure:: /_static/images/cifs/cifs-win5.png
        :width: 60%

Connect Embassy
---------------

#. Return to your EmbassyUI, and go to *System > Create Backup*

    .. figure:: /_static/images/config/embassy_backup.png
        :width: 60%

#. Click "Open" to set up a new connection to your Shared Folder

    .. figure:: /_static/images/config/backup0.png
        :width: 60%

#. Fill out the following fields as shown below:

    .. figure:: /_static/images/config/backup1.png
        :width: 60%

    - For "Hostname" - Enter your Windows computer name (this is shown after a ``\\`` in Windows)
    - For "Path" - Enter the full path followed by the share name displayed in the Windows sharing dialog shown in Step 4 above.  In our example this would be, literally, ``/Users/win/Desktop/SharedFolder``. When entering the path, make sure replace the backshashes ``\`` shown by Windows with forward slashes ``/``.
    - Enter your Windows username and password in the "User" and "Password" fields

.. caution::
    If you use a "PIN" to log in to Windows, keep in mind that your password needs to be the user's full password, NOT the PIN!  Office365 accounts also may **not** work, try a regular user in this case.

.. tip::
    If you recieve the following error:
    
    **Filesystem I/O Error mount error(115): Operation now in progress**

    Click Start > Settings > Network & Internet > Ethernet (or WiFi) and select the "Private" profile to treat your LAN as a trusted network that allows file sharing.

That's it!  You can now :ref:`Create<backup-create>` encrypted, private backups of all your Embassy data to your Windows machine or external drive!!
