.. _lan-brave:

=========================
Trust Embassy CA in Brave
=========================

.. caution:: You will first need to complete :ref:`lan-os` for your device before continuing.

#. Open a new tab in Brave and open to "Settings" from the top-right hamburger menu.

    .. figure:: /_static/images/ssl/browser/brave_settings.png
        :width: 30%
        :alt: Brave settings page

#. On the left hand sidebar, select the "Security and Privacy" section, then the "Security" menu item.

    .. figure:: /_static/images/ssl/browser/brave_security.png
        :width: 60%
        :alt: Brave Security and Privacy settings

#. At the bottom of the section, select "Manage Certificates".

    .. figure:: /_static/images/ssl/browser/brave_security_settings.png
        :width: 60%
        :alt: Brave Security settings page

#. If you see "org-Start9" with a trusted “Embassy Local Root CA” listed under it, open a new tab to apply the certificate. If this does not work, quit and restart Brave.

#. If you do not see "org-Start9" in the list, click "Import" and open the downloaded "Embassy Local Root CA.crt" file on your device. Check the box for "Trust this certificate for identifying websites" and click "OK".

    .. figure:: /_static/images/ssl/browser/brave_view_certs.png
        :width: 60%
        :alt: Brave Manage Certificates sub-menu on MacOS
