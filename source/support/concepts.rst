.. _concepts:


Concepts
********

Depending on your background, the Embassy platform may deal with some unfamiliar concepts. While it is not strictly *necessary* for you to understand these concepts to use your Embassy, we know many of you would like to.


.. _start9:

"The Origin of “Start9”
=======================

Pokemon is a game for Gameboy. Twitch is a live video streaming app. “Twitch Plays Pokemon” was a popular phenomenon where Twitch users would collaborate to play a SHARED game of Pokemon on Gameboy. Here’s how it worked:

Participants would use the Twitch message board to enter commands that then got executed in the gameplay. For example, if someone entered the command "right”, that would cause the player to move 1 space to the right. Commands would execute immediately after they were received, and anyone could enter a valid command at any time. You can think of Twitch Plays Pokemon as the more practical equivalent of placing a Gameboy in the middle of a crowded room and telling everyone to push buttons at the same time. As you might expect, the gameplay of Twitch Plays Pokemon was quite “twitchy”, but in a very "infinite monkey theory" way, progress could eventually be made.

In an effort to streamline play, a new game mode was devised in which players would “vote” for the next command and, every 4 seconds, whatever command received the most votes over the previous 4 seconds would execute in the game. Also introduced in this mode was the ability to attach multipliers to a command, such that the command would execute that number of times. For example, “right2” would cause the player to move 2 spaces to the right. “right3” would cause the player to move 3 spaces to the right, and so on. The highest number any participant could place after a command was 9, meaning whatever command they entered would execute 9 times. As you might expect, gameplay in this mode was less chaotic, more efficient, but it also meant each participant had less direct and immediate influence over the game. If a group of even 5-10 got together and colluded on their votes, they could practically take over the game and make contrarian ideas irrelevant. The new game mode was called “Democracy”, and the original game mode became known as “Anarchy”. Which game mode was engaged was itself governed by a democratic process: if more participants wanted to play in Democracy mode, then Democracy mode engaged; if more wanted to play in Anarchy mode, then Anarchy mode engaged.

To summarize: in Anarchy mode, everyone had equal influence over the game, but progress was slow and clunky. In Democracy mode, progress was fast and efficient, but colluding groups could marginalize individual participants and ruin the game for them.

So…individual participants discovered a means of effective protest whenever Democracy mode became suffocating, but they could not garner enough votes to switch back to Anarchy mode. Someone would type the command “start9” into the comments. This command meant “open the start menu 9 times in a row”, which, as you might imagine, would be enormously disruptive if executed. The entire screen would be blocked by the start menu,  over and over. Typing “start9” was a participant’s way of signaling to other participants that they felt marginalized by Democracy mode, and they were ready to fight back. If others felt the same, they could also begin typing “start9” - then, sure enough, “start9” would finally receive more votes than the colluding group’s command, and the menu opening would begin. Every 4 seconds, the menu would open 9 times…again, and again, and again…until finally, the colluding group would be forced to either cooperate in reverting the game mode back to Anarchy mode or quit altogether.

Playing in Anarchy mode was impractical, but people did not want to play a game where they had no voice, where a group of insiders had taken total control. And so “start9” became the battle cry of the individual, the out-group, a means of signaling to other individuals that it was time to fight back against the usurpers - to use their own rules against them, until there was no alternative but to return control to the individual participants.

.. _open-source:

Open Source
===========

The Internet itself was built on free and publicly available code, with the values of collaboration, peer review, communication, and openness built into its very foundation. This decentralized model evolved into the open source movement, which uses these values to discover new ways to solve problems across boundaries and industries.

Open source software centered around the concept of user freedoms: freedom to see, modify, and redistribute the code to make it work for the user in whatever way they needed. It does not necessarily mean free to use. It means that the software will be better, cheaper, and more flexible if it is freely accessible, openly modifiable, and shared.

If anyone can inspect, modify, and distribute the code, bugs are more rapidly resolved, security vulnerabilities are more quickly audited and exposed. Community driven development efforts enable diverse collaboration which increases project reliability and longevity.

