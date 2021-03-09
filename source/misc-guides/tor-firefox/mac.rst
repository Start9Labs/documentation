.. _firefox-tor-mac:

************************************
Setting up Firefox with Tor on MacOS
************************************

.. warning::
  This guide assumes you have completed :ref:`setting up Tor for MacOS<tor-mac>`. Please visit this section first before you proceed as it is required for Firefox to properly work with Tor.

#. Open Firefox.

#. Enter ``about:config`` in the URL bar. Accept any warnings that may appear about accessing advanced settings.

#. Search for ``dom.securecontext.whitelist_onions`` and set the value to ``true``.

   .. figure:: /_static/images/tor/firefox_whitelist.png
    :width: 80%
    :alt: Firefox whitelist onions screenshot

#. Next, download the `Proxy Auto Config` file. This file tells Firefox which URLs to use for Tor.
  
   #. Open the `Terminal` App on your Mac. You can find it in your list of Applications.

   #. Enter into the terminal:

      .. code-block::

       brew install wget

   #. And then:

      .. code-block::

       wget -P /usr/local/etc/tor https://registry.start9labs.com/sys/proxy.pac

#. Open your Firefox web browser, and select preferences:

   .. figure:: /_static/images/tor/firefox_preferences.png
    :width: 80%
    :alt: Firefox preferences screenshot

    Select :menuselection:`Settings --> Preferences`

#. Search for the term “proxy” in the search bar in the upper right, then select the button that says `Settings…`:

   .. figure:: /_static/images/tor/firefox_search.png
    :width: 80%
    :alt: Firefox search screenshot

#. This should open a menu that will allow you to configure your proxy settings. Select `Automatic proxy configuration URL` and paste in:

   .. code-block::

    file:///usr/local/etc/tor/proxy.pac

#. Then, check the box labeled `Proxy DNS when using SOCKS v5`:

   .. figure:: /_static/images/tor/firefox_proxy.png
    :width: 80%
    :alt: Firefox proxy settings screenshot

#. Click ``OK`` and then restart Firefox for the changes to take effect.

#. You’re all set! You should now be able to navigate to `.onion` URLs in Firefox. This means you can bookmark Cups Messenger, and use your Bitwarden Tor address in the `Bitwarden Firefox Plugin <https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/>`_.