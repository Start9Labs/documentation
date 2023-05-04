.. _spark:

Spark
-----

.. note:: Compatible with Core Lightning (CLN) only

Available For:

- `Android <https://github.com/shesek/spark-wallet/releases>`_
- `StartOS <https://marketplace.start9.com/marketplace/spark-wallet>`_
- `iOS as a PWA <https://github.com/shesek/spark-wallet#progressive-web-app>`_

.. warning:: Please be careful - there are multiple fake "Spark Wallets" out there. The above links have been verified and can be trusted.

To use a Spark, you simply install it as a service on your Start9 Server. You can then use it to operate your CLN node by clicking **Launch UI** within the service:

.. figure:: /_static/images/lightning/spark-launch-ui.png
    :width: 45%
    :alt: spark-launch-ui

If you would like to connect a mobile client you can click **Properties**:

.. figure:: /_static/images/lightning/spark-properties.png
    :width: 45%
    :alt: spark-properties

and then click on the button below to reveal the **Pairing URL** which you then scan with your mobile device.

.. figure:: /_static/images/lightning/spark-pairing.png
    :width: 45%
    :alt: spark-pairing

.. tip:: On iOS you cannot scan this QR code due to PWAs being forbidden from using the camera. You can instead simply copy and paste the Pairing URL.