.. _faq-service-packaging:

.. contents::
   :depth: 3
   :local:

=============
Packaging FAQ
=============

Do I need programming experience to package a service for EmbassyOS?
--------------------------------------------------------------------
It would be helpful, but is not a pre-requisite.  Linux, dev-ops, and/or systems administration experience would all be helpful as well.  Keep in mind that everyone has to start somewhere, and perhaps your journey to development begins with packaging a service for EOS!

What considerations are there when choosing a service for packaging?
--------------------------------------------------------------------
There are several things you will want to consider.  Requirements include:

#. Most importantly, pick a service you are passionate about seeing on EmbassyOS
#. Make sure it is :ref:`Open Source <open-source>`
#. A service that incorporates a 'self-hosting' option, or is capable of being self-hosted

Recommendations that may ease the process:

#. A service that has already been 'dockerized' (has a **working** ``Dockerfile``)
#. A service written in a language you are familiar with
#. A service with a strong community

You can check this expansive list if you are in search of ideas: `Awesome Self-Hosted <https://github.com/awesome-selfhosted/awesome-selfhosted>`_

What if I don't need a Config in my service?
--------------------------------------------
Config files can be empty( ``{}`` ), if you do not require config.  `File Browser <https://github.com/Start9Labs/filebrowser-wrapper/blob/master/config_spec.yaml>`_ is an example of a service with no Config.

How can my service access the data directory of another service?
----------------------------------------------------------------
#. Provider service needs to expose datadir to other services on embassy
#. Consumer services needs to list the provider service as a dependency AND set a particular config value, stating that it wants data from that particular service



The guide says that a Makefile is optional, why is this?
--------------------------------------------------------
The ``Makefile`` simplifies the development process by putting all your build steps into one place so that you can simply use the ``make`` to build with.  A ``Makefile`` is not required however, and you may instead choose to use something like ``nix``, ``bash``, ``perl``, ``python``, or ``ruby`` for your build orchestration.
