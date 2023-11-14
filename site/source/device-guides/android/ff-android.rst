.. _ff-android:

==============================
Configuring Firefox on Android
==============================
Download `Firefox Beta <https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta>`_ from the Play Store, or `Fennec <https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/>`_ from F-Droid.

	.. caution:: You must use **Firefox Beta** on Android. Regular Firefox does not permit advanced configuration.

Local (required for initial setup)
----------------------------------
#. Ensure you have already :ref:`trusted your Root CA<ca-android>` on your Android device

#. Tap ``Kebab Menu > Settings > About Firefox`` and tap the Firefox icon 5 times to enable "developer mode"

#. Go back to ``Kebab Menu > Settings > Secret Settings`` (at the bottom), and tap ``Use third party CA certificates``

Tor (can be completed later)
----------------------------
#. Ensure you are already :ref:`running Tor<tor-android>` on your Android device

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


Install StartOS as a PWA
------------------------
Depending on your version of Firefox, you may be prompted to "Add to Home screen", when visiting your main UI.  If you do this, you can access your UI as a Progressive Web App (PWA), meaining that all browser context is removed, and StartOS will behave as a native Android app!

If you are not prompted, or skipped that screen, simply go to the **Kebab (Settings) Menu > Install** while visiting your server's UI to complete the action.
