.. _dashboard-overview:

==================
Dashboard Overview
==================

Services Tab
------------

Use this tab to view and access your installed services.

    .. figure:: /_static/images/walkthrough/servicestab.png
        :width: 60%

Embassy Tab
-----------

Use this tab to customize and manage your Embassy.

    .. figure:: /_static/images/walkthrough/embassytab.png
        :width: 60%

Backups
........

The Backups section allows you to create and restore :ref:`Embassy backups <backups>`.

Settings
........

The Settings section gives you access to :ref:`EmbassyOS Updates <updating-eos>`, Device Preferences, :ref:`connecting-lan`, :ref:`ssh`, :ref:`wifi`, and :ref:`alt-marketplaces`.

Insights
........

The Insights section gives you basic information on your Embassy, monitoring of system resources / temperature, and logs for debugging.

Support
.......

The Support section provides links to frequently asked questions as well as Start9 and community contact information.

Power
.....

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

Marketplace Tab
---------------

Use this tab to access your preferred Marketplace, where you can discover and install new services, or update existing services. Check out the `live Marketplace <https://marketplace.start9.com>`_.

    .. figure:: /_static/images/walkthrough/markettab.png
        :width: 60%

Notifications Tab
-----------------

Notifications issued by EmbassyOS will appear in this tab. You can delete these notifications individually or all at once by clicking "Delete All".

    .. figure:: /_static/images/walkthrough/notiftab.png
        :width: 60%
