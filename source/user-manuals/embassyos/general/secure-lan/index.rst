.. _ssl-setup:

****************
Secure LAN Setup
****************

EmbassyOS has ability to securely access your Embassy over HTTPS from any browser in addition to the already secure option of communicating over Tor. This method of connecting is faster when on the same Local Area Network (LAN). This is accomplished by HTTPS using the OpenSSL protocol. Your Embassy becomes a Certificate Authority and uses its root certificate to generate a self-signed cert for you to import on your devices.

The following guides will take you through the steps to install and trust the SSL certificate generated from your Embassy.

First, determine your current version of EmbassyOS from the menu  at ``Embassy > About > EmbassyOS Version``.

.. figure:: /_static/images/embassy_version.png
  :width: 90%
  :alt: EmbassyOS version view

  How to view EmbassyOS version


.. warning:: 
  For EmbassyOS versions ``<0.2.5``, please follow the setup instructions on this `blog post <https://medium.com/@start9labs/embassy-https-certificate-setup-8cd873d7075c>`_.

  For EmbassyOS versions ``>=0.2.5``, continue below.

Complete the setup for your device operating system:

.. toctree::
  :maxdepth: 2

  desktop
  mobile

Next, complete the setup for your desired browser. This guide currently covers:

.. toctree::
  :maxdepth: 2

  browser

.. note:: 
  For security, Secure LAN Setup is only available over the Embassy's Tor address. Ensure you are setup with a :ref:`Tor enabled browser <connecting>`.