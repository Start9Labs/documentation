.. _zeus-cln:

Zeus
----
.. note:: You must first enable clnrest in Services -> Core Lightning -> Config -> Advanced -> Plugins -> clnrest

    
Zeus is a powerful mobile wallet that can be connected directly to both LND and Core Lightning. If you'd like to connect via LNbits, which allows allocation of funds, please see :ref:`this guide<connecting-lnbits>`.

Available For:

- Android
- iOS

.. note:: Works with both Core Lightning (CLN) and LND! If you'd like to connect Zeus to LND instead - please use :ref:`this guide<zeus-lnd>`.


#. Download `Zeus <https://zeusln.app/>`_ for your device.


#. Log into StartOS and select Services -> Core Lightning -> Properties.

    .. figure:: /_static/images/lightning/zeus-cln-direct-step3.png
        :width: 60%

#. Tap the QR code icon for "CLNRest Quick Connect" to display the QR code.

    .. figure:: /_static/images/lightning/zeus-cln-direct-step4.png
        :width: 60%

#. In Zeus, tap "ADVANCED SET-UP", followed by "Connect a node", and finally click the 'scan' icon in the top right to scan the qr code from step #3.

    .. figure:: /_static/images/lightning/zeus-cln-direct-step5.png
        :width: 60%

#. Once the node info has been scanned into Zeus, click "SAVE NODE CONFIG" to connect to your node.

    .. figure:: /_static/images/lightning/zeus-cln-direct-step6.png
        :width: 40%

    .. note:: If you already have other nodes configured in Zeus, Click the 'Node' icon in the top right -> 'plus' icon -> 'scan' icon . Then scan the QR code, and tap "SAVE NODE CONFIG".

    .. figure:: /_static/images/lightning/zeus-cln-direct-step7.png
        :width: 40%

#. That's it. You can now use your Core Lightning Node via Zeus.
