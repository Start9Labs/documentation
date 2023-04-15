======================
Lightning Integrations
======================

Below is a list of lightning wallets and clients along with instructions on how to use them with your Embassy.

Alby
----

Available For
.............
- Chrome-based browsers
- Firefox

Make sure you are already :ref:`running Tor<connecting-tor>` on your system and we suggest using Firefox which must be :ref:`configured to use Tor.<tor-firefox>`

#. Download the Alby extension by visiting the `Alby Github <https://github.com/getAlby/lightning-browser-extension#installation>`_, selecting your browser, and installing.
#. On the Alby welcome screen, select "Get Started."
#. Create a strong password and store it somewhere safe, like your Vaultwarden password manager.
#. On the next screen, select "Other Wallets".
#. Now follow the appropriate guide for your lightning implementation:

.. tabs::

    .. group-tab:: Core Lightning

      #. Click Core Lightning.

         .. figure:: /_static/images/lightning/cln-in-alby.png
            :width: 60%

      #. For "Host" this is your Peer Interface - find this at the top of "Interfaces" within the CLN service on your Embassy. Remove the *http://* at the start.

         .. figure:: /_static/images/lightning/cln-peer-interface.png
            :width: 60%

      #. For "Public key" enter your "Node Id" found at the top of "Properties" (also within the CLN service on your Embassy).

         .. figure:: /_static/images/lightning/cln-nodeid.png
            :width: 60%

      #. For "Rune" you will need to install the `Spark <https://marketplace.start9.com/marketplace/spark-wallet>`_ service on your Embassy, launch the UI, click in the bottom left where you see "v0.3.2" or something similar, and click "Console". 
      
         .. figure:: /_static/images/lightning/enable-console-spark.png
            :width: 60%
      
      #. Enter "commando-rune", hit "execute" and then copy what you see after "rune:" and paste it into Alby.

         .. figure:: /_static/images/lightning/commando-rune.png
            :width: 60%

      #. Leave the Port as 9735. It should look like this:

         .. figure:: /_static/images/lightning/alby-cln.png
            :width: 60%

      #. Click Continue. Once the connection is completed you will see a success page that displays the balance of your CLN node in Sats.  You can now launch the tutorial and learn how to use Alby!

    .. group-tab:: LND

      #. Select "Start9":

         .. figure:: /_static/images/lightning/start9-lnd-in-alby.png
            :width: 60%

      #. You'll now need to enter your LND Connect REST URL from your LND service page's "Properties" section:

         .. figure:: /_static/images/lightning/lnd-connect-rest-url.png
            :width: 60%

      #. Alby will pick up that you are connecting over Tor and suggest using their Companion App (only needed if your browser isn't setup to use Tor) or using Tor natively which you will be able to do. Select TOR (native):

         .. figure:: /_static/images/lightning/alby-tor-native.png
            :width: 60%
      
         .. note:: If this does not work, please ensure that :ref:`Tor is running on your system<connecting-tor>` and that :ref:`Firefox is configured to use it.<tor-firefox>` If you can't get this to work it's OK to use the Companion App - but you will have a better experience with your Start9 Server elsewhere if you take the time to get Tor running on your devices.

      #. Click "Continue" and once connection is completed you will see a success page that displays the balance of your LND node in Sats.  You can now launch the tutorial and learn how to use Alby!

         .. figure:: /_static/images/lightning/alby-success.png
            :width: 60%


.. _blue-wallet-lightning:

BlueWallet
----------

.. note:: Not available at this time.

.. _lnbits-zeus:

LNbits
------

Using LNbits allows you to create a wallet that makes use of your node with only an alloted amount of sats. This restriction can be very helpful for if you only want to have a small amount for spending on your phone without making your entire lightning balance available. You can even allow other people to have wallets you create for them - think giving your children an allowance. They can start with a set amount (can be zero) and simply spend what you initially make available. They can also earn more for themselves as they will have the freedom to issue their own invoices - all while making use of your node.

.. tip:: All wallets created this way are ultimately bound by the capacity of your node. If one wallet is allocated 10,000 sats but your underlying node only has 9000 sats of outbound capacity, payments will simply fail.

.. note:: LND only

