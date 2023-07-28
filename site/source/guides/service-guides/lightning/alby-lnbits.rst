.. _alby-lnbits:

Alby
----

.. note:: This guide assumes you have already setup LNbits as per :ref:`this guide <connecting-lnbits>`.

.. note:: This will work with either LND *or* CLN as your underlying node!

Alby is a browser extension that can be connected to your lightning node a number of ways. This guide will go over connecting via LNbits which allows allocation of funds.

Make sure you are already :ref:`running Tor<connecting-tor>` on your system and we suggest using Firefox which must be :ref:`configured to use Tor.<connecting-ff>`

#. Download the Alby extension by visiting the `Alby Github <https://github.com/getAlby/lightning-browser-extension#installation>`_, selecting your browser, and installing.
#. On the Alby welcome screen, select **Get Started**.
#. Create a strong password and store it somewhere safe, like your Vaultwarden password manager.
#. On the next screen, select **Other Wallets** and click **Connect**.

#. Click **Start9** then **LNbits**:

   .. figure:: /_static/images/lightning/alby-start9.png
      :width: 50%
      :alt: alby-start9

   .. figure:: /_static/images/services/lnbits/alby-lnbits-select.png
      :width: 50%
      :alt: alby-lnbits-select

#. You will be brought to this page:

   .. figure:: /_static/images/services/lnbits/alby-lnbits-fields.png
      :width: 40%
      :alt: alby-lnbits-fields

#. Head back to LNbits and select the wallet you created then click on the arrow to the right of **API Info**:

    .. figure:: /_static/images/services/lnbits/lnbits-api-dropdown.png
        :width: 55%
        :alt: api-info-dropdown

#. Copy the **Admin key** and paste it into Alby:

    .. figure:: /_static/images/services/lnbits/lnbits-admin-key.png
        :width: 50%
        :alt: lnbits-admin-key

    .. figure:: /_static/images/services/lnbits/alby-lnbits-admin-key.png
        :width: 45%
        :alt: alby-lnbits-admin-key

#. Head back to your Start9 server's LNbits service page and select **Interfaces**:

    .. figure:: /_static/images/services/lnbits/lnbits-interfaces.png
        :width: 55%
        :alt: lnbits-interfaces

#. Copy the Tor Address:

    .. figure:: /_static/images/services/lnbits/lnbits-interfaces-tor-address.png
        :width: 65%
        :alt: lnbits-interfaces-tor-address

#. Head back to Alby and paste what you just copied into **LNbits URL**, select **Tor (native)** then hit **Continue**:

    .. figure:: /_static/images/services/lnbits/alby-lnbits-fields-complete.png
        :width: 45%
        :alt: alby-lnbits-fields-complete

    .. tip:: Make sure to include the http:// at the start of the address. If it is not working make sure that you are already :ref:`running Tor<connecting-tor>` on your system and that your browser is :ref:`configured to use Tor.<connecting-ff>`

#. Once connected you should see the following success page:

    .. figure:: /_static/images/lightning/alby-cln-success.png
        :width: 40%
        :alt: alby-cln-success

    Alby is now connected to your lightning node via LNbits!

#. You can now allocate sats to this wallet within LNbits by clicking the **+** icon here:

    .. figure:: /_static/images/services/lnbits/lnbits-plus-icon-2.png
        :width: 60%
        :alt: plus-icon-2

    Let's add 1000 satoshis:

    .. figure:: /_static/images/services/lnbits/lnbits-1000-sats-2.png
        :width: 40%
        :alt: add-1000-sats

    .. figure:: /_static/images/services/lnbits/lnbits-1000-sats-added-2.png
        :width: 40%
        :alt: sats-added

#. Alby should now show a balance:

    .. figure:: /_static/images/services/lnbits/alby-lnbits-1000-sats.png
        :width: 25%
        :alt: alby-balance

#. You can also receive funds the normal way by hitting **Receive** within Alby.

    .. figure:: /_static/images/services/lnbits/alby-receive.png
        :width: 25%
        :alt: alby-receive

    .. note:: Funds received this way must be sent from another lightning node, not the node underneath LNbits. A lightning payment that originates and terminates at the same node is technically a rebalance, not a normal payment.

You're now setup with Alby and LNbits!