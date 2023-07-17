.. _ff-linux:

============================
Configuring Firefox on Linux
============================
.. caution::
  This guide assumes you have completed :ref:`setting up Tor<tor-linux>`. Please visit this section first before you proceed as it is required for Firefox to properly work with Tor.

#. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that may appear about accessing advanced settings.

#. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``:

    .. figure:: /_static/images/tor/firefox_allowlist.png
      :width: 60%
      :alt: Firefox whitelist onions screenshot

#. Next, search for ``network.websocket.allowInsecureFromHTTPS`` and set the value to ``true``:

    .. figure:: /_static/images/tor/firefox_insecure_websockets.png
      :width: 60%
      :alt: Firefox allow insecure websockets over https

#. Download a `Proxy Auto Config` file to inform Firefox how to use the Tor daemon running on your computer. You can get Start9's standard file from a terminal, by using:

    .. code-block::

      sudo wget -P /etc/tor https://start9.com/assets/proxy.pac


#. Now, back in your Firefox web browser, select ``Settings`` from the right-hand hamburger menu:

    .. figure:: /_static/images/tor/os_ff_settings.png
      :width: 30%
      :alt: Firefox options screenshot

#. Search for the term “proxy” in the search bar in the upper right, then select the button that says ``Settings…``:

    .. figure:: /_static/images/tor/firefox_search.png
      :width: 60%
      :alt: Firefox search screenshot

#. This should open a menu that will allow you to configure your proxy settings. Select ``Automatic proxy configuration URL`` and paste in the path to your PAC file from earlier, prefixed with ``file://``. For example:

    .. code-block::

      file:///etc/tor/proxy.pac

#. Then, check the box labeled ``Proxy DNS when using SOCKS v5``:

    .. figure:: /_static/images/tor/firefox_proxy.png
      :width: 60%
      :alt: Firefox proxy settings screenshot

#. Click ``OK`` and then restart Firefox for the changes to take effect.

#. You're all set! You should now be able to navigate to ``.onion`` URLs in Firefox. This means you can access tor service :ref:`WebUIs <web-ui>`, and use client integrations such as :ref:`Vaultwarden<vaultwarden-service>` apps and extensions.  You can test this by going to Start9's ``.onion`` homepage, `here <http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion/>`_.
