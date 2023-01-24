.. _lim-android:

=======
Android
=======

.. contents::
  :depth: 2 
  :local:

LAN Access
----------
Android versions below 12 do not have native support for :ref:`mDNS<mdns>` and therefore cannot resolve ".local" addresses.  LineageOS does not have this capability until LineageOS 20.

Tor Firefox on LineageOS
------------------------
There seems to be a bug in Lineage that makes using Firefox over Tor currently unusable. You must use TorBrowser to browse to .onion URLs.  The feature works fine on Calyx and Graphene.
