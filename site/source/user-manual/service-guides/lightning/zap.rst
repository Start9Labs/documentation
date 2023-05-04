.. _zap:

Zap
---

Available on `Android <https://play.google.com/store/apps/details?id=zapsolutions.zap>`_ and `iOS <https://apps.apple.com/us/app/zap-bitcoin-lightning-wallet/id1406311960>`_.

.. note:: Compatible with LND only

#. Install Zap via your phone's app store.
#. Go to Settings and activate Tor.
#. Go to **Add a Wallet** 
#. Locate the **LND Connect REST URL** from your LND service page's **Properties** section:

    .. figure:: /_static/images/lightning/lnd-properties.png
        :width: 55%
        :alt: lnd-properties

#. Display the QR code by clicking on the following button:

    .. figure:: /_static/images/lightning/lnd-connect-qr-code.png
        :width: 55%
        :alt: lnd-rest

#. Scan the QR code with your phone.

Zap is now connected to your LND node!