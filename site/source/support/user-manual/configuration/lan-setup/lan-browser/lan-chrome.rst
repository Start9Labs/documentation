.. _lan-chrome:

======
Chrome
======

.. caution:: You will first need to complete :ref:`LAN Setup<lan-os>` for your device before continuing.

.. tip:: The following guide also works with Chromium and Vivaldi.

#. Open a new tab in Chrome and navigate to ``chrome://settings/certificates``.

    .. figure:: /_static/images/ssl/browser/chrome_settings.svg
        :width: 60%
        :alt: Chrome Certificates Settings page

#. Click on the "Authorities" tab.

    .. figure:: /_static/images/ssl/browser/chrome_authorities.svg
        :width: 60%
        :alt: Chrome Certificate Authorities page

#. You will **EITHER** see "org-Start9" with a trusted “Embassy Local Root CA” listed under it,

    .. figure:: /_static/images/ssl/browser/chrome_s9ca.svg
        :width: 60%
        :alt: Start9 Certificate Authority

    in which case, open a new tab to apply the certificate. If this does not work, quit and restart Chrome.

    **OR**

#. If you do not see "org-Start9"in the list, ensure the certificate is properly set up on your computer system.  Otherwise, click “Import” and open the downloaded ``Embassy Local Root CA.crt`` file on your device. If you cannot find this, make sure you completed the :ref:`device setup steps <lan-os>`.

    .. figure:: /_static/images/ssl/browser/chrome_trust.svg
        :width: 60%
        :alt: Trust the CA

    Check the box for "Trust this certificate for identitying websites" and click "OK"

#. Obtain the LAN address that was provided at the end of your initial Embassy setup, or from the :ref:`Embassy tab<embassy-tab>` -> ``About`` (Under ``Insights``) and enter it in a new tab.

    .. tip:: You may need to restart the browser

    .. figure:: /_static/images/ssl/browser/chrome_https.svg
        :width: 60%
        :alt: Success

#. You will see a green padlock and ``https://`` to the left of the URL bar.  You can now securely navigate to your Embassy on your :ref:`LAN<lan>` with :ref:`HTTPS<ssl>`!
