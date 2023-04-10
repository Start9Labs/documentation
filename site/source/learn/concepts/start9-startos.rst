.. _start9-concepts:

=======================
Start9 Server & StartOS
=======================

.. contents::
  :depth: 2 
  :local:

.. _server:

Server One
----------
Server One is a plug 'n' play hardware device, based on the `Raspberry Pi <https://www.raspberrypi.org/>`_, assembled in-house by Start9.  The current iteration features an internal SSD, speaker, active cooling, and power management in a custom AIO (all-in-one) case. The One comes pre-loaded with :ref:`StartOS<start-os>`.  For more details, check out the `Server One tech specs <https://store.start9.com/products/embassy-one>`_.

Server Pro
----------
Server Pro is a plug 'n' play hardware device, based on the `Librem Mini <https://puri.sm/products/librem-mini/>`_, built by `Purism <https://puri.sm/about/>`_.  The Pro features a custom-built circuit board with active cooling, and an open-source firmware / boot stack. The Pro comes pre-loaded with :ref:`StartOS<start-os>`.  For more details, check out the `Server Pro tech specs <https://store.start9.com/products/embassy-pro>`_.

.. _start-os:

StartOS
-------
StartOS is a Linux-based operating system custom built for self-hosting open source software. It has a range of features that allow anyone to run their own server software without needing all of the traditionally required systems administration skills.  Features such as advanced dependency management, sensible default configuration with potential for customization, and a sleek GUI make for a smooth user experience with minimal reliance on the developers for people with all levels of technical expertise.

Currently, 2 builds of StartOS exist, one for the Raspberry Pi (Server One) and one for x86 (Embassy Pro). We currently only support the Raspberry Pi and Librem Mini hardware platforms, however with some minor tweaking, our builds should work on many other ARM and x86 devices.  We hope to officially support more platforms soon, and we highly encourage hacking and community builds!  Drop in our :ref:`community channels<contact>` to learn more and collaborate!!

.. _sounds:

Server Sounds
-------------
StartOS emits several sounds for user feedback and troubleshooting.  Below is the current library of potential sounds and their prospective meaning:

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/BEP.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * "bep" - Embassy is starting up

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/CHIME.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * "chime" - Embassy is ready

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/SHUTDOWN.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * "shutdown" - Embassy is shutting down

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/BEETHOVEN.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * "Beethoven" - An error has occurred.  Check your "Notifications" tab for more info, or :ref:`Contact Support<contact>`

.. _services-eos:

Services
--------
The server-side software available on StartOS are referred to as "Services."  It's important to distinguish the difference between *services* and *applications*.  Applications are generally *client-side*.  This means that they are either standalone software, or they reach out to a server in order to operate.  Services are *server-side*.  These generally run 24/7, waiting for commands from a user via an application.

.. _sessions:

Sessions
--------
A session is simply a logged-in connection to your Embassy.  You can view your :ref:`Active Sessions<session-management>`, and kill one if you suspect it is not legitimate, or no longer use it.

.. _service-container:

Service Container
-----------------
Each service is compartmentalized into its own "container."  At this time, this normally means a `Docker <https://docker.com>`_ container, however StartOS is modular and other options will be available soon.  There are several reasons for doing this, including security, ease of use, and maintenance.

.. _service-dependencies:

Dependencies
------------
A software dependency is a code library or package that is reused in a new piece of software. The benefit of software dependencies is that they allow developers to more quickly deliver software by building on previous work.  Software may even require its dependency to be configured in a particular way.

Traditionally, managing dependencies has been a massive headache and has served as a huge barrier to running a personal server. But no more! The StartOS dependency management system makes the process transparent and simple.

If a service has one or more dependencies, or a dependency needs to be configured in a particular way, your Embassy device will inform you and provide an automated solution, giving details of what will be done so you can make an informed decision before taking action.

Sometimes, a dependency can be satisfied in multiple ways. For example, Lightning has a dependency on Bitcoin. However, this does not necessarily mean you need to have Bitcoin installed on your Embassy. You could just as easily configure Lightning to use another Bitcoin node located somewhere else!

.. _web-ui:

Web User Interface (UI)
-----------------------
A User Interface (UI) is the way in which the user interacts with some software.  Typically, this is achieved through a graphical interface (GUI).  A WebUI is a website that is served specifically for a user to issue commands or view data.  A great example of this is StartOS itself, which serves a WebUI for the user to add/remove services, make configurations, etc.  This is your main point of contact with eOS.

.. _interfaces:

Service Interfaces
------------------
In StartOS, each installed service creates its own Tor Hidden Service URL. For some services, such as File Browser, the URL represents a website that can be visited in the browser; for other services, such as Bitcoin, the URL has to be input into a native client wallet such as Fully Noded, Sparrow, or Specter.

Certain services, such as Bitcoin, actually have multiple interfaces. Bitcoin has an RPC interface, a P2P interface, and could potentially even have a graphical interface, such as a dashboard displaying important node information. Using the same URL for these various interfaces is not only confusing, but it could also potentially pose a security vulnerability. For example, a user may want to share their P2P interface address with someone for peering, but would not want to give out their UI address, which is for private use only.

As such, StartOS permits services to have multiple interfaces, each receiving its own Tor address and/or LAN address. Users can then view and access all interfaces for a given service inside the "Interfaces" section of the service dashboard.

.. _health-checks:

Health Checks
-------------
One of the most critical duties of a sysadmin or devops engineer is to build mechanisms to monitor the health of systems. For example, a simple health check that monitors the availability of an LND node could mean the difference between that node having a poor reputation or a great one. Sometimes, it is not obvious when a service is unhealthy, especially since “health” is a subjective term depending on the subject. For example, is your Bitcoin node “healthy” if it is not fully synced? Is it healthy if the user interface is unreachable but everything else is working properly?

In StartOS, package developers define what constitutes health and implement health checks according to subjective criteria.  These health checks are then displayed to the user in easily digestible messages, complete with icons and colors. Even better, health checks are completely arbitrary and turing complete, meaning they can include anything, including config options and internal or external dependencies! For example, a Lightning wallet package developer could say “this service is only healthy if (1) it is fully synced, (2) Bitcoin is fully synced, (3) LND is fully synced, and (4) if and only if the user has opted for real-time pricing from a third party website, that third party website must be reachable.” Enormous power.
