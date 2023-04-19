.. _alby:

====
Alby
====

Alby is a browser extension that can be connected to your lightning node a number of ways. This guide will go over direct connections between Alby and your lightning node. If you'd like to connect via LNbits which allows allocation of funds, please see :ref:`this guide<lnbits>`.

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

