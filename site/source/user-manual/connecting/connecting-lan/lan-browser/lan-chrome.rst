.. _lan-chrome:

=============================
Trusting Embassy CA in Chrome
=============================

.. caution:: You will first need to complete :ref:`lan-os` for your device before continuing.

.. tip:: The following guide also works with Chromium and Vivaldi.

#. Open a new tab in Chrome and visit *chrome://settings/certificates* in the URL bar.

    .. figure:: /_static/images/ssl/browser/chrome_settings.png
        :width: 60%
        :alt: Chrome Certificates Settings page

#. Click on the "Authorities" tab.

    .. figure:: /_static/images/ssl/browser/chrome_authorities.png
        :width: 60%
        :alt: Chrome Certificate Authorities page

#. If you see "org-Start9" with a trusted “Embassy Local Root CA” listed under it, open a new tab to apply the certificate. If this does not work, quit and restart Chrome.

    .. figure:: /_static/images/ssl/browser/chrome_s9ca.png
        :width: 60%
        :alt: Start9 Certificate Authority

#. If you do not see "org-Start9"in the list, click “Import” and open the downloaded "Embassy Local Root CA.crt" file on your device. Check the box for "Trust this certificate for identifying websites" and click "OK"

    .. figure:: /_static/images/ssl/browser/chrome_trust.png
        :width: 60%
        :alt: Trust the CA
