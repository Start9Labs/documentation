.. _umbrel-compare:

=================
Umbrel Comparison
=================

.. contents::
  :depth: 2 
  :local:

By popular demand, Start9 has provided a brief compare/contrast between StartOS and Umbrel.

How are they similar?
---------------------
Both Umbrel and StartOS dramatically simplify the process of discovering, downloading, and installing services onto a private server, and that is about where the similarities end.

How are they different?
-----------------------

Appearance
==========
Umbrel uses MacOS's aethetic. The user interface is clean, colorful, and customizable. StartOS offers a functional design with little color or customization.

Services
========
As of June 1, 2023, there are approximately 100 services available for Umbrel, and 40 services available for StartOS. Both offer developer docs that permit anyone anywhere to package anything, and neither is capable of gatekeeping.

Architecture
============
Umbrel itself is an *app* that can be *installed* onto most Debian or Ubuntu computers and virtual machines. StartOS is an *operating system* (Linux distro) that can be *flashed* onto most computers and virtual machines.

Config
======
Services often provide config files, such as Bitcoin's ``bitcoin.conf``. On Umbrel, updating config files requires using SSH and the command line. With StartOS, config files are presented as rich forms, including descriptions, downdowns, toggles, validated inputs, etc.

Backups
=======
When it comes to self-hosting, nothing is more important than making backups. With the exception of LND, Umbrel does not provide a means of backing up services. With StartOS, encrypted backups can be made by pushing a button.

Encryption
==========
On Umbrel, communications over the LAN are done over plain http. This means that anyone connected to your home WiFi network can trivially steal your passwords and money. With StartOS, communications over the LAN are done over encrypted https.

Monitoring
==========
Umbrel does not provide tools for monitoring the health or performance of services. SSH and the command line are needed to view service logs. StartOS offers custom health checks that display service health, and a live screen for viewing service logs.

DIY Options
===========
Both Umbrel and StartOS can be installed for free. As an app, Umbrel can only be installed on the Raspberry Pi and devices running Debian or Ubuntu. As an operating system, StartOS can be installed on just about any computer or virtual machine.

Pricing
=======
Both companies offer plug and play devices. Umbrel offers a single device for $700. It has a 2.9GHz processor, 16GB of RAM, and a 2TB NVMe SSD. Start9 offers a similar device for $563.

Start9 also has other options ranging from $199 to $1546.
