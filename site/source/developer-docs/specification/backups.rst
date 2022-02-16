.. _service_backups:

=======
Backups
=======

Backups are defined by the service developer in the backups section of the Manifest. By default, this action is a command executed within a Docker container.

EmbassyOS provides a system utility for creating backups. This system utility is the `duplicity <https://en.wikipedia.org/wiki/Duplicity_(software)>`_ library that is run inside the Docker image entitled _compat_. 

The path to be backed up can be specified in the Manifest. In the create backup example below, it is the last argument:

.. code:: yaml

    ...
    # create backup
    entrypoint: compat 
    # Arguments to pass into the entrypoint executable. In this example, the full command run will be: `compat duplicity <package-id> /mnt/backup /root/data`
    args: 
        - duplicity
        - <package-id>
        - /mnt/backup
        # For duplicity, the backup mount point needs to be something other than `/root`, so we default to `/root/data`
        - /root/data
    ...

For restoration purposes, it might be beneficial to ignore certain files or folders. For instance, ignore the shared/public folder that is mounted for dependencies that expose this feature as it causes data inconsistencies on restore.

In this case, create a ``.backupignore`` file in the mounted volume directory. This file contains a list of relative paths to the ignored files.

Example
-------

The `BTCPay Server wrapper <https://github.com/Start9Labs/btcpayserver-wrapper/blob/master/configurator/src/templates/.backupignore.templates>`_ demonstrates a good use of a backupignore template.

Ultimately, ``/datadir/.backupignore`` gets populated with:

.. code::

    /root/volumes/btcpayserver/start9/public
    /root/volumes/btcpayserver/start9/shared
