.. _ff-linux:

============================
Configuring Firefox on Linux
============================
Mozilla provides some of the most flexible, secure, and freedom-principled applications for using the web.  We highly recommend completing all configuration below.

LAN Config
----------
This guide applies to Firefox, Firefox ESR, Librewolf, and Thunderbird.  Mozilla apps need to be configured to use the certificate store of your device.  To find out why Mozilla does this differently, you can read their `blog post <https://blog.mozilla.org/security/2019/02/14/why-does-mozilla-maintain-our-own-root-certificate-store/>`_ on the topic (TLDR: for security purposes).

#. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that may appear about changing advanced configuration preferences.

#. Search for *security.enterprise_roots.enabled* and double click on *false* so that it turns to *true*:

  .. figure:: /_static/images/ssl/browser/enterprise_roots_enabled_true.png
      :width: 80%
      :alt: Firefox security settings

.. tabs::

  .. group-tab:: Debian/Ubuntu

      For each Mozilla-based application (Firefox, Firefox ESR, LibreWolf, Thunderbird, etc) you plan on using, you will need to complete the following guide.  This is in order for them to trust your Start9 server's CA certificate directly from your Linux distribution's certificate trust store.

      #. Select the hamgurger menu, then *Settings*, then search for "*security devices*", then select "*Security Devices...*"

          .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-1.png
              :width: 60%
              :alt: Mozilla application p11kit trust #1

      #. When the Device Manager dialog window opens, select "*Load*"

          .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-2.png
              :width: 60%
              :alt: Mozilla application p11kit trust #2

      #. Give the Module Name a title such as "*System CA Trust Module*" and for the Module filename, paste in ``/usr/lib/x86_64-linux-gnu/pkcs11/p11-kit-trust.so`` and hit *OK*:

          .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-3.png
              :width: 60%
              :alt: Mozilla application p11kit trust #3

      #. Verify that the new module shows up on the left hand side and select *OK* at the bottom right:

          .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-4.png
              :width: 60%
              :alt: Mozilla application p11kit trust #4

  .. group-tab:: Arch/Garuda
  
  .. group-tab:: CentOS/Fedora

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

    .. figure:: /_static/images/tor/firefox_proxy_linux.png
      :width: 60%
      :alt: Firefox proxy settings screenshot

#. Click ``OK`` and then restart Firefox for the changes to take effect.

#. You're all set! You should now be able to navigate to ``.onion`` URLs in Firefox. This means you can access tor service :ref:`WebUIs <web-ui>`, and use client integrations such as :ref:`Vaultwarden<vaultwarden-service>` apps and extensions.  You can test this by going to Start9's ``.onion`` homepage, `here <http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion/>`_.

If you still encounter issues, `contact support <https://start9.com/contact>`_.

