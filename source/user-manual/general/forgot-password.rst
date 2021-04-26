***************
Forgot Password
***************

There is currently no way to reset you Embassy master password through a standard UI flow.

SSH/Linux
=========

If you already have :ref:`SSH keys registered with your Embassy<ssh-setup>` **OR** you have access to a Linux computer, you can reset your Embassy password without losing any data.

* SSH:

  * Use the command line to gain SSH access to your Embassy::

      ssh pi@start9-[network-id].local

  * Check if you have sqlite3 installed. If not, install it::

      which sqlite3
      sudo apt install sqlite3
  
  * Access the sqlite3 terminal::

      sudo sqlite3 /root/agent/start9_agent.sqlite3

  * Run::

      delete from account;
      .quit

  * Exit the SSH session::

      exit

  * You can now use the Start9 Setup App to reclaim your Embassy and set a new password.

.. warning:: Running setup process will generate new certificate and Tor address for your Embassy.

* Linux computer:

  * Shut down your Embassy, disconnect from power, and remove the microSD card.
  * Insert the microSD card into your Linux computer and mount the drive::

      mount [drive] [mount folder]

  * Check if you have sqlite3 installed. If not, install it::

      which sqlite3
      sudo apt install sqlite3

  * Access the sqlite3 terminal::

      sudo sqlite3 /root/agent/start9_agent.sqlite3

  * Run::

      delete from account;
      .quit

  * Un-mount the microSD card::

      umount [mount folder]

  * Return the microSD card to your Embassy and power it on.
  * You can now use the Start9 Setup App to reclaim your Embassy and set a new password.

.. warning:: Running setup process will generate new certificate and Tor address for your Embassy.


No SSH/Linux
============

You must factory reset your device by re-installing EmbassyOS, resulting in permanent loss of data. Visit the `image downloader <https://images.start9labs.com/download>`_ to obtain a new EmbassyOS image, then follow the `installation instructions </getting-started/diy.html#installing-embassyos>`_.
