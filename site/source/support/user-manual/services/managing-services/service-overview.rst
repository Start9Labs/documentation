.. _service-overview:

=================
Services Overview
=================

Services are very similar to Applications on a mobile device.  The biggest differences are that they are often designed to run constantly, with 24/7 availability for when a user requires them.  This is why they are called :ref:`Services<services>`, they are always ready to serve users!


The Service Page
----------------

.. figure:: /_static/images/services/service8.svg
    :width: 60%

    The Service Page

In the image above, we see an example of a Service's homescreen, where you can access all the information and utilities of a particular service.

Below, we highlight the quick, need-to-know information of a Service that a user will want to see right away.

.. figure:: /_static/images/services/service00.svg
    :width: 60%

.. _service-status:

We can see the Service (Embassy Pages in this case), its ``Status``, ``Health Checks`` (if it has any), ``Dependencies`` (if it has any), and the ability to ``Start`` or ``Stop`` the Service, as well as ``Launch UI`` if it has a :ref:`Web Interface <web-ui>`.  Here's a breakdown of what each of these means:

    - Status:
        - Needs Config: The Service needs your attention in making a configuration decision.  There will always be default options available to you.
        - Stopping... : Service is being stopped
        - Stopped: Service is installed and configured, but not currently running.
        - Starting... : Service is booting up
        - Running: Service is running
    - Health Checks: This is a critical feature of EmbassyOS.  Health Checks are configured by the service packager in order to quickly convey to the user what is happening with their service, and possible actions they may want to take.  Learn more about :ref:`Health Checks <health-checks>`.
    - Dependencies: A service may require another service, called a dependency, in order to work.  These may be optional, or required.  Learn more about :ref:`Dependencies <service-dependencies>`.
    - Start / Stop: Self-explanatory, use these buttons to start or stop a service.
    - Launch UI: If available, this will open the User Interface (UI) for the service in a new browser tab.  Learn more about :ref:`Web UIs<web-ui>`.
