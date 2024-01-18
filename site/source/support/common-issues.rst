.. _common-issues:

=============
Common Issues
=============
Sometimes things don't go as planned. Check here for solutions to common problems with StartOS.

.. contents::
  :depth: 2 
  :local:

StartOS will not boot
---------------------
If the device will not power on at all (no lights whatsoever), then the only issues could be that the Pi is not getting the power it needs, or it is completely dead (extremely rare). If you sourced your own parts, please ensure that the power supply meets the minimum required specifications in the :ref:`DIY Guide<diy>`. If you received your device from us and it will not power up at all, please `Contact us <https://start9.com/contact>`_ for assistance.

StartOS boots into "Diagnostic Mode"
------------------------------------
Diagnostic Mode is a new UI that will launch in the event that no drive, or an incorrect drive (such as one from another StartOS server) has been plugged into your server. Simply plug your external drive in and reboot (power off and on again).

.. _setup-troubleshoot:

During initial setup, I am unable to connect to "start.local".
----------------------------------------------------------------
#. Confirm that the server is plugged into both power `and` Ethernet
#. Confirm your phone/computer is `not` connected to a "Guest" network
#. Confirm you are `not` using the Tor Browser.
#. Confirm your phone/computer is not using a VPN, or that if you are, that it allows LAN connections, such as the examples below:

    - Mullvad - Go to "Settings -> VPN Settings -> Local Network Sharing"
    - ProtonVPN - Go to "Preferences -> Connection -> Allow LAN Connections"

#. To avoid networking issues, it is recommended to use your `primary` router, not an extender or mesh router
#. Very rarely, your firewall settings may block mDNS. In this case:

    - From your browser, navigate to your router configuration settings. This is usually an IP address such as 192.168.1.1. A simple web search will usually reveal how to access the router configuration settings for a particular brand.
    - Once in the router config settings, find the section that lists the devices on your network. You should see a device labeled ``start``. Take note of the associated IP address and enter it into your browser's URL field to enter the setup.

#. Log into your router (the directions for which can be found with a simple web search for your router model and 'how to log in'). Once you are in your router, find the device labeled ``start``, and visit its associated IP address, which will look something like: ``192.168.1.9``

.. _lan-troubleshoot:

I am unable to reach my server via its *<custom-address>.local* (LAN) address
------------------------------------------------------------------------------
#. First, try :ref:`these step <setup-troubleshoot>`. In none resolve the issue, continue below.
#. Hard refresh the browser

    - Linux/Windows: ``ctrl+shift+R``
    - macOS Firefox: ``cmd+shift+R``
    - macOS Safari: ``cmd+option+E``, then ``cmd+R``

#. Make sure you have successfully followed the :ref:`connecting-lan` instructions for your device.
#. If you are using Windows, the problem is almost certainly with Bonjour. Follow the :ref:`directions to reinstall <connecting-lan-windows>`, even if you have already done so.
#. If using Firefox from Mac, Windows or Android, ensure you have set ``security.enterprise_roots.enable`` to ``true`` in ``about:config`` per the :ref:`instructions<ca-ff>`
#. Try connecting using your server's IP address or Tor address. If this works, it means your issue is specific to .local. Try clearing your browser cache and/or restarting your phone/laptop/router. If all fails, try restarting your server.
#. Try connecting using a different browser on the same device. If this works, it means you need to clear cache on your current browser.
#. Try connecting using a different device. If this works, it means you need to clear cache on your current browser and/or restart your current device.
#. Try visiting start.local. Your server may be in diagnostic mode.
#. Try restarting your router.
#. Try restarting your server. Be patient and give it plenty of time to come back online.

.. _tor-troubleshoot:

I am unable to reach my server via its xxxxxxxxxxxxxxxxxx.onion (Tor) address
-----------------------------------------------------------------------------
#. Tor can be slow and unreliable. Often, the solution to poor connectivity is just to wait an hour and try again.
#. Try connecting using the official Tor Browser. If this works, it means the issue is with (1) your current browser or native app, (2) the Tor daemon running on your phone/laptop. Try clearing cache and restarting things.
#. Try connecting to your server using its *<custom-address>.local* URL or IP its address. If this works, it means the issue is specific to Tor on your server. Check out your Tor logs (System -> Tor Logs). If you see errors, such as Tor stuck bootstrapping, navigate to System -> Experimental Features -> Reset Tor.

Request Error
-------------
This means your client device failed to connect to the server. This can happen for a variety of reasons. The best course of action is:

1. Check your local Internet connection .
2. Hard refresh the browser.
3. Clear the browser cache/history.
4. Try using a different address for your server. For example, if you are using your .onion address, try using your .local or IP address instead. If you are using your .local address, try using your .onion or IP address.
5. Try from another client device. If the second client works, then you know the issue is with your first client. If the seconds client does not work, then you know the issue is either with your clients' network or with your server.
6. If after completing the steps above, you still cannot connect using any address from any client, then you will likely need to manually power cycle the server.
7. If power cycling the server does not resolve the issue, please contact support.

Clock Sync Failure
------------------
This means your server was unable to sync its clock with the Internet using the Network Time Protocol (NTP). This is usually due to a firewall issue with your network/router. Make sure you are not blocking NTP. If the issue persists, please contact support.

I'm having an issue with a particular Service
---------------------------------------------
If a Service is crashing or acting up in some way, check the :ref:`Documentation<service-guides>` for that particular Service.  You can also check the "Logs" (on the service page), which might tell you what the problem is.  If that is not helpful, try to restart the service to see if that clears up the issue.  If you are still having issues, please reach out in one of our `Community Channels <https://start9.com/contact>`_ for immediate assistance.

.. _sounds-bepchime:

Server Models With Speakers
---------------------------
Server Lite, Server Pure, and Server One (2022 and older) have an internal speaker and may provide the following audio feedback:

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/BEP.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * "bep" - Starting up

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/CHIME.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * "double bep" - The device is updating

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/UPDATING.mp3" type="audio/mpeg">
      </audio>

    * "chime" - Server is ready

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/FLATLINE.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * "flatline" - Server initialization failed / no network connection

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/BEETHOVEN.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * Beethoven's 5th - Something has gone wrong and Diagnostic Mode has been launched on ``http://start.local``, please check here for solutions.
