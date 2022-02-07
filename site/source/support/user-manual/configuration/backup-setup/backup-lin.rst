.. _backup-lin:

=====
Linux
=====

Remote Backups
--------------

The following will guide you through the prerequisite configuration to backup to a Linux machine or an external drive that is attached to a Linux machine.

.. tabs::

    .. group-tab:: Ubuntu

        #. Open the file manager

        #. Right-click the folder that you want to share and click ``Local Network Share`` from the menu.

        #. In the resulting window, select the check box for ``Share this folder`` and then check the boxes for ``Allow others to create and delete files in this folder`` and ``Guest access``.

        #. (Optional) Create a description in the ``Comment`` section

        #. Click ``Create Share``

        #. Click ``Add the permissions automatically``

        #. That's it!  Now you can make encrypted backups to your own, private "cloud" by using the :ref:`Backup flow<backups>` in the Embassy UI.

            .. figure:: /_static/images/TODO.png


    .. group-tab:: Other Linux

        #. Install Samba if it is not already installed

            * ``sudo pacman -S samba``                                      For Arch
            * ``sudo apt install samba``                                    For Debian
            * ``sudo yum install samba``                                    For CentOS/Redhat
            * ``sudo dnf install samba``                                    For Fedora

        #. Create a directory to share or choose an existing one

        #. Configure Samba

        #. Add your user to Samba and "own" the directory if you do not already
