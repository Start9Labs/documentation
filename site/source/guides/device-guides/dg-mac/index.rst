.. _dg-mac:

===
Mac
===
To optimize your device for use with your Start9 server, it is recommended to complete all of the following guides.  At minimum, you will want to set up your Root CA in the first guide.

.. tip:: Whenever you are connected to the same Local Area Network (LAN) as your Start9 server, it is best to access your Start9 server's LAN Address (.local URL). LAN connections are fast and secure and are available even with no Internet access!

.. raw:: html

  <div class="topics-grid grid-container full">

  <div class="grid-x grid-margin-x">

.. topic-box::
  :title: Trust Root CA
  :link: lan-mac
  :icon: scylla-icon scylla-icon--partners
  :class: large-4
  :anchor: Connect

  Trust your Start9 server's Root Certificate Authority in order to create encrypted connections.

.. topic-box::
  :title: Backup Configuration
  :link: backup-mac
  :icon: scylla-icon scylla-icon--cloud
  :class: large-4
  :anchor: Setup

  Configure a Network Folder on your Mac (or attached external drive) to receive StartOS backups.

.. topic-box::
  :title: Connect to Tor Network
  :icon: scylla-icon scylla-icon--networking
  :link: tor-mac
  :class: large-4
  :anchor: Run Tor

  Run Tor natively (in the background) on your Mac. This will enable apps to communicate with your Start9 server via the Tor Network, remotely.

.. topic-box::
  :title: Configure Firefox
  :link: ff-mac
  :icon: scylla-icon scylla-icon--integrations
  :class: large-4
  :anchor: Config

  Configure Firefox for an optimal experience with your server.

.. topic-box::
  :title: Screensharing
  :link: screenshare-mac
  :icon: scylla-icon scylla-icon--workshop
  :class: large-4
  :anchor: Share Screen

  Guide to allow screensharing with a Start9 Support Tech.

.. toctree::
   :maxdepth: 4
   :hidden:

   lan-mac
   backup-mac
   tor-mac
   ff-mac
   screenshare-mac
