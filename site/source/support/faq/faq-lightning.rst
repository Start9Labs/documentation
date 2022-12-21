.. _faq-lightning:

=========================
The Lightning Network FAQ
=========================

.. contents::
  :depth: 2 
  :local:

Why would I want to run a lightning node?
-----------------------------------------
The Lightning Network (LN) is a second 'layer,' built on top of the Bitcoin Protocol.  As a result all transactions on LN are backed up by the full security of the Bitcoin network.  Lightning is designed for instant payments between nodes, but similar to running a Bitcoin node, running your own is the only way to be sovereign.  When you have your own node, you will have the convenience of linking a Lightning wallet, for use on the go.  It is also possible to earn an income (granted a very small one at this time), if you are willing to learn how to become a 'routing node.'

How can I get started with Lightning and open my first channel?
---------------------------------------------------------------
You can check out our `"Using Lightning" video <https://www.youtube.com/watch?v=rAvoUNsobws>`_ and learn the basics, including opening a channel with Start9.

.. youtube:: KhU_sTiaN8w
    :width: 100%

Please remember to always open a "Private" channel with us, or your channel is likely to be closed.  Please don't hesitate to reach out to us with any questions.

I opened a Lightning channel, but my local balance is lower than I expected.  Where is the remainder?
-----------------------------------------------------------------------------------------------------
A fee to close the channel (onchain) is set aside at opening.

How is that fee estimation calculated?
--------------------------------------
The commitment fees are automatically negotiated every few blocks with your peer. They are on chain txs like all channel closes but they are not broadcast until you attempt to close the channel.

What would happen if I shut down an Embassy that is running a Lightning node with open channels?
------------------------------------------------------------------------------------------------
It is REALLY IMPORTANT to understand that if Lightning services are shut off for long periods of time (several days or more) it is possible for your peers to cheat you out of money. If you are not prepared to LOSE ALL THE MONEY IN YOUR CHANNELS, KEEP YOUR NODE RUNNING.
That said, malicious actors on the network right now are probably sparse, and you may choose to only open channels with friends that may be a lot nicer to you if your node is not active.

Is there a solution to this?
----------------------------
Yes, the concept of a Watchtower was originally conceptualized in the LN whitepaper.  A Watchtower is simply a lightning node to which you can give the authority to monitor transactions associated with your open payment channels.

Is it possible to run Core Lightning and LND in parallel on Embassy?
--------------------------------------------------------------------
Yes, you may run both.  They will operate in their own environments and allow you to run services that depend on either.

How do I connect my Lightning wallet or mobile app to my Embassy?
-----------------------------------------------------------------
Please see the :ref:`Lightning Service Guides<lightning-service>` section for more details.

Are my addresses, channels, and balances all stored in LND or in RTL?  Core Lightning or Spark, etc?
----------------------------------------------------------------------------------------------------
This is all on LND, including on-chain funds, and RTL (or ThunderhHub, Zap, etc) is just a GUI for accessing LND.  Same for Core Lightning, it contains all funds, channels, etc, and Spark, Zeus, etc are just GUIs to interface with the node.

How do I find my LND seed so I can write it down to backup?
-----------------------------------------------------------
All LND backups are best done via Embassy's backup flow.  It is not supported to use a seed as backup; LND does not expose this. Everything crucial is backed up by our backup system so you do not need your seed.  The seed is ONLY for the onchain wallet and does not backup your channel state.

To clarify some of the reasons for this choice:

First off, Lightning is fundamentally different than on-chain/Layer1(L1) bitcoin. There is no way to compress all of that information down into a single 24 word seed in such a way that it will continue to work throughout your usage of the Lightning Network.

So, what is the LND seed *for*? In short, the seed is only used for the Layer1 portion of the funds you have locked up in LND. Due to the live nature of LND and lightning nodes in general, we tend to discourage keeping any significant amounts of money in the onchain portion of your wallet. Given that we cannot actually recover the Layer2(L2) funds with that seed, we needed to have a more holistic way to backup LND funds such that the backup would encompass the ability to get L2 funds back. The Embassy backup system does this, and this approach also happens to be a perfectly valid backup of your L1 funds as well. While Bitcoin users have been trained that the 24 word seed can be used to recover all of their funds, it is important to state that lightning does not and cannot work this way. Exposing the seed gives you two separate things to keep track of in order to recover your funds instead of just one.

Is there a way to use the channel backups made within RTL?
----------------------------------------------------------
The only backup flow we officially support is through Embassy's backup system. This does include the channel backups created automatically by LND, but it must be understood that backups in Lightning are very different than they are on Layer 1 Bitcoin. If you restore from backup all your channels will close, and there is a potential, albeit small, probability for you to lose funds.

When attempting to add new peer, RTL says "server is still in the process of starting," but chain state seems to be fully up to date.  What can I do?
-----------------------------------------------------------------------------------------------------------------------------------------------------
Check the LND logs, it can take a while to bootstrap, and starting RTL before this completes could cause errors.

I get an error ("Unlock Wallet Failed") when trying to log in to RTL, what can I do?
------------------------------------------------------------------------------------
Stop and Restart the Service.

"Server is still in the process of starting," but LND and RTL are running.  How can I address this?
---------------------------------------------------------------------------------------------------
You may need to restart the LND Service.

I get the following error from LND: "Error ECONNREFUSED Fetching Info Failed! Unknown Error." What's wrong?
-----------------------------------------------------------------------------------------------------------
LND is waiting for Bitcoin to completely sync, and then needs to catch up on block scanning itself.  This may take several minutes, and in some cases might require a restart of the LND service.  Do this if the process takes more than 5-10 minutes.

What's the best way to move a small lightning balance?
------------------------------------------------------
It is possible to have lightning balances that are so low that they will not (or barely will) cover the on-chain fees to recoup into an on-chain wallet.  If possible, move them to another Lightning node.

Why are Lightning Network backups and moves so complicated?
-----------------------------------------------------------
There are safe ways to do an “atomic move” of a LN node, but it requires a very specific sequence of actions and certain mistakes can result in your counterparties taking all your funds. Currently, LN works on a punishment scheme. This means if you publish revoked state, the counterparty is entitled to a claim on all the funds in the channel. This incentive system is what makes the whole system work. Without it LN would be subject to various kinds of thievery.

The downside is that backups of old state are not safe. This is because your node might believe it is the real state of the channel, but it may be unaware of states created since then. The problem here is that your node naively believes something different from the truth, which can result in all of the funds being lost. In response to this reality, the safe backup systems, including those generated by RTL, actually do not include channel state. They only list the peers that you had channels with. Restoring these backups essentially politely asks your peers to force close the channels they have with you. In those moments it is possible for your peer to try and cheat you, but they cannot be 100% sure that you can’t punish them, so it’s extremely unlikely that they will attempt to do so.