.. note:: You will need a Tor enabled browser. We suggest using Firefox which will need to have been setup to use Tor - if you have yet to do this please see our guide :ref:`here<tor-firefox>`. This also requires having :ref:`native tor setup<tor-os>`.

#. Start by ensuring that you have LND and LNbits installed already. You also need for LND to have at least one channel set up otherwise payments will not work. If you have not set up a channel yet, please follow :ref:`this guide<lightning-intro>`.

   .. figure:: /_static/images/services/lnbits/lnbits-lnd-installed.png
      :width: 40%
      :alt: lnbits-lnd-installed

#. Head to LNbits on your server, click on **Properties** and copy address under the **Superuser Account**.

   .. note:: In this guide we are connecting via Tor so please change *.local* to *.onion* and remove the *s* from *https://* as shown in the picture below.

   .. figure:: /_static/images/services/lnbits/local-to-onion.png
      :width: 60%
      :alt: local-to-onion

   .. tip:: The address should look something like this - http://lotsofrandomletters.onion/wallet?usr=morerandomletters

#. Paste this address into your browser and you'll see the following screen - please click "I understand":

   .. figure:: /_static/images/services/lnbits/superuser-first-open.png
      :width: 60%
      :alt: superuser-first-open

#. Now a default wallet will have already been generated - highlighted on the top left. We'll rename it by clicking **Rename wallet** entering **android-zeus-wallet** then clicking **UPDATE NAME**:

   .. figure:: /_static/images/services/lnbits/rename-default-wallet.png
      :width: 60%
      :alt: rename-default-wallet

#. Now it's time to add the LndHub extension which we will allow us to connect lightning apps to LNbits. Click **Manage Extensions**:

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

   Now you'll need to choose a wallet with which to connect to LNbits. We can offer details instructions for **Alby**, **BlueWallet**, and **Zeus** which have been tested and will work. Other wallets may also work.

.. tabs::

   .. group-tab:: Alby

      .. note:: This is not the same as connecting Alby directly to your lightning node - using LNbits allows us to allocate a specific amount of funds to Alby instead of giving it full access to your lightning node. We can also use LNbits to permit your Alby wallet to **just receive** satoshis, or the ability to both **receive and spend** satoshis.

   .. group-tab:: BlueWallet

      .. note:: This is not the same as connecting BlueWallet directly to your lightning node - using LNbits allows us to allocate a specific amount of funds to BlueWallet instead of giving it full access to your lightning node. We can also use LNbits to permit BlueWallet to **just receive** satoshis, or the ability to both **receive and spend** satoshis.

      #. Now it's time to set up Blue Wallet so that you can connect it to your lightning node! Start by opening up Blue Wallet and click on the three dots in the top right:

         .. figure:: /_static/images/services/lnbits/bluewallet-three-dots.jpg
            :width: 30%

      #. Click "Network" then "Tor settings":

         .. figure:: /_static/images/services/lnbits/bluewallet-network.jpg
            :width: 30%

         .. figure:: /_static/images/services/lnbits/bluewallet-tor-settings.jpg
            :width: 30%

      #. Click "Start" and it should say "Done" after a short time:

         .. figure:: /_static/images/services/lnbits/bluewallet-tor-start.jpg
            :width: 30%

         .. figure:: /_static/images/services/lnbits//bluewallet-tor-done.jpg
            :width: 30%

      #. Head back to the main screen and click the **+** sign:

         .. figure:: /_static/images/services/lnbits/bluewallet-add-wallet.jpg
            :width: 30%

      #. Click "Import wallet":

         .. figure:: /_static/images/services/lnbits/bluewallet-plus.jpg
            :width: 30%

      #. Click "Scan or import a file"

         .. note:: Screenshots not possible for this step!

      #. Scan the appropriate QR code using your phone's camera.

      #. You'll see this once the wallet is added:

         .. figure:: /_static/images/services/lnbits/bluewallet-wallet-added.jpg
            :width: 30%

      #. You can now add sats to this wallet in two ways. You can allocate sats within LNbits by clicking the **+** icon here:

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

      Congratulations! BlueWallet is set up and ready to use lightning via your own lightning node!

   .. group-tab:: Zeus

      .. note:: This is not the same as connecting Zeus directly to your lightning node - using LNbits allows us to allocate a specific amount of funds to Zeus instead of giving it full access to your lightning node. We can also use LNbits to permit Zeus to **just receive** satoshis, or the ability to both **receive and spend** satoshis.

      #. Install `Zeus <https://zeusln.app/>`_.

      #. Click **SCAN NODE CONFIG**.

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

      #. Once scanned, name the wallet if you wish then hit **SAVE NODE CONFIG**.

         .. figure:: /_static/images/services/lnbits/save-node-config.jpg
            :width: 25%
            :alt: save-node-config

      #. Zeus will now connect to your node and you'll see this screen:

         .. figure:: /_static/images/services/lnbits/new-wallet-screen-zeus.png
            :width: 25%
            :alt: new-wallet-screen-zeus

         .. tip:: If it doesn't work, please manually restart the Zeus app.

      #. You can now add sats to this wallet in two ways. You can allocate sats within LNbits by clicking the **+** icon here:

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
      
         Alternatively you can simply hit **Request** in Zeus and receive by generating a standard lightning invoice:

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

         You are now free to make lightning payments - as mentioned your lightning node will need to have the necessary liquidity.

