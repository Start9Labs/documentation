.. _lightning-intro:

==========================
Opening Your First Channel
==========================

.. contents::
  :depth: 2 
  :local:

Here we'll show you how to install a lightning node and how to open a channel with Start9!

Further below you can find instructions on how to use other additional lightning software either on or external to your Embassy.

Running a Node and Making a Channel with Start9
_______________________________________________

#. First, ensure that you have Bitcoin Core installed, running, and synced:

   .. figure:: /_static/images/lightning/bitcoin-synced.png
    :width: 60%

#. Install a lightning node. There are two options we offer on the `Start9 marketplace <https://marketplace.start9.com>`_ - LND and Core Lightning. In this guide we're going to use Core Lightning (CLN). Though you can use LND and the process will be almost exactly the same.

   .. figure:: /_static/images/lightning/two-impls-marketplace.png
    :width: 60%

#. Install one of the above lightning implementations - as mentioned in this guide we'll use CLN.

   .. figure:: /_static/images/lightning/cln-installing.png
    :width: 60%

#. You'll see CLN say **"Needs Config"**. Click "**Configure**":

   .. figure:: /_static/images/lightning/cln-needs-config.png
    :width: 60%

#. You can leave the settings as their default values and hit **"save"**.

   .. figure:: /_static/images/lightning/cln-save-config.png
    :width: 60%

#. Now hit **"Start"** and wait for CLN to sync up to the network. This may take a few hours.

   .. figure:: /_static/images/lightning/cln-syncing.png
    :width: 60%

#. Once the **"Synced"** health check turns green (as below) you can proceed to the next step.

   .. figure:: /_static/images/lightning/cln-green.png
    :width: 60%

#. To interact with your node we will use Ride The Lightning (RTL) - this is a service that provides a graphical user interface for our lightning node.

    This will work with either (or both!) lightning implementations.

      .. figure:: /_static/images/lightning/rtl-in-marketplace1.png
        :width: 60%

#. Install it and click on **"Configure"** just like with CLN.

   .. figure:: /_static/images/lightning/rtl-needs-config.png
    :width: 60%

#. It will default to LND. In this case we are using a CLN node instead, so we will change the default setting as shown:

   .. figure:: /_static/images/lightning/rtl-config-lnd.png
    :width: 60%

   Change to Core Lightning (CLN) and hit OK

   .. figure:: /_static/images/lightning/rtl-change-to-cln.png
    :width: 60%

   Hit **"Save"**

   .. figure:: /_static/images/lightning/rtl-config-save.png
    :width: 60%

#. Now hit **"Start"**

   .. figure:: /_static/images/lightning/rtl-start.png
    :width: 60%

#. With RTL started, click **"Properties"**

   .. figure:: /_static/images/lightning/rtl-click-properties.png
    :width: 60%

#. Copy the automatically generated password

   .. figure:: /_static/images/lightning/rtl-copy-pass.png
    :width: 60%

#. Head back to the RTL service and click **"Launch UI"**

   .. figure:: /_static/images/lightning/rtl-launch-ui.png
    :width: 60%

   Enter the copied password and log in:

   .. figure:: /_static/images/lightning/rtl-enter-pass.png
    :width: 60%

   .. note:: You can add the password to your password manager for convenience.

#. Once in RTL, click **"On-chain"** then click **"Generate Address"**

   .. figure:: /_static/images/lightning/rtl-generate-address.png
    :width: 60%

#. Send bitcoin to the generated address to add funds to your lightning wallet:

   .. figure:: /_static/images/lightning/rtl-address-generated.png
    :width: 60%

   .. note:: Please do not send money to the address pictured above as we will not receive it. If you are intent on sending us money please `head here <https://donate.start9.com>`_

#. Once your sats confirm on-chain you'll see this:

   .. figure:: /_static/images/lightning/rtl-on-chain.png
    :width: 60%

#. Now we must add a peer with which to make channels. In this example we will be opening a channel with Start9 so we will add Start9's node as a peer. Click **"Peers/Channels"**:

   .. figure:: /_static/images/lightning/rtl-peers-channels.png
    :width: 60%

#. Click **"Peers"** then **"Add Peer"**:

   .. figure:: /_static/images/lightning/rtl-peers-add-peer.png
    :width: 60%

#. Enter the details of the lightning node you'd like to open a channel with. Start9's node can be found `here <https://1ml.com/node/025d28dc4c4f5ce4194c31c3109129cd741fafc1ff2f6ea53f97de2f58877b2295>`_ and is what we'll use in this example. You can use another node if you like - ideally one that is well connected. Once chosen and added as below, click **"Add Peer"**:

   .. figure:: /_static/images/lightning/rtl-start9-node-info.png
    :width: 60%

   .. note:: The syntax is as follows **NodePublicKey@ipaddress:port** - If it's a Tor node it will be **PublicKey.onion:port** instead.

#. Then you can enter an amount (the size of the channel), select Private Channel (unless you want a public channel - see below), and a Fee Rate (check a `block explorer <https://mempool.space>`_ for an idea of current necessary fees):

   .. figure:: /_static/images/lightning/rtl-open-channel.png
    :width: 60%

   .. note:: Here we are creating a very small channel with a capacity for payments of only a few dollars. You will likely want your channel to be larger than this so that it's actually usable for reasonably sized payments. Channels this small may well get closed by the remote peer.

   .. note:: Using a private channel is what we advise as a default. You may wish for the channel to be public if you intend on becoming a routing node or for other reasons.

#. You will now see your channel in **"Channels"** -> **"Pending/Inactive"**:

   .. figure:: /_static/images/lightning/rtl-pending-inactive.png
    :width: 60%

#. Once the transaction opening the channel gets added to a block your channel will soon appear here under **"Open"**:

   .. figure:: /_static/images/lightning/rtl-open-channels.png
    :width: 60%

#. To make a payment head to the **"Transactions"** tab and press **"Send Payment"**:

   .. figure:: /_static/images/lightning/rtl-transactions-tab.png
     :width: 60%

#. That's it! You now have a lightning node running with a channel open ready to send payments on the lightning network!

.. note:: You will not be able to receive payments until you have inbound liquidity in your channel. After completing the above process you will only have outbound liquidity. Inbound liquidity can be created by making payments, having someone open a channel to you or via more sophisticated channel creation.
