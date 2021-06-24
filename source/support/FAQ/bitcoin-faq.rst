*****************************
Bitcoin and Lightning Network
*****************************

Why does the Bitcoin service take so long to be ready?
------------------------------------------------------
On first install, the Bitcoin service must verify the entire history of transactions in order to verify transactions going forward.  This can take approximately a week depending on your internet connection.  You can continue to use the Embassy normally in the meantime.
You can learn more about the Initial Block Download in `this video <https://www.youtube.com/watch?v=OrYDehC-8TU>`_.

Can the IBD (Initial Block Download) be made faster?  Or can wait times be improved?
------------------------------------------------------------------------------------
We have improvements on the way in mid-2021 to vastly improve the painful sync times, without sacrificing trust minimization.

I'm getting this error: unable to connect to bitcoind: -28: Loading block index... What do I do?
------------------------------------------------------------------------------------------------
The block index error is normal and goes away after the Bitcoin blockchain has synced.  If you have completed the Initial Blockchain Download (IBD), this will be a few minutes at most.

Does the Embassy run a full archival Bitcoin node?
--------------------------------------------------
The Embassy runs a full node, but does not run a full *archival* node, it's pruned. This means it does not store the entire Blockchain.  As it syncs, it discards blocks and transactions it does not need.
It is fully validating and verifying consensus all the way from Genesis. Really, the only reason to store the entire Blockchain is if you want to run a block explorer.  Learn more here: :ref:`node`.  All this being said, it will be possible to run a full archival node on the Embassy in mid-2021, bringing this additional functionality to those that would like it.

What actions, specifically, are only possible with an archival, or ‘unpruned’ node?
-----------------------------------------------------------------------------------
The more sophisticated the blockchain analysis being done is, the more index data is required, which will increase the system resources required.  For example, if you wanted to run a block explorer, you would require not only a full archival node, but also a full transaction index.  So, specifically, at this time, a full archival node is required for running an Electrum server, a block explorer, and for doing advanced chain analysis in general.

Is it insecure to run a pruned node?
------------------------------------
As a user, pruned nodes and archival nodes provide you the same security.  In a larger sense, if 100% of people ran pruned nodes, the security of the network could be in dire circumstances and be put at risk if no nodes kept history, as then no one could bootstrap new nodes.  The reality however, is that most Embassy owners are new node operators, so there is no net systemic risk introduced.

The Bitcoin Service is different from the GUI version I am used to using (bitcoin-qt).  How do I use this like I used to?
-------------------------------------------------------------------------------------------------------------------------
At present, the Embassy does not offer its own node visualization tool. You can view certain properties about your node inside the "Properties" section, but not in an animated GUI. If you want to use bitcoin-cli, you may do so by adding an SSH key onto your Embassy and exec-ing into the bitcoind docker container. Otherwise, the main way to actually *use* your node is through a wallet. The QT GUI is not usable because it cannot be served through the browser (which is necessary here), and last we checked, the QT desktop client was incapable of connecting to a remote node over Tor. As far as we are aware, the only wallets that support this are Specter, Fully Noded, and Sparrow.

Is a wallet vulnerable to hacking if it’s always online??
---------------------------------------------------------
Funds are not stored on the node typically.  The node simply serves as a source of truth for the state of the blockchain.  Attacks depend on where the keys are and where the signing happens. You can use something like a hardware wallet for better security.  Though, to be fair, a lot of attacks depend on you or your machine being targeted specifically, and a whole bunch of attack vectors are highly theoretical and obscure.
Most successful attacks seem to be either fake/doctored software or a social attack (tricking you into installing some malware or giving your seed outright or something like that).
Keep in mind, however, the more value there is out there to steal, the more sophisticated attacks will get automated (bots, crawlers etc). So its not just the risk profile of today, but also tomorrow you have to consider.  That’s why something like a hardware wallet or dedicated mobile device for key signing is a good idea.
Even if your wallet is plugged into your Embassy, whether your wallet is hot or cold depends on the hardware that stores the keys.

How does Bitcoin Proxy request (and verify) data when that data is needed by some app using it?
-----------------------------------------------------------------------------------------------
Proxy fetches blocks from your pruned node if it still has them, and fetches them from peers when it does not.  Proxy can ensures the fetched block is valid by comparing it to its header, which is retained by the pruned node.  The header is a product of the hash of the block itself, amongst other things, so it can't be

What is the difference between the Bitcoin Wallet Tracker and the Electrum Personal Server?
-------------------------------------------------------------------------------------------
Bitcoin Wallet Tracker and Electrum Personal Server are 2 services that do the same thing, similar to bitcoind vs btcd, or lnd vs c-lightning.
Both work with your Bitcoin node to provide a richer set of information to wallets than could be done with bitcoind alone.  They are basically identical in purpose, their differences are notably in the software memory requirements and how snappily they can answer the same questions.
Electrum (and some other wallets) require more than just a Bitcoin node to run in a sovereign way, they require an “Electrum Server”. Both Electrum Personal Server and Bitcoin Wallet Tracker are “Electrum servers”.

