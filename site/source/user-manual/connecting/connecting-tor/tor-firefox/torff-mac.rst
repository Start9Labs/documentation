.. _torff-mac:

==================================
Configuring Firefox for Tor on Mac
==================================

.. caution::
  This guide assumes you have completed :ref:`setting up Tor<tor-mac>`. Please visit this section first before you proceed as it is required for Firefox to properly work with Tor.

#. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that may appear about accessing advanced settings.

#. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``:

   .. figure:: /_static/images/tor/firefox_allowlist.png
    :width: 60%
    :alt: Firefox whitelist onions screenshot

#. Next, search for ``network.websocket.allowInsecureFromHTTPS`` and set the value to ``true``:

    .. figure:: /_static/images/tor/firefox_insecure_websockets.png
      :width: 60%
      :alt: Firefox allow insecure websockets over https

#. Now go to the right-hand hamburger menu and select ``Settings``:

   .. figure:: /_static/images/tor/os_ff_settings.png
    :width: 30%
    :alt: Firefox options screenshot

#. Search for the term “proxy” in the search bar in the upper right, then select the button that says ``Settings…``:

   .. figure:: /_static/images/tor/firefox_search.png
    :width: 60%
    :alt: Firefox search screenshot

#. Check the option labeled ``Use System Proxy Settings``

#. Check the box labeled ``Proxy DNS when using SOCKS v5``:

   .. figure:: /_static/images/tor/firefox_proxy.png
    :width: 60%
    :alt: Firefox proxy settings screenshot

#. Click ``OK`` and then restart Firefox for the changes to take effect.

#. You're all set! You should now be able to navigate to ``.onion`` URLs in Firefox.  You can test this by going to Start9's ``.onion`` homepage, `here <http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion/>`_.
