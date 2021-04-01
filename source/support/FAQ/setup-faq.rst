*************************
Setup and Troubleshooting
*************************

What do I do first?
-------------------
Simply plug the device into power and internet, typically from your home internet router.  That's it!  After this, get the :ref:`Setup App <initial-setup>`, and follow the instructions.

How do I know if my Embassy is running?
---------------------------------------
After plugging into power and internet, you will hear 2 distinct sounds: first, a “bep” ‐ indicating the device is powering on, and second, a “chime” ‐ indicating the device is ready for setup.

What if I can't connect to my Embassy?
--------------------------------------
Please ensure your phone / computer is connected to the same wired or wireless network as your Embassy.  Be careful that you are not on a separate or "guest" network.

Why do I need the Bonjour service (Windows only)?
-------------------------------------------------
Because a major use case of Bonjour is wireless printing over the LAN, but your Windows machine can also use Bonjour to discover and connect with other devices on the LAN. In this case the Embassy.

What if I have a network issue, for example, with a firewall?
-------------------------------------------------------------
The Embassy is designed to work as simply as possible, for as many as possible, while providing the ability to self-host in a private manner.  If you have an agressive or custom firewall, or other custom network settings, there is a good chance that addtional configuration may be necessary.  We will continue to learn about custom networking issues, update our docs with resources, and help in the community :ref:`channels <contact>` to the best of our ability.

Can I use the Embassy from behind a VPN, for example, if my router has a built-in VPN?
--------------------------------------------------------------------------------------
While this is possible, it adds complexity, which may lead to problems.  You will need to understand the setup of your router/VPN and how it supports (or doesn't support) tor connections.

If you are having trouble with this, you might consider letting the Embassy out "in the clear," since everything is broadcast exclusively across the Tor network, offering a high level of privacy.
