.. _lan-ff:

==============================
Trusting Embassy CA in Firefox
==============================

.. caution:: You will first need to complete :ref:`lan-os` for your device before continuing.

.. tabs::

    .. group-tab:: Windows/Mac

        #. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that may appear about accessing advanced settings.

        #. Search for *security.enterprise_roots.enabled* and double click on *false* so that it turns to *true*:

            .. figure:: /_static/images/ssl/browser/enterprise_roots_enabled_true.png
                :width: 80%
                :alt: Firefox security settings

        #. Now restart Firefox and you should now see this symbol indicating a secure connection:

            .. figure:: /_static/images/ssl/browser/firefox-https-good.png
                :width: 80%
                :alt: Firefox security settings

    .. group-tab:: Linux

        #. Open Firefox and in a new tab select "Settings" from the right-hand hamburger menu:

            .. figure:: /_static/images/tor/os_ff_settings.png
                    :width: 30%
                    :alt: Firefox options screenshot

        #. Select “Privacy and Security” from the left hand navigation menu.

        #. Scroll all the way to the bottom of the page and select “View Certificates”.

            .. figure:: /_static/images/ssl/browser/firefox_security_settings.png
                :width: 80%
                :alt: Firefox security settings

        #. Select the "Authorities" tab from the "Certificate Manager".

        #. Click "Import" and open the downloaded "Embassy Local Root CA.crt" file on your device.

        #. When prompted, check "Trust this CA to identity websites" and select “OK”.

            .. figure:: /_static/images/ssl/browser/firefox_view_certs.png
                :width: 80%
                :alt: Firefox import cert

        #. Ensure the "Embassy Local Root CA" exists under "Start9 Labs".  If it does not appear, you may need to close the Certificates pop-up and re-open to refresh the list. Then click “OK” to save.

        #. Open a new tab in Firefox to apply the changes. If this does not work, quit and restart Firefox.

Android
-------

#. To setup in Firefox Beta or Fennec, go to *Settings > About Firefox Beta* and tap the Firefox logo several times until it says "Debug menu enabled." Then return to *Settings > Secret Settings* and enable "Use third party CA certificates".

iOS
---

No additional configuration for iOS is required.
