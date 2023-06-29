.. _diy-x86:

=======================
DIY Guidelines (x86_64)
=======================

.. contents::
    :depth: 2 
    :local:

Start9 is committed to ensuring that StartOS is accessible. This guide is to install StartOS on **most** x86_64 platforms (your mileage will vary).  The x86_64-based Server One and Server Pure are available for purchase on the `Start9 Store <https://store.start9.com/products>`_.

For more guidance or to share your experience with others, please `head to our community forum <https://community.start9.com/>`_.  Want to support sovereign computing?  Please consider a `donation to Start9 <https://btcpay.start9.com/apps/2Et1JUmJnDwzKncfVBXvspeXiFsa/crowdfund>`_.

Hardware
--------
StartOS can be run on a wide array of hardware.  StartOS is based on Linux, and on its own, is fairly lightweight.  The hardware you require will depend mostly on how you intend to use your server.  If you want to use a Bitcoin stack, you will want 8GB+ of RAM and 1TB+ of storage.  If you mostly intend to use your server to store and manage files/passwords, then RAM will be less important and storage will depend on your needs.  Check the current size of your existing storage solution (such as Dropbox or iCloud) to estimate your needs.  You can also test or run StartOS in a Virtual Machine (VM) without having to buy any hardware whatsoever!  

Check out `this forum post <https://community.start9.com/t/known-good-hardware-master-list-hardware-capable-of-running-embassyos-v0-3-3/>`_ for the most up-to-date list of known-good hardware.  For advanced functionality (such as extensible storage), or if you experience issues with a bare metal install, we recommend installation with a hypervisor, such as Proxmox.  A community member (Cyph3rp9nk) has written `a fantastic guide <https://telegra.ph/Guide-to-building-a-Bitcoin-Super-Node-02-27>`_ on how to do this.

.. _os-reqs:

Minimum OS Requirements
=======================
The specs below would be acceptable for a server running minimal services with minimal storage needs:

- Single vCPU Core 2Ghz (boost)
- 4GB RAM
- 64GB Storage
- Ethernet port

Recommended OS Requirements
===========================
If you intend to run Bitcoin or store any meaningful amount of data, we recommend the following:

- Quad-Core CPU 2.5Ghz+ (boost)
- 8GB+ RAM
- 1TB+ Storage

Flash and Install StartOS
-------------------------
.. topic-box::
  :title: Flashing (x86_64)
  :link: /latest/user-manual/flashing/flashing-x86
  :icon: scylla-icon scylla-icon--overview
  :class: large-4
  :anchor: View Guide

  Flash StartOS for use on an x86_64 machine
