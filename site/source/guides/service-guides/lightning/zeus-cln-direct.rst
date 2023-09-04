.. _zeus-cln:

Zeus
----

Zeus is a powerful mobile wallet that can be connected directly to both LND and Core Lightning. If you'd like to connect via LNbits which allows allocation of funds, please see :ref:`this guide<connecting-lnbits>`. 

Available For:

- Android
- iOS

.. note:: Works with both Core Lightning (CLN) and LND! If you'd like to connect Zeus to LND instead - please use :ref:`this guide<zeus-lnd>`.


#. Download the Zeus: Bitcoin and Lightning wallet from `App store <https://apps.apple.com/us/app/zeus-ln/id1456038895>`_ or  `Google play store <https://play.google.com/store/apps/details?id=app.zeusln.zeus>`_.

#. Open your Start9 server's web interface and log in.

#. Select Services -> Core Lightning -> Properties.

    .. figure:: /_static/images/lightning/zeus-cln-direct-step3.png
        :width: 70%

#. Tap the QR code next to "REST Quick Connect" to display the QR code.

    .. figure:: /_static/images/lightning/zeus-cln-direct-step4.png
        :width: 70%

#. Ensure that your device is Tor-enabled (use Orbot). Open Zeus on your mobile device and tap "Scan node config". Allow camera access, scan the QR code, and then tap 'Save node config'.

    .. figure:: /_static/images/lightning/zeus-cln-direct-step5.png
        :width: 70%
        
#. If you already have other nodes configured in the app, go to Settings.-> Connect a node -> + . Then scan the QR code, and tap "Save node config".

    .. figure:: /_static/images/lightning/zeus-cln-direct-step6.png
        :width: 40%

#. That's it. Your Core Lightning node should be connected to Zeus LN.
