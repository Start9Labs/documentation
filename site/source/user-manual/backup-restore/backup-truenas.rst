.. _backup-truenas:

======================
TrueNAS Network Folder
======================

.. contents::
  :depth: 2 
  :local:
    
.. note:: This guide was created by a Start9 community member.  This is not yet officially supported.  Please report any feedback that may help improve the process.

Setup Network Folder
--------------------

    .. note:: This guide assumes you have already created a ZFS disk pool in *Storage > Pool* as a place to store your backups.  If you need help with this step, see the `TrueNAS documentation <https://www.truenas.com/docs/scale/scaletutorials/storage/pools/createpoolscale/#creating-a-pool>`_.

#. In the TrueNAS UI, to add a user who will write the backups from the Start9 server to the NAS, go to **Accounts > Users > ADD**:

    .. figure:: /_static/images/backups/truenas-1-users.png
        :width: 60%
        
#. Fill in a human-readable **Full Name**, **Username**, and **Password** for the new user:

    .. figure:: /_static/images/backups/truenas-2-newuser.png
        :width: 60%

    Near the bottom, select **Shell: nologin**, and enable **Samba Authentication**.
    Click **SUBMIT**

#. Enable the SMB service via **Services > SMB**:

    .. figure:: /_static/images/backups/truenas-3-services-enable_smb.png
        :width: 60%

    Also ensure the **Start Automatically** box is checked.

#. Open a shell and create your backups directory:


    .. figure:: /_static/images/backups/truenas-4-shell-mkdir.png
        :width: 60%

    In this example, we will create a directory called *start9backupshare* on the root of our storage pool:

    .. code-block:: bash

        mkdir /mnt/zpooldisk1/start9backupshare

    This is the example path we will use in this guide.  You may choose a different name or path.

#. Under **Sharing > Windows Shares (SMB)**, drill down into the path until you find the directory to be shared:

    .. figure:: /_static/images/backups/truenas-5-sharing-smb-create_share.png
        :width: 60%

    We give the share the **Name** *nasshare*

    Click **SUBMIT** to create the share.

#. A **Configure ACL** dialog will emerge.  Click **CONFIGURE NOW**:

    .. figure:: /_static/images/backups/truenas-6-sharing-smb-config_acl.png
        :width: 60%

#. You will be brought to an **Edit ACL** screen.

    Under **User** check "Apply User" and select or type the username we created in Step 2:

    .. figure:: /_static/images/backups/truenas-7-acl.png
        :width: 60%

    Off to the right-hand side, *Permissions Type* should be set to "Basic" and *Permissions* should be set to "Full Control".
    Click **SAVE**

Connect StartOS
---------------

#. Go to *System > Create Backup*.

    .. figure:: /_static/images/config/backup.png
        :width: 60%

#. Click "Open".

    .. figure:: /_static/images/config/backup0.png
        :width: 60%

#. Fill in the following fields:

    * Hostname - Enter your truenas hostname: `truenas.local`
    * Path - This is the "Name" of the share that we set in step 5: *nasshare*
    * Username - This is the Username of the user we created in Step 2: *s9backup*
    * Password - This is the Password of that user, also set in Step 2

    .. figure:: /_static/images/backups/truenas-9-start9server-create_backup.png
        :width: 60%

#. Click "Save".

That's it!  You can now :ref:`Create<backup-create>` encrypted, private backups of all your Start9 server's data to your TrueNAS!