How do I use Bitcoin Core as a wallet?
--------------------------------------
Bitcoin Core is a full node that also contains wallet functionality.  Some will be familiar with Bitcoin-QT, which is a Bitcoin Core GUI that for a long time was the only available wallet.  This is currently not compatible with the Embassy.
You can use the wallet in Bitcoin Core, however it is for advanced users and is only available in the command line via SSH.

It is helpful to think of the Bitcoin Core service on the Embassy as your own personal Bitcoin Server. This is your own verified source of truth of the Bitcoin ledger, that requires no permission for you to set up and own. The job of your Bitcoin server is to verify that the transactions you want to make and receive are valid.
There are modern wallets that have the ability to use your personal Bitcoin node as a source of truth, and with the advantages of additional security and advanced features. This also follows the Linux mantra of "do one thing and do it well."  The recommended way to use Bitcoin with your Embassy’s Bitcoin node is with an external wallet.  
The available wallets are listed in the following FAQ.

Which wallets can I use that sync with my Embassy Bitcoin node?
---------------------------------------------------------------
The only currently available external options are FullyNoded and Specter.  Within the Embassy, BTCPayServer is available, which offers a wallet that is automatically connected to your Embassy's Bitcoin Core node.  Keep in mind that this first and foremost a payment gateway, rather than a personal wallet.  Unforutnately, this is still not a popular functionality in Bitcoin wallets.  We are in communication with several wallet developers about adding Tor full node support.  

Is there a guide for connecting Specter Wallet to my Embassy?
-------------------------------------------------------------
There is.  Please follow the integration guide `here <https://github.com/Start9Labs/bitcoind-wrapper/tree/master/docs/integrations/specter>`_ and select the tutorial based on your operating system.

More guides, particularly in video form, are forthcoming.

Is BlueWallet an option?
------------------------
BlueWallet requires a separate backend service called LNDHub, which is not available on the Embassy at this time.

I want to use my hardware signer, such as Coldcard or Trezor, with my Embassy.  How does this work?
---------------------------------------------------------------------------------------------------
You do not use hardware signers directly with your node. Hardware signers interface with wallets, and wallets interface with nodes.

Node (Embassy) <— Wallet (Specter, Sparrow, Electrum) <— Hardware signer (Coldcard, Trezor)

You would use your hardware signer with your wallet, then instruct that wallet to use Embassy as its node.

- Nodes are for interacting with the Bitcoin network: enforcing consensus rules, validating and relaying blocks/transactions, and broadcasting transactions.

- Wallets are for constructing and viewing transactions, as well as generating addresses.

- Signers are for generating and storing keys, as well as signing transactions.

The reason there is so much confusion about these 3 concepts is that the Bitcoin Core Node comes with its own Wallet (which you should not use), and that wallet is also a signer. In fact, most wallets double as signers, and most wallets do NOT support connecting to your own node. So, most wallets are actually serving as a wallet, a node, and a signer, which might be convenient, but it is neither trustless nor maximally secure. Ideally, you are using a wallet that supports both integrating with a hardware signer (like Coldcard or Trezor) AND a backend node (like on the Embassy).

Please note: of the wallets listed (Specter/Sparrow/Electrum), only Specter is currently able to use Embassy as it's node, but the other two should be available soon.

Why would I want to run a lightning node?
-----------------------------------------
The Lightning Network (LN) is a second 'layer,' built on top of the Bitcoin Protocol.  As a result all transactions on LN are backed up by the full security of the Bitcoin network.  Lightning is designed for instant payments between nodes, but similar to running a Bitcoin node, running your own is the only way to be sovereign.  When you have your own node, you will have the convenience of linking a Lightning wallet, for use on the go.  It is also possible to earn an income (granted a very small one at this time), if you are willing to learn how to become a 'routing node.'

How can I get started with Lightning and open my first channel?
---------------------------------------------------------------
You can check out our `"Using Lightning" video <https://www.youtube.com/watch?v=rAvoUNsobws>`_ and learn the basics, including opening a channel with Start9.

.. youtube:: KhU_sTiaN8w

Please remember to always open a "Private" channel with us, or your channel is likely to be closed.  Please don't hesitate to reach out to us with any questions.

I opened a Lightning channel, but my local balance is lower than I expected.  Where is the remainder?
-----------------------------------------------------------------------------------------------------
A fee to close the channel (onchain) is set aside at opening.

How is that fee estimation calculated?
--------------------------------------
The commitment fees are automatically negotiated every few blocks with your peer. They are on chain txs like all channel closes but they are not broadcast until you attempt to close the channel.

