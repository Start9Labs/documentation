.. _connecting-tor:

===================
Connecting Remotely
===================
You can connect to your server from anywhere in the world, privately and anonymously, by using its unique Tor Address (`.onion` URL)

.. note:: It is normal for Tor connections to be slow or unreliable at times

Running Tor Natively on Your Phone/Computer (Recommended)
---------------------------------------------------------

Select your OS below:

.. raw:: html

  <div class="topics-grid grid-container full">

  <div class="grid-x grid-margin-x">

.. topic-box::
  :title: Linux
  :link: ../../../../guides/device-guides/dg-linux/tor-linux
  :icon: scylla-icon scylla-icon--linux
  :class: large-4
  :anchor: View

  Running Tor on Linux

.. topic-box::
  :title: Mac
  :link: ../../../../guides/device-guides/dg-mac/tor-mac
  :icon: scylla-icon scylla-icon--apple
  :class: large-4
  :anchor: View

  Running Tor on Mac

.. topic-box::
  :title: Windows
  :link: ../../../../guides/device-guides/dg-windows/tor-windows
  :icon: scylla-icon scylla-icon--windows
  :class: large-4
  :anchor: View

  Running Tor on Windows

.. topic-box::
  :title: Android
  :link: ../../../../guides/device-guides/dg-android/tor-android
  :icon: scylla-icon scylla-icon--android
  :class: large-4
  :anchor: View

  Running Tor on Android

.. topic-box::
  :title: iOS
  :link: ../../../../guides/device-guides/dg-ios/tor-ios
  :icon: scylla-icon scylla-icon--ios
  :class: large-4
  :anchor: View

  Running Tor on iOS

Using The Tor Browser
---------------------
Using the official Tor Browser allows you to access `.onion` URLs without additional configuration. However, accessing clearnet (`.com`, `.org`, ect) websites will also be routed over Tor, making them slower, and `.local` URLs cannot be accessed at all.

* Linux, Mac, Windows, Android

    * `Tor Browser <https://torproject.org/download/>`_

* iOS

    * iOS lacks a well-functioning Tor Browser. Instead, we recommend :ref:`using Safari with Orbot<tor-ios>`.
