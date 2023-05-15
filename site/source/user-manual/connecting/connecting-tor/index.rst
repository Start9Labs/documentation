.. _connecting-tor:

===================
Connecting Over Tor
===================

You can connect to your Start9 server from anywhere in the world, privately and anonymously, by using its unique Tor Address (``.onion`` URL).

.. note:: Tor connection can sometimes be unreliable and have higher latency than normal internet connections.

Using Firefox
-------------

.. tip:: This is the recommended way to connect to your Start9 server over Tor, but it requires some additional steps.

#. Run Tor (**not Tor Browser**) in the background on your connecting device.

    .. toctree::
      :maxdepth: 2

      tor-os/index

#. Configure Firefox to handle *``.onion``* URLs.

    .. toctree::
      :maxdepth: 2

      tor-firefox/index


Using TorBrowser
-------------------

.. caution::  Tor Browser will allow you to use your Start9 server's ``.onion`` URL without any manual configuration, however *all* connections are proxied via Tor, so you will not be able to access your Start9 server's ``.local`` LAN address with it.  `Using Firefox <#using-firefox>`_ is recommended over TorBrowser.

* Linux, Mac, Windows, Android

    * `Tor Browser <https://torproject.org/download/>`_

* iOS

    * iOS lacks a well-functioning Tor Browser. Use `Firefox <tor-firefox/torff-ios>`_
