.. _fully-noded-cln:

Fully Noded
-----------

Self sovereign, secure, powerful, easy to use wallet that utilizes your own CLN node as a backend.

Available For:

- iOS
- macOS

.. note:: Works with both Core Lightning (CLN) and LND! If you'd like to connect Fully Noded to LND instead - please use :ref:`this guide<fully-noded-lnd>`.


#. Download the Fully Noded from the Apple app store.
#. Open your Start9 server's web interface and log in.
#. Select Services -> Core Lightning -> Properties -> Sparko Properties.
#. Unfortunately Fully Noded does not support connecting to Sparko via QR code; Instead the Address and Sparko key will need to be individually scanned/copied and pasted into the respective fields in the Fully Noded app.
#. Click the QR code next to "Sparko Address" to display the QR code and scan/copy this with your iPhone/mac.
#. Open Fully Noded on your mobile device or mac and go to Settings -> Node Manager -> + -> Core Lightning
#. Paste the "Sparko Address" scanned above into the "Address" field, appending a colon and the port i.e. ``:9737`` after ``.onion``
#. Back in your server's web interface click the QR code next to "Sparko key"; scan/copy and paste this into the "Sparko key" field in the Fully Noded app.
#. Press "SAVE"

You can now use Fully Noded with your CLN node to send/receive bitcoin over the lightning network, open/close channels, connect to peers, etc!