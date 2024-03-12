.. _zeus-lnc:

====
Zeus
====

Lightning Node Connect (LNC) provides a very simple way to connect to an LND node. In this guide we'll cover how to connect to LND via LNC with Zeus.

Zeus is available for `Android and iOS <https://zeusln.app>`_.

.. note:: If you'd like to connect to LND using LND REST instead, follow :ref:`this guide<zeus-lnd>`. If you'd like to connect to LND via LNbits which allows allocation of funds, follow :ref:`this guide<connecting-lnbits>`. 

#. Install `Lightning Terminal <https://marketplace.start9.com/marketplace/lightning-terminal>`_

#. Click **LAUNCH UI**:

    .. figure:: /_static/images/lightning/lit-launch-ui.png
        :width: 40%
        :alt: lit-launchUI

#. The password can be found in **Properties**:

    .. figure:: /_static/images/lightning/lit-properties.png
        :width: 40%
        :alt: lit-properties

#. Copy it by clicking this square:

    .. figure:: /_static/images/lightning/lit-properties-x.png
        :width: 40%
        :alt: copy-password

#. Paste it into Lightning Terminal and click **Submit**:

    .. figure:: /_static/images/lightning/lit-paste-pass.png
        :width: 40%
        :alt: lit-paste-pass

#. Click on **Lightning Node Connect**:

    .. figure:: /_static/images/lightning/lit-lnc1.png
        :width: 40%
        :alt: lit-lnc1

#. Click **Create a new session**:

    .. figure:: /_static/images/lightning/lit-lnc2.png
        :width: 40%
        :alt: lit-lnc2

#. Name the wallet and click **Submit**:

    .. figure:: /_static/images/lightning/lit-lnc3.png
        :width: 40%
        :alt: lit-lnc3

#. Click on the QR code:

    .. figure:: /_static/images/lightning/lit-lnc4.png
        :width: 40%
        :alt: lit-lnc4

#. Install `Zeus <https://zeusln.app/>`_ if not already installed.

#. Open up Zeus and click **SCAN NODE CONFIG** then scan the QR code.

    .. figure:: /_static/images/lightning/zeus-scan-node-config.jpg
        :width: 25%
        :alt: zeus-scan-node-config

#. Click **SAVE NODE CONFIG**:

    .. figure:: /_static/images/lightning/zeus-save-node-config.jpg
        :width: 25%
        :alt: zeus-save-node-config

Zeus is now setup to connect to your LND node via LNC!