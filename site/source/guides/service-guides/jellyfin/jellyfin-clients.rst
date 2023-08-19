.. _jellyfin-clients:

================
Jellyfin Clients
================

.. contents::
  :depth: 2 
  :local:

.. _jellyfin-webapp:

After setup has been completed per the Jellyfin Service instructions on your Server, there are many ways to connect to and use your Jellyfin server.

.. note:: While the Jellyfin server is accessable over tor for many clients, connecting over LAN via your Jellyfin ``.local`` URL is recommended for the best streaming experience.

Web Application
---------------

1. Launch the Jellyfin Web Application from the desired interface (``.local`` recommended). If you are having trouble connecting, make sure your browser and OS have been setup to connect to :ref:`LAN <connecting-lan>` or :ref:`Tor <connecting-tor>` depending on the interface you are trying to connect to.

Mobile Apps
-----------

Android
=======

Before proceeding, make sure your Android device has been setup to connect over :ref:`LAN <ca-android>`. If you are connecting over tor, you will need to :ref:`Setup Tor <tor-android>`.

1. Visit the app store of your choice and download the Jellyfin app.

2. Upon entering the app, you will be prompted for a host; paste the URL (``.local`` recommended) of your Jellyfin server in this field and you should see your media splash page. If you are getting connection errors, make sure you are connected to the same LAN and a VPN is not in use on your Android device.

iOS
===

Before proceeding, make sure your Apple device has been setup to connect over :ref:`LAN <ca-ios>`. If you are connecting over tor, you will need to :ref:`Setup Tor <tor-ios>`.

1. Open the Apple app store and download the Jellyfin app.

2. Upon entering the app, you will be prompted for a host; paste the URL (``.local`` recommended) of your Jellyfin server in this field and you should see your media splash page. If you are getting connection errors, make sure you are connected to the same LAN and a VPN is not in use on your Apple device.

Desktop Apps
------------

MacOS
=====

Before proceeding, make sure your Apple device has been setup to connect over :ref:`LAN <ca-mac>`.

1. Download the .dmg file for `Jellyfin Media Player <https://github.com/jellyfin/jellyfin-media-player/releases>`_

2. Upon entering the app, you will be prompted for a host; paste the ``.local`` URL (``.onion`` is not supported) of your Jellyfin server in this field and you should see your media splash page. If you are getting connection errors, make sure you are connected to the same LAN and a VPN is not in use on your Apple device.

Other Clients
-------------

Jellyfin has numerous other `clients <https://jellyfin.org/downloads/>`_, not all of which have been tested at the time of this writing. If you are able to test (successfully or unsucessfully) an app not documented in this guide, your feedback would be much appreciated.

.. note:: Some clients such as 'Jellyfin for Roku' and 'Swiftfin' (tvOS) are not configured to use Local DNS - as a result, these clients are unable to resolve private urls like ``.local``.