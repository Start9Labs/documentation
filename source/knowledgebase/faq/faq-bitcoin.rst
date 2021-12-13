.. _faq-bitcoin:

===========
Bitcoin FAQ
===========

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
Proxy fetches blocks from your pruned node if it still has them, and fetches them from peers when it does not.  Proxy can ensures the fetched block is valid by comparing it to its header, which is retained by the pruned node.  The header is a product of the hash of the block itself, amongst other things, so it can't be tampered with.

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

What Lightning wallets can I use that sync with my Embassy?
-----------------------------------------------------------
Spark, Zap, and Zeus.

Is BlueWallet an option?
------------------------
BlueWallet requires a separate backend service called LNDHub, which is not available on the Embassy at this time.

Is there a guide for connecting Specter Wallet to my Embassy?
-------------------------------------------------------------
There is.  Please follow the integration guide `here <https://github.com/Start9Labs/bitcoind-wrapper/tree/master/docs/integrations/specter>`_ and select the tutorial based on your operating system.

More guides, particularly in video form, are forthcoming.

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