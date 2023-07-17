.. _dg-linux:

=====
Linux
=====
To optimize your device for use with your Start9 server, it is recommended to complete all of the following guides.  At minimum, you will want to set up your Root CA in the first guide.

.. tip:: Whenever you are connected to the same Local Area Network (LAN) as your Start9 server, it is best to access your Start9 server's LAN Address (.local URL). LAN connections are fast and secure and are available even with no Internet access!

.. raw:: html

  <div class="topics-grid grid-container full">

  <div class="grid-x grid-margin-x">

.. topic-box::
  :title: Establish Secure Link
  :link: lan-linux
  :icon: scylla-icon scylla-icon--partners
  :class: large-4
  :anchor: Connect

  Trust your Start9 server's Root Certificate Authority in order to create encrypted connections.

.. topic-box::
  :title: Backup Configuration
  :link: backup-linux
  :icon: scylla-icon scylla-icon--cloud
  :class: large-4
  :anchor: Setup

  Configure a Network Folder on your Linux machine (or attached external drive) to receive StartOS backups.

.. topic-box::
  :title: Connect to Tor Network
  :icon: scylla-icon scylla-icon--networking
  :link: tor-linux
  :class: large-4
  :anchor: Run Tor

  Run Tor natively (in the background) on your Linux device. This will enable apps to communicate with your Start9 server via the Tor Network, remotely.

.. topic-box::
  :title: Configure Firefox
  :link: ff-linux
  :icon: scylla-icon scylla-icon--integrations
  :class: large-4
  :anchor: Config

  Configure Firefox for an optimal experience with your server.

.. toctree::
   :maxdepth: 4
   :hidden:

   lan-linux
   backup-linux
   tor-linux
   ff-linux
