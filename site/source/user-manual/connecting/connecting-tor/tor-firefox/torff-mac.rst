.. _torff-mac:

==================================
Configuring Firefox for Tor on Mac
==================================

.. caution::
  This guide assumes you have completed :ref:`setting up Tor<tor-mac>`. Please visit this section first before you proceed as it is required for Firefox to properly work with Tor.

#. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that may appear about accessing advanced settings.

#. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``.

   .. figure:: /_static/images/tor/firefox_whitelist_mac.png
    :width: 60%
    :alt: Firefox whitelist onions screenshot

#. Now, if you've enabled Tor system-wide search for ``security.enterprise_roots.enabled`` and set the value to ``true``.

   .. figure:: /_static/images/tor/enterprise_roots.png
    :width: 60%
    :alt: Firefox whitelist onions screenshot

#. Download a `Proxy Auto Config` file to inform Firefox how to use the Tor daemon running on your computer. You can get Start9's standard file by opening the ``Terminal`` App on your Mac. You can find it in your list of Applications.  In the terminal, enter:

    .. code-block::

      brew install wget

    And then:

    .. code-block::

      wget -P /usr/local/etc/tor https://registry.start9labs.com/sys/proxy.pac

    On new (M1) Macs this directory may not exist. If so, use this command:

    .. code-block::

      wget -P /opt/homebrew/bin/tor https://registry.start9labs.com/sys/proxy.pac

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

      file:///usr/local/etc/tor/proxy.pac

    or (depending on which command you entered in step 4):

    .. code-block::

      file:///opt/homebrew/bin/tor/proxy.pac

#. Then, check the box labeled ``Proxy DNS when using SOCKS v5``:

   .. figure:: /_static/images/tor/firefox_proxy.png
    :width: 60%
    :alt: Firefox proxy settings screenshot

#. Click ``OK`` and then restart Firefox for the changes to take effect.

#. You're all set! You should now be able to navigate to ``.onion`` URLs in Firefox. This means you can access tor-only service :ref:`WebUIs <web-ui>`, such as Cups Messenger, and use your :ref:`Vaultwarden<vaultwarden>` Tor address in the `Bitwarden Firefox Plugin <https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/>`_.  You can test this by going to Start9's ``.onion`` homepage, `here <http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion/>`_.
