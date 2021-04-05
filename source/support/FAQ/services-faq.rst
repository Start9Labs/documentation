********
Services
********

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

Can the Embassy run 'X' Service??
---------------------------------
Potentially.  `Here <https://github.com/awesome-selfhosted/awesome-selfhosted>`_ is a comprehensive list of self-hosted services, any of which can theoretically make it to the Embassy one day.
If you are interested in packaging a service up for the Embassy, which does not require extensive development skills, please see our guide :ref:`here <service_package_overview>`.
We are aggressively moving away from service development in favor of a more community driven approach. Meaning you, an app development team, or anyone else on Earth, can bring the Service they want to the Embassy Marketplace. You don't need our permission.

Is the Embassy a Tor relay node?
--------------------------------
No, currently it is not, but we plan to add that functionality in the future.

Are files on File browser encrypted on disk?
--------------------------------------------
No, not currently.

Can I use my CUPS instance with other people? How does that work?
-----------------------------------------------------------------
Cups does not have multiple accounts support. Each person would need their own Embassy. We are considering adding multi-account support to Cups, but it's just not a priority at the moment.

Is the embassy able to connect to Sphinxchat?
---------------------------------------------
Maybe, but we are also planning to add Sphinxchat to the Embassy directly.

I get an error ("Unlock Wallet Failed") when trying to log in to RTL, what can I do?
------------------------------------------------------------------------------------
Stop and Restart the Service.

What is happening if I cannot connect with another user on Mastodon?
--------------------------------------------------------------------
You can only follow someone who has an account on a Mastodon server that supports Tor. It is a new feature, so many instances do not have it yet.

Can the browser extension be used with Bitwarden hosted on the embassy?
-----------------------------------------------------------------------
Yes, but only in a tor-enabled browser.  Just add your .onion address as the server in the extension.

I don't see an answer to my question regarding a certain service.  Is there more documentation?
-----------------------------------------------------------------------------------------------
While we are intent on providing the most friendly experience possible to our customers, ultimately it will be impossible for Start9 to create documentation and tutorials for every service we make available on the Embassy.  Each service *should* have its own documentation produced by the service developers themselves, and we will do our best keep track, consolidate, and link to it.  Also, much of the reason good tutorials don't exist is simply because no one in the community has taken the time to produce it.  If you come across something useful or write something up yourself, please let us know and we will promote it.  Otherwise we will do our best to answer questions as they arise and gradually build out tutorials where they are lacking.

I want to understand in depth how a Service works and it's available configuration options.  Where can I go to learn more?
--------------------------------------------------------------------------------------------------------------------------
Depending on the app, the config options can be quite involved. Bitcoin Core, for example, has an enormous amount of complex options, almost none of which are useful to a normal user doing normal things. We chose some very sane defaults that should work for normal use cases. Here is an example config from the Bitcoin `GitHub <https://github.com/bitcoin/bitcoin/blob/master/share/examples/bitcoin.conf>`.

By reading the descriptions in the link above, as well as doing some extra searching on your favorite search engine, you can begin to discover all the crazy ways in which someone can customize their Bitcoin node. Here is another list of `possible options <https://en.bitcoinwiki.org/wiki/Running_Bitcoind>`_.

We translated much of (but not all of) the tons of options into a clean and easy-to-use GUI with toggles, dropdowns, inputs, etc, which is what you're seeing in your config screen. If you notice the little "?" icons on the left of each option, clicking them will provide a brief description as to what the option does. Also, our config GUI restricts the possible values you can enter such that you don't accidentally crash Bitcoin. That said, be very careful about just randomly changing things, lest your node starts to behave strangely.
