.. _blue-wallet:

BlueWallet
----------

.. note:: This guide assumes you have already setup LNbits as per :ref:`this guide <connecting-lnbits>` with **LND** as your underlying node.

.. warning:: This will not work with CLN as your underlying node!

#. Bluewallet requires that we use the LnbHub extension in order to connect to LNbits.

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

#. Open up BlueWallet and click on the three dots in the top right:

    .. figure:: /_static/images/services/lnbits/bluewallet-three-dots.jpg
        :width: 20%

#. Click "Network" then "Tor settings":

    .. figure:: /_static/images/services/lnbits/bluewallet-network.jpg
        :width: 20%

    .. figure:: /_static/images/services/lnbits/bluewallet-tor-settings.jpg
        :width: 20%

#. Click "Start" and it should say "Done" after a short time:

    .. figure:: /_static/images/services/lnbits/bluewallet-tor-start.jpg
        :width: 20%

    .. figure:: /_static/images/services/lnbits//bluewallet-tor-done.jpg
        :width: 20%

#. Head back to the main screen and click the **+** sign:

    .. figure:: /_static/images/services/lnbits/bluewallet-add-wallet.jpg
        :width: 20%

#. Click "Import wallet":

    .. figure:: /_static/images/services/lnbits/bluewallet-plus.jpg
      :width: 20%

#. Click "Scan or import a file"

    .. note:: Screenshots not possible for this step!

#. *If you only want this wallet to be able to RECEIVE PAYMENTS, scan this QR code:*

    .. figure:: /_static/images/services/lnbits/left-qr.png
      :width: 40%
      :alt: left-qr

    *If you are happy for this wallet to be able to both receive and MAKE payments scan this QR code:*

        .. figure:: /_static/images/services/lnbits/right-qr.png
            :width: 40%
            :alt: right-qr

#. You'll see this once the wallet is added:

    .. figure:: /_static/images/services/lnbits/bluewallet-wallet-added.jpg
     :width: 30%

#. You can now allocate sats to this wallet within LNbits by clicking the **+** icon here:

    .. figure:: /_static/images/services/lnbits/plus-icon.png
     :width: 60%
        :alt: plus-icon

    Let's add 1000 satoshis:

    .. figure:: /_static/images/services/lnbits/add-1000-sats.png
     :width: 60%
     :alt: add-1000-sats

    .. figure:: /_static/images/services/lnbits/1k-sats.png
       :width: 60%
       :alt: 1k-sats

#. BlueWallet should now show a balance:

    .. figure:: /_static/images/services/lnbits/blue-wallet-balance.jpg
      :width: 25%
      :alt: blue-wallet-balance

#. You can also receive funds the normal way by hitting "Receive" within BlueWallet.

    .. figure:: /_static/images/services/lnbits/blue-wallet-receive.jpg
       :width: 25%
      :alt: blue-wallet-receive

    .. note:: Funds received this way must be sent from another lightning node, not the LND node underneath LNbits. A lightning payment that originates and terminates at the same node is technically a rebalance, not a normal payment.

Congratulations! BlueWallet is set up and ready to use lightning via your own lightning node - furthermore it will only be able to use your node in the way LNbits allows it.