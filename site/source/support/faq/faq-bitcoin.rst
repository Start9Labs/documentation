.. _faq-bitcoin:

===========
Bitcoin FAQ
===========

.. contents::
  :depth: 2 
  :local:

Why does the Bitcoin service take so long to be ready?
------------------------------------------------------
On first install, the Bitcoin service must verify the entire history of transactions in order to verify transactions going forward.  This can take up to a week depending on your internet connection.  On a fast connection, you can expect 3-4 days.  You can continue to use your server normally in the meantime.
You can learn more about the Initial Block Download in `this video <https://www.youtube.com/watch?v=OrYDehC-8TU>`_.

.. youtube:: OrYDehC-8TU
    :width: 100%

Can the IBD (Initial Block Download) be made faster?  Or can wait times be improved?
------------------------------------------------------------------------------------
IBD was made significantly faster with the new hardware scheme of version 0.3.0 and up.  Going forward the only way to improve IBD speeds will be on more powerful hardware.

Does StartOS run a full archival Bitcoin node or a pruned one?
------------------------------------------------------------------
Previous versions of StartOS (pre-0.3.0) only allowed a pruned node, but the option is now yours.  In the Bitcoin Config, find the section on pruning, and set to 'Manual' or 'Automatic' to to prune to specified sizes, or turn pruning off entirely for a full archival node.  Please keep in mind that a full archival node will take up between 400-500GB of your drive as of 2022.

What actions, specifically, are only possible with an archival, or 'unpruned' node?
-----------------------------------------------------------------------------------
Generally, the more sophisticated the blockchain analysis being done is, the more index data is required, which will increase the system resources required.  For example, if you wanted to run a block explorer (such as Mempool.Space), you would require not only a full archival node, but also a full transaction index.  So, specifically, at this time, a full archival node is required for running an Electrum server, a block explorer, and for doing advanced chain analysis in general.

Many wallets also do not yet support pruned nodes, which is one big reason that we added the archival option.  Archival nodes currently have a lot more wallet integration options.

Is it insecure to run a pruned node?
------------------------------------
As a user, pruned nodes and archival nodes provide you the same security.  In a larger sense, if 100% of people ran pruned nodes, the security of the network could be in dire circumstances and be put at risk if no nodes kept history, as then no one could bootstrap new nodes.  The reality however, is that most StartOS users are new node operators, so there is no net systemic risk introduced if users decide to run a pruned node.

The Bitcoin Service is different from the GUI version I am used to using (bitcoin-qt).  How do I use this like I used to?
-------------------------------------------------------------------------------------------------------------------------
At present, StartOS does not offer its own node visualization tool. You can view certain properties about your node inside the "Properties" section, but not in an animated GUI. If you want to use bitcoin-cli, you may do so by adding an SSH key to your server and :ref:`exec-ing into the bitcoind docker container<service-container>`. Otherwise, the main way to actually *use* your node is through a wallet. The QT GUI is not usable because it cannot be served through the browser (which is necessary here), and last we checked, the QT desktop client was incapable of connecting to a remote node over Tor.

Is a wallet vulnerable to hacking if it's always online??
---------------------------------------------------------
Funds are not stored on the node typically.  The node simply serves as a source of truth for the state of the blockchain.  Attacks depend on where the keys are and where the signing happens. You can use something like a hardware wallet for better security.  Though, to be fair, a lot of attacks depend on you or your machine being targeted specifically, and a whole bunch of attack vectors are highly theoretical and obscure.

Most successful attacks seem to be either fake/doctored software or a social attack (tricking you into installing some malware or giving your seed outright or something like that).
Keep in mind, however, the more value there is out there to steal, the more sophisticated attacks will get automated (bots, crawlers etc). So its not just the risk profile of today, but also tomorrow you have to consider.  That's why something like a hardware wallet or dedicated mobile device for key signing is a good idea.
Even if your wallet is plugged into your server, whether your wallet is hot or cold depends on the hardware that stores the keys.

How does Bitcoin Proxy request (and verify) data when that data is needed by some app using it?
-----------------------------------------------------------------------------------------------
Proxy fetches blocks from your pruned node if it still has them, and fetches them from peers when it does not.  Proxy can ensure the fetched block is valid by comparing it to its header, which is retained by the pruned node.  The header is a product of the hash of the block itself, amongst other things, so it can't be tampered with.

How do I use Bitcoin Core as a wallet?
--------------------------------------
Bitcoin Core is a full node that also contains wallet functionality.  Some will be familiar with Bitcoin-QT, which is a Bitcoin Core GUI that for a long time was the only available wallet.  This is currently not compatible with StartOS.
You can use the wallet in Bitcoin Core, however it is for advanced users and is only available in the command line via SSH.

It is helpful to think of the Bitcoin Core service on StartOS as your own personal Bitcoin Server. This is your own verified source of truth of the Bitcoin ledger, that requires no permission for you to set up and own. The job of your Bitcoin server is to verify that the transactions you want to make and receive are valid.
There are modern wallets that have the ability to use your personal Bitcoin node as a source of truth, and with the advantages of additional security and advanced features. This also follows the Unix mantra of "do one thing and do it well."  The recommended way to use your Bitcoin node is with an external wallet.
The available wallets are listed in the following FAQ.

Which wallets can I use that integrate with my Bitcoin and/or Lightning nodes?
---------------------------------------------------------------------------------
Please see the :ref:`Bitcoin Service Guides<bitcoin-service>` for all the current options.

I want to use my hardware signer, such as Coldcard or Trezor, with my Bitcoin node.  How does this work?
---------------------------------------------------------------------------------------------------
You do not use hardware signers directly with your node. Hardware signers interface with wallets, and wallets interface with nodes.

Node (on StartOS) <— Wallet (Specter, Sparrow, Electrum) <— Hardware signer (Coldcard, Trezor)

You would use your hardware signer with your wallet, then instruct that wallet to use your Bitcoin node as its node.

- Nodes are for interacting with the Bitcoin network: enforcing consensus rules, validating and relaying blocks/transactions, and broadcasting transactions.

- Wallets are for constructing and viewing transactions, as well as generating addresses.

- Signers are for generating and storing keys, as well as signing transactions.

The reason there is so much confusion about these 3 concepts is that the Bitcoin Core Node comes with its own Wallet (which you should not use), and that wallet is also a signer. In fact, most wallets double as signers, and most wallets do NOT support connecting to your own node. So, most wallets are actually serving as a wallet, a node, and a signer, which might be convenient, but it is neither trustless nor maximally secure. Ideally, you are using a wallet that supports both integrating with a hardware signer (like Coldcard or Trezor) AND a backend node (like on StartOS).
