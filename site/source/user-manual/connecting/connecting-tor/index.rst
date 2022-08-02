.. _connecting-tor:

===================
Connecting Over Tor
===================

You can connect to your Embassy from anywhere in the world, privately and anonymously, by using its unique Tor Address (.onion URL).

.. note:: Tor connection can sometimes be unreliable and have higher latency than normal internet connections.

Using Firefox
-------------

.. tip:: This is recommended way to connect to your Embassy over Tor, but it requires some additional steps.

#. Run Tor on your connecting device.

    .. toctree::
      :maxdepth: 2

      tor-os/index

#. Configure Firefox

    .. toctree::
      :maxdepth: 2

      tor-firefox/index


Using TorBrowser
-------------------

TorBrowser is an all-in-one Tor+Firefox solution that will allow you to use your Embassy's .onion URL without any manual configuration, however *all* connections are proxied via Tor, so you will not be able to access your Embassy's .local LAN address with it.  `Using Firefox<#using-firefox>` is recommended over TorBrowser.

* Linux, Mac, Windows, Android

    * Download & Install `Tor Browser <https://torproject.org/download/>`_

* iOS has no TorBrowser

    * Use `Orbot & FireFox <tor-firefox/torff-ios.html>`
