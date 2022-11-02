.. _torff-android:

======================================
Configuring Firefox for Tor on Android
======================================

.. caution::
  This guide assumes you have completed :ref:`setting up Tor for Android<tor-android>`. Please visit this section before proceeding as it is required for Firefox to properly work with Tor.

Once Tor is setup on your system, you can proceed to setup Firefox:

1. Download `Firefox Beta <https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta>`_ from the Play Store, or `Fennec <https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/>`_ from F-Droid.

2. Next, download a `Proxy Auto Config` file that will use Orbot to resolve `.onion` URLs. We have one hosted `here <https://registry.start9.com/sys/proxy.pac>`_.

3. Navigate to ``about:config`` in the Firefox URL bar.

  .. figure:: /_static/images/tor/about_config.png
    :width: 50%
    :alt: Firefox about config

4. You are going to have to change a few options in here. First, type ``network.proxy.type`` into the search bar, and set the value to ``2``.

  .. figure:: /_static/images/tor/network_proxy_type.png
    :width: 50%
    :alt: Firefox network proxy type setting screenshot

5. Search for ``network.proxy.autoconfig_url``, and set the value to ``file:///storage/emulated/0/Download/proxy.pac``.

  .. caution:: No variation of this will work on LineageOS.  For some platforms, such as Calyx/Graphene on a Pixel 5/6, it may be necessary to place the file within the application's ``data`` folder, such as ``file:///storage/emulated/0/Android/data/org.mozilla.firefox_beta/files/Download/proxy.pac``.  Furthermore, the stock file explorer app may not let you do this, so you might have to get a new one, such as `Explorer <https://play.google.com/store/apps/details?id=com.speedsoftware.explorer&hl=en_US&gl=US>`_.  Please reach out to support if you have issues.

  .. figure:: /_static/images/tor/autoconfig_url.png
    :width: 50%
    :alt: Firefox autoconfig url setting screenshot

6. Search for ``network.proxy.socks_remote_dns``, and set the value to ``true``.

  .. figure:: /_static/images/tor/socks_remote_dns.png
    :width: 50%
    :alt: Firefox socks remote dns setting screenshot

7. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``.

  .. figure:: /_static/images/tor/firefox_allowlist_mobile.png
    :width: 50%
    :alt: Firefox whitelist onions screenshot

8. Restart Firefox, and you're all set! You should now be able to navigate to `.onion` URLs in Firefox. This means you can bookmark Cups Messenger, or other Embassy ``.onion`` addresses, as well as use the :ref:`Bitwarden<vaultwarden>` browser extension.

