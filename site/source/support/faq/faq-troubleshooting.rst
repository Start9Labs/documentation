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
After plugging into power and your router, you will hear 2 distinct sounds: first, a “bep” ‐ indicating the device is powering on, and second, a “chime” ‐ indicating the device is ready for setup.

My Embassy is really hot!  Is this normal?
------------------------------------------
Yes, the Embassy's case is actually doing 'double duty' as a heat sync.  This means that the metal of the case is actually touching the chips on the circuit board and drawing their heat out and away.  This is known as "passive cooling," as no fan (and therefore no noise) is required to cool the system.

What if I can't connect to my Embassy?
--------------------------------------
Please ensure your phone / computer is connected to the same wired or wireless network as your Embassy.  Be careful that you are not on a separate or "guest" network.

.. _why-bonjour:

Why do I need the Bonjour service (Windows)?
--------------------------------------------
A major use-case of Bonjour is wireless printing over the LAN, but your Windows machine can also use Bonjour to discover and connect with other devices on the :ref:`Local Network<lan>`. In this case your Embassy.  If Windows were to add support for reaching ``.local`` addresses, as is done in Linux and Mac, this would no longer be necessary.

My Tor sites aren't loading, what should I do?
----------------------------------------------
This is most likely a transient networking issue that will correct itself in a few minutes to an hour. If it does not, there are few things you can try:

1. On Android/Orbot, the most common solution is to restart your Android device.

2. Access your Embassy over :ref:`LAN <connecting-lan>`, and restart it from the "Embassy" menu.

3. Restart your router.

Do I need to take any additional security precautions with my device, for example with my router/modem?
-------------------------------------------------------------------------------------------------------
Nothing special is required, however, it is best practice to use good passwords, i.e. for your WiFi and your Embassy.  Here's a `comic <https://xkcd.com/936/>`_ explaining how to make strong passwords, simply.

What if I have an unique network issue, for example, with a firewall?
---------------------------------------------------------------------
The Embassy is designed to work as simply as possible, for as many as possible, while providing the ability to self-host in a private manner.  If you have an agressive or custom firewall, or other custom network settings, there is a good chance that addtional configuration may be necessary.  We will continue to learn about custom networking issues, update our docs with resources, and help in the :ref:`Community Channels <contact>` to the best of our ability.

Can I use my Embassy from behind a VPN, for example, if my router has a built-in VPN?
-------------------------------------------------------------------------------------
While this is possible, it adds complexity, which may lead to problems.  You will need to understand the setup of your router/VPN and how it supports (or doesn't support) tor connections.

If you are having trouble with this, you might consider letting the Embassy out "in the clear," since everything is broadcast exclusively across the Tor network, offering a high level of privacy.

Why am I having trouble using my Embassy via the Brave browser?
---------------------------------------------------------------
Unfortunately, Brave does not treat .onion addresses in a 'secure context.'  This is a well-known issue in Brave that is being tracked `here <https://github.com/brave/brave-browser/issues/13834>`_.

Is it true that my device has some limited functionality in regard to Embassy?
------------------------------------------------------------------------------
The short answer is probably not, and there are workarounds for most limitations.  Please see the :ref:`Limitations<limitations>` page for details on your device.
