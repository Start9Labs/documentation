.. _lan-ff:

==============================
Trusting Start9 CA in Firefox
==============================

.. caution:: You will first need to complete :ref:`lan-os` for your device before continuing.

This should work equally well in Firefox, Firefox ESR, or Librewolf.

.. note:: If you are attempting to set up Firefox on Android, click the "Android" tab below for Android-specific instructions.

.. tabs::

    .. group-tab:: Linux/Mac/Windows

        #. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that may appear about changing advanced configuration preferences.

        #. Search for *security.enterprise_roots.enabled* and double click on *false* so that it turns to *true*:

            .. figure:: /_static/images/ssl/browser/enterprise_roots_enabled_true.png
                :width: 80%
                :alt: Firefox security settings

        #. Now restart Firefox and you should now see this symbol indicating a secure connection:

            .. figure:: /_static/images/ssl/browser/firefox-https-good.png
                :width: 80%
                :alt: Firefox security settings
        
        .. note:: If you see an exclamation point inside a triangle by the lock, you have made a security exception in the browser.  To remove it, click the lock and go to "Connection not secure":

            .. figure:: /_static/images/ssl/browser/cert-trust-exception-remove-1.png
                :width: 80%
                :alt: Firefox - Remove security exception (Part 1)

            Then click "Remove Exception":

            .. figure:: /_static/images/ssl/browser/cert-trust-exception-remove-2.png
                :width: 80%
                :alt: Firefox - Remove security exception (Part 2)

            You should now see that the website is trusted as in the final step show above.

    .. group-tab:: Android

        #. To setup in Firefox Beta or Fennec, tap the kebab menu, then go to *Settings > About Firefox Beta* and tap the Firefox logo five times until it says "Debug menu enabled."
        
        #. Return to *Settings > Secret Settings* and enable "Use third party CA certificates".
    
    .. group-tab:: iOS

        No additional configuration for iOS is required.


