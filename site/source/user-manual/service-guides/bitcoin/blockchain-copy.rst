.. _blockchain-copy:

====================
Blockchain Migration
====================

.. contents::
  :depth: 2
  :local:

If you have already synced the Bitcoin blockchain to the tip on one Embassy, and would like to skip IBD on another Embassy, follow this guide.

.. note:: The following guide requires that you have already :ref:`setup SSH on both Embassies<ssh>`.
  In this guide, we will refer to your synced Embassy as embassy-AAAAAAA.local and the Embassy with no Bitcoin synced as embassy-BBBBBBB.local.  Of course, please replace AAAAAAA and BBBBBBB with your appropriate Embassies' names.

**Log into Embassy with synced blockchain**

#. Stop the Bitcoin Core service on `https://embassy-AAAAAAA.local` (Services > Bitcoin Core > Stop)

#. :ref:`Open an ssh session <connecting-via-ssh>` to your Embassy with the synced chain (embassy-AAAAAAAA.local)

#. Once at the shell, perform the following commands

    .. code-block:: bash

        sudo -i
        ssh-keygen -t ed25519 -N '' -f .ssh/embassy2.key
        chmod 600 .ssh/embassy2.key*
        cat .ssh/embassy2.key.pub

#. Copy the output from the cat command into embassy-BBBBBBB's **Embassy -> SSH -> Add New Key** text field:

    .. figure:: /_static/images/walkthrough/ssh_key_add.jpg

#. Back on the shell of embassy-AAAAAAA.local, do the following (don't forget to replace embassy-BBBBBBB.local in the rsync command before you perform it):

    .. code-block:: bash

        cd /embassy-data/package-data/volumes/bitcoind/data/main/
        rsync -e "ssh -i ~/.ssh/embassy2.key" -povgr --append-verify --rsync-path="sudo mkdir -p /embassy-data/package-data/volumes/bitcoind/data/main ; sudo rsync" ./{blocks,chainstate} start9@embassy-BBBBBBB.local:/embassy-data/package-data/volumes/bitcoind/data/main/

#. Wait some hours until the copy is complete.  On a gigabit network, the limiting factor will be the write speed of your SSD on the receiving Embassy.  When it is complete, clean up a bit:

    .. code-block:: bash

        rm .ssh/embassy2.key*
        exit

#. Log into `https://embassy-BBBBBBB.local` and install, configure, and then start your Bitcoin Core service.  You should see it begin at 99%+ pre-synced.

#. You can now restart your Bitcoin Core service on `https://embassy-AAAAAAA.local` (Services > Bitcoin Core > Start)

.. _bitcoin-service: