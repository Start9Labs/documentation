.. _faq-troubleshooting:

=============================
Setup and Troubleshooting FAQ
=============================

.. contents::
  :depth: 2 
  :local:

What do I do first?
-------------------
Please check out the :ref:`Initial Setup <initial-setup>` page, and follow the instructions.

How do I know if my Embassy is running?
---------------------------------------
After plugging into power and your router, you will hear 2 distinct sounds: first, a “bep” ‐ indicating the device is powering on, and second, a “chime” ‐ indicating the device is ready for setup. You can hear these sounds on the :ref:`Initial Setup<initial-setup>` page.

My Embassy is really hot!  Is this normal?
------------------------------------------
Yes, the Embassy's case is actually doing 'double duty' as a heat sync.  This means that the metal of the case is actually touching the chips on the circuit board and drawing their heat out and away.  This is known as "passive cooling," as no fan (and therefore no noise) is required to cool the system.

I'm trying to migrate my old Embassy data, but the device won't boot.  What do I do?
------------------------------------------------------------------------------------
Remove the external drive and sd card adapter if they are plugged in.  Boot the device with just the new (32GB) sd card inserted.  After you hear the start-up sounds, you may plug in the external drive and old (128GB) sd card.

I cannot reach embassy.local after hearing the start-up sounds from Embassy.  What do I do?
-------------------------------------------------------------------------------------------
* Ensure that you are on the same network as your Embassy.  Check that it is not a "Guest" network in your router
* Your browser might try to force https://embassy.local, delete the https:// prefix and try again with just embassy.local or http://embassy.local
* Try a different browser, and note that Tor Browser cannot handle .local addresses
* Turn off your VPN if you are using one (you may turn it back on after setup)
* If none of the above work, check your network setup, including your router settings if they are non-standard

.. _why-bonjour:

Why do I need the Bonjour service (Windows)?
--------------------------------------------
A major use-case of Bonjour is wireless printing over the LAN, but your Windows machine can also use Bonjour to discover and connect with other devices on the :ref:`Local Network<lan>`. In this case your Embassy.  If Windows were to add support for reaching ``.local`` addresses, as is done in Linux and Mac, this would no longer be necessary.

Recent updates to Windows 10 (and possibly 11) may obviate the need for Bonjour, but so far results are mixed.

My Tor sites aren't loading, what should I do?
----------------------------------------------
This is most likely a transient networking issue that will correct itself in a few minutes to an hour. If it does not, there are few things you can try:

1. On Android/Orbot, the most common solution is to restart your Android device.

2. Access your Embassy over :ref:`LAN <connecting-lan>`, and restart it from the "Embassy" menu.  (Restart by removing power if you cannot access via LAN)

3. Restart your router.

Do I need to take any additional security precautions with my device, for example with my router/modem?
-------------------------------------------------------------------------------------------------------
Nothing special is required, however, it is best practice to use good passwords, i.e. for your WiFi and your Embassy.  Here's a `comic <https://xkcd.com/936/>`_ explaining how to make strong passwords, simply.

What if I have an unique network issue, for example, with a firewall?
---------------------------------------------------------------------
Embassy is designed to work as simply as possible, for as many as possible, while providing the ability to self-host in a private manner.  If you have an agressive or custom firewall, or other custom network settings, there is a good chance that addtional configuration may be necessary.  We will continue to learn about custom networking issues, update our docs with resources, and help in the :ref:`Community Channels <contact>` to the best of our ability.

Can I use my Embassy from behind a VPN, for example, if my router has a built-in VPN?
-------------------------------------------------------------------------------------
While this is possible, it adds complexity, which may lead to problems.  You will need to understand the setup of your router/VPN and how it supports (or doesn't support) Tor/LAN connections.

If you are having trouble with this, you might consider letting Embassy out "in the clear," since all services are accessible over the Tor network, offering a high level of privacy.

Is it true that my device has some limited functionality in regard to Embassy?
------------------------------------------------------------------------------
The short answer is maybe, but there are workarounds for most limitations.  Please see the :ref:`Limitations<limitations>` page for details on your device.
