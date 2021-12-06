.. _bitcoin-lightning:

*********************
Bitcoin and Lightning
*********************

.. _bitcoin-node:

Bitcoin Node
============

The Embassy runs a Bitcoin Full Node.  When most people say "full node" what they mean (or ought to mean) is "fully validating node", meaning that the node is capable of enforcing the consensus rules of Bitcoin by accepting, validating, and relaying every transaction and block produced by the network. Fully validating nodes are necessary for Bitcoin to exist and function properly and are what protect the network from attackers attempting to bypass the consensus rules. A fully validating node (aka full node) does not need to store the entire blockchain to accomplish this. A node that stores the entire blockchain is called a "full archival node". It is the same as a full node, except that it stores every single valid transaction and block ever produced by the network. There are not many reasons why an individual would want to run a full archival node. Most of the benefits of node operatorship are encompassed by a basic full node described above. Full archival nodes have the added benefit of enabling a block explorer. For instace, if you were interested in looking up the history of a particular address or viewing the details of a transaction, neither of which were your own. If an address or transaction is your own, you can view those details using a pruned node.

All that said, it will soon be possible to run a full archival node with he embassy, should you determine you want block explorer functionality. This will require plugging in an external hard drive to the embassy and changing a setting in the app, and also a resycnhing of the blockchain from genesis.

A video explainin the importance of running a node can be found `here <https://www.youtube.com/watch?v=oX0Yrv-6jVs>`__.

You can learn more about Bitcoin `here <https://lopp.net/bitcoin>`__.

.. _btc-wallets:

Bitcoin Wallets
===============

The word "wallet" has come to mean a lot of things, depending on who you ask and what software you are using. There are (1) software "wallets", (2) hardware "wallets", (3) seed "wallets", and (4) branch "wallets". The one thing all these wallets have in common is that they have almost nothing in common.  As the terms are used today, here is usually what they mean.

(1) SOFTWARE WALLETS - (such as FullyNoded and Specter)  Software applications capable of interfacing with hardware wallets (see below), interfacing with one or more nodes, as well as address creation, transaction creation, transaction broadcasting, and transaction display. Most software wallets are also capable of creating and storing public/private keypairs, granting them properties of both hardware wallets (see below) and seed wallets (see below).  When we say "wallet", we are referring to software applications that posses a user interface for interacting with the Bitcoin network. If a wallet is capable of creating, storing and using private keys, it should be referred to as just a wallet with signer ability.

(2) HARDWARE WALLETS – (such as ColdCard and Trezor)  Physical devices that create and store public/private keypairs, exporting the public keys, NEVER exporting the private keys, and using the private keys to sign transactions on demand. Hardware wallets must interface with a software wallet in order to be useful to a user. For this reason, some have proposed renaming hardware wallets to "hardware signers" for clarity.

(3) SEED WALLETS - Basically just the root of a hierarchical deterministic tree of keypairs. It usually takes the form of a mnemonic phrase of 12 or 24 words. Why people refer to their mnemonic seed as a "wallet" is confusing. Just call it a seed.

(4) BRANCH WALLETS - This is how Specter uses the word wallet, and it is causing a lot of confusion. Whenever you create a new "wallet" in specter, you are actually creating a new hierarchical deterministic branch of your mnemonic seed - or in the case of multisig, multiple seeds. The branch you create can be based on "purpose" (segwit, non-segwit, single-sig, multi-sig, etc), "coin type" (Bitcoin, Doegecoin, etc), or "account" (for personal accounting). Change any of these parameters, and you have yourself a new wallet, which again is just a different branch of the same mnemonic seed that potentially abides by a different set of rules. Perhaps a better name for this concept is "bank". Instead of "wallets", you should be able to create different "banks" from your seed.

.. _lightning-network:

Lightning Network
=================

The Lightning Network is a "payment layer" that sits on top of the Bitcoin blockchain, which it uses for final settlement. This allows Bitcoin to scale without affecting the security of the protocol layer.  It is easiest to think of Lightning Network as a system that allows anyone to use their Bitcoin to have a running tab (think bar tab) of money they owe each other.  For example, 2 friends may have a "channel" (tab) between them that they use for exchanging value.  The channel keeps track of who owes what. Those payments can be settled at any time on the Bitcoin blockchain if either or both parties decide to close out.  One big incentive to use Lightning is that payments are extremely fast and fees are extremely low.  You can find an introductory video explanation `here <https://www.youtube.com/watch?v=rrr_zPmEiME>`__.

You can learn more about Lightning `here <https://lopp.net/lightning>`__.
