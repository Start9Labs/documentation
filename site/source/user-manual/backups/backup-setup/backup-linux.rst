.. _backup-linux:

====================
Linux Network Folder
====================

.. contents::
  :depth: 2 
  :local:

Setup Network Folder
--------------------

.. note:: This guide is for Ubuntu only.  For Linux Mint, click on "Mint", or for different distros such as Arch, Debian, Pop-OS, PureOS, etc, click "Other Linux" below.

.. tabs::

    .. group-tab:: Ubuntu

        Check out the video below, and follow along with the steps in this guide to setup a Network Folder on your Linux machine, such that you may create encrypted, private backups of all your StartOS data.

        .. youtube:: LLIMC5P3NdY
          :width: 100%

        .. raw:: html

            <br/><br/>

        #. Install Samba if you have not already:

            .. code-block::

                sudo apt install samba && sudo systemctl enable smbd

        #. Add your user to samba, replacing ``$USER`` with your Linux username.

            .. code-block:: bash

                sudo smbpasswd -a $USER

            First you will be prompted for your linux password, then you will be asked to create a new SMB password for the user with permission to write to your new backup share.  Keep it somewhere safe, such as Vaultwarden.

        #. Right-click the folder that you want to backup to (or create a new one) and click "Properties"

            .. figure:: /_static/images/cifs/cifs-lin0.png
                :width: 60%

        #. Select the "Local Network Share" tab

            .. figure:: /_static/images/cifs/cifs-lin1.png
                :width: 60%


        #. Click "Share this folder"

            .. figure:: /_static/images/cifs/cifs-lin2.png
                :width: 60%

            - You may rename the "Share", if you prefer - **remember this name**, you will need it later in the StartOS dashboard

            - (Optional) Create a description in the "Comment" section
        
        #. In case your installation of Ubuntu is running a firewall by default or due to your own custom configuration, enter this command to allow connections to Samba.  If it generates an error, you can safely ignore it:

            .. code-block:: bash

                sudo ufw allow Samba


    .. group-tab:: Mint

        #. Install Samba if you have not already:

            .. code-block::

                sudo apt install samba && sudo systemctl enable smbd

        #. Add your user to samba, replacing ``$USER`` with your Linux username.

            .. code-block:: bash

                sudo usermod -a -G sambashare $USER
                sudo smbpasswd -a $USER

            First you will be prompted for your linux password, then you will be asked to create a new SMB password for the user with permission to write to your new backup share.  Keep it somewhere safe, such as Vaultwarden.

        #. Right-click the folder that you want to backup to (or create a new one, eg. ``start9-backup``) and click "Sharing Options"

            .. figure:: /_static/images/cifs/cifs-mint0.png
                :width: 60%
        
        #. Enter a Share name consisting of 12 or fewer characters and click "Create Share"

            .. figure:: /_static/images/cifs/cifs-mint1.png
                :width: 60%

            - You may rename the "Share", if you prefer - **remember this name**, you will need it later in the StartOS dashboard.  In this example, we call it ``backup-share``

            - (Optional) Create a description in the "Comment" section

        #. In case your installation of Mint is running a firewall by default or due to your own custom configuration, enter this command to allow connections to Samba.  If it generates an error, you can safely ignore it:

            .. code-block:: bash

                sudo ufw allow Samba


    .. group-tab:: Other Linux

        1. Install Samba if it is not already installed.

            * ``sudo pacman -S samba``                                      For Arch
            * ``sudo apt install samba``                                    For Debian-based distros (Pop-OS, PureOS, etc)
            * ``sudo yum install samba``                                    For CentOS/Redhat
            * ``sudo dnf install samba``                                    For Fedora

        2. Create a directory to share or choose an existing one and make note of its location (path).  For this example, we will call the share ``backup-share`` and its corresponding shared directory will be located at ``/home/$USER/start9-backup``.  Replace ``$USER`` with your Linux username below.

        .. code-block:: bash

            mkdir -p /home/$USER/start9-backup

        .. note:: If you are on Fedora 38+, you need to do an extra step to allow the Samba share in SELinux:

            .. code-block:: bash

                sudo semanage fcontext --add --type "samba_share_t" "/home/$USER/start9-backup(/.*)?"
                sudo restorecon -R /home/$USER/start9-backup

        3. Configure Samba by adding the following to the end of the ``/etc/samba/smb.conf`` file:

            .. code-block::

                [backup-share]
                    path = "/home/$USER/start9-backup"
                    create mask = 0600
                    directory mask = 0700
                    read only = no
                    guest ok = no

            Where:

            - ``[backup-share]`` is the *Share Name* inside brakets, and can be called anything you'd like.  We used ``backup-share`` in this example.
            - ``path`` should be the path to the directory you created earlier

            Copy the remainder of the entry exactly as it is

        4. Open a terminal and enter the following command, replacing ``$USER`` with your Linux username:

                .. code-block:: bash

                    sudo smbpasswd -a $USER

                This creates a password for the Local Network Share.  Keep it somewhere safe, such as Vaultwarden.
        
        5. In case your installation of Linux (Pop-OS users take special note!) is running a firewall by default or due to your own custom configuration, enter this command to allow connections to Samba.  If it generates an error, you can safely ignore it:

            .. code-block:: bash

                sudo ufw allow Samba


Connect StartOS
---------------

#. Go to *System > Create Backup*.

    .. figure:: /_static/images/config/backup.png
        :width: 60%

#. Click "Open".

    .. figure:: /_static/images/config/backup0.png
        :width: 60%

#. Fill in the following fields:

    * Hostname - This is the hostname of the machine that your shared folder is located on
    * Path - This is the "Share Name" (name of the share in your samba config) and **not** the full directory path.  In this guide we use ``backup-share``.
    * Username - This is your Linux username on the remote machine that you used to create the shared directory
    * Password - This is the password you set above using ``smbpasswd``

    .. figure:: /_static/images/config/backup1.png
        :width: 60%

#. Click "Save".

That's it!  You can now :ref:`Create<backup-create>` encrypted, private backups of all your StartOS data to your Linux machine or external drive!!
