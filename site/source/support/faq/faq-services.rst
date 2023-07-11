.. _faq-services:

============
Services FAQ
============

.. contents::
  :depth: 2 
  :local:

What if I cannot connect to a Service?
--------------------------------------
Please make sure the service is started by viewing it in the Services tab in the StartOS dashboard menu. A green indicator bar should be visible.

Will there be a VPN?
--------------------
There will be more on this style of functionality following StartOS v040.

Will there be an email server?
------------------------------
We do hope to add this functionality one day, however it has some technical challenges, and is not currently a high priority.  If you would like to tackle this and help us get a self-hosted email server on StartOS, please reach out in our Matrix or Telegram `dev channels <https://start9.com/contact>`_, and we will be happy to help in any way that we can.

Can StartOS run 'X' Service??
---------------------------------
Potentially. Here is a `comprehensive list <https://github.com/awesome-selfhosted/awesome-selfhosted>`_ of self-hosted services, any of which can theoretically be run on StartOS.  To get a general idea of what is required, answer these questions:

1. Is the software designed to be self-hosted?
2. If it has a P2P interface, does that interface support Tor?
3. Does it ship with it's own web interface? Or is there a Tor-enabled client app?
4. Is there someone willing to put in the time to package it up?

If all answers are yes, then it can run on StartOS.  Following OS v040, the Tor requirements will be dropped.

Packing up a service for StartOS does not require extensive development skills. If you are interested in doing do, please see our :ref:`Developer Docs <developer-docs>`.

We are aggressively moving away from service development in favor of a more community driven approach. Meaning you, an app development team, or anyone else on Earth, can bring the service they want to a Marketplace registry so anyone can run it on StartOS. You don't need our permission.  See more on our strategy in `this blog post <https://blog.start9.com/start9-marketplace-strategy/>`_.

Does StartOS operate as a Tor relay node?
-----------------------------------------
No, currently it does not, but we plan to add that functionality as an option.

Are files on my server encrypted on disk?
-----------------------------------------
Yes, but not in a way that would prevent a sophisticated attacker.  Physical access should be considered root access.

I get an error ("Unlock Wallet Failed") when trying to log in to RTL, what can I do?
------------------------------------------------------------------------------------
Stop and Restart the Service.

What is happening if I cannot connect with another user on Mastodon?
--------------------------------------------------------------------
You can only follow someone who has an account on a Mastodon server that supports Tor. It is a new feature, so many instances do not have it yet.  Other issues are typically related to the tor connection, check your tor daemon, orbot, or try to restart the service.

What does it mean when Vaultwarden says "This browser requires HTTPS to use the web vault" upon creating an account or loging in to my Vaultwarden onion?
---------------------------------------------------------------------------------------------------------------------------------------------------------
You will need to tell your browser to treat .onion URLs as a "secure context".  You will need to follow this guide to configure :ref:`Tor on Firefox<tor-firefox>`.

Can the browser extension be used with Bitwarden hosted on StartOS?
-------------------------------------------------------------------
Yes, but only in a tor-enabled browser.  Just add your .onion address as the server in the extension.  Make sure that http:// is at the beginning, and NOT https://, as this will not work.

You can use your .local address, but remember that you will only be able to sync when on your :ref:`LAN<lan>`.

I want to use BTCPayServer on my website, but Tor is the only option, how can visitors access my BTCPay on clearnet?
--------------------------------------------------------------------------------------------------------------------
As StartOS produces a Tor Hidden Service for each service, BTCPayServer is only available via Tor by default.  For a brick and mortar business, this is no problem as you can use your own device for a customer to pay you on.  If you run your own website, it is possible to set up a reverse proxy in order to serve BTCPay content to your clearnet visitors.  A guide to doing this is available in the `BTCPayServer docs <https://docs.btcpayserver.org/Deployment/ReverseProxyToTor/#reverse-proxy-to-tor/>`_.

We understand that this can be a frustrating limitation, and adding clearnet support is high on our list of priorities for StartOS (coming in v040).  This will allow a number of services to have better interoperability with the broader Web.

I'm having issues connecting to users or rooms in Matrix/Synapse, what can I do?
--------------------------------------------------------------------------------
Most issues in Matrix will be due to improper setup, or tor connectivity issues.  Please follow the directions in the Synapse web interface closely, and be sure that you have a good tor connection on the device you are trying to connect with.  As with all Tor addresses, make sure you are using http:// as a prefix (some apps will automatically prefix https://.

Please reach out to support if you are still unable to connect.

My Element desktop client stopped working after an OS update, what is happening?
--------------------------------------------------------------------------------
If you had to create a custom destkop shortcut, it is likely that this was reset with the system update, so you'll just need to remake it.  This happens most often on Windows.

I don't see an answer to my question regarding a certain service.  Is there more documentation?
-----------------------------------------------------------------------------------------------
While we are intent on providing the most friendly experience possible to our customers, ultimately it will be impossible for Start9 to create documentation and tutorials for every service we make available on StartOS.  Each service *should* have its own documentation produced by the service developers themselves, and we will do our best keep track, consolidate, and link to it in our :ref:`external support channels <external-support>`.  Also, much of the reason good tutorials don't exist is simply because no one in the community has taken the time to produce it.  If you come across something useful or write something up yourself, please let us know and we will promote it.  Otherwise we will do our best to answer questions as they arise and gradually build out tutorials where they are lacking.

I want to understand in depth how a Service works and it's available configuration options.  Where can I go to learn more?
--------------------------------------------------------------------------------------------------------------------------
Depending on the app, the config options can be quite involved. Bitcoin Core, for example, has an enormous amount of complex options, almost none of which are useful to a normal user doing normal things. We chose some very sane defaults that should work for normal use cases. Here is an example config from the Bitcoin `GitHub <https://github.com/bitcoin/bitcoin/blob/master/share/examples/bitcoin.conf>`_.

By reading the descriptions in the link above, as well as doing some extra searching on your favorite search engine, you can begin to discover all the crazy ways in which someone can customize their Bitcoin node. Here is another list of `possible options <https://en.bitcoinwiki.org/wiki/Running_Bitcoind>`_.

We translated much of (but not all of) the tons of options into a clean and easy-to-use GUI with toggles, dropdowns, inputs, etc, which is what you're seeing in your config screen. If you notice the little "?" icons on the left of each option, clicking them will provide a brief description as to what the option does. Also, our config GUI restricts the possible values you can enter such that you don't accidentally crash Bitcoin. That said, be very careful about just randomly changing things, lest your node starts to behave strangely.

You can also check out our :ref:`Service Config Spec <config_spec>` documentation for further details.
