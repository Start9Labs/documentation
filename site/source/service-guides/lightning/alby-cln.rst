.. _alby-cln:

======================
Alby Browser Extension
======================

Alby provides a browser extension that can be connected to your lightning node a number of ways. This guide will go over direct connections between the Alby browser extension and your **Core Lightning** node. 

.. note:: If you are looking for AlbyHub, this is not it. To use :ref:`AlbyHub<albyhub>` you must instead run :ref:`LND<lightning-intro>`.

.. note:: If you'd like to connect via `LNbits <https://marketplace.start9.com/marketplace/lnbits>`_ which allows allocation of funds (rather than spend limits within the extention), please see :ref:`this guide<connecting-lnbits>`.

.. note:: We are going to connect using Tor so that Alby will be able to connect from anywhere.

#. Make sure you are already :ref:`running Tor<connecting-tor>` on your system and we suggest using Firefox which must be :ref:`configured to use Tor.<tor-ff>`

#. Download the Alby extension by visiting the `Alby Github <https://github.com/getAlby/lightning-browser-extension#installation>`_, selecting your browser, and installing.

   .. figure:: /_static/images/lightning/alby-unlock-passcode.png
      :width: 20%
      :alt: alby-passcode

#. Set an unlock passcode and store it somewhere safe, like your Vaultwarden password manager.

   .. figure:: /_static/images/lightning/alby-bring-your-own.png
      :width: 50%
      :alt: alby-own

#. On the next screen, select **Find Your Wallet**.


#. Click **StartOS** then **Core Lightning**.

   .. figure:: /_static/images/lightning/alby-select-startos.png
      :width: 50%
      :alt: alby-start9

   .. figure:: /_static/images/lightning/alby-select-cln.png
      :width: 50%
      :alt: alby-cln-0

#. You will see the following fields to fill out:

   .. figure:: /_static/images/lightning/alby-cln-empty.png
      :width: 40%
      :alt: alby-cln-empty

#. For "Host" this is your Peer Interface - find this under **Interfaces -> Machine Interfaces** within the CLN service on your Start9 server. Copy the address shown here but **remove the http://** at the start and paste it into **Host** within Alby:

   .. figure:: /_static/images/lightning/cln-peer-interface.png
      :width: 40%
      :alt: cln-peer-interface

#. For **Public key** enter your **Node Id** found at the top of **Properties** within the CLN service on your server.

   .. figure:: /_static/images/lightning/cln-nodeid.png
      :width: 40%
      :alt: cln-nodeid

#. To generate a rune on StartOS you will need to navigate to Core Lightning > Actions > Generate Rune. Then copy the value and paste it into Alby.

#. Leave the **Port** as 9735. It should look like this:

   .. figure:: /_static/images/lightning/alby-cln-filled-out.png
      :width: 40%
      :alt: alby-cln-filled-out

#. Click **Continue**. Once the connection is completed you will see a success page that displays the balance of your CLN node in Sats. 

   .. figure:: /_static/images/lightning/alby-cln-success.png
      :width: 40%
      :alt: alby-cln-success

      Alby is now connected to your CLN node over Tor!
