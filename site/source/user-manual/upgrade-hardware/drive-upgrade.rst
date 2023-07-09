.. _ssd-upgrade:

================
Upgrade Your SSD
================
This guide will go over how to upgrade your data drive and transfer the data from the old one to the new one.  This will preserve the entire state of your server, including all Tor and LAN addresses as well as channels you have open on the lightning network!  You may like to do this in order to increase storage size, storage speed, or just to move your existing server data to new hardware entirely.

This is not the same as running a back up and restoring them onto a new server.  You can read about the differences on the :ref:`Restore page<backup-restore>`.

.. tip:: You will likely need a cable, adapter, or enclosure in order to attach your old drive via USB for data migration.

Power Down and Exchange Hardware
--------------------------------

#. Start by shutting down your server:

    .. figure:: /_static/images/walkthrough/shutdown.png
        :width: 50%

#. Remove power and extract the existing drive from your device.

#. Install the new drive, ideally in the same hardware slot as the previous drive.  Be sure to secure with screws if applicable.

Flash StartOS and Transfer Data
-------------------------------

#. Flash your device with a fresh install of StartOS by following our :ref:`flashing guides <flashing>`.

#. Head to http://start.local from any device on the same LAN.

#. Select "Recover".

   .. figure:: /_static/images/setup/screen0-startfresh_or_recover.png
      :width: 30%

#. Select "Transfer".

   .. figure:: /_static/images/setup/transfer.png
      :width: 30%

#. Now plug in the **old drive** to your server, using an adapter if necessary.

    .. tip:: Use the fastest possible data transfer method, especially if moving terabytes of data.

#. Select the **old drive** - the one that is externally connected to your server, which you are migrating **from**.  You may need to hit "REFRESH" if it does not appear:

    .. figure:: /_static/images/setup/transfer-from.png
       :width: 30%

#. Select the **new drive** (installed earlier) that you are migrating **to**.

    .. warning:: Any data on this new drive will be PERMANENTLY ERASED!  BE CERTAIN that it is the correct drive.

    .. figure:: /_static/images/setup/transfer-to.png
       :width: 30%

#. You will be asked to create your master password. It can be the same as it was previously, or a new one.

    .. figure:: /_static/images/setup/screen5-set_password.png
        :width: 30%

#. Your data will now transfer.  Keep in mind that the more data you have, the longer this process will take, possibly even days.  

    .. note:: As an example, transferring 2TB of data from a Server Pure over a USB-to-enclosure with a new 4TB NVMe drive can take upwards of 36hrs, including up to 14hrs of "initialization," while StartOS indexes all the data (at the beginning of the process).  Please be patient.

    .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
        :width: 20%

#. You are now ready to proceed and use your server with its new drive! It will have the same addresses and root certificate as it did before migrating.

    .. figure:: /_static/images/setup/screen7-startfresh_complete.jpg
        :width: 30%

    .. warning:: Do not under any circumstances use your old drive to setup another server unless you wipe it first or wipe it during the initial setup process. If you have lightning channels you could lose all your funds!
