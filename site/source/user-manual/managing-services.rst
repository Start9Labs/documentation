.. _managing-services:

=================
Managing Services
=================

.. contents::
  :depth: 2 
  :local:

StartOS provides a rich interface for managing installed Services.

Service Dashboard
-----------------

The Service Dashboard provides quick insight into the status and health of your service, as well as exposing a variety of management tools.

.. figure:: /_static/images/services/service00.png
   :width: 60%

* Status:
    * **Needs Config**: The Service needs your attention in making a configuration decision.  There will always be default options available to you.
    * **Stopping**: Service is in the process of stopping.
    * **Stopped**: Service is installed and configured, but not currently running.
    * **Starting**: Service is in the process of starting up.
    * **Running**: Service is running.
* **Launch UI**: If the service offer a User Interface (UI), and the UI is currently available, clicking this button will launch the UI in a new browser tab.
* **Health Checks**: This is a critical feature of StartOS. Health Checks are configured by the service packager in order to quickly convey to the user what is happening with their service, as well as possible actions they may want to take.
* **Dependencies**: Some services depend on the presence and proper configuration of other services to function. This section will inform you if all dependencies are satisfied and, if not, what to do about it.
* **Start / Stop**: Self-explanatory, use these buttons to start or stop a service.

Installing a Service
--------------------

* To add a new service, find its listing inside the Marketplace and click "Install".

    .. figure:: /_static/images/services/service0.png
        :width: 60%

    .. figure:: /_static/images/services/service1.png
        :width: 60%

* Depending on the size of the service and your Internet connection, installation should take between 60 seconds and a few minutes.

    .. figure:: /_static/images/services/service2.png
        :width: 60%
        

* You may click *View Installed* at any time to view install progress.

    .. figure:: /_static/images/services/service3.png
        :width: 60%

Updating a Service
------------------

.. note:: StartOS will **NEVER** update a service without your consent.

To see if an update is available for a service, you can visit the *Updates* tab or visit the service's Marketplace listing.

    .. figure:: /_static/images/services/updatestab2.png
        :width: 60%

    .. figure:: /_static/images/services/update-marketplace-listing.png
        :width: 60%

If an update is available, simply click "Update" and confirm the action.

Configuring a Service
---------------------

After an installation or update, some services require configuration before they can be started.

Navigate to the *Services > [Service Name] > Config*

    .. figure:: /_static/images/services/service-needs-config.png
        :width: 60%

Traditionally, configuring services was a massive headache and a huge barrier to running a personal server. But no more! StartOS's revolutionary service config system makes the process transparent, simple, and safe.

    .. figure:: /_static/images/services/service4.png
        :width: 60%

Config options are defined by the service developer and can be almost anything. They are represented as simple UI elements - such as toggles and drop downs - and they include explanations and validations, such that users understand their purpose and are prevented from making mistakes.

    .. figure:: /_static/images/services/service5.png
        :width: 60%

You can change your configuration at any time from a Service's main page:

    .. figure:: /_static/images/services/config.png
        :width: 60%

Service Instructions
--------------------

* Every service comes with its own set of usage instructions. To view the instructions for a particular service, navigate to the *Services > [Service Name] > Instructions*.

.. figure:: /_static/images/services/instruct.png
  :width: 60%

* Instructions will provide you with service-specific direction, provided by the service package developer, on what to expect, and how to use your new service.

.. figure:: /_static/images/services/service-instruct.png
  :width: 60%

Service Properties
------------------

Properties can contain both static and dynamic information about a service. They could be almost anything: a default username/password, an invite code, or a list of peers - anything the service developer thought might be useful.

.. note:: Some services do not have any information in the Properties section.

.. figure:: /_static/images/services/props.png
    :width: 60%

* To view the Properties for a particular service, navigate to *Services > [Service Name] > Properties*.

* Properties may be accompanied by one or more of the following:
    * a **help** icon for further explanation.
    * a **copy** icon for copying the value to your clipboard.
    * a **QR** icon for viewing the value as a QR code.

Service Actions
---------------

Actions are defined by the service package developer, and can provide the ability to do resets or other miscellaneous administrative tasks. Actions may or may not require user input.

.. figure:: /_static/images/services/acts.png
    :width: 60%

Default Actions
...............

Every service comes with a set up default Actions that can be run. Currently, the only default action is "Uninstall".

* **Uninstall** - To Uninstall a service, navigate to *Services > [Service Name] > Actions > Uninstall*.

    .. warning:: THIS WILL DELETE ALL DATA FOR THIS SERVICE, PLEASE BE SURE YOU WANT TO DO THIS!

Custom Actions
..............

Service developers can define any number of arbitrary actions for their service.

Service Interfaces
------------------

Interfaces are URLs that an installed service uses to communicate in various ways with other software. Many Services will only have one interface, perhaps with a Tor and LAN address, to denote where it is hosted / accessed. Other services, such as Bitcoin or Lightning Nodes, may have several interfaces for different use cases.

.. figure:: /_static/images/services/service-ints.png
  :width: 60%

* To view the Interfaces for a particular service, go to *Services > [Service Name] > Interfaces*

Service logs
------------

Every service emits logs while it is in a *running* state. Logs give an *under-the-hood* glimpse of a service and can be extremely useful for debugging purposes. To a non-technical user, logs may look like gibberish, and sometimes there is nothing to see at all. You can check here if you have an issue with a service, and if you are talking to support, they may ask you to screenshot or copy these logs to help discover the root of the problem.

.. figure:: /_static/images/services/logs.png
    :width: 60%

* To view the Logs for a particular service, go to *Services > [Service Name] > Logs*
