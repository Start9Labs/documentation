.. _faq-services:

************
Services FAQ
************

My Embassy is set up, now what?
-------------------------------
You can now access your Embassy and find the Services you want from the "Marketplace" tab, then clicking "Install."  The Service will let you know if you need any "dependencies," or pre-requisite Services, first.  After you have a Service installed, don't forget to "Start" the service.

What if I cannot connect to a Service?
--------------------------------------
Please make sure the service is started by viewing it in the Services tab in the Embassy dashboard menu. A green indicator bar should be visible.

Can it be used as a firewall?
-----------------------------
Potentially. The PiHole service is on the roadmap.

Will there be a VPN?
--------------------
We are looking into adding as a Wireguard service for VPN access when you are not home.  A client-to-client VPN may also be possible.

Will there be an email server?
------------------------------
We do hope to add this functionality one day, however it has some technical challenges, and is not currently a high priority.  If you would like to tackle this and help us get a self-hosted email server on the Embassy, please reach out in our `Matrix Community Dev Channel <https://matrix.to/#/#community-dev:matrix.start9labs.com>`_, and we will be happy to help in any way that we can.

Can the Embassy run 'X' Service??
---------------------------------
Potentially. Here is a `comprehensive list <https://github.com/awesome-selfhosted/awesome-selfhosted>`_ of self-hosted services, any of which can theoretically be run on the Embassy.
To get a general idea of what is required of an app, answer these questions:

1. Is it designed to be self-hosted?
2. Can it run on a Raspberry Pi?
3. If it has a P2P interface, does that interface support Tor?
4. Does it ship with it's own web interface? Or is there a Tor-enabled client app?
5. Is there someone willing to put in the time to package it up?

If all answers are yes, then it can run on EmbassyOS.

Packing up a service for the Embassy does not require extensive development skills. If you are interested in doing do, please see our service packaging guide :ref:`here <service_package_overview>`.

We are aggressively moving away from service development in favor of a more community driven approach. Meaning you, an app development team, or anyone else on Earth, can bring the Service they want to the Embassy Marketplace. You don't need our permission.

Does the Embassy operate as a Tor relay node?
---------------------------------------------
No, currently it is not, but we plan to add that functionality in the future.

Are files on File browser encrypted on disk?
--------------------------------------------
No, not currently.

Can I use my CUPS instance with other people? How does that work?
-----------------------------------------------------------------
Cups does not have multiple accounts support. Each person would need their own Embassy. We are considering adding multi-account support to Cups, but it's just not a priority at the moment.

How can I fix issues with Sphinx?
---------------------------------
If you are on Android, make sure Orbot is setup correctly, and if it is, try to restart it or your device.  If you still have issues, *back up your keys,* delete all app data from your phone, uninstall, restart the Sphinx service on your Embassy, then reinstall and import your keys.

I get an error ("Unlock Wallet Failed") when trying to log in to RTL, what can I do?
------------------------------------------------------------------------------------
Stop and Restart the Service.

What is happening if I cannot connect with another user on Mastodon?
--------------------------------------------------------------------
You can only follow someone who has an account on a Mastodon server that supports Tor. It is a new feature, so many instances do not have it yet.
Other issues are typically related to the tor connection, check your tor daemon, orbot, or try to restart the service.

Can the browser extension be used with Bitwarden hosted on the embassy?
-----------------------------------------------------------------------
Yes, but only in a tor-enabled browser.  Just add your .onion address as the server in the extension.  Make sure that http:// is at the beginning, and NOT https://, as this will not work.

I want to use BTCPayServer on my website, but Tor is the only option, how can visitors access my BTCPay on clearnet?
--------------------------------------------------------------------------------------------------------------------
As the Embassy produces a Tor Hidden Service for each service, BTCPayServer is only available via Tor by default.  For a brick and mortar business, this is no problem as you can use your own device for a customer to pay you on.  If you run your own website, it is possible to set up a reverse proxy in order to serve BTCPay content to your clearnet visitors.  A guide to doing this is available in the `BTCPayServer docs <https://docs.btcpayserver.org/ReverseProxyToTor/>`_.

We understand that this can be a frustrating limitation, and adding clearnet support is high on our list of priorities for the Embassy.  This will allow a number of services to have better interoperability with the broader Web.

I'm having issues connecting to users or rooms in Matrix/Synapse, what can I do?
--------------------------------------------------------------------------------
Most issues in Matrix will be due to improper setup, or tor connectivity issues.  Please follow the directions in the Synapse web interface closely, and be sure that you have a good tor connection on the device you are trying to connect with.  As with all Tor addresses, make sure you are using http:// as a prefix (some apps will automatically prefix https://.

Please reach out to us if you are still unable to connect.

My Element desktop client stopped working after an OS update, what is happening?
--------------------------------------------------------------------------------
If you had to create a custom destkop shortcut, it is likely that this was reset with the system update, so you'll just need to remake it.

I don't see an answer to my question regarding a certain service.  Is there more documentation?
-----------------------------------------------------------------------------------------------
While we are intent on providing the most friendly experience possible to our customers, ultimately it will be impossible for Start9 to create documentation and tutorials for every service we make available on the Embassy.  Each service *should* have its own documentation produced by the service developers themselves, and we will do our best keep track, consolidate, and link to it.  Also, much of the reason good tutorials don't exist is simply because no one in the community has taken the time to produce it.  If you come across something useful or write something up yourself, please let us know and we will promote it.  Otherwise we will do our best to answer questions as they arise and gradually build out tutorials where they are lacking.

I want to understand in depth how a Service works and it's available configuration options.  Where can I go to learn more?
--------------------------------------------------------------------------------------------------------------------------
Depending on the app, the config options can be quite involved. Bitcoin Core, for example, has an enormous amount of complex options, almost none of which are useful to a normal user doing normal things. We chose some very sane defaults that should work for normal use cases. Here is an example config from the Bitcoin `GitHub <https://github.com/bitcoin/bitcoin/blob/master/share/examples/bitcoin.conf>`_.

By reading the descriptions in the link above, as well as doing some extra searching on your favorite search engine, you can begin to discover all the crazy ways in which someone can customize their Bitcoin node. Here is another list of `possible options <https://en.bitcoinwiki.org/wiki/Running_Bitcoind>`_.

We translated much of (but not all of) the tons of options into a clean and easy-to-use GUI with toggles, dropdowns, inputs, etc, which is what you're seeing in your config screen. If you notice the little "?" icons on the left of each option, clicking them will provide a brief description as to what the option does. Also, our config GUI restricts the possible values you can enter such that you don't accidentally crash Bitcoin. That said, be very careful about just randomly changing things, lest your node starts to behave strangely.

You can also check out our :ref:`Service Config Spec <service_config>` documentation for further details.
