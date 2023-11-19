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
If the device will not power on at all (no lights whatsoever), then the only issues could be that the Pi is not getting the power it needs, or it is completely dead (extremely rare).  If you sourced your own parts, please ensure that the power supply meets the minimum required specifications in the :ref:`DIY Guide<diy>`. If you received your device from us and it will not power up at all, please `Contact us <https://start9.com/contact>`_ for assistance.

StartOS boots into "Diagnostic Mode"
------------------------------------
Diagnostic Mode is a new UI that will launch in the event that no drive, or an incorrect drive (such as one from another StartOS server) has been plugged into your server. Simply plug your external drive in and reboot (power off and on again).

.. _setup-troubleshoot:

During initial setup, I am unable to connect to "start.local".
----------------------------------------------------------------
* Confirm that the server is plugged into both power and Ethernet.

* Confirm the the server emitted two sounds when powering on: a bep and a chime.

* Confirm your phone is **not** connected to a “Guest” network

* Confirm your phone is **not** using a VPN.

If you still cannot connect, try logging into your router (the directions for which can be found with a simple web search for your router model and 'how to log in'). Once you are in your router, find the device labeled ``start``, and visit it's associated IP address, which will look something like: ``192.168.1.9``

I am unable to reach my server via its *<custom-address>.local* (LAN) address
------------------------------------------------------------------------------
Make sure you have successfully followed the :ref:`LAN Setup<connecting-lan>` instructions for your device. If you are using Windows, your problem is almost certainly with Bonjour - follow the directions to reinstall, even if you have already done so.  If you still cannot connect, try all the solutions listed under :ref:`initial setup <setup-troubleshoot>`.

I am unable to reach my server via its xxxxxxxxxxxxxxxxxx.onion (Tor) address
--------------------------------------------------------------------------------

#. **Test** - Try connecting to your server using the official Tor Browser.

    #. **If Tor Browser works** - It means the issue is either with the Tor daemon on your device or with the browser settings.

        #. **Solutions**
            #. If you are not yet running a Tor daemon on your device, follow :ref:`these instructions <connecting-tor>`. If you are already running a Tor daemon, restart it, or in the case of Android, restart your phone.
            #. If you are using Firefox, ensure it has been :ref:`properly configured <connecting-tor-ff>` to work with .onion URLs.

    #. **If Tor Browser does not work** - It means there is an issue with your server or with the Tor network.

        #. **Test** - Try visiting your server over :ref:`LAN<connecting-lan>` from a non-Tor browser such as Firefox, Chrome, or Safari.

            #. **If LAN works** - it means the issue is an issue your server's Tor connection.

                #. **Solutions**
                    #. Check if there are any ongoing network-wide service issues with Tor at `the Tor Project status page <https://status.torproject.org/issues/>`_
                    #. Wait an hour or so to allow Tor on your server to fix itself.
                    #. Restart your server through the UI (System -> Restart).
            #. **If LAN does not work** - It means your server is experiencing general networking issues.

                #. **Solutions** - Power cycle your server by unplugging it and plugging it back in, then wait a few minutes before trying to connect again.

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

Raspberry Pi Lights
-------------------
Server Lite has 2 status lights:

- Red - Power.  This will be on solid when powered up and running normally.
- Green - SD Card.  This will display when there is SD Card activity, such as during OS installation.  It may be off, flashing, or on solid during normal operation.

Server One (2022) has 2 additional lights:

- Blue power button - Power.  This will be on solid when powered up and running normally.
- Blue drive light - SSD.  This will display when there is SSD activity.  It may be off, flashing, or on solid during normal operation. 
