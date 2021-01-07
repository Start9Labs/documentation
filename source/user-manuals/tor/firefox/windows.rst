.. _firefox-tor-windows:

**************************************
Setting up Firefox with Tor on Windows
**************************************

.. warning::
  This guide assumes you have completed :ref:`setting up Tor for Windows<tor-windows>`. Please visit this section first before you proceed as it is required for Firefox to properly work with Tor.

Once Tor is setup on your system, you can proceed to setup Firefox.

Now, you need to download a `Proxy Auto Config` file that will use the Tor service to resolve .onion urls. We have one hosted `here <https://registry.start9labs.com/sys/proxy.pac>`_. Save it somewhere you won’t delete it. For this example:

.. code-block::

  C:\Program Files\Tor Browser\proxy.pac

Now open your Firefox web browser, and select options:

.. figure:: /_static/images/tor/firefox_options_windows.png
  :width: 80%
  :alt: Firefox options screenshot

  Select :menuselection:`Settings --> Options`

Search for the term “proxy” in the search bar in the upper right, then select the button that says `Settings…`:

.. figure:: /_static/images/tor/firefox_search.png
  :width: 80%
  :alt: Firefox search screenshot

This should open a menu that will allow you to configure your proxy settings. Select `Automatic proxy configuration URL` and paste in the path to your PAC file from earlier, prefixed with ``"file://"``. For example:

.. code-block::

  file://C:/Program Files/Tor Browser/proxy.pac

Then, check the box labeled `Proxy DNS when using SOCKS v5`:

.. figure:: /_static/images/tor/firefox_proxy.png
  :width: 80%
  :alt: Firefox proxy settings screenshot

Click :code:`OK` and then restart Firefox for the changes to take effect.

Now you’re all set! You should now be able to navigate to :code:`.onion` URLs in Firefox. This means you can bookmark Cups Messenger, and use your Bitwarden Tor address in the `Bitwarden Firefox Plugin <https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/>`_.