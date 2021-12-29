.. _backup-lin:

=====
Linux
=====

There are 2 options for backing up your Embassy and all its service data.  You can setup a shared folder on a remote machine, such as a laptop or desktop, or you can backup to a local drive, which must be externally powered or plugged into a powered USB hub before plugging into Embassy.

Remote Backups
--------------

Ubuntu
======

#. Open the file manager
#. Right-click the folder that you want to share and click ``Local Network Share`` from the menu.
#. In the resulting window, select the check box for ``Share this folder`` and then check the boxes for Allow others to create and delete files in this folder and Guest access.
#. (Optional) Create a description in the ``Comment`` section
#. Click ``Create Share``
#. Click ``Add the permissions automatically``
#. Next, in your Embassy interface, go to ``Embassy`` -> ``Create Backup``

Other Linux
===========

#. Install Samba
    # sudo yum install samba                                    For CentOS/Redhat
    # sudo dnf install samba                                    For Fedora
    # sudo apt install samba                                    For Debian
    # sudo pacman -S samba                                      For Arch

Local Backups
-------------

#. With Embassy powered down, plug in your external drive to the powered hub if you are using one, or directly into Embassy's available USB 3.0 (blue) slot if it is externally powered.
#. Plug in power to your hub or drive
#. Boot Embassy and go to ``Embassy`` -> ``Create Backup``
#.
