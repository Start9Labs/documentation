.. _common-issues:

=============
Common Issues
=============

.. contents::
  :depth: 2 
  :local:

Sometimes things don't go as planned. Check here for solutions to common problems with your Embassy.

Embassy will not boot
---------------------

If the device will not power on at all (no lights whatsoever), then the only issues could be that the Pi is not getting the power it needs, or it is completely dead (extremely rare).  If you sourced your own parts, please ensure that the power supply meets the minimum required specifications in the `DIY Guide<diy>`. If you received your device from us and it will not power up at all, please `Contact us<contact>` for assistance.

Embassy boots into "Diagnostic Mode"
------------------------------------

Diagnostic Mode is a new UI that will launch in the event that no drive, or an incorrect drive (such as one from another Embassy) has been plugged into Embassy. Simply plug your external drive in and reboot (power off and on again).

.. _setup-troubleshoot:

During initial setup, I am unable to connect to "embassy.local".
----------------------------------------------------------------

* Confirm that your Embassy is plugged into both power and Ethernet.

* Confirm the Embassy emitted two :ref:`sounds<sounds>` when powering on: a bep and a chime.

* Confirm your phone is **not** connected to a “Guest” network

* Confirm your phone is **not** using a VPN.

If you still cannot connect, try logging into your router (the directions for which can be found with a simple web search for your router model and 'how to log in'). Once you are in your router, find the device labeled 'Embassy,' and visit it's associated IP address, which will look something like: ``192.168.1.9``

I am unable to reach Embassy via it's ``embassy-xxxxxxxx.local`` (LAN) address
------------------------------------------------------------------------------

Make sure you have successfully followed the :ref:`LAN Setup<connecting-lan>` instructions for your device. If you still cannot connect, try all the solution listed under :ref:`initial setup <setup-troubleshoot>`.

I am unable to reach Embassy via it's ``xxxxxxxxxxxxxxxxxx.onion`` (Tor) address
--------------------------------------------------------------------------------

#. **Test** - Try connecting to your Embassy using the official :ref:`Tor Browser <tor-browser>`.
    #. **If Tor Browser works** - It means the issue is either with the Tor daemon on your device or with the browser settings.
        #. **Solutions**
            #. If you are not yet running a Tor daemon on your device, follow :ref:`these instructions <tor-os>`. If you are already running a Tor daemon, restart it, or in the case of Android, restart your phone.
            #. If you are using Firefox, ensure it has been :ref:`properly configured <tor-firefox>` to work with .onion URLS.
    #. **If Tor Browser does not work** - It means there is an issue with your Embassy.
        #. **Test** - Try visiting your Embassy over :ref:`LAN<connecting-lan>` from a non-Tor browser such as Firefox, Chrome, or Safari.
            #. **If LAN works** - it means the issue is an issue with Tor on your Embassy.
                #. **Solutions**
                    #. Wait an hour or so to allow Tor on your Embassy to fix itself.
                    #. Restart your Embassy through the UI.
            #. **If LAN does not work** - It means your Embassy is experiencing general networking issues.
                #. **Solutions** - Power cycle your Embassy by unplugging it and plugging it back in, then wait a few minutes before trying to connect again.

I'm having an issue with a particular Service
---------------------------------------------

If a Service is crashing or acting up in some way, check the `Documentation<service-guides>` and `FAQ<faq-services>` for that particular Service.  You can also check the `Logs` of a service, which might tell you what the problem is.  If that is not helpful, try to restart the service to see if that clears up the issue.  If you are still having issues, please reach out in one of our `Community Channels` for immediate assistance, or email support@start9labs.com for help during business hours.
