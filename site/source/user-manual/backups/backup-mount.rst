.. _backup:

==============
Mount a Backup
==============

.. contents::
  :depth: 2 
  :local:

In order to inspect the contents of an encrypted Start9 server backup, you first need to create a backup to mount and inspect.

Create a Backup
---------------

Make sure you have created a backup either to a LAN share or a disk attached to your Start9 server.  For instructions on that, see one of the guides below or if you already have a backup, proceed to :ref:`Mount Encrypted Backup<backup-mount>`.

.. toctree::
  :maxdepth: 1

  Linux Network Folder <backup-setup/backup-linux>
  Mac Network Folder <backup-setup/backup-mac>
  Windows Network Folder <backup-setup/backup-windows>
  Synology Network Folder <backup-setup/backup-synology>
  TrueNAS Network Folder <backup-setup/backup-truenas>
  Physical Drive <backup-setup/backup-physical>

.. _backup-mount:

Mount a Backup
--------------

#. :ref:`Setup SSH Access<ssh>` to and connect to your server via SSH.  Elevate yourself to root once in:

    .. code-block:: bash

        sudo -i

#. Any previously added Network Folder backup location (or Physical Drive) will be available.  Enter the following command:

    .. code-block:: bash

        embassy-cli backup target list

    .. figure:: /_static/images/backups/backup-target-list.png
        :width: 60%

#. Select the backup target from the available list.  In this example, we could use either `disk-/dev/sdb1` or `cifs-1`:

    .. code-block:: bash

        embassy-cli backup target mount disk-/dev/sdb1 "YourMasterPasswordGoesHere"

    .. figure:: /_static/images/backups/backup-mount.png
        :width: 60%

    The terminal in will print the directory where your backup is now mounted.

#. `ls` the directory to inspect it, and continue any other copy operations necessary:

    .. figure:: /_static/images/backups/backup-mount-ls.png
        :width: 60%