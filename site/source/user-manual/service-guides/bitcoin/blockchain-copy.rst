.. _blockchain-copy:

====================
Blockchain Migration
====================

.. contents::
  :depth: 2
  :local:

.. warning:: This is an advanced feature and should be used with caution.  Start9 is not responsible for any damage you might cause through SSH access.

If you have already synced the Bitcoin blockchain to the tip on one server, and would like to skip IBD on another server, follow this guide.

.. note:: The following guide requires that you have already :ref:`setup SSH on both Start9 servers<ssh>`.
  In this guide, we will refer to your synced server as example-A.local and the server with no Bitcoin synced as example-B.local.  Of course, please replace AAAAAAA and BBBBBBB with your appropriate Start9 servers' names.

**Install but don't start Bitcoin Core on the blockchain-less server**

#. Log into `https://example-B.local` and install Bitcoin Core (**Marketplace > Bitcoin > Bitcoin Core > Install**).  Do *NOT* yet **CONFIGURE** or **START** Bitcoin Core.

**Prep your server with the synced blockchain**

#. Stop the Bitcoin Core service on `https://example-A.local` (**Services > Bitcoin Core > Stop**)

#. :ref:`Open an ssh session <connecting-via-ssh>` to example-A.local

#. Once at the shell, perform the following commands

    .. code-block:: bash

        sudo -i
        mkdir -m 0700 -p .ssh
        ssh-keygen -t ed25519 -N '' -f .ssh/example-b.key
        chmod 600 .ssh/example-b.key*
        cat .ssh/example-b.key.pub

#. Copy the output from the cat command into example-B's **System > SSH > Add New Key** text field:

    .. figure:: /_static/images/walkthrough/ssh_key_add.jpg

#. Back on the shell of example-A.local, do the following (don't forget to replace example-B.local in the rsync command before you perform it):

    .. code-block:: bash

        cd /embassy-data/package-data/volumes/bitcoind/data/main/
        rsync -e "ssh -i ~/.ssh/example-b.key" -povgr --append-verify --rsync-path="sudo mkdir -p /embassy-data/package-data/volumes/bitcoind/data/main ; sudo rsync" ./{blocks,chainstate} start9@example-B.local:/embassy-data/package-data/volumes/bitcoind/data/main/

#. Wait some hours until the copy is complete.  On a gigabit network, the limiting factor will be the write speed of your SSD on the receiving server.  When it is complete, clean up a bit:

    .. code-block:: bash

        rm .ssh/example-b.key*
        exit

#. Switch back to `https://example-B.local`, selecting **Services > Bitcoin Core**, **CONFIGURE**, configure it as desired, **SAVE** and then **START** your Bitcoin Core service.  You should see it begin at 99%+ pre-synced.

#. You can now restart your Bitcoin Core service on `https://example-A.local` (**Services > Bitcoin Core > Start**)

.. _bitcoin-service: