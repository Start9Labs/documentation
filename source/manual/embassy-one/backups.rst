.. _backups:

Backups
=======

The Embassy supports encrypted backups of installed services to an external USB drive. Encryption utilizes the master password, so memorization of only one password is necessary.

To begin the backup process:

#. Enter the USB stick provided with the Embassy kit, or any USB drive with enough storage capacity, into a USB port on the device.
#. Navigate to the `Services` sub menu from the main dashboard menu.
#. Select the service to be backed-up.
#. Select the floppy disc icon next to the `Last Backup` menu item. If a backup was never completed, this should say "never".

.. figure:: /_static/images/bitcoin_view.png
    :width: 90%
    :alt: Bitcoin Core Service Sub Menu

    Bitcoin Core Service Sub Menu

#. In the modal prompt, select the available disc space. If no option is marked as available, ensure the USB drive has enough space and that it is properly inserted.

.. figure:: /_static/images/bitcoin_backup_view_storage.png
    :width: 90%
    :alt: Bitcoin Core Service Backup Storage

    Backup menu with available storage space

.. figure:: /_static/images/bitcoin_backup_view_no_storage.png
    :width: 90%
    :alt: Bitcoin Core Service Backup No Storage

    Backup menu with no available storage disc


#. Enter the master password to encrypt the backup.
#. "Creating Backup..." will appear on the service sub menu while the backup is in process.

.. figure:: /_static/images/bitcoin_creating_backup.png
    :width: 90%
    :alt: Bitcoin Core Service Backup No Storage

    Creating Backup

#. A notification will emit when the backup has successfully completed.
#. The `Last Backup` menu item in the service will now indicate the date and time at which the last backup was made.