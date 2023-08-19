.. _ff-windows:

==============================
Configuring Firefox on Windows
==============================
Here you will configure Firefox to securely resolve the .local and .onion URLs of your server and installed services.

Local
-----

#. Ensure you have already :ref:`trusted your server's Root CA<ca-mac>`

#. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that appear

#. Search for ``security.enterprise_roots.enable``, set it to ``true``.

    .. figure:: /_static/images/ssl/browser/enterprise_roots_enabled_true.png
        :width: 80%
        :alt: Firefox security settings

#. Restart Firefox

#. When you visit your server URL using ``https``, you should see this symbol indicating a secure connection:

    .. figure:: /_static/images/ssl/browser/firefox-https-good.png
        :width: 80%
        :alt: Firefox security settings

#. If you see an exclamation point inside a triangle by the lock, it means you previously made a security exception in the browser. You will need to remove the exception by clicking the lock -> Connection not secure -> Remove Exception.

    .. figure:: /_static/images/ssl/browser/cert-trust-exception-remove-1.png
        :width: 80%
        :alt: Firefox - Remove security exception (Part 1)

    .. figure:: /_static/images/ssl/browser/cert-trust-exception-remove-2.png
        :width: 80%
        :alt: Firefox - Remove security exception (Part 2)

Tor
---
#. Ensure you have already :ref:`set up Tor<tor-mac>`

#. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that appear

#. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``:

    .. figure:: /_static/images/tor/firefox_allowlist.png
        :width: 60%
        :alt: Firefox whitelist onions screenshot

#. Search for ``network.websocket.allowInsecureFromHTTPS`` and set the value to ``true``:

    .. figure:: /_static/images/tor/firefox_insecure_websockets.png
        :width: 60%
        :alt: Firefox allow insecure websockets over https

#. Download a ``Proxy Auto Config`` file to inform Firefox how to use the Tor daemon running on your computer. Click `here <https://start9.com/assets/proxy.pac>`_ to get the one offered by Start9 and save it somewhere you will not delete it. Remember where you save the file. For this example:

    .. code-block::

    	C:\Program Files\Tor Browser\proxy.pac

#. Go to the right-hand hamburger menu and select ``Settings``:

    .. figure:: /_static/images/tor/os_ff_settings.png
        :width: 30%
        :alt: Firefox options screenshot

#. Search for the term ``proxy`` in the search bar in the upper right and select ``Settings...``:

    .. figure:: /_static/images/tor/firefox_search.png
        :width: 60%
        :alt: Firefox search screenshot

#. Select ``Automatic proxy configuration URL`` and paste in the path to your PAC file from earlier, prefixed with ``file://``. For example:

    .. code-block::

    	file://C:/Program Files/Tor Browser/proxy.pac

#. Check the box labeled ``Proxy DNS when using SOCKS v5``:

    .. figure:: /_static/images/tor/firefox_proxy.png
        :width: 60%
        :alt: Firefox proxy settings screenshot

#. Click ``OK`` and restart Firefox

#. Test that Firefox can resolve `.onion` URLs by visiting Start9's Tor website: http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion. If this does not work, go through this guide again, ensuring you followed every step, including the first which refers to another guide

#. You can now use the `.onion` URLs of your server and installed services
