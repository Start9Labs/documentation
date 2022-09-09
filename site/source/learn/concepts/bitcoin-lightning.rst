.. _bitcoin-lightning:

=====================
Bitcoin and Lightning
=====================

.. contents::
  :depth: 2 
  :local:

.. _bitcoin:

Bitcoin
-------
Bitcoin is a revolutionary piece of software that allows users to exchange value all over the world, without the permission of a third party.  Entire web sites, books, podcasts, and other resources exist on Bitcoin.  A fantastic compilation of resources can be found `here <https://lopp.net/bitcoin>`_.

.. _bitcoin-node:

Bitcoin Node
------------
The Embassy can optionally run a Bitcoin node.  When most people say "Bitcoin node" what they mean is a "validating node", meaning that the node is capable of enforcing the consensus rules of Bitcoin by accepting, validating, and relaying every transaction and block produced by the network. Fully validating nodes are necessary for Bitcoin to exist and function properly.  They protect the network from attackers attempting to bypass the consensus rules.  When you run a Bitcoin node, you are "being your own bank."  

Here is a video explaining the importance of `running a node <https://www.youtube.com/watch?v=oX0Yrv-6jVs>`_.

.. _btc-wallets:

Bitcoin Wallets
---------------
The word "wallet" has come to mean a lot of things in Bitcoin world, depending on who you ask and what software you are using. There are (1) software "wallets", (2) hardware "wallets", (3) seed "wallets", and (4) branch "wallets".

(1) SOFTWARE WALLETS - (such as FullyNoded and Specter)  Software applications capable of interfacing with hardware wallets (see below), interfacing with one or more nodes, as well as address creation, transaction creation, transaction broadcasting, and transaction display. Most software wallets are also capable of creating and storing public/private keypairs, granting them properties of both hardware wallets (see below) and seed wallets (see below).  When we say "wallet", we are referring to software applications that possess a user interface for interacting with the Bitcoin network. If a wallet is capable of creating, storing and using private keys, it should be referred to as just a wallet with signer ability.

(2) HARDWARE WALLETS - (such as ColdCard and Trezor)  Physical devices that create and store public/private keypairs, exporting the public keys, NEVER exporting the private keys, and using the private keys to sign transactions on demand. Hardware wallets must interface with a software wallet in order to be useful to a user. For this reason, some have proposed renaming hardware wallets to "hardware signers" for clarity.

(3) SEED WALLETS - Basically just the root of a hierarchical deterministic tree of keypairs. It usually takes the form of a mnemonic phrase of 12 or 24 words. Why people refer to their mnemonic seed as a "wallet" is confusing. Just call it a seed.

(4) BRANCH WALLETS - This is how Specter uses the word wallet, and it is causing a lot of confusion. Whenever you create a new "wallet" in specter, you are actually creating a new hierarchical deterministic branch of your mnemonic seed - or in the case of multisig, multiple seeds. The branch you create can be based on "purpose" (segwit, non-segwit, single-sig, multi-sig, etc), "coin type" (Bitcoin, Dogecoin, etc), or "account" (for personal accounting). Change any of these parameters, and you have yourself a new wallet, which again is just a different branch of the same mnemonic seed that potentially abides by a different set of rules. Perhaps a better name for this concept is "bank". Instead of "wallets", you should be able to create different "banks" from your seed.

.. _lightning-network:

Lightning Network
-----------------
The Lightning Network is a "payment layer" that sits on top of the Bitcoin blockchain, which it uses for final settlement. This allows Bitcoin to scale without affecting the security of the protocol layer.  It is easiest to think of Lightning Network as a system that allows anyone to use their Bitcoin to have a running tab (think bar tab) of money they owe each other.  For example, 2 friends may have a "channel" (tab) between them that they use for exchanging value.  The channel keeps track of who owes what. Those payments can be settled at any time on the Bitcoin blockchain if either or both parties decide to close out.  One big incentive to use Lightning is that payments are extremely fast and fees are extremely low.  Check out this `introductory video explanation <https://www.youtube.com/watch?v=rrr_zPmEiME>`_.

`Learn more about Lightning <https://lopp.net/lightning>`_.
