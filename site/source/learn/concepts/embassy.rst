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

.. _sessions:

Session
-------
A session is simply a logged-in connection to your Embassy.  You can view your :ref:`Active Sessions<active-sessions>`, and kill one if you suspect it is not legitimate, or no longer use it.

.. _service-container:

Service Container
-----------------
Each service is compartmentalilzed into its own "container," at this time, this normally means a `Docker <docker.com>`_ container.  There are several reasons for this, including security, ease of use, and maintenance.

.. _service-dependencies:

Dependencies
------------
Some services have dependencies on other services. A service may even require its dependency to be *configured* in a particular way.

Traditionally, managing dependencies was a massive headache and a huge barrier to running a personal server. But no more! The Embassy's revolutionary dependency management system makes the process transparent and simple.

If a service has one or more dependencies, or a dependency needs to be configured in a particular way, your Embassy will inform you and offer solutions.

Sometimes, a dependency can be satisfied in multiple ways. For example, Lightning has a dependency on Bitcoin. But that does not necessarily mean you need to have Bitcoin installed on your Embassy. You could just as easily configure Lightning to use another Bitcoin node located somewhere else!

.. _web-ui:

Web User Interface (UI)
-----------------------
A User Interface, or UI, is as the name suggests, the way in which the user interacts with some software, typically in our context it will be a graphical interface (GUI).  A WebUI is basically a website that is served (often by your Embassy) specifically for a user to issue commands or view data.  A great example of this is EmbassyOS itself, which serves a WebUI for the user to add/remove services, make configurations, etc.  This is your main point of contact with EOS.

.. _interfaces:

Service Interfaces
------------------
In EmbassyOS versions 0.2.x, each installed service received its own Tor hidden service URL. For some services, such as File Browser, the URL represented a website that could be visited in the browser; for other services, such as Bitcoin, the URL had to be input into a native client wallet such as Fully Noded or Specter.

Certain services, such as Bitcoin, actually have multiple interfaces. Bitcoin has an RPC interface, a P2P interface, and could potentially even have a graphical interface, such as a dashboard displaying important node information. Using the same URL for these various interfaces is not only confusing, it could potentially pose a security vulnerability. For example, a user may want to share their P2P interface address with someone for peering but not want to give out their UI address, which is for private use only.

As such, EmbassyOS 0.3.0 permits services to have multiple interfaces, each receiving its own Tor address and/or LAN address. Users can then view and access all interfaces for a given service inside the new :ref:`Interfaces <service-interfaces>` section of the service dashboard.


.. _health-checks:

Health Checks
-------------
One of the most critical duties of a sysadmin or devops engineer is to build systems to monitor health. For example, a simple health check that monitors the availability of an LND node could mean the difference between that node having a poor reputation or a great one. Sometimes, it is not obvious when a service is unhealthy, especially since “health” is a subjective term depending on the subject. For example, is your Bitcoin node “healthy” if it is not fully synced? Is it healthy if the user interface is unreachable but everything else is working ok?

In EmbassyOS 0.3.0, package developers define what constitutes health and implement health checks according to subjective criteria that are then displayed to the user in easily digestible messages, complete with icons and colors. Even better, health checks are completely arbitrary and turing complete, meaning they can include anything, including config options and internal or external dependencies! For example, a Lightning wallet package developer could say “this service is only healthy if (1) it is fully synced, (2) Bitcoin is fully synced, (3) LND is fully synced, and (4) if and only if the user has opted for real-time pricing from a third party website, that third party website must be reachable.” Enormous power.


