.. _jellyfin-clients:

================
Jellyfin Clients
================
.. contents::
  :depth: 2 
  :local:

.. _jellyfin-webapp:

After setup has been completed per the Instructions on the StartOS Jellyfin service page, there are many ways to connect to and use your Jellyfin server.

.. note:: While the Jellyfin server is accessable over tor for many clients, connecting over LAN via your Jellyfin ``.local`` URL is recommended for the best streaming experience.

Web Application
---------------
1. Launch the Jellyfin web application from the desired interface (``.local`` recommended). If you are having trouble connecting, make sure your browser and OS have been setup to connect to :ref:`LAN <connecting-lan>` or :ref:`Tor <connecting-tor>` depending on the interface you are using.

Mobile Apps
-----------

Android
=======
Before proceeding, make sure your Android device has been setup to connect over :ref:`LAN <ca-android>`. If you are connecting over tor, you will need to :ref:`Setup Tor <tor-android>`.

1. Visit the app store of your choice and download the `Jellyfin Android app <https://jellyfin.org/downloads>`_.

2. Open the app, you will be prompted for a host; paste the URL (``.local`` recommended) from your Jellyfin service page -> Interfaces in this field. 

  .. tip:: If you are getting connection errors, make sure you are connected to the same LAN and a VPN is not blocking use on your Android device.

iOS
===
Before proceeding, make sure your Apple device has been setup to connect over :ref:`LAN <ca-ios>`. If you are connecting over tor, you will need to :ref:`Setup Tor <tor-ios>`.

1. Open the Apple App Store and download the `Jellyfin iOS app <https://apps.apple.com/pl/app/jellyfin-mobile/id1480192618>`_.

2. Open the app, you will be prompted for a server address; paste the URL (``.local`` recommended) from your Jellyfin service page -> Interfaces.

  .. figure:: /_static/images/services/jellyfin/jellyfin-iOS-1.png
    :width: 40%
    :alt: Server address

3. Next enter your username and password and tap "Sign In".

  .. figure:: /_static/images/services/jellyfin/jellyfin-iOS-2.png
    :width: 40%
    :alt: sign in


  .. tip:: If you encounter connection errors, please ensure that you are connected to the same LAN, and there is no VPN blocking use on your Apple device.

Desktop Apps
------------

MacOS
=====
Before proceeding, make sure your Apple device has been setup to connect over :ref:`LAN <ca-mac>`.

1. Download the .dmg file for `Jellyfin Media Player <https://github.com/jellyfin/jellyfin-media-player/releases>`_

2. Upon opening the client, you will be prompted to add server. Click "Add Server".
  
  .. figure:: /_static/images/services/jellyfin/jellyfin-mac-1.png
    :width: 60%
    :alt: add server

3. Next you will be prompted for a server address; paste the URL (``.local`` recommended) from Jellyfin service interfaces and click "Connect".

  .. figure:: /_static/images/services/jellyfin/jellyfin-mac-2.png
    :width: 60%
    :alt: server address

4. Next enter your username and password and click "Sign In".

  .. figure:: /_static/images/services/jellyfin/jellyfin-mac-3.png
    :width: 60%
    :alt: sign in

That's it. You should be connected to your Jellyfin server. If you encounter connection errors, please ensure that you are connected to the same LAN, and there is no VPN active on your Apple device.

Other Clients
-------------
Jellyfin has numerous other `clients <https://jellyfin.org/downloads/>`_, not all of which have been tested at the time of this writing. If you are able to test (successfully or unsucessfully) an app not documented in this guide, your feedback would be much appreciated.

.. note:: Some clients such as 'Jellyfin for Roku' and 'Swiftfin' (tvOS) are not configured to use Local DNS - as a result, these clients are unable to resolve private urls like ``.local``.