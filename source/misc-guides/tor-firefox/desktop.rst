.. _firefox-tor-desktop:

**************************************
Setting up Firefox with Tor on Desktop
**************************************

.. warning::
  This guide assumes you have completed :ref:`setting up Tor<running-tor>`. Please visit this section first before you proceed as it is required for Firefox to properly work with Tor.

1. Open Firefox.

2. Enter ``about:config`` in the URL bar. Accept any warnings that may appear about accessing advanced settings.

3. Search for ``dom.securecontext.whitelist_onions`` and set the value to ``true``.

   .. figure:: /_static/images/tor/firefox_whitelist.png
    :width: 80%
    :alt: Firefox whitelist onions screenshot

On Windows, use the following proxy config file instructions:

   #. Download a `Proxy Auto Config` file that will use the Tor service to resolve .onion urls. We have one hosted `here <https://registry.start9labs.com/sys/proxy.pac>`_. Save it somewhere you won’t delete it. For this example:

      .. code-block::

       C:\Program Files\Tor Browser\proxy.pac

On Mac, use the following proxy config file instructions:

   #. Open the `Terminal` App on your Mac. You can find it in your list of Applications.

   #. Enter into the terminal:

      .. code-block::

       brew install wget

   #. And then:

      .. code-block::

       wget -P /usr/local/etc/tor https://registry.start9labs.com/sys/proxy.pac

On Linux, use the following proxy config file instructions:

   #. Create a `Proxy Auto Config` file (advanced) or use our standard one (recommended):

   #. From a terminal, enter:

      .. code-block::

       sudo wget -P /etc/tor https://registry.start9labs.com/sys/proxy.pac


4. Now open your Firefox web browser, and select options (Windows), or preferences (Mac/Linux):

   .. figure:: /_static/images/tor/firefox_options_windows.png
    :width: 80%
    :alt: Firefox options screenshot

    Select :menuselection:`Settings --> Options`


5. Search for the term “proxy” in the search bar in the upper right, then select the button that says `Settings…`:

   .. figure:: /_static/images/tor/firefox_search.png
    :width: 80%
    :alt: Firefox search screenshot

6. This should open a menu that will allow you to configure your proxy settings. Select `Automatic proxy configuration URL` and paste in the path to your PAC file from earlier, prefixed with ``file://``. For example:

Windows:

   .. code-block::

    file://C:/Program Files/Tor Browser/proxy.pac

Mac:

   .. code-block::

    file:///usr/local/etc/tor/proxy.pac

Linux:

   .. code-block::

    file:///etc/tor/proxy.pac

7. Then, check the box labeled `Proxy DNS when using SOCKS v5`:

   .. figure:: /_static/images/tor/firefox_proxy.png
    :width: 80%
    :alt: Firefox proxy settings screenshot

8. Click ``OK`` and then restart Firefox for the changes to take effect.

9. You’re all set! You should now be able to navigate to `.onion` URLs in Firefox. This means you can bookmark Cups Messenger, and use your Bitwarden Tor address in the `Bitwarden Firefox Plugin <https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/>`_.
