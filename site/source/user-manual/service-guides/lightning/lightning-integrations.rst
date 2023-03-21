======================
Lightning Integrations
======================

Below is a list of lightning wallets and clients along with instructions on how to use them with your Embassy.

.. collapse:: Alby

   Alby
   ----

   Available For
   .............
   - Chrome-based browsers
   - Firefox

   Make sure you are already :ref:`running Tor<connecting-tor>` on your system if you want to use Core Lightning. For LND this isn't necessary as you can use their companion app.

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

         #. Select "Start9"

            .. figure:: /_static/images/lightning/start9-lnd-in-alby.png
               :width: 60%

         #. You'll now need to enter your LND Connect REST URL from your LND service page's "Properties" section.

            .. figure:: /_static/images/lightning/lnd-connect-rest-url.png
               :width: 60%

         #. Alby will warn that you are connecting over Tor and prompt you to download the companion app - do so and follow the instructions for adding it to your browser.

            .. figure:: /_static/images/lightning/alby-lnd-connect-companion.png
               :width: 60%

         #. Click "Connect" and once connection is completed you will see a success page that displays the balance of your LND node in Sats.  You can now launch the tutorial and learn how to use Alby!


.. _blue-wallet-lightning:

BlueWallet
----------

.. note:: LND only.

.. note:: This guide assumes you already have LND running with channels that have already have liquidity. If you don't please checkout :ref:`this guide<lightning-intro>`.

To connect BlueWallet, we will be using the LndHub extension found within the LnBits service.

   #. Start by ensuring that LND is installed and running on your server (requires bitcoin core):

      .. figure:: /_static/images/lightning/lnd-running.png
         :width: 30%

   #. Install LnBits by navigating to the Marketplace tab, selecting the service and clicking "Install":

      .. figure:: /_static/images/lightning/lnbits-in-marketplace.png
         :width: 30%

      .. figure:: /_static/images/lightning/lnbits-install.png
         :width: 30%

   #. Once installed, head to the LnBits service and click "CONFIGURE":

      .. figure:: /_static/images/lightning/lnbits-config.png
         :width: 30%

   #. Make sure you have LND selected and click "SAVE":

      .. figure:: /_static/images/lightning/lnbits-save.png
         :width: 30%

   #. Click "START":

      .. figure:: /_static/images/lightning/lnbits-click-start.png
         :width: 30%

   #. Head to "Interfaces":

      .. figure:: /_static/images/lightning/lnbits-interfaces.png
         :width: 30%

   #. Copy the Tor address (requires a Tor enabled browser - see :ref:`here<tor-os>` for more info):

      .. figure:: /_static/images/lightning/lnbits-toraddress.png
         :width: 30%

   #. Enter the name of the wallet you'd like to create and click "Add new wallet":

      .. figure:: /_static/images/lightning/lnbits-addnewwallet.png
         :width: 30%

   #. Next you will see a warning. Click "I understand":

      .. figure:: /_static/images/lightning/lnbits-warning.png
         :width: 30%

      .. tip:: The warning is about making sure you do not lose the address for this wallet and bookmarking it just in case. On your Start9 server, all wallets created will have their addresses saved in the "Properties" section within the LnBits service helping avoid this pitfall.

   #. Click "Manage extensions":

      .. figure:: /_static/images/lightning/lnbits-manage-extensions.png
         :width: 30%

   #. Scroll down to find "LndHub" and click "Enable":

      .. figure:: /_static/images/lightning/lnbits-scroll-lndhub.png
         :width: 30%

   #. Scroll back up and click on the newly added "LndHub" extension:

      .. figure:: /_static/images/lightning/lnbits-click-lndhub.png
         :width: 30%
      
   #. You will be presented with two QR codes:

      .. figure:: /_static/images/lightning/lnbits-two-qr-codes.png
         :width: 30%

      .. tip:: The QR code on the left allows the user to generate invoices (and thus receive payments). The QR code on the right allows the user to also **make** payments.

   #. Now it's time to set up Blue Wallet so that you can connect it to your lightning node! Start by opening up Blue Wallet and click on the three dots in the top right:

      .. figure:: /_static/images/lightning/bluewallet-three-dots.jpg
         :width: 30%

   #. Click "Network" then "Tor settings":

      .. figure:: /_static/images/lightning/bluewallet-network.jpg
         :width: 30%

      .. figure:: /_static/images/lightning/bluewallet-tor-settings.jpg
         :width: 30%

   #. Click "Start" and it should say "Done" after a short time:

      .. figure:: /_static/images/lightning/bluewallet-tor-start.jpg
         :width: 30%

      .. figure:: /_static/images/lightning/bluewallet-tor-done.jpg
         :width: 30%

   #. Head back to the main screen and click the "+" sign:

      .. figure:: /_static/images/lightning/bluewallet-add-wallet.jpg
         :width: 30%

   #. Click "Import wallet":

      .. figure:: /_static/images/lightning/bluewallet-plus.jpg
         :width: 30%

   #. Click "Scan or import a file"

      .. note:: Screenshots not possible for this step!

   #. Scan the appropriate QR code using your phone's camera.

   #. You'll see this once the wallet is added:

      .. figure:: /_static/images/lightning/bluewallet-wallet-added.jpg
         :width: 30%

   #. You are now immediately good to go and can start receiving funds to this lightning wallet.

      .. note:: You will not be able to spend anything until you first receive some money into the wallet, or unless you allocate funds to the wallet. To learn how to allocate funds, see the guide directly below.


.. _LnBits-funding:

Allocating Funds to an LnBits Wallet
------------------------------------

   #. Go to the "Properties" tab on your LnBits service:

      .. figure:: /_static/images/lightning/lnbits-properties.png
         :width: 30%

   #. Copy the "Superuser Account" URL:

      .. figure:: /_static/images/lightning/lnbits-properties-copy-super.png
         :width: 30%

   #. Click the "+" icon and enter the amount of funds you'd like to make available to this wallet:

      .. figure:: /_static/images/lightning/lnbits-fundfund.png
         :width: 30%

      .. tip:: The numbers you enter here add or subtract from the balance permitted to this owner of this wallet. In the picture below we have added 500 sats to this wallet. You can click the "+" icon again if you wish to add or subtract sats.
         
         .. figure:: /_static/images/lightning/lnbits-500-sats.png
            :width: 30%

.. _rtl:

Ride the Lightning
------------------

Available For
.............
- embassyOS

See the video at the top of this page for an intro to Lightning using RTL.

.. _spark:

Spark
-----

.. note:: Compatible with Core Lightning (CLN) only

Available For
.............
- Android
- embassyOS
- iOS

To use a Spark client, you still need to have Spark installed on the Embassy.  The Spark service on Embassy is both a server (background service) and a client (the :ref:`Web UI<web-ui>`).  Under Properties, there is a "Pairing URL". The first part of this is the server URL, and the end portion of it is the access key.

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

.. note:: Works with both LND and CLN

.. tabs::

    .. group-tab:: Core Lightning

      #. Download the Zeus: Bitcoin and Lightning wallet from your mobile device's application store.
      #. Open your Embassy's web interface and log in
      #. Select Services -> Core Lightning
      #. Select "Properties"
      #. Click the QR code next to "REST API Quick Connect" to display the QR code
      #. Open Zeus on your mobile device and go to Settings / Get Started -> Connect a node -> +
      #. Select "Use Tor"
      #. Chane "Node interface" to "Core Lightning (c-lightning-REST)"
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

