.. _backup-linux:

====================
Linux Network Folder
====================

.. contents::
  :depth: 2 
  :local:

Installing Samba
--------------------

#. Install Samba if you have not already…

    .. note:: You can check if Samba is already running with: ``sudo systemctl status smbd``

    .. tabs::

        .. group-tab:: Debian-based

            #. For Ubuntu, Mint, Pop-OS, PureOS, etc

                .. code-block:: bash

                    sudo apt install samba && sudo systemctl enable smbd && sudo systemctl start smbd



        .. group-tab:: Arch

            #. For Arch

                .. code-block:: bash
                    
                    sudo pacman -S samba && sudo systemctl enable smbd && sudo systemctl start smb


        .. group-tab:: CentOS/Redhat

            #. For CentOS/Redhat

                .. code-block:: bash
                    
                    sudo yum install samba && sudo systemctl enable smb && sudo systemctl start smb

        .. group-tab:: Fedora
           
            #. For Fedora

                .. code-block:: bash
                    
                    sudo dnf install samba && sudo systemctl enable smb && sudo systemctl start smb


#. Add your user to Samba, replacing ``$USER`` with your Linux username.

    .. code-block:: bash

        sudo smbpasswd -a $USER

    First you will be prompted for your Linux password, then you will be asked to create a new **SMB password** for the user with permission to write to your new backup share. It can be the same password, or it can be different. Keep it somewhere safe, such as Vaultwarden.


#. Add your user to sambashare group, necessary on some systems.

    .. code-block:: bash

        sudo usermod -a -G sambashare $USER
    
    Again, replacing ``$USER`` and entering your Linux password when prompted, not your new SMB password.


#. In case your system is running a firewall by default or due to your own custom configuration, enter this command to allow connections to Samba.  If it generates an error, you can safely ignore it:

    .. code-block:: bash

        sudo ufw allow Samba


#. Create a directory to share or choose an existing one and make note of its location (path).  For this example, we will call the share ``backup-share`` and its corresponding shared directory will be located at ``/home/$USER/start9-backup``.  Replace ``$USER`` with your Linux username below.

    .. code-block:: bash

        mkdir -p /home/$USER/start9-backup

    .. note:: If you are on Fedora 38+, you need to do an extra step to allow the Samba share in SELinux:

        .. code-block:: bash

            sudo semanage fcontext --add --type "samba_share_t" "/home/$USER/start9-backup(/.*)?"
            sudo restorecon -R /home/$USER/start9-backup


#. Configure Samba by adding the following to the end of the ``/etc/samba/smb.conf`` file:

    a. First open the file...

    .. code-block::
        
        sudo nano /etc/samba/smb.conf

    b. Then add...

    .. code-block::

        [backup-share]
            path = "/home/$USER/start9-backup"
            create mask = 0600
            directory mask = 0700
            read only = no
            guest ok = no

   
    - ``[backup-share]`` in brackets is the *Share Name* and can be called anything you'd like.  We used ``backup-share`` in this example.
    - ``path`` should be the path to the directory you created earlier.

    c. Save/write the file and then exit.

    d. Test the config file with...

    .. code-block::
        
        testparm

    Look for "Loaded services file OK". You don't need to do anything else here.

----


Connect StartOS
---------------

#. Go to *System > Create Backup*.

    .. figure:: /_static/images/config/backup.png
        :width: 60%

#. Click "Open".

    .. figure:: /_static/images/config/backup0.png
        :width: 60%

#. Fill in the following fields:

    * Hostname - This is the hostname of the machine that your shared folder is located on, you can get this with ``hostname`` or ``hostnamectl``
    * Path - This is the "Share Name" (name of the share in your samba config) and **not** the full directory path.  In this guide we use ``backup-share``.
    * Username - This is your Linux username on the remote machine that you used to create the shared directory
    * Password - This is the password you set above using ``smbpasswd``

    .. figure:: /_static/images/config/backup1.png
        :width: 60%

#. Click "Save".

That's it!  You can now :ref:`Create<backup-create>` encrypted, private backups of all your StartOS data to your Linux machine or external drive!!
