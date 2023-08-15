.. _ff-linux:

============================
Configuring Firefox on Linux
============================
Here you will configure Firefox to securely resolve the .local and .onion URLs of your server and installed services.

Local
-----
This guide applies to Firefox, Firefox ESR, Librewolf, and Thunderbird. Mozilla apps need to be configured to use the certificate store of your device. To find out why Mozilla does this differently, you can read their `blog post <https://blog.mozilla.org/security/2019/02/14/why-does-mozilla-maintain-our-own-root-certificate-store/>`_ on the topic (TLDR: for security purposes).

#. Ensure you have already :ref:`trusted your server's Root CA<ca-linux>`

#. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that appear

#. Search for ``security.enterprise_roots.enabled`` and set it to ``true``:

    .. figure:: /_static/images/ssl/browser/enterprise_roots_enabled_true.png
        :width: 80%
        :alt: Firefox security settings

#. Select your distribution below and follow instructions:

    .. tabs::

        .. group-tab:: Debian/Ubuntu

            #. Select the hamburger menu -> ``Settings``. Search for ``security devices`` and select ``Security Devices...``

                .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-1.png
                    :width: 60%
                    :alt: Mozilla application p11kit trust #1

            #. When the Device Manager dialog window opens, select ``Load``

                .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-2.png
                    :width: 60%
                    :alt: Mozilla application p11kit trust #2

            #. Give the Module Name a title such as "System CA Trust Module". For the Module filename, paste in ``/usr/lib/x86_64-linux-gnu/pkcs11/p11-kit-trust.so`` and hit ``OK``

                .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-3.png
                    :width: 60%
                    :alt: Mozilla application p11kit trust #3

            #. Verify that the new module shows up on the left hand side and select ``OK`` at the bottom right:

                .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-4.png
                    :width: 60%
                    :alt: Mozilla application p11kit trust #4

        .. group-tab:: Arch/Garuda/CentOS/Fedora

            No special steps are needed for Arch/Garuda/CentOS/Fedora. Continue below.

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

#. Download a ``Proxy Auto Config`` file to inform Firefox how to use the Tor daemon running on your computer. You can get Start9's standard file from a terminal, by using:

    .. code-block::

        sudo wget -P /etc/tor https://start9.com/assets/proxy.pac


#. Go to the right-hand hamburger menu and select ``Settings``:

    .. figure:: /_static/images/tor/os_ff_settings.png
        :width: 30%
        :alt: Firefox options screenshot

#. Search for the term ``proxy`` in the search bar in the upper right and select ``Settings...``:

    .. figure:: /_static/images/tor/firefox_search.png
        :width: 60%
        :alt: Firefox search screenshot

#. Select ``Automatic proxy configuration URL`` and paste in the path to your PAC file from earlier, prefixed with ``file://``. Your path may be different from the one below and the triple ``///`` is intentional

    .. code-block::

        file:///etc/tor/proxy.pac

#. Check the box labeled ``Proxy DNS when using SOCKS v5``:

    .. figure:: /_static/images/tor/firefox_proxy.png
        :width: 60%
        :alt: Firefox proxy settings screenshot

#. Click ``OK`` and restart Firefox

#. Test that Firefox can resolve `.onion` URLs by visiting Start9's Tor website: http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion. If this does not work, go through this guide again, ensuring you followed every step, including the first which refers to another guide

#. You can now use the `.onion` URLs of your server and installed services
