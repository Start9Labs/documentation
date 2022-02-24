.. _torff-windows:

======================================
Configuring Firefox for Tor on Windows
======================================

.. caution::  This guide assumes you have completed :ref:`setting up Tor<tor-windows>`. Please visit this section first before you proceed as it is required for Firefox to properly work with Tor.

#. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that may appear about accessing advanced settings.

#. Search for ``dom.securecontext.whitelist_onions`` and set the value to "true".

    .. figure:: /_static/images/tor/firefox_whitelist.png
      :width: 60%
      :alt: Firefox whitelist onions screenshot

#. Download a *Proxy Auto Config* file to inform Firefox how to use the Tor daemon running on your computer. You can get Start9's standard file by following instructions below:

    - Click `here <https://registry.start9labs.com/sys/proxy.pac>`_ to get the file and save the file somewhere you will not delete it. Remember where you save the file. For this example:

    .. code-block::

      C:\Program Files\Tor Browser\proxy.pac

#. Now, back in your Firefox web browser, select "Options" from the right-hand hamburger menu:

    .. figure:: /_static/images/tor/firefox_options_windows.png
      :width: 60%
      :alt: Firefox options screenshot

#. Search for the term "proxy" in the search bar in the upper right, then select the button that says "Settings":

    .. figure:: /_static/images/tor/firefox_search.png
      :width: 60%
      :alt: Firefox search screenshot

#. This should open a menu that will allow you to configure your proxy settings. Select "Automatic proxy configuration URL" and paste in the path to your PAC file from earlier, prefixed with ``file://``. For example:

    .. code-block::

      file://C:/Program Files/Tor Browser/proxy.pac

#. Then, check the box labeled "Proxy DNS when using SOCKS v5":

    .. figure:: /_static/images/tor/firefox_proxy.png
      :width: 60%
      :alt: Firefox proxy settings screenshot

#. Click "OK" and then restart Firefox for the changes to take effect.

#. You're all set! You should now be able to navigate to ".onion" URLs in Firefox. You can test this by going to Start9's ``.onion`` homepage, `here <http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion/>`__.

