.. _faq:

***
FAQ
***

=======
General
=======

What is Start9Labs?
-------------------
Start9Labs is a company based in Denver, CO that builds the Embassy and EmbassyOS.

What is the Embassy?
--------------------
The Embassy is a "shelf-top" computer built using a `Raspberry Pi <https://www.raspberrypi.org/products/raspberry-pi-4-model-b/>`_ for hardware and running EmbassyOS software.  Learn more :ref:`here <embassy>`.

What is EmbassyOS?
------------------
EmbassyOS is a new kind of Operating System (OS).  It is built from the ground up to allow anyone to easily run thier own 'cloud,' remove their dependence on Big Tech, and own their own data.  EmbassyOS allows anyone to easily self-host their own software services.  It handles all operations of the device, including managing the Service Marketplace, Services, Backups, Updates, data, and much more.  Learn more :ref:`here <embassyos>`.

What are EmbassyOS Services?
----------------------------
A Service can be any piece of software added to the Marketplace.  All services are "self-hosted," meaning that you are in complete control of your data.  This means you can run your own "cloud!"  Learn more :ref:`here <managing-services>` and see our currently :ref:`Available Services <available-services>`.

Does the Embassy ship worldwide?
--------------------------------
Yes.

Does the Embassy have international electrical plugs?
-----------------------------------------------------
Power supplies for EU, AU, US, and UK are available.

Is the power supply that comes with Embassy 220v compatible?
------------------------------------------------------------
Yes.

How does pricing work for EmbassyOS?  Are you targeting a specific USD price?
-----------------------------------------------------------------------------
The price is changed every 2016 blocks, which occurs about every 14 days. And no, the intent is not to tie EmbassyOS to a USD value, though at the moment USD is a convenient proxy for real purchasing power.

What are you using for a store backend?  Do you store my data?
---------------------------------------
Great question, here is our exact situation currently:
Embassy device sales are processed through Shopify, which we do not like, but it was expedient in the early days, especially for shipping, so we went with it. Aside from a master list of email addresses for those who have explicitly opted in to our mailing list, all customer data is contained within Shopify. We do not duplicate it anywhere. We are asking Shopify to delete our customer data, but they claim it will take upward of 3 months to comply and we of course have no guarantee the data will actually be deleted permanently. This is partly why we exist...as such, we will be moving off of Shopify and onto a self-hosted solution, where Start9 alone controls our customer data for Embassy purchases, which we will delete as a matter of policy following a short grace period after delivery.
For EmbassyOS sales, we took the maximally private approach right out of the gate. When you buy EmbassyOS, the only thing we need is an email address, and you can only pay with bitcoin. That's it. Then, unless you have explicitly requested that we keep your email for mailing list purposes, we delete the email immediately upon transaction completion.
So...in summary: (1) the shipping data we currently have is stored in Shopify (2) we are asking Shopify to delete all our customer data (3) we will be migrating off of Shopify (4) going forward, we alone will control customer data and will purge it regularly (5) you can always assemble the hardware yourself and just buy EmbassyOS from us with bitcoin, which only requires an email, which is gets purged immediately.

I want to help, but I'm not a developer.  Are there any ways for non-coders to contribute?
------------------------------------------------------------------------------------------
1. Shill it to everyone and create awareness
2. Answer questions from new users in the community channels
3. Make tutorial videos
4. Write instruction manuals or commit to the docs

===========
Basic Usage
===========

Is it easy to use?
------------------
Yes!  The Embassy is designed to be plugged into power and internet, and after a short setup, is immediately ready to use.  Getting services is as easy as getting apps for a smartphone.

So I can run my own cloud?
--------------------------
Yes! No special skills or knowledge are required to host all your own services and replace those previously thought "necessary" for modern digital life.

Can I run multiple Embassies?
-----------------------------
Yes, but there is currently no way to synchronize or federate them.  We are working on ways to make this possible in the future.

What if I forget my Embassy password?
-------------------------------------
Check out the `docs < https://docs.start9labs.com/user-manual/general/forgot-password.html>` on forgot password, and let us know if you have any additional questions.  All your services and data will remain.

