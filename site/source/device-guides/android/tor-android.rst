.. _tor-android:

====================
Using Tor on Android
====================
Some apps, such as the official Tor Browser, have Tor built in. They do not require additional software or configurations to utilize Tor. Most apps, however, do not have Tor built in. They require an app called Orbot to be installed in order to utilize the Tor Network.

Running Orbot
-------------
Orbot is a system-wide proxy for your Android device that enables communications over Tor.

#. Download and install Orbot from the `Play Store <https://play.google.com/store/apps/details?id=org.torproject.android>`_, or from `F-Droid <https://f-droid.org/packages/org.torproject.android>`_ (must open with F-Droid app).  Then launch the app.

    .. note:: When using F-Droid, you will need to activate the Guardian Project repository by visiting the ``Settings`` menu (bottom right) -> ``Repositories`` -> ``Guardian Project Official Releases``

    .. figure:: /_static/images/tor/orbot0.png
      :width: 20  %
      :alt: Orbot
      
#. Tap "Start VPN".

    .. figure:: /_static/images/tor/orbot1.png
      :width: 20  %
      :alt: Orbot starting

#. Orbot will start up the Tor service. Once complete, you will see:

    .. figure:: /_static/images/tor/orbot2.png
      :width: 20  %
      :alt: Orbot running

#. Open the kebab menu in the bottom right hand corner and select `Settings`:

    .. figure:: /_static/images/tor/orbot_menu.png
      :width: 20  %
      :alt: Orbot settings

#. Make sure the options for `Start Orbot on Boot` and `Allow Background Starts` are checked:

    .. figure:: /_static/images/tor/orbot_settings.png
      :width: 20  %
      :alt: Orbot menu

#. That's it, you're now running a Tor client on your Android device! Certain apps, such as Firefox, Fennec, and DuckDuckGo will now work after you configure them to use Tor's local proxy.  Other apps do not have sophisticated proxy configurations and require that Orbot be running in VPN mode.

Orbot VPN mode
--------------
To utilize Tor, some apps require that Orbot be running in VPN mode.  This means that you are sending your application's traffic across the Tor network via Orbot.

#. Disable Private DNS on your device. Navigate to: ``Settings > Network & Internet > Advanced > Private DNS > Off`` and toggle Private DNS to "off".

    .. figure:: /_static/images/tor/private_dns_off.png
      :width: 20%
      :alt: Private DNS off

#. Tap `Select Apps`, and add the apps you want to utilize Tor.

    .. figure:: /_static/images/tor/orbot_apps.png
      :width: 20%
      :alt: Orbot apps

Examples of applications that need this feature for remote access are:

- Bitwarden
- Element (Matrix client)
- Nextcloud

    .. figure:: /_static/images/tor/orbot2.png
      :width: 20%
      :alt: Orbot running

You can also add the following browsers to the Tor-Enabled Apps list to easily access Tor addresses (`.onion` URLs):

- Chrome
- Vanadium

  .. caution:: Pushing apps through Orbot's VPN mode will allow you to access .onion URLs, however, all other traffic will also go through Tor.  This means connections to some sites may be blocked by site operators' fraud prevention measures, especially e-commerce sites where credit cards are used.  Proceed with caution especially for Web Browsers.

If using Firefox (recommended)
------------------------------

#. Download the `Proxy Auto Config` file that will use Orbot to resolve `.onion` URLs. We have one hosted `here <https://start9.com/assets/proxy.pac>`_

#. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that appear

#. Search for ``network.proxy.autoconfig_url``, and set the value to ``file:///storage/emulated/0/Download/proxy.pac``. This is the default location of a the proxy.pac file downloaded in step 2, although your path may vary:

	.. figure:: /_static/images/tor/autoconfig_url.png
		:width: 30%
		:alt: Firefox autoconfig url setting screenshot

#. Navigate to ``about:config`` in the Firefox URL bar:

	.. figure:: /_static/images/tor/about_config.png
		:width: 30%
		:alt: Firefox about config

#. Search for ``network.proxy.type`` into the search bar, and set the value to ``2``:

	.. figure:: /_static/images/tor/network_proxy_type.png
		:width: 30%
		:alt: Firefox network proxy type setting screenshot

#. Search for ``network.proxy.socks_remote_dns``, and set the value to ``true``:

	.. figure:: /_static/images/tor/socks_remote_dns.png
		:width: 30%
		:alt: Firefox socks remote dns setting screenshot

#. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``:

	.. figure:: /_static/images/tor/firefox_allowlist_mobile.png
		:width: 30%
		:alt: Firefox whitelist onions screenshot

#. Search for ``network.websocket.allowInsecureFromHTTPS`` and set the value to ``true``:

	.. figure:: /_static/images/tor/firefox_insecure_websockets_droid.png
		:width: 30%
		:alt: Firefox allow insecure websockets over https

#. Search for ``network.http.referer.hideOnionsSource`` and set the value to ``true``

#. (**GrapheneOS users only**): Head to ``Settings -> Apps -> Firefox Beta -> Permissions -> Photos and videos -> Configure Storage Scopes -> ADD FILE``, then navigate to where you placed the proxy.pac file:

	.. figure:: /_static/images/tor/storage-scopes-proxy.jpg
		:width: 15%

#. Restart Firefox

#. Test that Firefox can resolve `.onion` URLs by visiting Start9's Tor website: http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion. If this does not work, go through this guide again, ensuring you followed every step, including the first which refers to another guide

#. You can now use the `.onion` URLs of your server and installed services
