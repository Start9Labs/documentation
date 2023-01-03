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

.. _alby:

Alby
----
.. note:: Currently LND only

Available For
.............
- Chrome-based browsers
- Firefox

Make sure you are already :ref:`running Tor<connecting-tor>` on your system.

#. Download the Alby extension by visiting the `Alby Github <https://github.com/getAlby/lightning-browser-extension#installation>`_, selecting your browser, and installing.
#. On the Alby welcome screen, select "Get Started."
#. Create a strong password and store it somewhere safe, like your Vaultwarden password manager.
#. On the next screen, select Start9 Embassy.
#. You'll now need to enter your LND Connect REST URL from your LND service page's "Properties" section.  Alby will warn that you are connecting over Tor - click "Continue."
#. Once the connection is completed you will see a success page that displays the balance of your LND node in Sats.  You can now launch the tutorial and learn how to use Alby!

.. _blue-wallet-lightning:

BlueWallet
----------
.. note:: LNDHub is required - available via the LNBits service

.. _rtl:

Ride the Lightning
------------------
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
Download from your Embassy's Marketplace and follow the included Instructions.

.. _zap:

Zap
---
.. note:: Compatible with LND only

Available For
.............
- Android
- iOS

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

