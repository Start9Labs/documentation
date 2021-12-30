*******
Backups
*******

Creating frequent service backups is critical. If anything happens to your Embassy, these backups are your only path to recovering your data.

.. warning:: Backups are encrypted using your Embassy master password. If you forget your password, you lose your backups.


Creating A Backup
=================

To begin the backup process:

1. Enter a USB drive with sufficient capacity into a USB port on the device. The blue ports are USB 3.0. The black ports are USB 2.0.
2. Navigate to the `Services` sub menu from the main dashboard menu.
3. Select the service to be backed-up.
4. Select the floppy disc icon next to the `Last Backup` menu item. If a backup was never completed, this should say "never".

.. figure:: /_static/images/bitcoin_view.png
  :width: 90%
  :alt: Bitcoin Core Service Sub Menu

  Bitcoin Core Service Sub Menu

5. In the modal prompt, select the available disc space. If no option is marked as available, ensure the USB drive has enough space and that it is properly inserted.

.. figure:: /_static/images/bitcoin_backup_view_storage.png
  :width: 90%
  :alt: Bitcoin Core Service Backup Storage

  Backup menu with available storage space

.. figure:: /_static/images/bitcoin_backup_view_no_storage.png
  :width: 90%
  :alt: Bitcoin Core Service Backup No Storage

  Backup menu with no available storage disc


6. Enter the master password to encrypt the backup.
7. "Creating Backup..." will appear on the service sub menu while the backup is in process.

.. figure:: /_static/images/bitcoin_creating_backup.png
  :width: 90%
  :alt: Bitcoin Core Service Backup No Storage

  Creating Backup

8. A notification will emit when the backup has successfully completed.
9. The `Last Backup` menu item in the service will now indicate the date and time at which the last backup was made.


Restoring A Backup
==================

To begin the backup restore process:

1. Enter the same USB stick used to originally backup the service.
2. Navigate to the `Services` sub menu from the main dashboard menu.
3. Select the service to be backed-up.
4. Select the `Restore from backup` menu item.

.. figure:: /_static/images/restore_backup_menu.png
  :width: 90%
  :alt: Restore backup from Services tab

  Restore backup from Services tab

5. In the modal prompt, select the same disc used to originally back up the service. If no option is marked as available, ensure the USB drive is properly inserted.

.. figure:: /_static/images/restore_backup_submenu.png
  :width: 90%
  :alt: Restore backup submenu

  Restore backup sub-menu options

6. Note the warning that restoring will wipe current data.

.. figure:: /_static/images/backup_warning.png
  :width: 90%
  :alt: Backup warning message

  Backup warning message

7. Enter the master password to decrypt the backup and select `Restore`.

.. figure:: /_static/images/decrypt_backup.png
  :width: 90%
  :alt: Decrypt backup

  Decrypt backup view

8. "Restoring Backup..." will appear on the service sub menu while the restoration is in process.

.. note::
  The service might be momentarily unreachable as it starts back up. This is expected behavior.

.. figure:: /_static/images/restoring_backup.png
  :width: 90%
  :alt: Restoring backup

  Restoring backup view

9. A notification will emit when the backup restoration has successfully completed.
