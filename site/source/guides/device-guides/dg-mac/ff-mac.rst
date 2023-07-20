.. _ff-mac:

==========================
Configuring Firefox on Mac
==========================
Here we will add your Start9 server's Root CA (Certificate Authority) to your system's certificate trust store to ensure that applications can verify connections to your services.

LAN Config
----------
#. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that may appear about changing advanced configuration preferences.

#. Search for *security.enterprise_roots.enabled* and double click on *false* so that it turns to *true*:

  .. figure:: /_static/images/ssl/browser/enterprise_roots_enabled_true.png
      :width: 80%
      :alt: Firefox security settings

  Now restart Firefox (or other Mozilla application), and log in to your server using ``https``.  You should now see this symbol indicating a secure connection:

    .. figure:: /_static/images/ssl/browser/firefox-https-good.png
        :width: 80%
        :alt: Firefox security settings

.. tip:: If you see an exclamation point inside a triangle by the lock, you have made a security exception in the browser.  You will need to remove it by clicking the lock and then "Connection not secure":

    .. figure:: /_static/images/ssl/browser/cert-trust-exception-remove-1.png
        :width: 80%
        :alt: Firefox - Remove security exception (Part 1)

    Then click "Remove Exception":

    .. figure:: /_static/images/ssl/browser/cert-trust-exception-remove-2.png
        :width: 80%
        :alt: Firefox - Remove security exception (Part 2)

    You should now see that the website is trusted as in the final step show above.

Tor Config
----------
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

If you still encounter issues, `contact support <https://start9.com/contact>`_.
