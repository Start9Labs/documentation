.. _fully-noded-cln:

===========
Fully Noded
===========
Sovereign, secure, powerful, and easy-to-use wallet that utilizes your own CLN node as a backend.

Available For:

- iOS
- macOS

.. note:: Works with both Core Lightning (CLN) and LND! If you'd like to connect Fully Noded to LND instead - please use :ref:`this guide<fully-noded-lnd>`.

#. Download Fully Noded from the Apple app store.
#. Log into your Start9 server UI and select Services -> Core Lightning -> Properties -> Sparko Properties.

    .. note:: Unfortunately Fully Noded does not yet support connecting to Sparko via QR code; Instead the Address and Sparko key will need to be individually scanned/copied and pasted into the respective fields in the Fully Noded app.

#. Click the QR code icon next to "Sparko Address" to display the QR code and scan this with your iPhone/mac, or copy/paste through another channel to your client.
#. In Fully Noded, go to Settings -> Node Manager -> + -> Core Lightning
#. Paste the "Sparko Address" from above into the "Address" field, appending a colon and the port i.e. ``:9737`` after ``.onion``
#. Back in your CLN service page, get your "Sparko key" and scan/copy it into the "Sparko key" field in the Fully Noded app.
#. Press "SAVE"

You can now use Fully Noded with your CLN node to send/receive bitcoin over the lightning network, open/close channels, connect to peers, etc!
