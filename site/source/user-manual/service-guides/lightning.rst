.. _lightning-service:

=========
Lightning
=========

.. contents::
  :depth: 2 
  :local:

Check out our `Getting Started with Lightning video <https://www.youtube.com/watch?v=KhU_sTiaN8w>`_ for an introduction to the Lightning Network using LND and RTL on Embassy!

    .. youtube:: KhU_sTiaN8w
        :width: 100%

.. _blue-wallet-lightning:

BlueWallet
----------

.. note:: Not available at this time - LNDHub is required

.. _rtl:

Ride the Lightning
------------------

Available For
.............
- embassyOS

See the video at the top of this page for an intro to Lightning using RTL.

.. _spark:

Spark
-----

.. note:: Compatible with Core Lightning (CLN) only

Available For
.............
- Android
- embassyOS
- iOS

To use a Spark client, you still need to have Spark installed on the Embassy.  The Spark service on Embassy is both a server (background service) and a client (the :ref:`Web UI<web-ui>`).  Under Properties, there is a "Pairing URL". The first part of this is the server URL, and the end portion of it is the access key.

.. _thunderhub:

Thunderhub
----------

Available For
.............
- embassyOS

Download from your Embassy's Marketplace and follow the included Instructions.

.. _zap:

Zap
---

Available For
.............
- Android
- iOS

.. note:: Compatible with LND only

#. Download from your device's application store.
#. Go to Settings and activate Tor.
#. Go to Add a Wallet and scan the LND REST connection QR code found in your Embassy's LND service page -> Properties.

.. _zeus:

Zeus
----

Available For
.............
- Android
- iOS

.. note:: Compatible with LND only

#. Download the Zeus: Bitcoin and Lightning wallet from your mobile device's application store.
#. Open your Embassy's web interface and log in
#. Select Services -> Lightning Network Daemon
#. Select "Properties"
#. Click the QR Code icon next to "LND Connect REST URL" to display the QR code
#. Open Zeus on your mobile device and go to Settings / Get Started -> Connect a node -> +
#. Select "Use Tor"
#. Press the "SCAN LNDCONNECT CONFIG" button
#. Scan the QR Code displayed on the Embassy's LND Connect REST URL screen

   .. note:: If you have trouble scanning it, bring your phone very close to the QR code until it fills the entire target square on your mobile device's QR code camera.
#. Zeus will fill in your node details based on the information in the QR code
#. Click "SAVE NODE CONFIG"

