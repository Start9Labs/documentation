.. _zeus-lnbits:

Zeus
----

.. note:: This is not the same as connecting Zeus directly to your lightning node - using LNbits allows us to allocate a specific amount of funds to Zeus instead of giving it full access to your lightning node. We can also use LNbits to permit Zeus to **just receive** satoshis, or the ability to both **receive and spend** satoshis.

.. note:: This guide assumes you have already setup LNbits as per :ref:`this guide <connecting-lnbits>` with **LND** as your underlying node.

.. warning:: **This will not work with CLN as your underlying node!**

#. Zeus requires that we use the LnbHub extension in order to connect to LNbits.

#. To do this, click **Manage Extensions**:

   .. figure:: /_static/images/services/lnbits/manage-extensions.png
      :width: 50%
      :alt: manage-extensions

#. Click **MANAGE** under the LndHub extension:

   .. figure:: /_static/images/services/lnbits/lndhub-manage.png
      :width: 40%
      :alt: lndhub-manage

#. Click the two arrows on the right, then click install:

   .. figure:: /_static/images/services/lnbits/arrows-install.png
      :width: 40%
      :alt: arrows-install

#. Now ensure that it says **Activated** underneath LndHub and then click **Extensions** on the left:

   .. figure:: /_static/images/services/lnbits/activated-click-extensions.png
      :width: 40%
      :alt: activated-click-extensions

#. Click **ENABLE**:

   .. figure:: /_static/images/services/lnbits/extensions-enable.png
      :width: 40%
      :alt: extensions-enable

#. Click **OPEN** *or* **LndHub** under *Extensions*:

   .. figure:: /_static/images/services/lnbits/lndhub-open.png
      :width: 40%
      :alt: lndhub-open

#. Make sure the wallet you just created is selected below the two QR codes:

   .. figure:: /_static/images/services/lnbits/lndhub-select-wallet.png
      :width: 40%
      :alt: lndhub-select-wallet

#. Install `Zeus <https://zeusln.app/>`_.

#. Open it up and click **SCAN NODE CONFIG**.

    .. figure:: /_static/images/services/lnbits/scan-node-config.jpg
        :width: 25%
        :alt: scan-node-config

#. *If you only want this wallet to be able to RECEIVE PAYMENTS, scan this QR code:*

    .. figure:: /_static/images/services/lnbits/left-qr.png
        :width: 40%
        :alt: left-qr

    *If you are happy for this wallet to be able to both receive and MAKE payments scan this QR code:*

    .. figure:: /_static/images/services/lnbits/right-qr.png
        :width: 40%
        :alt: right-qr

#. Once scanned, name the wallet if you wish, then hit **SAVE NODE CONFIG**.

    .. figure:: /_static/images/services/lnbits/save-node-config.jpg
      :width: 25%
      :alt: save-node-config

#. Zeus will now connect to your node and you'll see this screen:

    .. figure:: /_static/images/services/lnbits/new-wallet-screen-zeus.png
       :width: 25%
       :alt: new-wallet-screen-zeus

    .. tip:: If it doesn't work, please manually restart the Zeus app.

#. In addition to allocating sats to this wallet via the LNbits Superuser Account (see "Funding LNbits section" :ref:`here<connecting-lnbits>`), you can also receive funds the normal way by hitting **Request** within Zeus.

    .. figure:: /_static/images/services/lnbits/zeus-request.png
      :width: 20%
      :alt: zeus-request

    .. note:: This will only work if your node has inbound liquidity. And you cannot send sats from the LND node LNbits is using as that is not a regular lightning payment - that is a reblanace.

#. Once you have added sats, you can click on this button within Zeus and see your new balance:

    .. figure:: /_static/images/services/lnbits/zeus-balance-button.png
      :width: 20%
      :alt: zeus-balance-button

    .. figure:: /_static/images/services/lnbits/zeus-balance.png
     :width: 20%
     :alt: zeus-balance

Congratulations! Zeus is set up and ready to use lightning via your own lightning node - furthermore it will only be able to use your node in the way you allow it, via LNbits.
