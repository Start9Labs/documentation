.. _dg-ios:

===
iOS
===
To optimize your device for use with your Start9 server, it is recommended to complete all of the following guides.

.. tip:: Whenever you are connected to the same Local Area Network (LAN) as your Start9 server, it is best to access your Start9 server's LAN Address (.local URL). LAN connections are fast and secure and are available even with no Internet access!

.. raw:: html

  <div class="topics-grid grid-container full">

  <div class="grid-x grid-margin-x">

.. topic-box::
  :title: Trust Root CA
  :link: lan-ios
  :icon: scylla-icon scylla-icon--partners
  :class: large-4
  :anchor: Connect

  Trust your Start9 server's Root Certificate Authority in order to create encrypted connections.

.. topic-box::
  :title: Setup Orbot
  :icon: scylla-icon scylla-icon--networking
  :link: tor-ios
  :class: large-4
  :anchor: Run Tor

  Run Tor natively (in the background) on your iOS device. This will enable apps to communicate with your Start9 server via the Tor Network, remotely.

.. toctree::
   :maxdepth: 4
   :hidden:

   lan-ios
   tor-ios
