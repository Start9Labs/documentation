.. _tor-ff:

===========================
Configuring Firefox for Tor
===========================

.. tabs::

    .. group-tab:: Mac

        #. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that appear

        #. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``:

            .. figure:: /_static/images/tor/firefox_allowlist.png
                :width: 60%
                :alt: Firefox whitelist onions screenshot

        #. Go to the right-hand hamburger menu and select ``Settings``:

            .. figure:: /_static/images/tor/os_ff_settings.png
                :width: 30%
                :alt: Firefox options screenshot

        #. Search for the term ``proxy`` in the search bar in the upper right and select ``Settings...``:

            .. figure:: /_static/images/tor/firefox_search.png
                :width: 60%
                :alt: Firefox search screenshot

        #. Check the option labeled ``Use System Proxy Settings`` *and* the box labeled ``Proxy DNS when using SOCKS v5``:

            .. figure:: /_static/images/tor/firefox_proxy.png
                :width: 60%
                :alt: Firefox proxy settings screenshot

        #. Click ``OK`` and restart Firefox

        #. Test that Firefox can resolve `.onion` URLs by visiting Start9's Tor website: http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion.

    .. group-tab:: Windows

        #. Download the ``Proxy Auto Config`` file to inform Firefox how to resolve `.onion` URLs. Click `here <https://start9.com/assets/proxy.pac>`_ to get the one offered by Start9. Save it somewhere you will not delete it, and remember where you save it. For example:

            .. code-block::

              C:\Program Files\Tor Browser\proxy.pac

        #. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that appear

        #. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``:

            .. figure:: /_static/images/tor/firefox_allowlist.png
                :width: 60%
                :alt: Firefox whitelist onions screenshot

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

        #. Test that Firefox can resolve `.onion` URLs by visiting Start9's Tor website: http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion.

    .. group-tab:: Linux

        #. Download the `Proxy Auto Config` file to inform Firefox how to resolve `.onion` URLs. You can get Start9's standard file from a terminal, by using:

            .. code-block::

              sudo wget -P ~/ https://start9.com/assets/proxy.pac

        #. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that appear

        #. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``:

            .. figure:: /_static/images/tor/firefox_allowlist.png
                :width: 60%
                :alt: Firefox whitelist onions screenshot
    
        #. Determine the full path of `proxy.pac`, which we will use in step 9, by executing the following command in the terminal, and copying its output to your clipboard:

            .. code-block::

                echo file://$HOME/proxy.pac

        #. Go to the right-hand hamburger menu and select ``Settings``:

            .. figure:: /_static/images/tor/os_ff_settings.png
                :width: 30%
                :alt: Firefox options screenshot

        #. Search for the term ``proxy`` in the search bar in the upper right and select ``Settings...``:

            .. figure:: /_static/images/tor/firefox_search.png
                :width: 60%
                :alt: Firefox search screenshot

        #. Select ``Automatic proxy configuration URL`` and paste the output from the command you performed in step 6.  Be aware, the triple ``///`` is intentional, and your path *will* be different from the one below - namely, YOUR_LINUX_USERNAME will be your actual linux username:

            .. code-block::

                file:///home/YOUR_LINUX_USERNAME/proxy.pac

            .. figure:: /_static/images/tor/firefox_proxy_linux.png
                :width: 60%
                :alt: Firefox proxy settings screenshot
            
        #. Check the box labeled ``Proxy DNS when using SOCKS v5`` in the image above

        #. Click ``OK`` and restart Firefox

        #. Test that Firefox can resolve `.onion` URLs by visiting Start9's Tor website: http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion.

    .. group-tab:: Android

        #. Download the `Proxy Auto Config` file to inform Firefox how to resolve `.onion` URLs. We have one hosted `here <https://start9.com/assets/proxy.pac>`_

        #. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that appear

        #. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``:

          .. figure:: /_static/images/tor/firefox_allowlist.png
              :width: 60%
              :alt: Firefox whitelist onions screenshot

        #. Search for ``network.proxy.autoconfig_url``, and set the value to ``file:///storage/emulated/0/Download/proxy.pac``. This is the default location of a the proxy.pac file downloaded in step 2, although your path may vary:

          .. figure:: /_static/images/tor/autoconfig_url.png
            :width: 30%
            :alt: Firefox autoconfig url setting screenshot

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

        #. Search for ``network.http.referer.hideOnionsSource`` and set the value to ``true``

        #. (**GrapheneOS users only**): Head to ``Settings -> Apps -> Firefox Beta -> Permissions -> Photos and videos -> Configure Storage Scopes -> ADD FILE``, then navigate to where you placed the proxy.pac file:

          .. figure:: /_static/images/tor/storage-scopes-proxy.jpg
            :width: 15%

        #. Restart Firefox

        #. Test that Firefox can resolve `.onion` URLs by visiting Start9's Tor website: http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion.
