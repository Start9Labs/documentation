.. _forgot-password:

===============
Forgot Password
===============

.. note:: There is currently no way to reset you Embassy master password through a standard UI flow.

Using SSH
---------

.. note:: Resetting you password with SSH only possible if you have already :ref:`set up SSH<ssh>` on your Embassy. 

#. Use the command line to gain SSH access to your Embassy, replacing ``[network-id]`` with your Embassy's unique ID:

    .. code-block:: bash

        ssh root@embassy-[network-id].local

#. Check if you have sqlite3 installed (with ``which``). If not, install it (with ``apt``):

    .. code-block:: bash

        which sqlite3
        sudo apt install sqlite3

#. Access the sqlite3 terminal:

    .. code-block:: bash

        sudo sqlite3 /root/agent/start9_agent.sqlite3

#. Run:

    .. code-block:: bash

        delete from account;
        .quit

#. Exit the SSH session:

    .. code-block:: bash

        exit

    .. warning:: Running setup process will generate new certificate and Tor address for your Embassy.

#. You can now visit http://embassy.local to reclaim your Embassy and set a new password.

Using a Linux Computer
----------------------

#. Shut down your Embassy, disconnect from power, and remove the microSD card.
#. Insert the microSD card into your Linux computer and mount the drive::

      mount [drive] [mount folder]

#. Check if you have sqlite3 installed. If not, install it::

      which sqlite3
      sudo apt install sqlite3

#. Access the sqlite3 terminal::

      sudo sqlite3 /root/agent/start9_agent.sqlite3

#. Run::

      delete from account;
      .quit

#. Un-mount the microSD card::

      umount [mount folder]

#. Return the microSD card to your Embassy and power it on.

    .. warning:: Running setup process will generate new certificate and Tor address for your Embassy.

#. You can now visit http://embassy.local to reclaim your Embassy and set a new password.

No SSH/Linux
------------

You must factory reset your device by re-installing EmbassyOS, resulting in permanent loss of data. Visit the `image downloader <https://images.start9labs.com/>`_ to obtain a new EmbassyOS image, then follow the :ref:`Initial Setup <initial-setup>` guide.
