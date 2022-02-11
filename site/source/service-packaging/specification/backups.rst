.. _service_backups:

=======
Backups
=======

Everything within the root of the mounted volume directory will be stored in an EmbassyOS backup. This includes the config (config.yaml) and properties (stats.yaml) files, as well as any other persisted data within the volume directory.

For restoration purposes, it might be beneficial to ignore certain files or folders. For instance, ignore the shared/public folder that is mounted for dependencies that expose this feature as it causes data inconsistencies on restore.

In this case, create a `.backupignore` file. This file contains a list of relative paths to the ignored files.


Example
-------

The `btcpayserver wrapper <https://github.com/Start9Labs/btcpayserver-wrapper/blob/master/configurator/src/templates/.backupignore.templates>`_ demonstrates a good use of a backupignore template.

Ultimately, ``/datadir/.backupignore`` gets populated with:

.. code::

    /root/volumes/btcpayserver/start9/public
    /root/volumes/btcpayserver/start9/shared
