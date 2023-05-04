.. _zeus-lnd:

Zeus
----

Zeus is a powerful mobile wallet that can be connected directly to both LND and Core Lightning (CLN). If you'd like to connect via LNbits which allows allocation of funds, please see :ref:`this guide<connecting-lnbits>`.

Zeus is available for `Android <https://zeusln.app/zeus-v0.7.5-universal.apk>`_ & `iOS <https://apps.apple.com/us/app/zeus-ln/id1456038895>`_.

This guide will go over how to connect Zeus to **LND**. If you'd like to connect Zeus to CLN instead - please use :ref:`this guide<zeus-cln>`.

#. Download the Zeus from your mobile device's application store.
#. In your Start9 server's **services** tab, select **LND**.

   .. figure:: /_static/images/lightning/lnd-within-services.png
      :width: 40%
      :alt: lnd-services

#. Click **Properties**:

   .. figure:: /_static/images/lightning/lnd-properties.png
      :width: 40%
      :alt: lnd-properties

#. Click the QR code icon highlighted below to display the **LND Connect REST URL** QR code:

   .. figure:: /_static/images/lightning/lnd-connect-qr-code.png
      :width: 40%
      :alt: lnd-connect-qrcode

#. Open Zeus on your mobile device and click **SCAN NODE CONFIG**:

    .. figure:: /_static/images/services/lnbits/scan-node-config.jpg
        :width: 25%
        :alt: scan-node-config

#. Scan the QR Code displayed on the Embassy's LND Connect REST URL screen.

#. Zeus will fill in your node details based on the information in the QR code.

#. Click **SAVE NODE CONFIG**

Zeus is now setup to access and control your LND node!

