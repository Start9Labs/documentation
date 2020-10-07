.. _connect:

Connecting to the Embassy
=========================

WiFi
----

Once the Embassy has been setup while connected to the router, it can be configured to be accessible only from a wireless network. This option can be found in the `Embassy` tab in the dashboard menu under `WiFi`. From here, the desired wireless network credentials can be entered by selecting the (+) sign in the lower right hand corner. Either `save` to persist the network for later use, or `save and connect` to immediately use the provided network. 

.. seealso:: :ref:`connecting-wifi`

After successfully connected to a configured WiFi network, the Embassy can be unplugged from the router and relocated anywhere it's power supply can reach. 

.. _browser-access:

Browser
-------

The Embassy dashboard can be accessed in two distinct ways:

#. By visiting the Tor address in a Tor enabled browser. You can visit it from anywhere in the world via the Tor network. Please be advised that the Tor network is censored in some places.

    Depending on your device operating system and browser preference, there exists several methods for reaching the Embassy dashboard:

    
    * MacOS / Windows:

        Any browser that supports Tor (ie. a SOCKS5 proxy), such as:

        * A private window with Tor in `Brave <https://brave.com/>`_
        * The `Tor Browser <https://www.torproject.org/download/>`_
        * `Firefox <https://www.mozilla.org/en-US/firefox/mobile/>`_

        .. seealso:: `Setting up Firefox to handle Tor addresses <https://medium.com/@start9labs/setting-up-your-firefox-web-browser-to-handle-onion-urls-b805391726e4>`_

    * iOS
        Download the Consulate `app <https://apps.apple.com/us/app/consulate/id1528124570>`_ in the Apple App Store.

        .. seealso:: `Announcing the Consulate Browser! <https://medium.com/@start9labs/announcing-the-consulate-browser-76d94a8599cb>`_

    * Android
        Download the `Tor Browser <https://www.torproject.org/download/>`_
        `Firefox <https://www.mozilla.org/en-US/firefox/mobile/>`_

        .. seealso:: `Setting up Firefox to handle Tor addresses on Android <https://medium.com/@start9labs/setting-up-your-firefox-web-browser-to-handle-onion-urls-android-65b36801c0d2>`_

    * FDroid
        Coming Soon!

#. This option is considered an **advanced** feature. By visiting the local address after setting up a SSL certificate on the Embassy. This means that the remote device and Embassy server must be in physical proximity and connected to the same WiFi network in order to communicate. Once this is setup, the Embassy can be accessed from any browser while on the Local Area Network (LAN) with little latency and with no extra configuration options needed.