.. _alby-cln:

====
Alby
====

Alby is a browser extension that can be connected to your lightning node a number of ways. This guide will go over direct connections between Alby and your lightning node. If you'd like to connect via LNbits which allows allocation of funds, please see :ref:`this guide<lnbits>`.

Available For:

- Chrome-based browsers
- Firefox

Make sure you are already :ref:`running Tor<connecting-tor>` on your system and we suggest using Firefox which must be :ref:`configured to use Tor.<tor-firefox>`

#. Download the Alby extension by visiting the `Alby Github <https://github.com/getAlby/lightning-browser-extension#installation>`_, selecting your browser, and installing.
#. On the Alby welcome screen, select **Get Started**.
#. Create a strong password and store it somewhere safe, like your Vaultwarden password manager.
#. On the next screen, select **Other Wallets** and click **Connect**.


#. Click Start9 then Core Lightning.

   .. figure:: /_static/images/lightning/alby-start9.png
      :width: 50%
      :alt: alby-start9

   .. figure:: /_static/images/lightning/alby-cln-0.png
      :width: 50%
      :alt: alby-cln-0

#. You will see the following fields to fill out:

   .. figure:: /_static/images/lightning/alby-cln-empty.png
      :width: 40%
      :alt: alby-cln-empty

#. For "Host" this is your Peer Interface - find this at the top of "Interfaces" within the CLN service on your Embassy. Remove the *http://* at the start.

   .. figure:: /_static/images/lightning/cln-peer-interface.png
      :width: 40%
      :alt: cln-peer-interface

#. For "Public key" enter your "Node Id" found at the top of "Properties" (also within the CLN service on your Embassy).

   .. figure:: /_static/images/lightning/cln-nodeid.png
      :width: 40%
      :alt: cln-nodeid

#. For "Rune" you will need to install the `Spark <https://marketplace.start9.com/marketplace/spark-wallet>`_ service on your Embassy, launch the UI, click in the bottom left where you see "v0.3.2" or something similar, and click "Console". 

   .. figure:: /_static/images/lightning/enable-console-spark.png
      :width: 40%
      :alt: enable-console-spark

#. Enter "commando-rune", hit "execute" and then copy what you see after "rune:" and paste it into Alby.

   .. figure:: /_static/images/lightning/commando-rune.png
      :width: 40%
      :alt: commando-rune

#. Leave the Port as 9735. It should look like this:

   .. figure:: /_static/images/lightning/alby-cln-filled-out.png
      :width: 40%
      :alt: alby-cln-filled-out

#. Click Continue. Once the connection is completed you will see a success page that displays the balance of your CLN node in Sats. 

   .. figure:: /_static/images/lightning/alby-cln-success.png
      :width: 40%
      :alt: alby-cln-success

      Alby is now connected to your CLN node over Tor!