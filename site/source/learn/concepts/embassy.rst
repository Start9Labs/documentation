.. _embassy-concepts:

=====================
Embassy and EmbassyOS
=====================

.. _embassy:

Embassy
-------
Embassy is the plug 'n' play hardware device sold by Start9.  The current iteration is a Raspberry Pi with an internal speaker in a custom, passively cooled case.  The Embassy comes pre-loaded with EmbassyOS.  Check out the video below to get a brief overview:

.. youtube:: GfMvXJxYamw

.. _embassy-os:

EmbassyOS
---------
EmbassyOS (EOS) is a Linux-based operating system custom built for self-hosting open source software.  EOS has a range of features that allow anyone to run their own server software without needing all the traditionally required systems administration skills.  Advanced dependency management, sensibly defaulted configuration with customization, and minimal reliance on the developers are just a few; all wrapped into a sleek GUI that anyone can operate.  No command line required!

.. _product-key:

EmbassyOS Product Key
---------------------
Whether you purchase a device, download an image, or build yourself from source, every copy of EmbassyOS has it's own unique Product Key, which is generated with the creation of each EOS image.

If you purchase a device from us, this is printed on the bottom of your Embassy.  If you purchase a download, we provide you the key.  If you build from source, the key is created during the build.

The first and foremost use of the Product Key is to encrypt data that is sent to Embassy at :ref:`Initial Setup<initial-setup>`.  There are several other usecases.  Start9 keeps an anonymous database of all Product Keys that have been purchased by us (ZERO additional data is associated) so that we can verify someone is a "paid user."  Currently this is just to allow someone to get a new copy of the EOS image if they have a problem, but in future we intend to give added bonuses to customers who have chosen to pay us for a copy of the software.

.. _services:

Services
--------
The server-side software available on EmbassyOS are referred to as "Services."  It's important to distinguish the difference between *services* and *applications*.  Applications are generally *client-side*.  This means that they are either standalone software, or they reach out to a server in order to operate.  Services are *server-side*.  These generally run 24/7, waiting for commands from a user via an application.

.. _webui:

Web User Interface (UI)
-----------------------
A User Interface, or UI, is as the name suggests, the way in which the user interacts with some software, typically in our context it will be a graphical interface (GUI).  A WebUI is basically a website that is served (often by your Embassy) specifically for a user to issue commands or view data.  A great example of this is EmbassyOS itself, which serves a WebUI for the user to add/remove services, make configurations, etc.  This is your main point of contact with EOS.
