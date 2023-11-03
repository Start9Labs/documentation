.. _data-mount:

==================
Mount a Data Drive
==================

If you have an encrypted disk from a prior StartOS installation, you can mount its decrypted contents on a Linux computer.

.. warning:: This guide is advanced and should only be used when instructed by a Start9 technician.

#. Attach the StartOS data drive to your Linux desktop or laptop computer.

#. Ensure cryptsetup is installed:

    .. code-block:: bash

        sudo apt update && sudo apt install -y cryptsetup

#. Enter the following command to reveal your disk's crypto_LUKS filesystems and their labels:

    .. code-block:: bash

        lsblk --fs

    .. figure:: /_static/images/backups/disk-mount-1-lsblk.png
        :width: 60%

    We are interested in the services data so copy the long label ending with ``package-data``.

#. Take that label, prepend ``/dev/mapper/`` to it, and feed it to ``cryptsetup``:

    .. code-block:: bash

        sudo cryptsetup open /dev/mapper/EMBASSY_NBMVE7OASAPTIIXNEPFN6PLAPJNT72F2XAVK43L2PGB6O2JRB35A-package--data startos_data_unlocked
    
    You will be prompted for the password to decrypt the filesystem which is ``password``, and a new device mapping called `startos_data_unlocked` will be created.

#. Mount the `startos_data_unlocked` device at a path of your choosing.  Here, we will use ``/mnt/startos_data``:

    .. code-block:: bash

        sudo mkdir /mnt/startos_data
        sudo mount /dev/mapper/startos_data_unlocked /mnt/startos_data

#. Inspect the decrypted files in preparation for copying via ``cp``, ``scp``, ``rsync`` or similar utility:

    .. figure:: /_static/images/backups/disk-mount-3-inspect.png
        :width: 60%