Distinct from open source software is proprietary, or closed source, software. Closed source software is strictly moderated, cannot legally be altered, copied, or distributed, and is paid for to be used as intended without modification. Only the code owners have the right to access the code.

As a company founded on the principles of freedom, every service we support is open source. We believe in contributing to the future of this vibrant and passionate ecosystem.

.. _lan:

LAN
===

A Local Area Network (LAN) is a computer network that interconnects computers within a limited area such as a residence, school, laboratory, university campus, or office building.

Devices on a LAN are private and protected, such that only devices connected to the same Ethernet or WiFi network can see or communicate with them.

Your Embassy hosts itself on the LAN and is reachable by visiting its *.local* URL in the browser while also connected to the LAN.

.. note:: Any device connected to a LAN can inspect all communications on that LAN. To avoid snooping, your Embassy's LAN communications are encrypted using :ref:`ssl`, which requires :ref:`additional setup <ssl-setup>`.


.. _ssl:

SSL
===

Visiting websites on the Tor network is slow. We wanted to provide a better option to access the Embassy at home. That’s why we created an address for the Embassy that can be accessed on your Local Area Network.

By default, this `.local` address is served like a regular website, over HTTP. Browsers make it noticeable when visiting a site over HTTP in the URL bar - it could be red, show an unlocked lock, or warn that the connection is not secure.

SSL certificates are what enable websites to move from HTTP to HTTPS, which increases security and makes browsers happy. Using the Secure Sockets Layer protocol, HTTPS enabled websites use certificates to establish authenticated and encrypted links between networked computers. It’s the standard technology for keeping an internet connection secure and safeguarding any sensitive data that is being sent between two devices, preventing third parties from reading and modifying any personal information transferred. They also verify ownership of a website.

Valid SSL certificates are typically issued and obtained from Certificate Authorities. These trusted third parties generate and distribute certificates, signing them with their trusted private key, which allows the clients who use them to verify their authenticity. Websites obtain a certificate from a CA then load it onto their website’s hosting service or server, allowing the website to load over HTTPS and have all traffic to and from the website be encrypted and secure.

We decided to have the Embassy act as a Certificate Authority. It creates a self-signed certificate, which means that the private key used to sign the digital certificate is the Embassy’s own private key instead of a third party’s.

When you setup SSL for your Embassy and device, the certificate communicates to the client (a browser) that the server (the Embassy) demonstrated ownership of the domain (the `start9-xxxxxxxx.local` address) to the certificate authority (created on the Embassy) at the time of certificate issuance (during the setup process). The Embassy dashboard can then be accessed from a home network (LAN) using a secure HTTPS connection!

For more information on how to setup your devices to enable this feature visit :ref:`ssl-setup`.


.. _tor:

Tor
===

The Onion Router, or Tor, is a free and open source software that enables anonymous communication. By routing Internet traffic though a worldwide, volunteer overlay network of nodes, requests are bundled in layers of encryption like the layers of an onion. The request is relayed across nodes, decrypting a layer only to reveal the next relay destination, until the request meets its final destination, without revealing the source IP address.

If a malicious third party were to intercept a request, they would see a garbled mess of the remaining onion encryption, and would only know that it came from some onion node and was heading to some other onion node. The contents, source, and destination of the message are totally anonymous.

When you use Tor to communicate with services running on the Embassy, all the traffic is onion routed and encrypted, and there are no Tor exit nodes involved - it's totally private with no configuration needed.

Furthermore, every service on the Embassy has a different Tor address, including the device itself. This is for privacy reasons - should one Tor address be exposed, the others will not be compromised. Tor addresses are actually ed25519 keys, which means they also provide all the benefits of cryptographically secure private/public keys.

.. _node:

Bitcoin Full Node
=================

