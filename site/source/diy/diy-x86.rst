.. _diy-x86:

===============
DIY Guide (x86)
===============

.. contents::
    :depth: 2 
    :local:

Start9 is committed to ensuring that StartOS is accessible. This guide is to install StartOS on most x86 platforms.  The x86-based Server Pro is available for purchase on the `Start9 Store <https://store.start9.com/products/embassy-pro>`_.

For help with this guide or to share your experience with others, please `head to our community forum <https://community.start9.com/>`_.  Want to support Sovereign Computing?  Please consider a `donation to Start9 <https://btcpay.start9.com/apps/2Et1JUmJnDwzKncfVBXvspeXiFsa/crowdfund>`_.

Hardware
--------
With x86 support, StartOS can now be run on a very wide array of hardware.  You can even try out or run eOS in a Virtual Machine (VM) without having to buy any hardware whatsoever!  Check out `this forum post <https://community.start9.com/t/known-good-hardware-master-list-hardware-capable-of-running-embassyos-v0-3-3/>`_ for the most up-to-date list of known-good hardware.

You can install StartOS directly to your hardware, however, for advanced functionality (such as extensible storage), or if you experience issues with a bare metal install, we recommend installation with a hypervisor, such as Proxmox.  A community member (Cyph3rp9nk) has written `a fantastic guide <https://telegra.ph/Guide-to-building-a-Bitcoin-Super-Node-02-27>`_ on how to do this.

.. _os-reqs:

.. note:: StartOS is based on Linux, and on its own, is fairly lightweight.  The hardware you require will depend mostly on how you intend to use your Embassy.  If you intend to use a Bitcoin stack, you will want at least 8GB of RAM and 1TB of storage.  If you mostly intend to use your server to store and manage files/passwords, then RAM will be less important and storage will depend on your needs.  Check the current size of your existing storage solution (such as Dropbox or iCloud) to get an idea what you will require.

Minimum OS Requirements
.......................
The specs below would be acceptable for an Embassy running minimal services with minimal storage needs

- Single vCPU Core 2Ghz
- 4GB RAM
- 64GB Storage
- Ethernet port

Recommended OS Requirements
...........................
If you intend to run Bitcoin or store any meaningful amount of data, you will need

- Quad-Core CPU 2.5Ghz+
- 8GB+ RAM
- 1TB+ Storage

Flash and Install StartOS
-------------------------
After building your hardware, you will need a copy of StartOS.  Head over to our :ref:`Flashing (x86) Guide <flashing-x86>` to complete your Embassy build.