.. tip:: All of the above instructions will work with accounts created without using the **Superuser account** - the only drawback is that you will not be able to allocate satoshis within the LNbits interface.


.. _rtl:

Ride the Lightning
------------------

Available For
.............
- embassyOS

This can simply be installed by going to your Start9 Server's marketplace clicking on "Ride The Lightning" then installing the latest version. Once installed you can configure it to work with either - or both - Core Lightning and LND!

.. _spark:

Spark
-----

.. note:: Compatible with Core Lightning (CLN) only

Available For
.............
- Android
- embassyOS
- iOS

To use a Spark client, you still first need to have Spark installed as a service on your Start9 Server.  The Spark service is both a server (background service) and a client (the :ref:`Web UI<web-ui>`).  Under Properties, there is a "Pairing URL". The first part of this is the server URL, and the end portion of it is the access key.

.. _thunderhub:

Thunderhub
----------

Available For
.............
- embassyOS

Download from your Embassy's Marketplace and follow the included Instructions.

.. _zap:

Zap
---

Available For
.............
- Android
- iOS

.. note:: Compatible with LND only

#. Download from your device's application store.
#. Go to Settings and activate Tor.
#. Go to Add a Wallet and scan the LND REST connection QR code found in your Embassy's LND service page -> Properties.

.. _zeus:

Zeus
----

Available For
.............
- Android
- iOS

.. note:: Works with both LND and Core Lightning (CLN)

.. tabs::

   .. group-tab:: Core Lightning

      #. Download the Zeus: Bitcoin and Lightning wallet from your mobile device's application store.
      #. Open your Embassy's web interface and log in
      #. Select Services -> Core Lightning
      #. Select "Properties"
      #. Click the QR code next to "REST API Quick Connect" to display the QR code
      #. Open Zeus on your mobile device and go to Settings / Get Started -> Connect a node -> +
      #. Select "Use Tor"
      #. Change "Node interface" to "Core Lightning (c-lightning-REST)"
      #. Press "SCAN C-LIGHTNING-REST QR"
      #. Press "SAVE NODE CONFIG"

   .. group-tab:: LND

      #. Download the Zeus: Bitcoin and Lightning wallet from your mobile device's application store.
      #. Open your Embassy's web interface and log in
      #. Select Services -> Lightning Network Daemon
      #. Select "Properties"
      #. Click the QR code icon next to "LND Connect REST URL" to display the QR code
      #. Open Zeus on your mobile device and go to Settings / Get Started -> Connect a node -> +
      #. Select "Use Tor"
      #. Press the "SCAN LNDCONNECT CONFIG" button
      #. Scan the QR Code displayed on the Embassy's LND Connect REST URL screen

         .. note:: If you have trouble scanning it, bring your phone very close to the QR code until it fills the entire target square on your mobile device's QR code camera.
      #. Zeus will fill in your node details based on the information in the QR code
      #. Click "SAVE NODE CONFIG"

