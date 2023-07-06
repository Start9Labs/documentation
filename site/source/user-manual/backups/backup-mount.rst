.. _backup-advanced:

=====================
Advanced Backup Tools
=====================

.. contents::
  :depth: 2 
  :local:

  .. warning:: The following are advanced tools and using them is only advised when under the instruction of a Start9 Support Technician.  USE AT YOUR OWN RISK - these operations are not supported outside of the context of support.

.. _backup-mount:

Mount a Backup
--------------

#. :ref:`Setup SSH Access<ssh>` and connect to your server via SSH.  Elevate yourself to root once in:

    .. code-block:: bash

        sudo -i

#. Any previously added Network Folder backup location (or physical drive) will be available.  Enter the following command:

    .. code-block:: bash

        embassy-cli backup target list

    .. figure:: /_static/images/backups/backup-target-list.png
        :width: 60%

#. Select the backup target from the available list.  In this example, we could use either ``disk-/dev/sdb1`` or ``cifs-1``:

    .. code-block:: bash

        embassy-cli backup target mount disk-/dev/sdb1 "YourMasterPasswordGoesHere"

    .. figure:: /_static/images/backups/backup-mount.png
        :width: 60%

    The terminal will print the directory where your decrypted backup is now mounted.

#. `ls` the directory to inspect it, and continue any other operations necessary:

    .. figure:: /_static/images/backups/backup-mount-ls.png
        :width: 60%