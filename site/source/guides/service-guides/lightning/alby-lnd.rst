.. _alby-lnd:

====
Alby
====

Alby is a browser extension that can be connected to your lightning node a number of ways. This guide will go over direct connections between Alby and your **LND node**.

If you'd like to connect via `LNbits <https://marketplace.start9.com/marketplace/lnbits>`_ which allows allocation of funds, please see :ref:`this guide<connecting-lnbits>`.

.. note:: We are going to connect using Tor so that Alby will be able to connect from anywhere.

#. Make sure you are already :ref:`running Tor<connecting-tor>` on your system and we suggest using Firefox which must be :ref:`configured to use Tor.<connecting-ff>`

#. Download the Alby extension by visiting the `Alby Github <https://github.com/getAlby/lightning-browser-extension#installation>`_, selecting your browser, and installing.
#. On the Alby welcome screen, select **Get Started**.
#. Create a strong password and store it somewhere safe, like your Vaultwarden password manager.
#. On the next screen, select **Other Wallets** and click **Connect**.

#. Select **Start9** and then **LND**:

   .. figure:: /_static/images/lightning/alby-start9.png
      :width: 50%
      :alt: alby-start9

   .. figure:: /_static/images/lightning/alby-select-lnd.png
      :width: 50%
      :alt: alby-select-lnd

#. Copy the **LND Connect REST URL** from your LND service page's **Properties** section and paste it into Alby:

   .. figure:: /_static/images/lightning/lnd-connect-rest-url.png
      :width: 60%
      :alt: lnd-connect-rest-url

#. Alby will pick up that you are connecting over Tor and suggest using their Companion App (only needed if your browser isn't setup to use Tor) or using Tor natively which you will be able to do. Select **TOR (native)** and click **Continue**:

   .. figure:: /_static/images/lightning/alby-lnd-rest-entered.png
      :width: 50%
      :alt: alby-lnd-rest-entered

   .. note:: If this does not work, please ensure that :ref:`Tor is running on your system<connecting-tor>` and that :ref:`Firefox is configured to use it.<connecting-ff>` If you can't get this to work it's OK to use the Companion App - but you will have a better experience with your Start9 server elsewhere if you take the time to get Tor running on your devices.

#. Once connection is completed you will see a success page that displays the balance of your LND node in Sats.

   .. figure:: /_static/images/lightning/alby-success.png
      :width: 60%

You are now setup to use your LND node from anywhere using Alby!
