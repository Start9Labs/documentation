.. _faq-service-packaging:

=============
Packaging FAQ
=============

.. contents::
  :depth: 2 
  :local:

Do I need programming experience to package a service for StartOS?
------------------------------------------------------------------
It would be helpful, but is not a pre-requisite.  Linux, dev-ops, and/or systems administration experience would all be helpful as well.  Keep in mind that everyone has to start somewhere, and perhaps your journey to development begins with packaging a service for StartOS!

What considerations are there when choosing a service for packaging?
--------------------------------------------------------------------
There are several things you will want to consider.  Requirements include:

#. Most importantly, pick a service you are passionate about seeing on StartOS
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
#. Provider service needs to expose datadir to other services on StartOS
#. Consumer services needs to list the provider service as a dependency AND set a particular config value, stating that it wants data from that particular service

Check out `LND <https://github.com/Start9Labs/lnd-wrapper/blob/master/manifest.yaml>`_ and `RTL <https://github.com/Start9Labs/ride-the-lightning-wrapper/blob/master/manifest.yaml>`_ as an example.

Why am I getting the error "No rule to make target yq, needed by manifest.yaml?"
--------------------------------------------------------------------------------
This is the message you get when you're missing the yq executable on your ``$PATH``. You can find details to `install yq here <https://github.com/mikefarah/yq#install>`_.`