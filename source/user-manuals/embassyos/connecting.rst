.. _connecting:

**********
Connecting
**********

With the :ref:`initial-setup` complete, your Embassy is now privately hosted on the Internet and can be accessed right from the browsers. Your Embassy's addresses (its Tor and LAN URLs) are completely private; no one else even knows they exists.

If you accidentally leak your Embassy's addresses, do not worry. You Embassy is also protected by your password; so only you can log in.


Tor
===

Connecting to your Embassy over :ref:`tor` requires using a browser that supports *.onion* URLs.

Currently, Tor is the default and our recommended approach for most users. It *just works*. The one drawback, however, is latency; onion-routed communications over Tor can be slow. For a lightning fast experience, you can connect to your Embassy over LAN (below), but this requires additional setup.

Below are a list of our recommended browsers for Tor:

* `Start9 Consulate <https://apps.apple.com/us/app/consulate/id1528124570>`_ (iOS)
* `Firefox <https://mozilla.org/firefox/new/>`_ (Mac, Windows, Linux)
* `Firefox Beta <https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta>`_ (Android)
* `Tor Browser <https://torproject.org/download/>`_ (Mac, Windows, Linux, Android)
* `Brave <https://brave.com/>`_ (Mac, Windows, Linux)

.. seealso:: `Setting up Tor for browsers :ref:<tor-system-setup>`

.. seealso:: `Announcing the Consulate Browser! <https://medium.com/@start9labs/announcing-the-consulate-browser-76d94a8599cb>`_


LAN
===

Connecting to your Embassy over :ref:`lan` has the benefit of being fast! It requires that your are connected to your home network and using a browser that supports *.local* URLs, which is true for most browsers.

.. seealso:: :ref:`Installing and trusting your Embassy's Root Certificate Authority SSL<ssl-setup>`