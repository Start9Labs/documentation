.. _lan-brave:

=====
Brave
=====

.. caution:: You will first need to complete :ref:`LAN Setup<lan-os>` for your device before continuing.

#. Open a new tab in Brave and Navigate to ``Settings`` from the top-right hamburger menu.

    .. figure:: /_static/images/ssl/browser/brave_settings.png
        :width: 30%
        :alt: Brave settings page

#. On the left hand sidebar, select the Security and Privacy section, then the Security menu item.

    .. figure:: /_static/images/ssl/browser/brave_security.png
        :width: 60%
        :alt: Brave Security and Privacy settings

#. At the bottom of the section, select "Manage Certificates".

    .. figure:: /_static/images/ssl/browser/brave_security_settings.png
        :width: 60%
        :alt: Brave Security settings page

#. If you **EITHER** see "org-Start9" with a trusted “Embassy Local Root CA” listed under it, open a new tab to apply the certificate. If this does not work, quit and restart Chrome.

    **OR**

#. If you do not see "org-Start9"in the list, ensure the certificate is properly set up on your computer system.  Otherwise, click “Import” and open the downloaded ``Embassy Local Root CA.crt`` file on your device. If you cannot find this, make sure you completed the :ref:`device setup steps <lan-os>`.


    .. figure:: /_static/images/ssl/browser/brave_view_certs.png
        :width: 60%
        :alt: Brave Manage Certificates sub-menu on MacOS

    Check the box for "Trust this certificate for identitying websites" and click "OK"

#. Obtain the LAN address that was provided at the end of your initial Embassy setup, or from the :ref:`Embassy tab<embassy-tab>` -> ``About`` (Under ``Insights``) and enter it in a new tab.

    .. tip:: You may need to restart the browser

#. You will see a green padlock and ``https://`` to the left of the URL bar.  You can now securely navigate to your Embassy on your :ref:`LAN<lan>` with :ref:`HTTPS<ssl>`!

.. note:: Additionally, you can start a Brave private window with Tor to visit the Tor address over HTTPS (unnecessary in principle, but will circumvent annoying browser warnings).
