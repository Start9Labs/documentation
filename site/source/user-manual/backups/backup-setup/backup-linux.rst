.. _backup-linux:

===============
Backup to Linux
===============

.. warning:: Create frequent backups to avoid loss of data!
    
Use this guide to setup a LAN Shared folder on your Linux machine, such that you may create encrypted, private backups of all your Embassy data.

Setup LAN Shared Folder
-----------------------

.. tabs::

    .. group-tab:: Ubuntu

        #. Install ``Samba`` if you have not already:

            .. code-block::

                sudo apt install samba

        #. Add your user to samba, replacing ``YOUR-USER`` with your Linux username.

            .. code-block:: bash

                sudo smbpasswd -a YOUR-USER

            Create a password and keep it somewhere safe, such as Vaultwarden

        #. Right-click the folder that you want to backup to (or create a new one) and click "Properties"

            .. figure:: /_static/images/cifs/cifs-lin0.png
                :width: 60%

        #. Select the "Local Network Share" tab

            .. figure:: /_static/images/cifs/cifs-lin1.png
                :width: 60%


        #. Click "Share this folder"

            .. figure:: /_static/images/cifs/cifs-lin2.png
                :width: 60%

            - You may rename the "Share", if you prefer - **remember this name**, you will need it later in your EmbassyUI

            - (Optional) Create a description in the "Comment" section

        #. Check the box for "Allow others to create and delete files in this folder", then click "Create Share"

            .. figure:: /_static/images/cifs/cifs-lin3.png
                :width: 60%

        #. Click "Add Permissions Automatically"

            .. figure:: /_static/images/cifs/cifs-lin4.png
                :width: 60%


    .. group-tab:: Other Linux

        #. Install Samba if it is not already installed.

            * ``sudo pacman -S samba``                                      For Arch
            * ``sudo apt install samba``                                    For Debian
            * ``sudo yum install samba``                                    For CentOS/Redhat
            * ``sudo dnf install samba``                                    For Fedora

        #. Create a directory to share or choose an existing one and make note of its location (path).  For this example, it will be called ``test-backup`` and located at ``/home/user/test-backup``

        #. Configure Samba, by adding the following to the end of the ``/etc/samba/smb.conf`` file:

            .. code-block::

                [test-share]
                    path = /home/user/test-backup
                    create mask = 0666
                    directory mask = 0777
                    read only = no
                    guest ok = no

            Where:

            - ``[test-share]`` is the *Share Name*, or title of the entry, and can be called anything you'd like
            - ``path`` should be the path to the directory you created earlier

            Copy the remainder of the entry exactly as it is

        #. Open a terminal and enter the following command, replacing ``YOUR-USER`` with your Linux username:

                .. code-block:: bash

                    sudo smbpasswd -a YOUR-USER

                Create a password and keep it somewhere safe, such as Vaultwarden


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

That's it!  You can now create encrypted, private backups of all your Embassy data to your Linux machine or external drive!!
