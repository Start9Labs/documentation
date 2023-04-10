.. _dashboard-overview:

==================
Dashboard Overview
==================

.. contents::
  :depth: 2 
  :local:

Connection Status
-----------------

In the bottom left of your screen you can monitor whether or not you are connected to your Embassy.

When connected it will look like this:

    .. figure:: /_static/images/walkthrough/connection_status_alive.png
        :width: 60%

When connecting it will look like this:

    .. figure:: /_static/images/walkthrough/connection_status_connecting.png
        :width: 60%

If you have no connection, it will look like this:

    .. figure:: /_static/images/walkthrough/connection_status_nointernet.png
        :width: 60%

Services Tab
------------

Use this tab to view and access your installed services.

    .. figure:: /_static/images/walkthrough/servicestab.png
        :width: 60%

Marketplace Tab
---------------

Use this tab to access your preferred Marketplace, where you can discover and install new services, or update existing services. 

Check out a live version of Start9's Official Marketplace `here <https://marketplace.start9.com>`_.

    .. figure:: /_static/images/walkthrough/markettab.png
        :width: 60%

Updates Tab
-----------

Use this tab to update services. A green icon will appear next to this tab when a new update is available.

   .. figure:: /_static/images/walkthrough/updatestab.png
       :width: 60%

Notifications Tab
-----------------

Notifications issued by StartOS will appear in this tab. You can delete these notifications individually or all at once by clicking "Delete All".

    .. figure:: /_static/images/walkthrough/notiftab.png
        :width: 60%


System Tab
-----------

Use this tab to customize and manage your Embassy.

    .. figure:: /_static/images/walkthrough/systemtab.png
        :width: 60%

Read below for a summary of each section within the System Tab.

Backups
=======

The Backups section allows you to create and restore :ref:`Embassy backups <backups>`.

Manage
======

The Manage section gives you access to :ref:`updating-eos`, Software Updates, Device Preferences, :ref:`connecting-lan`, :ref:`ssh`, :ref:`wifi`, and Service Sideloading.

Insights
========

The Insights section gives you basic information on your Embassy, monitoring of system resources / temperature, and logs for debugging.

Support
=======

The Support section provides links to frequently asked questions as well as Start9 and community contact information.

Power
=====

* **Log Out**

    * This will log you out and return you to the log in screen.

* **Restart**

    * Be patient while services shut down. A *tune* will play, indicating the shutdown is complete.
    * A gentle *bep* will sound when the Embassy is powered back on.
    * A *chime* will sound when the Embassy is ready to use.  Please be patient as a Restart will take some time.

* **Shutdown**

    .. caution:: After a shutdown, the *only* way to turn your Embassy back on is to unplug it and plug it back in. As such, we do not recommend shutting down your Embassy when you are not physically near it. Instead, you should use the restart option.

    * Be patient while services shut down, it may take some minutes. A *tune* will play, indicating the shutdown is complete.
    * It is now safe to unplug the Embassy from power and the ethernet cable, if connected.

* **System Rebuild**

    This action will tear down all service containers and rebuild them from scratch. No data will be deleted. This action is useful if your system gets into a bad state, and it should only be performed if you are experiencing general performance or reliability issues. It may take multiple minutes to complete. During this time, you will lose all connectivity to your Embassy.



