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
  In this guide, we will refer to your synced server as example-aaa.local and the server with no Bitcoin synced as example-bbb.local.  Of course, please replace example-aaa and example-bbb with your corresponding Start9 servers' unique `adjective-noun` names.

**Install but don't start Bitcoin Core on the blockchain-less server**

#. Log into `https://example-bbb.local` and install Bitcoin Core (**Marketplace > Bitcoin > Bitcoin Core > Install**).  Do *NOT* yet **CONFIGURE** or **START** Bitcoin Core.

**Prep your server with the synced blockchain**

#. Stop the Bitcoin Core service on `https://example-aaa.local` (**Services > Bitcoin Core > Stop**)

#. :ref:`Open an ssh session <connecting-via-ssh>` to example-aaa.local

#. Once at the shell, perform the following commands

    .. code-block:: bash

        sudo -i
        mkdir -m 0700 -p .ssh
        ssh-keygen -t ed25519 -N '' -f .ssh/example-bbb.key
        chmod 600 .ssh/example-bbb.key*
        cat .ssh/example-bbb.key.pub

#. Copy the output from the cat command into example-bbb's **System > SSH > Add New Key** text field:

    .. figure:: /_static/images/walkthrough/ssh-add-key.png

#. Back on the shell of example-aaa.local, do the following (don't forget to replace example-bbb in the rsync command below before you perform it):

    .. code-block:: bash

        cd /embassy-data/package-data/volumes/bitcoind/data/main/
        rsync -e "ssh -i ~/.ssh/example-bbb.key" -povgr --append-verify --rsync-path="sudo mkdir -p /embassy-data/package-data/volumes/bitcoind/data/main ; sudo rsync" ./{blocks,chainstate} start9@example-bbb.local:/embassy-data/package-data/volumes/bitcoind/data/main/

#. Wait some hours until the copy is complete.  On a gigabit network, the limiting factor will be the write speed of your SSD on the receiving server.  When it is complete, clean up a bit:

    .. code-block:: bash

        rm .ssh/example-bbb.key*
        exit

#. Switch back to `https://example-bbb.local`, selecting **Services > Bitcoin Core**, **CONFIGURE**, configure it as desired, **SAVE** and then **START** your Bitcoin Core service.  You should see it begin at 99%+ pre-synced.

#. You can now restart your Bitcoin Core service on `https://example-aaa.local` via **Services > Bitcoin Core > Start**.

.. _bitcoin-service: