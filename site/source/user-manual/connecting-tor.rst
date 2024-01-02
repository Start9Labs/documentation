.. _connecting-tor:

===================
Connecting Remotely
===================
You can connect to your server and installed services from anywhere in the world, privately and anonymously, by using their unique Tor (`.onion`) URLs.

It is not currently supported to access your server and its installed services using a VPN. This functionality is coming in the next major release of StartOS.

.. caution:: It is normal for Tor connections to be slow or unreliable at times.

Using a Tor Browser
-------------------
Your StartOS dashboard, as well as many installed services, can be accessed via their unique Tor (.onion) URLs. These URLs and the websites they serve are completely private, known only to you.

#. To access your private websites, simply download the official Tor Browser and input the URL.

- For Linux, Mac, Windows, and Android, download the `Official Tor Browser <https://torproject.org/download/>`_
- For iOS, download `Onion Browser <https://onionbrowser.com/>`_ (iOS 17+ only). When prompted, use *built-in* Tor, *not* Orbot.

.. _connecting-tor-native:

Using Native Apps
-----------------
Some apps have Tor built in, allowing you to use your .onion URLs without extra configuration.

Other apps lack support for Tor. In such cases, you must run Tor as a global process on your laptop/desktop/phone.

- :ref:`Linux <tor-linux>`
- :ref:`Mac <tor-mac>`
- :ref:`Windows <tor-windows>`
- :ref:`Android <tor-android>`
- :ref:`iOS <tor-ios>`

Troubleshooting
---------------
If you followed the above instructions and are experiencing issues, click :ref:`here <tor-troubleshoot>` to resolve
