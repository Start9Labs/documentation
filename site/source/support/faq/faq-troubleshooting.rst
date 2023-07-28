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

How do I know if my server is running?
--------------------------------------
After plugging into power and your router, if your device is equipped with a speaker, you will hear 2 distinct sounds: first, a “bep” ‐ indicating the device is powering on, and second, a “chime” ‐ indicating the device is ready for setup. You can hear these sounds on the :ref:`Initial Setup<initial-setup>` page.  Otherwise, your server is available on its unique ``adjective-noun.local`` or ``onion`` addresses.  If something goes wrong, it will serve a diagnostic page on ``http://start.local``.

My server is really hot!  Is this normal?
-----------------------------------------
On early devices, yes.  These cases are actually doing 'double duty' as a heat sink.  This means that the metal of the case is actually touching the chips on the circuit board and drawing their heat out and away.  This is known as "passive cooling," as no fan (and therefore no noise) is required to cool the system.

You can check the chip temperature of your device under "System -> Metrics".

I cannot reach start.local (for setup) after hearing the start-up sounds.  What do I do?
----------------------------------------------------------------------------------------
* Ensure that you are on the same network as your server.  Check that it is not a "Guest" network in your router
* Your browser might try to force https://start.local, delete the https:// prefix and try again with just start.local or http://start.local
* Try a different browser, and note that Tor Browser cannot handle .local addresses
* Turn off your VPN if you are using one (you may turn it back on after setup), or "allow LAN connections" if your VPN has such a setting.
* If none of the above work, check your network setup, including your router settings if they are non-standard

.. _why-bonjour:

Why do I need the Bonjour service (Windows)?
--------------------------------------------
A major use-case of Bonjour is wireless printing over the LAN, but your Windows machine can also use Bonjour to discover and connect with other devices on the :ref:`Local Network<lan>`. In this case your Start9 server.  If Windows were to add support for reaching ``.local`` addresses, as is done in Linux and Mac, this would no longer be necessary.

This dependency will no longer be required following StartOS v040.

My Tor sites aren't loading, what should I do?
----------------------------------------------
This is most likely a transient networking issue that will correct itself in a few minutes to an hour. If it does not, there are few things you can try:

1. On Android/Orbot, the most common solution is to restart your Android device.

2. Access your server over :ref:`LAN <connecting-lan>`, and restart Tor from the "System" -> "Experimental Features" section.

3. Restart your server.

4. Restart your router.

Do I need to take any additional security precautions with my device, for example with my router/modem?
-------------------------------------------------------------------------------------------------------
Nothing special is required, however, it is best practice to use good passwords, i.e. for your WiFi and your server.  Here's a `comic <https://xkcd.com/936/>`_ explaining how to make strong passwords, simply.  Bitwarden clients also all contain feature-rich password generation tools.

What if I have an unique network issue, for example, with a firewall?
---------------------------------------------------------------------
StartOS is designed to work as simply as possible, for as many as possible, while providing the ability to host in a private manner.  If you have an aggressive or custom firewall, or other custom network settings, there is a good chance that addtional configuration may be necessary.  We will continue to learn about custom networking issues, update our docs with resources, and help in the `Community Channels <https://start9.com/contact>`_ to the best of our ability.

Can I use my server from behind a VPN, for example, if my router has a built-in VPN?
------------------------------------------------------------------------------------
Yes, this is possible, but it adds complexity, which may lead to problems.  You will need to understand the setup of your router/VPN and how it supports (or doesn't support) Tor/LAN connections.

If you are having trouble with this, you might consider letting your server out "in the clear," since all services are accessible over the Tor network, offering a high level of privacy.  Obviously, Start9 cannot support every variation of router and network.
