.. _zeus-cln:

Zeus
----
.. note:: You must first :ref:`connect to tor on your device<connecting-tor>`.
Zeus is a powerful mobile wallet that can be connected directly to both LND and Core Lightning. If you'd like to connect via LNbits, which allows allocation of funds, please see :ref:`this guide<connecting-lnbits>`.

Available For:

- Android
- iOS

.. note:: Works with both Core Lightning (CLN) and LND! If you'd like to connect Zeus to LND instead - please use :ref:`this guide<zeus-lnd>`.


#. Download `Zeus <https://zeusln.app/>`_ for your device.


#. Log into StartOS and select Services -> Core Lightning -> Properties.

    .. figure:: /_static/images/lightning/zeus-cln-direct-step3.png
        :width: 60%

#. Tap the QR code icon for "REST Quick Connect" to display the QR code.

    .. figure:: /_static/images/lightning/zeus-cln-direct-step4.png
        :width: 60%

#. In Zeus, tap "Scan node config". Allow camera access, scan the QR code, and then tap 'Save node config'.

    .. figure:: /_static/images/lightning/zeus-cln-direct-step5.png
        :width: 60%

    .. note:: If you already have other nodes configured in Zeus, go to Settings.-> Connect a node -> + . Then scan the QR code, and tap "Save node config".

    .. figure:: /_static/images/lightning/zeus-cln-direct-step6.png
        :width: 40%

#. That's it. You can now use your Core Lightning Node via Zeus.
