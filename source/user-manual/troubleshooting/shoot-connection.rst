.. _shoot-connection:

===========================
Troubleshooting Connections
===========================

During initial setup, I am unable to connect to ``embassy.local``.
------------------------------------------------------------------
Please ensure that the device you are attempting to connect with is on the same network as your Embassy.  This cannot be a "Guest" network, or a WiFi network that is in any way separated from the network Embassy is on.

If you still cannot connect, you can log into your router (the directions for which can be founnd with a simple web search for your router model and 'how to log in').  Once you are in your router, find the device labeled 'Embassy,' and visit it's associated IP address, which will look something like: ``192.168.1.9``

I am unable to reach Embassy via it's ``embassy-xxxxxxxx.local`` (LAN) address
------------------------------------------------------------------------------
Make sure you have successfully followed the `LAN Setup<lan-setup>` instructions for your device.  If you still cannot connect, make sure you are on the same network using the solution above.  If you are able to visit your Embassy via its IP address, then something is wrong in your LAN Setup.  Keep in mind that different devices have different methods of resolving ``.local`` addresses, and some devices, such as `Android<lim-android>`, lack the ability at an OS level.

I am unable to reach Embassy via it's ``xxxxxxxxxxxxxxxxxx.onion`` (Tor) address
--------------------------------------------------------------------------------
First, attmept to connect using `The Tor Browser<tor-browser>`.  This is a good test because Tor Browser has Tor built in.  If you cannot reach your ``.onion`` with Tor Browser, reboot the Embassy by unplugging power and plugging it back in.  This will reset your Tor connection.  If you can reach via Tor Browser, but not with another browser, then follow the setup guides to run Tor on your device `Natively<tor-os>` and/or to `Configure Your Browser<tor-firefox>`.