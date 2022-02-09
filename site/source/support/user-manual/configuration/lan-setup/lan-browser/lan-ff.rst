.. _lan-ff:

=======
Firefox
=======

#. Open Firefox and in a new tab select ``Settings`` from the right-hand hamburger menu:

    .. figure:: /_static/images/tor/os_ff_settings.png
            :width: 30%
            :alt: Firefox options screenshot

#. Select “Privacy and Security” from the left hand navigation menu.

#. Scroll all the way to the bottom of the page and select “View Certificates”.

    .. figure:: /_static/images/ssl/browser/firefox_security_settings.png
        :width: 80%
        :alt: Firefox security settings

    Firefox privacy and security settings page

#. Select the "Authorities" tab from the "Certificate Manager".

#. Click “Import” and open the downloaded ``Embassy Local Root CA.crt`` file on your device. If you cannot find this, make sure you completed the :ref:`device setup steps <lan-setup>`.

#. When prompted, check “Trust this CA to identity websites” and select “OK”.

    .. figure:: /_static/images/ssl/browser/firefox_view_certs.png
        :width: 80%
        :alt: Firefox import cert

    Firefox import certificate page

#. Ensure the “Embassy Local Root CA” exists under “Start9 Labs”.  Then click “OK” to save.

#. Open a new tab in Firefox to apply the changes. If this does not work, quit and restart Firefox.

#. Navigate to the LAN address provided at setup, or in the :ref:`Embassy tab<embassy-tab>` -> LAN.  You can now securely navigate to your Embassy over HTTPS!
