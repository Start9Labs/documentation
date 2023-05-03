.. _alby-lnc:

====
Alby
====

Alby is a browser extension that can be connected to your lightning node a number of ways. This guide will go over direct connections between Alby and LND using LNC. If you'd like to connect via LNbits which allows allocation of funds, please see :ref:`this guide<connecting-lnbits>`. If you'd like to connect using LND's REST API see :ref:`here<alby-lnd>`.

.. note:: Requires LND and the `Lightning Terminal <https://marketplace.start9.com/marketplace/lightning-terminal>`_ service.

Available For:

- Chrome-based browsers
- Firefox

#. Download the Alby extension by visiting the `Alby Github <https://github.com/getAlby/lightning-browser-extension#installation>`_, selecting your browser, and installing.
#. On the Alby welcome screen, select **Get Started**.
#. Create a strong password and store it somewhere safe, like your Vaultwarden password manager.
#. On the next screen, select **Other Wallets** and click **Connect**.

#. Click on **Start9** then on **Lightning Terminal (LNC)**.

   .. figure:: /_static/images/lightning/alby-start9.png
      :width: 50%
      :alt: alby-start9

   .. figure:: /_static/images/lightning/alby-start9-lnc.png
      :width: 50%
      :alt: alby-start9-lnc

#. You will see the following screen. Launch the Lightning Terminal service UI from your Start9 server and do as instructed below:

   .. figure:: /_static/images/lightning/alby-lnc-fields.png
      :width: 50%
      :alt: alby-lnd-fields

#. Click **Continue** and you will see this once you successfully connect:

   .. figure:: /_static/images/lightning/alby-success.png
      :width: 50%
      :alt: alby-success