Can I move my Embassy to another location?  What happens when I do this?
------------------------------------------------------------------------
Yes, you can move the Embassy to another network.  Your service tor addresses will remain the same.

What’s the advantage of using the .local address over the .onion address?
-------------------------------------------------------------------------
If you are in your home network it is both faster and more private since the connection never leaves your household.  The downside is that it won’t work if you’re on the go.

Is the software Open Source?
----------------------------
Yes! EmbassyOS is open sourced under the `Start9 Personal Use License <https://start9labs.com/license>`_.  Some of our other projects are currently open sourced under MIT. You can find these in the Start9 Labs `GitHub repository <https://github.com/Start9Labs>`_.

Is there a product warranty?
----------------------------
Yes! Start9 commits, to the best of our ability, to serving each beta Embassy product released until the wild. We will resolve any issue encountered with our provided hardware or software in a personalized matter.  We strive to provide highly available, quality customer service.

Can you tell me about the License?
----------------------------------
EmbassyOS is published under our own Start9 Non-Commercial License, which has similar properties to many open source licenses with the exception that users cannot in any way, either through products or services, commercialize the source code, and any changes to the code or derivative works of the code are treated in the same manner. This means people will be welcome to access the source code, download it, use it, run it, fork it, change it, improve it - whatever they want - except sell it or sell services related to it.

I run a business, can I use an Embassy for tasks such as password management and file sharing?
----------------------------------------------------------------------------------------------
Absolutely.  An Embassy would be a great addition to any business as it is easy to use and provides services that you control, with no subscription fees.

Why would I even buy this when I can just build it for free??
-------------------------------------------------------------
(1) White glove support. Because each Embassy comes with a unique product key engraved on it, and we have a record of all product keys ever, we can ask the user to verify their product key in order to receive a higher tier of support, such as phone calls.

(2) Supporting the project. Buying an Embassy from Start9 is your way of supporting the development of the project. And it's not just out of gratitude, but rather, a recognition that if the project isn't funded, the cool software stops coming.

(3) Convenience. This is the big one. It's true, some people will choose to use the software without buying an Embassy, but most will not. Very few people on Earth are comfortable using the command line, compiling code, and configuring an OS. Furthermore, hardware is necessary. Sure, some people already have a Raspberry Pi, and others may try to re-purpose an old laptop, but many people would be choosing between buying the Embassy hardware components themselves and assembling vs buying pre-assembled at a reasonable markup. And it's not just a pi, the Ambassador utilizes audio feedback, so a speaker is necessary too. Finally, due to the product key aspect, we can gate certain features of our hosted Service Marketplace. As in, if you buy an Embassy from us, certain services may be free, whereas they may be charged if you don't buy from us. Nothing stops a user from getting the service themselves from elsewhere, but again, convenience.

Bottom line...We are charging a very marginal rate for something incredibly powerful, and we think the convenience of a plug-and-play device, free service marketplace, and free white glove support is where the money is. Anyone could build their own couches too, but here is a reason furniture stores exist. How much is your time worth?

The fastest way to get support is via our `Telegram <https://t.me/start9_labs>`_ or `Matrix <https://matrix.to/#/!lMnRwPWnyQvOfAoEnD:matrix.start9labs.com>`_ channels.  You can also `email us <support@start9labs.com>`_.  Please do not hesitate to reach out!

=============================
Embassy (Device, OS, and DIY)
=============================

Can I run EmbassyOS on a VPS or VM?
-----------------------------------
No, and we do not advise this. It is designed to be used on a RaspberryPi.

Is it possible to use the EmbassyOS on my own hardware?
-------------------------------------------------------
Yes! You can follow the diy guide :ref:`here <diy>`. This option is great for people who already own the necessary hardware or who live outside the US and want to save on shipping and customs fees.

