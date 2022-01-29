.. _exec-service-container:

==================
Service Containers
==================

For simplicity, EmbassyOS is designed to be completely operated via the :ref:`WebUI<web-ui>`, however, your device belongs to you and if you want to "lift the hood" and access the internals of the software, you may do so.  This guide will show you how to enter a Service's :ref:`container<containers>` in order to directly interface with it and issue commands.

.. warning:: The following guide is for those that have advanced command line skills, or those who are being guided by a Start9 support technician.  Nothing you do inside a container is supported unless under the direction of Start9.  Here be dragons!!

This guide assumes you already have :ref:`SSH Access<ssh-setup>` setup on your machine.

Open a terminal, ssh into your device, and enter the following command, replacing ``<SERVICE>`` with the name of the service you are trying to access.  You can list the services with ``embassy-cli package list`` (you will need to be logged in under ``embassy-cli`` for this).  You will need to either be ``root`` or use ``sudo``.

    .. code-block:: bash

        docker exec -it <SERVICE>.embassy sh

This will give you a shell within the container.  Reminder that nothing you do in here is supported, please be careful!
