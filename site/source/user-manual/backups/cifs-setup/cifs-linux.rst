.. _cifs-linux:

=====
Linux
=====

The following will guide you through the prerequisite configuration to backup to a Linux machine or an external drive that is attached to a Linux machine.

.. tabs::

    .. group-tab:: Ubuntu

        #. Open the file manager

        #. Right-click the folder that you want to backup to (or create a new one) and click ``Local Network Share`` from the menu.

        #. In the resulting window, select the check box for ``Share this folder`` and then check the box for ``Allow others to create and delete files in this folder``.

        #. Create a description in the ``Comment`` section - remember this, you will need it later

        #. Click ``Create Share``

        #. Click ``Add the permissions automatically``

        #. That's it!  Now you can make encrypted backups to your own, private "cloud" by using the :ref:`Backup flow<backups>` in the Embassy UI.



    .. group-tab:: Other Linux

        #. Install Samba if it is not already installed.

            * ``sudo pacman -S samba``                                      For Arch
            * ``sudo apt install samba``                                    For Debian
            * ``sudo yum install samba``                                    For CentOS/Redhat
            * ``sudo dnf install samba``                                    For Fedora

        #. Create a directory to share or choose an existing one and make note of its location (path).  For this example, it will be called ``test-backup`` and located at ``/home/embassy/test-backup``

        #. Configure Samba, by adding the following to the end of the ``/etc/samba/smb.conf`` file:

            .. code-block::

                [testing]
                    path = /home/embassy/test-backup
                    create mask = 0666
                    directory mask = 0777
                    read only = no
                    guest ok = no

            Where:
            - ``[testing]`` is the *comment*, or title of the entry, and can be called anything you'd like
            - the ``path`` should be the path to the directory you created earlier
            - copy the remainder of the entry exactly as it is


        #. Add your user to Samba and "own" the directory if you do not already, then change the password

            .. code-block::

                smbpassword -a YOUR-USER
                smbpassword

After creating your password, you can return to your Embassy UI to complete setup and :ref:`Create the Backup <backup-create>`.