Additionally, EmbassyOS is available to build from source under the Start9 Personal Use License. If you have the time and energy, it is possible to download and compile EmbassyOS yourself, for free, with the caveat that your “Embassy” will not have a product key generated by us. This means you will miss out on the perks that come along with purchasing from us, which will grow over time.

Do I plug the Embassy into my computer?
---------------------------------------
No.  The Embassy only needs to be plugged into power and internet, just like your router.  You can set it up right by your router and forget about it.

How much storage does the Embassy have?
---------------------------------------
Currently, the Embassy ships with a 128gb of storage.

Are my Internet requests anonymous and secure?
----------------------------------------------
EmbassyOS and every service on the Embassy serve their own Tor Hidden Services with unique Tor addresses. The private keys used to create these addresses are generated on your phone or computer when you first set up the Embassy. No one, not even Start9, has any idea what your Tor addresses are, let alone the password(s) you choose to authenticate with them.

Can multiple Embassys be setup to run redundantly in physically separate locations?
-----------------------------------------------------------------------------------
Soon (tm).  Currently no, be we have plans for a feature that will enable Embassies to provide encrypted, automated backup services for one another.

How does the Embassy compare to other Bitcoin nodes or personal servers?
------------------------------------------------------------------------
The cheapest way to run a Bitcoin/Lightning node is to buy a Raspberry Pi (or equivalent), compile the software from source yourself, and host everything on Tor.  This takes even technical people significant time to accomplish. On the other end of the spectrum is something like the Embassy, which "just works". In between is stuff like MyNode, Nodl, Dojo, Umbrel, and Raspiblitz, which all require some degree of command line effort and network configuration. The biggest benefit of the Embassy is that it is infinitely extensible to all of open-source, self-hosted software. The service listing will expand enormously over time in ways the other platforms cannot.

Would you consider (Umbrel, Nodl, Dojo, etc) a competitor to you guys, or are they different enough to be compatible?
---------------------------------------------------------------------------------------------------------------------
Other node devices are competitors, and there are distinct trade-offs to each platform, but we are definitely moving toward the same future, which is a win for everyone!
We are taking more a general approach to all of open-source, self-hosted software, including Bitcoin/Lightning. They are more Bitcoin/Lightning oriented.

Is a more powerful device in the works??
----------------------------------------
In the near future, the Embassy will move to more powerful hardware.

I heard on an old podcast that there will be an Embassy Two, to be launched in 2021.  Is there an ETA on this?
--------------------------------------------------------------------------------------------------------------
Do not expect a new device in 2021, but we are always doing R&D.

Can I mine Bitcoin with this?
-----------------------------
No, you can not.

Does the Embassy only work over Tor? No http or VPN...??
----------------------------------------------------
The Embassy’s current primary communication is Tor, yes. In many cases we use HTTP over Tor (they are not mutually exclusive), you can see this by navigating to the Tor address in a browser and see the “http” in front of it.  A VPN is a feature we’re exploring as an alternative to Tor to make things faster without meaningfully impacting privacy.  You can also connect directly via LAN if you are on the same network as your device.

=========================
Setup and Troubleshooting
=========================

What do I do first?
-------------------
Simply plug the device into power and internet, typically from your home internet router.  That's it!  After this, get the :ref:`Setup App <initial-setup>`, and follow the instructions.

How do I know if my Embassy is running?
---------------------------------------
After plugging into power and internet, you will hear 2 distinct sounds: first, a “bep” ‐ indicating the device is powering on, and second, a “chime” ‐ indicating the device is ready for setup.

What if I can't connect to my Embassy?
--------------------------------------
Please ensure your phone / computer is connected to the same wired or wireless network as your Embassy.  Be careful that you are not on a seperate or "guest" network.

========
Services
========

My Embassy is set up, now what?
-------------------------------
You can now access your Embassy and find the Services you want from the "Marketplace" tab, then clicking "Install."  The Service will let you know if you need any "dependencies," or pre-requisite Services, first.  After you have a Service installed, don't forget to "Start" the service.

What if I cannot connect to a Service?
--------------------------------------
Please make sure the service is started by viewing it in the Services tab in the Embassy dashboard menu. A green indicator bar should be visible.

