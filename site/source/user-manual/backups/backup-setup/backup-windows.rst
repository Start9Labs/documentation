.. _backup-windows:

=========================
Windows LAN Shared Folder
=========================

.. contents::
  :depth: 2 
  :local:

Use this guide to setup a LAN Shared Folder on your Windows machine (or attached drive), such that you may create encrypted, private backups of all your Embassy data.

Video Guide:
   .. youtube:: wqbXRjttJQY 
      :width: 100%

Text Guide:

Setup LAN Shared Folder
-----------------------

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

#. You'll need the path from this screen (shown in gray under the "SharedFolder" folder), for the final step below.

    .. figure:: /_static/images/cifs/cifs-win5.png
        :width: 60%

Connect Embassy
---------------

#. Return to your EmbassyUI, and go to *Embassy > Create Backup*

    .. figure:: /_static/images/config/embassy_backup.png
        :width: 60%

#. Click "Open" to set up a new connection to your Shared Folder

    .. figure:: /_static/images/config/embassy_backup0.png
        :width: 60%

#. Fill out the following fields as shown below:

    .. figure:: /_static/images/cifs/cifs-win6.png
        :width: 60%

    - For "Hostname" - Enter your Windows computer name (this is shown after a ``\\`` in Windows)
    - For "Path" - Enter the "Path" that is shown after the ``HOSTNAME\`` in Windows
    - Enter your Windows username and password in the "User" and "Password" fields

That's it!  You can now :ref:`Create<backup-create>` encrypted, private backups of all your Embassy data to your Windows machine or external drive!!
