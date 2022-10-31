.. _faq-embassy:

===========
Embassy FAQ
===========

.. contents::
  :depth: 2 
  :local:

Can I run embassyOS on a VPS or VM?
-----------------------------------
Possibly, but we currently advise against this. It is designed to be used on a RaspberryPi, and at the moment this is the only supported way to run eOS.

Is it possible to use embassyOS on my own hardware?
---------------------------------------------------
Yes! The :ref:`DIY Guide <diy>` will take you through the setup steps. This option is great for people who already own the necessary hardware or who live outside the US and want to save on shipping and customs fees.

Additionally, embassyOS is available for you to download or build from source under the Start9 Personal Use `License <https://start9.com/license>`_, for free.  The caveat is that you will miss out on the perks that come along with purchasing from us, such as white-glove support, and others, which will grow over time.

Do I plug my Embassy into my computer?
---------------------------------------
No.  Your Embassy only needs to be plugged into power and internet, just like your router.  You can set it up right by your router and, similar to a router, generally forget about it.

Do I plug in a monitor, keyboard, and mouse?
--------------------------------------------
No.  Embassy is headless (has no display), and is accessed via the web browser.

How much storage does Embassy have?
-----------------------------------
Currently, Embassy ships with a 1 or 2TB SSD, but you may use a larger drive if you prefer.  We advise against HDDs at this time for perfomance reasons.

Are my Internet requests anonymous and secure?
----------------------------------------------
embassyOS and every service on our Marketplace serve their own Tor Hidden Services with unique Tor addresses. The private keys used to create these addresses are generated on your phone or computer when you first set up Embassy. No one, not even Start9, has any idea what your Tor addresses are, let alone the password(s) you choose to authenticate with them.

Does Start9 have access to my Embassy's encryption keys?
--------------------------------------------------------
No.  Your keys are generated on your device using the password you create so we CAN NOT, nor would we like to, see your private keys.

Can multiple Embassies be setup to run redundantly in physically separate locations?
------------------------------------------------------------------------------------
Currently no, but we have plans for a feature that will enable Embassies to provide encrypted, automated backup services for one another.

How does Embassy compare to other Bitcoin nodes or personal servers?
------------------------------------------------------------------------
The cheapest way to run a Bitcoin/Lightning node is to buy a Raspberry Pi (or equivalent), compile the software from source yourself, and host everything on Tor.  This takes even technical people significant time to accomplish. On the other end of the spectrum is something like Embassy, which "just works". In between is stuff like MyNode, Nodl, RoninDojo, Umbrel, and Raspiblitz, which all require some degree of command line effort and network configuration. The biggest benefit of Embassy is that it is infinitely extensible to all of open-source, self-hosted software. The service listing will expand enormously over time in ways the other platforms may choose not to, or have difficulty implementing.

Would you consider (Umbrel, Nodl, RoninDojo, etc) a competitor to Embassy, or are they different enough to be compatible?
--------------------------------------------------------------------------------------------------------------------------
Other node devices are competitors, and there are distinct trade-offs to each platform, but we are definitely moving toward the same future, which is a win for everyone!
We are taking more a general approach to all of open-source, hosted software, including Bitcoin/Lightning. The aforementioned examples tend to be more Bitcoin/Lightning focused.

Since it is often requested, we have put together an :ref:`Umbrel comparison guide<umbrel-compare>`

How can I migrate from Umbrel to Embassy and keep my lightning channels intact?
-------------------------------------------------------------------------------
We've created a guide to help you `transform your Umbrel's bitcoin stack into an Embassy <https://start9labs.medium.com/transform-your-umbrel-into-an-embassy-without-losing-your-lightning-channels-3cacbcbd41cf>`_.

Alternatively, if you have an Umbrel and an Embassy and they're on the same network, you can just select *Services > Lightning Network Daemon > Actions > Import from Umbrel* in your Embassy's web interface and your LND settings and channels will be automatically migrated.

Is a more powerful device in the works??
----------------------------------------
Yes, we are now taking `pre-orders <https://store.start9.com/products/embassy-2>`_ for Embassy Pro, which will be the new standard in personal servers!  Additionally, embassyOS will eventually be capable of running on lots of different hardware, such as an old desktop.  We want embassyOS to be widely available and accessible.

Is there an ETA on the Embassy Pro release date?
------------------------------------------------
R&D is in progress, and we have already secured the hardware.  We anticipate shipping in Q3 2022.  Check our :ref:`Community Channels<contact>` for the latest updates.

Can I mine Bitcoin with this?
-----------------------------
No, you can not.

Does Embassy only work over Tor?  No http or VPN?
-------------------------------------------------
Embassy's current primary communication is over Tor. In many cases we use HTTP over Tor (they are not mutually exclusive), you can see this by navigating to the Tor address in a browser and see the “http” in front of it.  A VPN is a feature we're exploring as an alternative to Tor to make things faster without meaningfully impacting privacy.  You can also connect directly via LAN if you are on the same network as your device.

What if someone gets physical access to my device, can they read the contents? Is it encrypted?
-----------------------------------------------------------------------------------------------
The data is currently encrypted at rest, but not in a way that would prevent a sophisticated attacker from accessing it.  This is a step towards better security in the near future.

Services like Bitwarden, however, do not store plaintext information, so your passwords will not be compromised unless they know your master password.

Why http and not https for .onion websites?
-------------------------------------------
When visiting a Tor V3 URL (.onion website), your communications are end-to-end encrypted and onion-routed by default. There is no added benefit to using https.  See this `article <https://community.torproject.org/onion-services/advanced/https/>`_ from the Tor Project for more details.
