.. _browser-setup:

Browser Setup
=============

.. warning:: Make sure you have completed your :ref:`computer setup <computer-setup>` before continuing!

Select the browser you would like to configure to import the certificate from your desktop:

.. .. toctree::
..   :hidden:

..   browser

- :ref:`Brave <brave>`
- :ref:`Chrome <chrome>`
- :ref:`Firefox <firefox>`
- :ref:`Safari <safari>`

Select the browser you would like to configure to import the certificate from your desktop:

.. .. toctree::
..   :hidden:

..   browser

- :ref:`Brave <brave>`
- :ref:`Chrome <chrome>`
- :ref:`Firefox <firefox>`
- :ref:`Safari <safari>`

.. _brave:

Brave
-----

#. Navigate to your Brave Settings in a new tab.

#. On the left hand sidebar, navigate to *Additional Settings > Privacy and Security*.

#. Add the bottom of the section, select "Manage Certificates".

   .. figure:: /_static/images/ssl/browser/brave_security_settings.png
    :width: 90%
    :alt: Brave privacy and security settings page

#. If you see a trusted “Embassy Local Root CA”, open a new tab to apply the certificate. If this does not work, quit and restart Brave.

#. If you do not see a trusted “Embassy Local Root CA” certificate in the list, ensure the certificate is properly set up on your computer system.

   .. figure:: /_static/images/ssl/browser/brave_view_certs.png
    :width: 90%
    :alt: Brave Manage Certificates sub-menu on MacOS

#. Obtain the LAN address provided in the Setup App and enter it in a new tab.

#. You can now securely navigate to your Embassy over HTTPS!

#. Additionally, you can start a Brave private window with Tor to visit the Tor address over HTTPS (unnecessary in principle, but will circumvent annoying browser warnings).

.. _chrome:

Chrome
------

#. Once you have followed the steps to setup your device, open a new tab to apply the certificate. If this does not work, quit and restart Chrome.

#. Obtain the LAN address provided in the Setup App and enter it in the URL bar.

#. You can now securely navigate to your Embassy over HTTPS!

.. _firefox:

Firefox
-------

#. Navigate to your Firefox Settings in a new tab.

#. Select “Privacy and Security” from the left hand navigation menu.

#. Scroll all the way to the bottom of the page and select “View Certificates”.

   .. figure:: /_static/images/ssl/browser/firefox_security_settings.png
    :width: 90%
    :alt: Firefox security settings

    Firefox privacy and security settings page

#. Select the "Authorities" tab from the "Certificate Manager".

#. Click “Import” and open the downloaded *Embassy Local Root CA.crt* file on your device. If you cannot find this, make sure you completed the :ref:`device setup steps <ssl-setup>`.

#. When prompted, check “Trust this CA to identity websites” and select “OK”.

   .. figure:: /_static/images/ssl/browser/firefox_security_settings.png
    :width: 90%
    :alt: Firefox import cert

    Firefox import certificate page

#. Ensure the “Embassy Local Root CA” exists under “Start9 Labs”.

#. Click “OK” to save.

#. Open a new tab in Firefox to apply the changes. If this does not work, quit and restart Firefox.

#. Navigate to the LAN address provided in the Setup App.

#. You can now securely navigate to your Embassy over HTTPS!

.. _safari:

Safari
------

Once you have completed the steps to install a SSL certificate on your device, simply open a new tab to apply the changes. If this does not work, quit and restart Safari. You can now securely navigate to the LAN address for your Embassy!
