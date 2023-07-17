.. _ff-android:

===============================
Configuring Firefox for Android
===============================

.. caution:: Setups may strongly vary across different Android forks

Configure Tor
-------------
Once you have :ref:`setup your Root CA<lan-android>` and :ref:`Tor is running on your device<tor-android>`, you can proceed to configure Firefox:

#. Download `Firefox Beta <https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta>`_ from the Play Store, or `Fennec <https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/>`_ from F-Droid.

    .. caution:: Regular Firefox offered in the Play Store will not allow this configuration - be sure to use Firefox Beta.

#. Next, download the `Proxy Auto Config` file that will use Orbot to resolve `.onion` URLs. We have one hosted `here <https://start9.com/assets/proxy.pac>`_.

#. Navigate to ``about:config`` in the Firefox URL bar.

   .. figure:: /_static/images/tor/about_config.png
     :width: 30%
     :alt: Firefox about config

#. You are going to have to change a few options in here. First, type ``network.proxy.type`` into the search bar, and set the value to ``2``.

   .. figure:: /_static/images/tor/network_proxy_type.png
     :width: 30%
     :alt: Firefox network proxy type setting screenshot

#. (This step is for GrapheneOS users **only**): Head to *Settings -> Apps -> Firefox Beta -> Permissions -> Photos and videos -> Configure Storage Scopes -> ADD FILE* then navigate to where you placed the proxy.pac file.

   .. figure:: /_static/images/tor/storage-scopes-proxy.jpg
     :width: 15%

#. (All users): Search for ``network.proxy.autoconfig_url``, and set the value to ``file:///storage/emulated/0/Download/proxy.pac``.  This is the default location of a the proxy.pac file downloaded in step 2, although your path may vary.

   .. figure:: /_static/images/tor/autoconfig_url.png
     :width: 30%
     :alt: Firefox autoconfig url setting screenshot

#. Search for ``network.proxy.socks_remote_dns``, and set the value to ``true``.

   .. figure:: /_static/images/tor/socks_remote_dns.png
     :width: 30%
     :alt: Firefox socks remote dns setting screenshot

#. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``.

   .. figure:: /_static/images/tor/firefox_allowlist_mobile.png
     :width: 30%
     :alt: Firefox whitelist onions screenshot

#. Finally, search for ``network.websocket.allowInsecureFromHTTPS`` and set the value to ``true``:

    .. figure:: /_static/images/tor/firefox_insecure_websockets_droid.png
      :width: 30%
      :alt: Firefox allow insecure websockets over https

#. Optional but recommended: search for ``network.http.referer.hideOnionsSource`` and set the value to ``true``.

#. Restart Firefox, and you're all set! You should now be able to navigate to ``.onion`` URLs in Firefox. This means you can bookmark your Start9 services' ``.onion`` addresses, as well as use integrations, such as the :ref:`Bitwarden<vaultwarden-service>` browser extension.


Install StartOS as a PWA
------------------------
Depending on your version of Firefox, you may be prompted to "Add to Home screen", when visiting your main UI.  If you do this, you can access your UI as a Progressive Web App (PWA), meaining that all browser context is removed, and StartOS will behave as a native Android app!

If you are not prompted, or skipped that screen, simply go to the **Kebab (Settings) Menu > Install** while visiting your server's UI to complete the action.