Why does the Bitcoin service take so long to be ready?
------------------------------------------------------
On first install, the Bitcoin service must verify the entire history of transactions in order to verify transactions going forward.  This can take approximately a week depending on your internet connection.  You can continue to use the Embassy normally in the meantime.

Can the IBD (Initial Block Download) be made faster?  Or can wait times be improved?
------------------------------------------------------------------------------------
We have some work planned to improve the wait times, which we think is the better way to deal with painful sync times without sacrificing the trust minimization.

Can this run 'X' Service??
--------------------------
Potentially.  The list of software that can be self-hosted is growing rapidly.  Feel free to drop us a comment letting us know what you'd like to see on the Embassy!

Does the Embassy run a full archival Bitcoin node?
--------------------------------------------------
The Embassy runs a full node, but does not run a full *archival* node, it's pruned. This means it does not store the entire Blockchain.  As it syncs, it discards blocks and transactions it does not need.
It is fully validating and verifying consensus all the way from Genesis. Really, the only reason to store the entire Blockchain is if you want to run a block explorer.  Learn more :ref:`here <node>`.

What actions, specifically, are only possible with an archival, or ‘unpruned’ node?
-----------------------------------------------------------------------------------
The more sophisticated the blockchain analysis being done is, the more index data is required, which will increase the system resources required.  For example, if you wanted to run a block explorer, you would require not only a full archival node, but also a full transaction index.

Is it insecure to run a pruned node?
------------------------------------
As a user, pruned nodes and archival nodes provide you the same security.  In a larger sense, if 100% of people ran pruned nodes, the security of the network could be in dire circumstances and be put at risk if no nodes kept history, as then no one could bootstrap new nodes.  The reality however, is that most Embassy owners are new node operators, so there is no net systemic risk introduced.

Is a wallet vulnerable to hacking if it’s always online??
-------------------------------------------------------
Funds are not stored on the node typically.  The node simply serves as a source of truth for the state of the blockchain.  Attacks depend on where the keys are and where the signing happens. You can use something like a hardware wallet for better security.  Though, to be fair, a lot of attacks depend on you or your machine being targeted specifically, and a whole bunch of attack vectors are highly theoretical and obscure.
Most successful attacks seem to be either fake/doctored software or a social attack (tricking you into installing some malware or giving your seed outright or something like that).
Keep in mind, however, the more value there is out there to steal, the more sophisticated attacks will get automated (bots, crawlers etc). So its not just the risk profile of today, but also tomorrow you have to consider.  That’s why something like a hardware wallet or dedicated mobile device for key signing is a good idea.
Even if your wallet is plugged into your Embassy, whether your wallet is hot or cold depends on the hardware that stores the keys.


How does Bitcoin Proxy request (and verify) data when that data is needed by some app using it?
-----------------------------------------------------------------------------------------------
Proxy fetches blocks from your pruned node if it still has them, and fetches them from peers when it does not.  Proxy can ensures the fetched block is valid by comparing it to its header, which is retained by the pruned node.  The header is a product of the hash of the block itself, amongst other things, so it can't be faked.

Can it be used as a firewall?
-----------------------------
Potentially. The PiHole service is on the roadmap.

Will there be a VPN?
--------------------
We are looking into adding as a Wireguard service for VPN access when you are not home.  A client-to-client VPN may also be possible.

Is the Embassy a Tor relay node?
--------------------------------
Not, currently it is not, but we plan to add that functionality in the future.

What is the difference between the Bitcoin Wallet Tracker and the Electrum Personal Server?
-------------------------------------------------------------------------------------------
Bitcoin Wallet Tracker and Electrum Personal Server are 2 services that do the same thing, similar to bitcoind vs btcd, or lnd vs c-lightning.
Both work with your Bitcoin node to provide a richer set of information to wallets than could be done with bitcoind alone.  They are basically identical in purpose, their differences are notably in the software memory requirements and how snappily they can answer the same questions.
Electrum (and some other wallets) require more than just a Bitcoin node to run in a sovereign way, they require an “Electrum Server”. Both Electrum Personal Server and Bitcoin Wallet Tracker are “Electrum servers”.

