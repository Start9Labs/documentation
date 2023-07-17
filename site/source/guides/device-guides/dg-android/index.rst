.. _dg-android:

=======
Android
=======
To optimize your device for use with your Start9 server, it is recommended to complete all of the following guides.  At minimum, you will want to set up your Root CA in the first guide.

.. tip:: Whenever you are connected to the same Local Area Network (LAN) as your Start9 server, it is best to access your Start9 server's LAN Address (.local URL). LAN connections are fast and secure and are available even with no Internet access!

.. raw:: html

  <div class="topics-grid grid-container full">

  <div class="grid-x grid-margin-x">

.. topic-box::
  :title: Establish Secure Link
  :link: lan-android
  :icon: scylla-icon scylla-icon--partners
  :class: large-4
  :anchor: Connect

  Trust your Start9 server's Root Certificate Authority in order to create encrypted connections.

.. topic-box::
  :title: Setup Orbot
  :icon: scylla-icon scylla-icon--networking
  :link: tor-android
  :class: large-4
  :anchor: Run Tor

  Run Tor natively (in the background) on your Android device. This will enable apps to communicate with your Start9 server via the Tor Network, remotely.

.. topic-box::
  :title: Configure Firefox
  :link: ff-android
  :icon: scylla-icon scylla-icon--integrations
  :class: large-4
  :anchor: Config

  Configure Firefox for an optimal experience with your server.

.. toctree::
   :maxdepth: 4
   :hidden:

   lan-android
   tor-android
   ff-android
