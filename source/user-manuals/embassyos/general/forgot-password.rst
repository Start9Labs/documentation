***************
Forgot Password
***************

There is currently no way to reset you Embassy master password through a standard UI flow.

SSH/Linux
=========

If you already have :ref:`SSH keys registered with your Embassy<ssh-setup>` **OR** you have access to a Linux computer, you can reset your Embassy password without losing any data.

* SSH:

  * Use the command line to gain remote access to your Embassy

      ssh pi@start9-[network-id].local

  * Install the sqlite3 command line utility

      sudo apt install sqlite3
  
  * Access the sqlite3 terminal::

      sudo sqlite3 /root/agent/start9_agent.sqlite3

  * Then inside the sqlite3 terminal::

      delete from account;
      .quit

  * You can now use the Start9 Setup App to reclaim your Embassy and set a new password.

* Linux computer:

  * Shut down your Embassy, disconnect from power, and remove the microSD card.
  * Insert the microSD card into your Linux computer and mount the drive::

      mount [drive] [mount folder]

  * Check if you have sqlite3 installed. If not, install it::

      which sqlite3
      sudo apt install sqlite3

  * Run::

      sudo sqlite3 [mount folder]/root/agent/start9_agent.sqlite3
      delete from account;
      .quit

  * Un-mount the microSD card::

      umount [mount folder]

  * Return the microSD card to your Embassy and power it on.
  * You can now use the Start9 Setup App to reclaim your Embassy and set a new password.


No SSH/Linux
============

The only way to regain access to your Embassy is to :ref:`contact the Start9 dev team<contact>` directly to obtain a new operating system image. This is equivalent to a factory reset; all data will be lost.