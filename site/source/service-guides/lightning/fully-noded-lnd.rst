.. _fully-noded-lnd:

===========
Fully Noded
===========
Sovereign, secure, powerful, and easy-to-use wallet that utilizes your own LND node as a backend.

Available For:

- iOS
- macOS

.. note:: Works with both Core Lightning (CLN) and LND! If you'd like to connect Fully Noded to CLN instead - please use :ref:`this guide<fully-noded-cln>`.

#. Download Fully Noded from the Apple app store.
#. Log into your Start9 server UI and select Services -> LND -> Properties.
#. Click the QR code icon next to “LND Connect REST URL” to display the QR code and scan/copy this with your iPhone/mac.
## [Scanning QR] From the App, you have to go > Node manager > Add a node + > hit Scan QR (not LND)
## [Pasting credentials] From the App, you have to go > Node manager > Add a node (+) > select LND (not Scan QR). 

 If pasting, there are 4 fields where we'll paste the LND Connect URL we copied earlier:

a. Label (pick a name for your LND node)
b. Address (paste the address without the word "lndconnect")
c. Macaroon (paste the macaroon without the word "macaroon")
d. SSL Cert (optional field - leave it blank)

#. Press "SAVE"

You can now use Fully Noded with your LND node to send/receive bitcoin over the lightning network, open/close channels, connect to peers, etc!
