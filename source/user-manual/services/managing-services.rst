.. _managing-services:

*****************
Managing Services
*****************

.. _managing-dependencies:

Dependencies
============

Some services have dependencies on other services. A service may even require its dependency to be *configured* in a particular way.

Traditionally, managing dependencies was a massive headache and a huge barrier to running a personal server. But no more! The Embassy's revolutionary dependency management system makes the process transparent and simple.

If a service has one or more dependencies, or a dependency needs to be configured in a particular way, your Embassy will inform you and offer solutions.

Sometimes, a dependency can be satisfied in multiple ways. For example, Lightning has a dependency on Bitcoin. But that does not necessarily mean you need to have Bitcoin installed on your Embassy. You could just as easily configure Lightning to use another Bitcoin node located somewhere else!

.. _installing:

.. note:: Some services have :ref:`dependencies<managing-dependencies>` on other services. Adding, updating, or removing a service can sometimes have requirements or consequences for other services. Your Embassy will inform you of these issues along the way.

Installing
==========

To add a new service, find it's listing inside the Service Marketplace: *Marketplace > [Service Name] > Install*.

Depending on the size of the service and your Internet connection, installation should take between 60 seconds and a few minutes.

After installation, you can view the service's instructions by navigating to *Services > [Service Name] > Instructions*

.. note:: You can only start and use a service once its dependencies are met, its :ref:`configuration<service-config>` complete, and is in a *running* state.

.. _updates:

Updating
========

To see if an update is available for a service, you can click the *refresh* button inside the dashboard of the installed service or by visiting its listing in the Service Marketplace.

If an update is available, simply click "Update" and confirm the action.

.. _uninstalling:

Uninstalling
============

To remove a service, navigate to *Services > [Service Name] > Uninstall*.

.. _instructions:

Instructions
============

To view the instructions for a particular service, navigate to *Services > [Service Name] > Instructions*.

.. figure:: /_static/images/bitcoin_instructions.png
  :width: 90%
  :alt: Bitcoin instructions menu item

  Instructions menu item

.. figure:: /_static/images/bitcoin_instructions_view.png
  :width: 90%
  :alt: Bitcoin instructions view

  Instructions view

.. note:: For advanced instructions and integration guides, visit the wrapper repository for an :ref:`available service <available-services>`.

.. _service-config:

Service Config
==============

Navigate to *Services > [Service Name] > Config*

After installation or update, some services require configuration before they can be started.

Traditionally, configuring services was a massive headache and a huge barrier to running a personal server. But no more! The Embassy's revolutionary service config system makes the process transparent, simple, and safe.

Config options are defined by the service developer and can be almost anything. They are represented as simple UI elements - such as toggles and drop downs - and they include explanations and validations, such that users understand their purpose and are prevented from making mistakes.

.. _properties:

Properties
==========

Navigate to *Services > [Service Name] > Properties*

Properties are both static and dynamic information about a service. They could be almost anything: a default username/password, an invite code, or a list of peers - anything the service developer thought might be useful.

Properties may be accompanied by one or more of the following:

* a *help* icon for further explanation.
* a *copy* icon for copying the value to your clipboard.
* a *QR* icon for viewing the value as a QR code.

.. _actions:

Actions
=======

.. _interfaces:

Interfaces
==========

.. _logs:

Logs
====

Naviage to *Services > [Service Name] > Logs*

Every service emits logs while it is in a *running* state. Logs give an *under-the-hood* glimpse of a service and can be extremely useful for debugging purposes. To a non-technical user, logs may look like gibberish, and sometimes there is nothing to see at all.

.. _donate:

Donate
======