The Embassy runs a Bitcoin Full Node.  When most people say "full node" what they mean (or ought to mean) is "fully validating node", meaning that the node is capable of enforcing the consensus rules of Bitcoin by accepting, validating, and relaying every transaction and block produced by the network. Fully validating nodes are necessary for Bitcoin to exist and function properly and are what protect the network from attackers attempting to bypass the consensus rules. A fully validating node (aka full node) does not need to store the entire blockchain to accomplish this. A node that stores the entire blockchain is called a "full archival node". It is the same as a full node, except that it stores every single valid transaction and block ever produced by the network. There are not many reasons why an individual would want to run a full archival node. Most of the benefits of node operatorship are encompassed by a basic full node described above. Full archival nodes have the added benefit of enabling a block explorer. For instace, if you were interested in looking up the history of a particular address or viewing the details of a transaction, neither of which were your own. If an address or transaction is your own, you can view those details using a pruned node.

All that said, it will soon be possible to run a full archival node with he embassy, should you determine you want block explorer functionality. This will require plugging in an external hard drive to the embassy and changing a setting in the app, and also a resycnhing of the blockchain from genesis.

You can learn more about Bitcoin and nodes `here <https://lopp.net/bitcoin>`_.

Bitcoin wallets
===============

The word "wallet" has come to mean a lot of things, depending on who you ask and what software you are using. There are (1) software "wallets", (2) hardware "wallets", (3) seed "wallets", and (4) branch "wallets". The one thing all these wallets have in common is that they have almost nothing in common.  As the terms are used today, here is usually what they mean.

(1) SOFTWARE WALLETS - (such as FullyNoded and Specter)  Software applications capable of interfacing with hardware wallets (see below), interfacing with one or more nodes, as well as address creation, transaction creation, transaction broadcasting, and transaction display. Most software wallets are also capable of creating and storing public/private keypairs, granting them properties of both hardware wallets (see below) and seed wallets (see below).  When we say "wallet", we are referring to software applications that posses a user interface for interacting with the Bitcoin network. If a wallet is capable of creating, storing and using private keys, it should be referred to as just a wallet with signer ability.

(2) HARDWARE WALLETS – (such as ColdCard and Trezor)  Physical devices that create and store public/private keypairs, exporting the public keys, NEVER exporting the private keys, and using the private keys to sign transactions on demand. Hardware wallets must interface with a software wallet in order to be useful to a user. For this reason, some have proposed renaming hardware wallets to "hardware signers" for clarity.

(3) SEED WALLETS - Basically just the root of a hierarchical deterministic tree of keypairs. It usually takes the form of a mnemonic phrase of 12 or 24 words. Why people refer to their mnemonic seed as a "wallet" is confusing. Just call it a seed.

(4) BRANCH WALLETS - This is how Specter uses the word wallet, and it is causing a lot of confusion. Whenever you create a new "wallet" in specter, you are actually creating a new hierarchical deterministic branch of your mnemonic seed - or in the case of multisig, multiple seeds. The branch you create can be based on "purpose" (segwit, non-segwit, single-sig, multi-sig, etc), "coin type" (Bitcoin, Doegecoin, etc), or "account" (for personal accounting). Change any of these parameters, and you have yourself a new wallet, which again is just a different branch of the same mnemonic seed that potentially abides by a different set of rules. Perhaps a better name for this concept is "bank". Instead of "wallets", you should be able to create different "banks" from your seed.

Lightning Network
=================

The Lightning Network is a "payment layer" that sits on top of the Bitcoin blockchain, which it uses for final settlement. This allows Bitcoin to scale without affecting the security of the protocol layer.  It is easiest to think of Lightning Network as a system that allows anyone to use their Bitcoin to have a running tab (think bar tab) of money they owe each other.  For example, 2 friends may have a "channel" (tab) between them that they use for exchanging value.  The channel keeps track of who owes what. Those payments can be settled at any time on the Bitcoin blockchain if either or both parties decide to close out.  One big incentive to use Lightning is that payments are extremely fast and fees are extremely low.  You can find an introductory video explanation `here <https://www.youtube.com/watch?v=rrr_zPmEiME>`_.

You can learn more about Lightning `here <https://lopp.net/lightning>`_.
