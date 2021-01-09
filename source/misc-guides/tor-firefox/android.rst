.. _firefox-tor-android:

**************************************
Setting up Firefox with Tor on Android
**************************************

.. warning::
  This guide assumes you have completed :ref:`setting up Tor for Android<tor-android>`. Please visit this section first before you proceed as it is required for Firefox to properly work with Tor.

Once Tor is setup on your system, you can proceed to setup Firefox.

Download `Firefox Beta <https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta>`_ from the Play Store, or Fennec for F-Droid.

Now, you need to download a `Proxy Auto Config` file that will use Orbot to resolve `.onion` URLs. We have one hosted `here <https://registry.start9labs.com/sys/proxy.pac>`_.

Next, navigate to ``about:config`` in the Firefox URL bar:

.. figure:: /_static/images/tor/about_config.png
  :width: 80%
  :alt: Firefox about config

You are going to have to change a few options in here. First, type ``network.proxy.type`` into the search bar, and set the value to ``2``:

.. figure:: /_static/images/tor/network_proxy_type.png
  :width: 80%
  :alt: Firefox network proxy type setting screenshot

Then, search for ``network.proxy.autoconfig_url``, and set the value to ``file:///storage/emulated/0/Download/proxy.pac``:

.. figure:: /_static/images/tor/autoconfig_url.png
  :width: 80%
  :alt: Firefox autoconfig url setting screenshot

Next, search for ``network.proxy.socks_remote_dns``, and set the value to ``true``:

.. figure:: /_static/images/tor/socks_remote_dns.png
  :width: 80%
  :alt: Firefox socks remote dns setting screenshot

Next, search for ``dom.securecontext.whitelist_onions`` and set the value to ``true``.

.. figure:: /_static/images/tor/firefox_whitelist_mobile.png
  :width: 80%
  :alt: Firefox whitelist onions screenshot

Restart Firefox, and you’re all set! You should now be able to navigate to `.onion` URLs in Firefox. This means you can bookmark Cups Messenger, and use your Bitwarden Tor address in the `Bitwarden Password Manager <https://play.google.com/store/apps/details?id=com.x8bit.bitwarden&hl=en_US&gl=US>`_ native application.