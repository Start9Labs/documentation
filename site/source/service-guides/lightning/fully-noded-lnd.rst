.. _fully-noded-lnd:

===========
Fully Noded
===========
Sovereign, secure, powerful, and easy-to-use wallet that utilizes your own LND node as a backend.

Available For:

- iOS
- macOS

#. Download Fully Noded from the Apple App Store.
#. Log into your Start9 server UI and select Services -> LND -> Properties.
#. Click the QR code icon next to “LND Connect REST URL” to display the QR code and scan/copy this with your iPhone/mac.


.. tabs::

    .. group-tab:: Scanning QR

        From the App, you have to go > Node manager > Add a node + > hit Scan QR (not LND)

    .. group-tab:: Pasting credentials

        From the App, you have to go > Node manager > Add a node (+) > select LND (not Scan QR). 

        There are 4 fields where we'll paste the LND Connect URL we copied earlier:

        #. Label (pick a name for your LND node)
        #. Address (paste the address without the word "lndconnect")
        #. Macaroon (paste the macaroon without the word "macaroon")
        #. SSL Cert (optional field - leave it blank)

        #. Press "SAVE"

You can now use Fully Noded with your LND node to send/receive bitcoin over the lightning network, open/close channels, connect to peers, etc!