What would happen if I shut down an Embassy that is running a Lightning node with open channels?
------------------------------------------------------------------------------------------------
It is REALLY IMPORTANT to understand that if Lightning services are shut off for long periods of time (days on end) it is possible for your peers to cheat you out of money. If you are not prepared to LOSE ALL THE MONEY IN YOUR CHANNELS, KEEP YOUR NODE RUNNING.
That said, malicious actors on the network right now are probably sparse. However, you are still open to that risk if you do not keep your node online.

Is there a solution to this?
----------------------------
Yes, the concept of a Watchtower was originally conceptualized in the LN whitepaper.  A Watchtower is simply a lightning node to which you can give the authority to monitor transactions associated with your open payment channels.

Is it possible to run c-lightning and lnd parallel on the Embassy?
------------------------------------------------------------------
Yes, you may run both.  They will operate in their own environments and allow you to run services that depend on either.

How do I connect my Spark mobile app to the Embassy Spark server?
-----------------------------------------------------------------
To use a Spark client, you still need to have Spark installed on the Embassy (which ‘serves’ Spark). Then, under Properties, there is a "Pairing URL". The first part of this is the server URL, and the end portion of it is the access key.

Are my addresses, channels, and balances all stored in LND or in RTL?
---------------------------------------------------------------------
This is all on LND, and RTL is just a GUI for accessing LND.  On-chain balance is also part of the LND backup.

How do I find my LND seed so I can write it down to backup?
-----------------------------------------------------------
All LND backups are best done via the Embassy backup flow.  It is not supported to use a seed as backup; LND does not expose this. Everything crucial is backed up by our backup system so you do not need your seed.  The seed is ONLY for the onchain wallet and does not backup your channel state.

To clarify some of the reasons for this choice:

First off, Lightning is fundamentally different than on-chain/Layer1(L1) bitcoin. There is no way to compress all of that information down into a single 24 word seed in such a way that it will continue to work throughout your usage of the Lightning Network.

So, what is the LND seed *for*? In short, the seed is only used for the Layer1 portion of the funds you have locked up in LND. Due to the live nature of LND and lightning nodes in general, we tend to discourage keeping any significant amounts of money in the onchain portion of your wallet. Given that we cannot actually recover the Layer2(L2) funds with that seed, we needed to have a more holistic way to backup LND funds such that the backup would encompass the ability to get L2 funds back. The Embassy backup system does this, and this approach also happens to be a perfectly valid backup of your L1 funds as well. While Bitcoin users have been trained that the 24 word seed can be used to recover all of their funds, it is important to state that lightning does not and cannot work this way. Exposing the seed gives you two separate things to keep track of in order to recover your funds instead of just one.

Is there a way to use the channel backups made within RTL?
----------------------------------------------------------
The only backup flow we officially support is through the Embassy backup system. This does include the channel backups created automatically by LND, but it must be understood that backups in Lightning are very different than they are on Layer 1 Bitcoin. If you restore from backup all your channels will close, and there is a potential, albeit small, probability for you to lose funds.

When attempting to add new peer, RTL says "server is still in the process of starting," but chain state seems to be fully up to date.  What can I do?
-----------------------------------------------------------------------------------------------------------------------------------------------------
Check the LND logs, it can take a while to bootstrap, and starting RTL before this completes could cause errors.

"Server is still in the process of starting," but LND and RTL are running.  How can I address this?
---------------------------------------------------------------------------------------------------
You may need to restart the LND Service.

I get the following error from LND: "Error ECONNREFUSED Fetching Info Failed! Unknown Error." What's wrong?
-----------------------------------------------------------------------------------------------------------
LND is waiting for Bitcoin to completely sync, and then needs to catch up on block scanning itself.  This may take several minutes, and in some cases might require a restart of the LND service.  Do this if the process takes more than 5-10 minutes.

What's the best way to move a small lightning balance?
------------------------------------------------------
It is possible to have lightning balances that are so low that they will not (or barely will) cover the on-chain fees to recoup into an on-chain wallet.

Why are Lightning Network backups and moves so complicated?
-----------------------------------------------------------
There are safe ways to do an “atomic move” of a LN node, but it requires a very specific sequence of actions and certain mistakes can result in your counterparties taking all your funds. Currently, LN works on a punishment scheme. This means if you publish revoked state, the counterparty is entitled to a claim on all the funds in the channel. This incentive system is what makes the whole system work. Without it LN would be subject to various kinds of thievery.

The downside is that backups of old state are not safe. This is because your node might believe it is the real state of the channel, but it may be unaware of states created since then. The problem here is that your node naively believes something different from the truth, which can result in all of the funds being lost. In response to this reality, the safe backup systems, including those generated by RTL, actually do not include channel state. They only list the peers that you had channels with. Restoring these backups essentially politely asks your peers to force close the channels they have with you. In those moments it is possible for your peer to try and cheat you, but they cannot be 100% sure that you can’t punish them, so it’s extremely unlikely that they will attempt to do so.
