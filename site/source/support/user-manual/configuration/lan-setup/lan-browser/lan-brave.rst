.. _lan-brave:

=====
Brave
=====

.. caution:: You will first need to complete :ref:`LAN Setup<lan-os>` for your device before continuing.

#. Open a new tab in Brave and Navigate to ``Settings`` from the top-right hamburger menu.

    .. figure:: /_static/images/ssl/browser/brave_settings.svg
        :width: 30%
        :alt: Brave settings page

#. On the left hand sidebar, select the Security and Privacy section, then the Security menu item.

    .. figure:: /_static/images/ssl/browser/brave_security.svg
        :width: 60%
        :alt: Brave Security and Privacy settings

#. At the bottom of the section, select "Manage Certificates".

    .. figure:: /_static/images/ssl/browser/brave_security_settings.svg
        :width: 60%
        :alt: Brave Security settings page

#. If you see a trusted “Embassy Local Root CA”, open a new tab to apply the certificate. If this does not work, quit and restart Brave.

#. If you do not see a trusted “Embassy Local Root CA” certificate in the list, ensure the certificate is properly set up on your computer system.

    .. figure:: /_static/images/ssl/browser/brave_view_certs.svg
        :width: 60%
        :alt: Brave Manage Certificates sub-menu on MacOS

#. Obtain the LAN address that was provided at the end of your initial Embassy setup, or from the :ref:`Embassy tab<embassy-tab>` -> ``About`` (Under ``Insights``) and enter it in a new tab.

#. You can now securely navigate to your Embassy over HTTPS!

.. note:: Additionally, you can start a Brave private window with Tor to visit the Tor address over HTTPS (unnecessary in principle, but will circumvent annoying browser warnings).