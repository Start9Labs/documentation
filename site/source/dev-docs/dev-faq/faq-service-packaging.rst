.. _faq-service-packaging:

=====================
Service Packaging FAQ
=====================

Do I need programming experience to package a service for EmbassyOS?
--------------------------------------------------------------------
It would be helpful, but is not a pre-requisite.  Linux, dev-ops, and/or systems administration experience would all be helpful as well.  Keep in mind that everyone has to start somewhere, and perhaps your journey to development begins with packaging a service for EOS!

What considerations are there when choosing a service for packaging?
--------------------------------------------------------------------
There are several things you will want to consider.  Requirements include:

#. Most importantly, pick a service you are passionate about seeing on EmbassyOS
#. Make sure it is :ref:`Open Source <open-source>`

Recommendations that may ease the process:

#. A service that has already been 'dockerized' (has a **working** ``Dockerfile``)
#. A service that incorporates a 'self-hosting' option
#. A service written in a language you are familiar with
#. A service with a strong community

You can check this expansive list if you are in search of ideas: `Awesome Self-Hosted <https://github.com/awesome-selfhosted/awesome-selfhosted>`_

What if I don't need a Config in my service?
--------------------------------------------
Config files can be empty(``{}``), if you do not require config.

How can my service access the data directory of another service?
----------------------------------------------------------------
#. Provider service needs to expose datadir to other services on embassy
#. Consumer services needs to list the provider service as a dependency AND set a particular config value, stating that it wants data from that particular service
