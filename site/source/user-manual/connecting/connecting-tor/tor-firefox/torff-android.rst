.. _torff-android:

======================================
Configuring Firefox for Tor on Android
======================================

.. caution::
  This guide assumes you have completed :ref:`setting up Tor for Android<tor-android>`. Please visit this section before proceeding as it is required for Firefox to properly work with Tor.

.. note:: Setups may strongly vary across different Android forks. We have made specific mention of GrapheneOS which has been tested on Pixel 5 and Pixel 6. Configuring Firefox for Tor is not currently possible on CalyxOS or LineageOS v20.

Once Tor is setup on your system, you can proceed to setup Firefox:

#. Download `Firefox Beta <https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta>`_ from the Play Store, or `Fennec <https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/>`_ from F-Droid.

    .. note:: Regular Firefox offered in the Play Store will not work - be sure to use Firefox Beta.

#. Next, download a `Proxy Auto Config` file that will use Orbot to resolve `.onion` URLs. We have one hosted `here <https://registry.start9labs.com/sys/proxy.pac>`_.

#. Navigate to ``about:config`` in the Firefox URL bar.

   .. figure:: /_static/images/tor/about_config.png
     :width: 50%
     :alt: Firefox about config

#. You are going to have to change a few options in here. First, type ``network.proxy.type`` into the search bar, and set the value to ``2``.

   .. figure:: /_static/images/tor/network_proxy_type.png
     :width: 50%
     :alt: Firefox network proxy type setting screenshot

#. (This step is for GrapheneOS only): Head to *Settings -> Apps -> Firefox Beta -> Permissions -> Photos and videos -> Configure Storage Scopes -> ADD FILE* then navigate to where you placed the proxy.pac file.

   .. figure:: /_static/images/tor/storage-scopes-proxy.jpg
     :width: 30%

#. (All users): Search for ``network.proxy.autoconfig_url``, and set the value to ``file:///storage/emulated/0/Download/proxy.pac``.

   .. figure:: /_static/images/tor/autoconfig_url.png
     :width: 50%
     :alt: Firefox autoconfig url setting screenshot

#. Search for ``network.proxy.socks_remote_dns``, and set the value to ``true``.

   .. figure:: /_static/images/tor/socks_remote_dns.png
     :width: 50%
     :alt: Firefox socks remote dns setting screenshot

#. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``.

   .. figure:: /_static/images/tor/firefox_allowlist_mobile.png
     :width: 50%
     :alt: Firefox whitelist onions screenshot

#. Finally, search for ``network.websocket.allowInsecureFromHTTPS`` and set the value to ``true``:

    .. figure:: /_static/images/tor/firefox_insecure_websockets_droid.png
      :width: 50%
      :alt: Firefox allow insecure websockets over https

#. Optional but recommended: search for ``network.http.referer.hideOnionsSource`` and set the value to ``true``.

#. Restart Firefox, and you're all set! You should now be able to navigate to `.onion` URLs in Firefox. This means you can bookmark Cups Messenger, or other Embassy ``.onion`` addresses, as well as use the :ref:`Bitwarden<vaultwarden-service>` browser extension.