Which wallets can I use that sync with my Embassy Bitcoin node?
---------------------------------------------------------------
There are many wallets that support linking to your own full node.  You will need one that supports tor.  Here are a few options that are compatible: FullyNoded, Samourai, Specter, Wasabi, Zap, and Zeus.

Are files on File browser encrypted on disk?
--------------------------------------------
No, not currently.

Can I use my CUPS instance with other people? How does that work?
-----------------------------------------------------------------
Cups does not have multiple accounts support. Each person would need their own Embassy. We are considering adding multi-account support to Cups, but it's just not a priority at the moment.

Is the embassy able to connect to Sphinxchat?
---------------------------------------------
Maybe, but we are also planning to add Sphinxchat to the Embassy directly.

Is it possible to run c-lightning and lnd parallel on the Embassy?
------------------------------------------------------------------
Yes, you may run both.  They will operate in their own environments and allow you to run services that depend on either.

How do I connect my Spark mobile app to the Embassy Spark server?
-----------------------------------------------------------------
To use a Spark client, you still need to have Spark installed on the Embassy (which ‘serves’ Spark). Then, under Properties, there is a "Pairing URL". The first part of this is the server URL, and the end portion of it is the access key.

When attempting to add new peer, RTL says "server is still in the process of starting," but chain state seems to be fully up to date.  What can I do?
-----------------------------------------------------------------------------------------------------------------------------------------------------
Check the LND logs, it can take a while to bootstrap, and starting RTL before this completes could cause errors.

"Server is still in the process of starting," but LND and RTL are running.  How can I address this?
---------------------------------------------------------------------------------------------------
 You may need to restart LND.

Can the browser extension be used with Bitwarden hosted on the embassy?
-----------------------------------------------------------------------
Yes, but only in a tor-enabled browser.  Just add your .onion address as the server in the extension.

What's the best way to move a small lightning balance?
------------------------------------------------------
It is possible to have lightning balances that are so low that they will not (or barely will) cover the on-chain fees to recoup into an on-chain wallet.

I don't see an answer to my question regarding a certain service.  Is there more documentation?
-----------------------------------------------------------------------------------------------
While we are intent on providing the most friendly experience possible to our customers, ultimately it will be impossible for Start9 to create documentation and tutorials for every service we make available on the Embassy.  Each service *should* have its own documentation produced by the service developers themselves, and we will do our best keep track, consolidate, and link to it.  Also, much of the reason good tutorials don't exist is simply because no one in the community has taken the time to produce it.  If you come across something useful or write something up yourself, please let us know and we will promote it.  Otherwise we will do our best to answer questions as they arise and gradually build out tutorials where they are lacking.

I want to understand in depth how a Service works and it's available configuration options.  Where can I go to learn more?
--------------------------------------------------------------------------------------------------------------------------
Depending on the app, the config options can be quite involved. Bitcoin Core, for example, has an enormous amount of complex options, almost none of which are useful to a normal user doing normal things. We chose some very sane defaults that should work for normal use cases. Here is an example config from the Bitcoin `GitHub <https://github.com/bitcoin/bitcoin/blob/master/share/examples/bitcoin.conf>`.
By reading the descriptions in the link above, as well as doing some extra searching on your favorite search engine, you can begin to discover all the crazy ways in which someone can customize their Bitcoin node. Here is another list of `possible options <https://en.bitcoinwiki.org/wiki/Running_Bitcoind>`.
We translated much of (but not all of) the tons of options into a clean and easy-to-use GUI with toggles, dropdowns, inputs, etc, which is what you're seeing in your config screen. If you notice the little "?" icons on the left of each option, clicking them will provide a brief description as to what the option does. Also, our config GUI restricts the possible values you can enter such that you don't accidentally crash Bitcoin. That said, be very careful about just randomly changing things, lest your node starts to behave strangely.
