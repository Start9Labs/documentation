.. _tor-ios:

==================
Running Tor on iOS
==================

Running Orbot
-------------
Orbot is a system-wide proxy for your Android device that enables communications over Tor.

#. Download and install `Orbot from the Apple appstore <https://apps.apple.com/us/app/orbot/id1609461599>`_.
#. Open Orbot and tap on "Settings".
#. Activate the "Disable Orbot for non-onion traffic" setting:
  
    .. figure:: /_static/images/tor/ios-orbot-settings-oniononlymode.png
      :width: 25%
      :alt: iOS Orbot -> Settings -> Onion-Only Mode

#. Go back to the main screen and click "Start" and you will see Tor connect:

    .. figure:: /_static/images/tor/ios-orbot-connecting-full.png
      :width: 35%
      :alt: iOS Orbot Connecting to Tor

#. Apps will now work transparently when requesting onion urls!

Access Onionsites
-----------------
Once Orbot is setup on your system as you've just done, you don't need any browser configuration.  All browsers in iOS are Safari under the hood, and this Orbot configuration enables access to ``.onion`` URLs.  Regular clearnet requests will not use tor.
