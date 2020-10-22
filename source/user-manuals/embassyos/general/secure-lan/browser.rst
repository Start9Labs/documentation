.. _browsers:

*******
Browser
*******

.. warning:: Make sure you have completed setup on your :ref:`device <ssl-setup>` before continuing!

Brave
=====

1. Navigate to your Brave Settings in a new tab.

2. On the left hand sidebar, select ``Additional Settings > Privacy and Security``.

3. Add the bottom of the section, select "Manage Certificates".

.. figure:: /_static/images/ssl/browser/brave_security_settings.png
  :width: 90%
  :alt: Brave security settings

  Brave privacy and security settings page

4. If you see a trusted “Embassy Local Root CA”, open a new tab to apply the certificate. If this does not work, quit and restart Brave.

5. If you do not see a trusted “Embassy Local Root CA” certificate in the list, ensure the certificate is properly set up on your computer system.

.. figure:: /_static/images/ssl/browser/brave_view_certs.png
  :width: 90%
  :alt: Brave manage certs

  Brave Manage Certificates sub-menu on MacOS

6. Obtain the LAN address provided in the Setup App and enter it in a new tab.

7. You can now securely navigate to your Embassy over HTTPS!

8. Additionally, you can start a Brave private window with Tor to visit the Tor address over HTTPS (unnecessary in principle, but will circumvent annoying browser warnings).

Chrome
======

1. Once you have followed the steps to setup your device, open a new tab to apply the certificate. If this does not work, quit and restart Chrome.

2. Obtain the LAN address provided in the Setup App and enter it in the URL bar.

3. You can now securely navigate to your Embassy over HTTPS!

Firefox
========

1. Navigate to your Firefox Settings in a new tab.

2. Select “Privacy and Security” from the left hand navigation menu.

3. Scroll all the way to the bottom of the page and select “View Certificates”.

.. figure:: /_static/images/ssl/browser/firefox_security_settings.png
  :width: 90%
  :alt: Firefox security settings

  Firefox privacy and security settings page

4. Click “Import” and open the downloaded ``Embassy Local Root CA.crt`` file on your device. If you cannot find this, make sure you completed the :ref:`device setup steps <ssl-setup>`.

5. When prompted, check “Trust this CA to identity websites” and select “OK”.

.. figure:: /_static/images/ssl/browser/firefox_security_settings.png
  :width: 90%
  :alt: Firefox import cert

  Firefox import certificate page

6. Ensure the “Embassy Local Root CA” exists under “Start9 Labs”.

7. Click “OK” to save.

8. Open a new tab in Firefox to apply the changes. If this does not work, quit and restart Firefox.

9. Navigate to the LAN address provided in the Setup App.

10. You can now securely navigate to your Embassy over HTTPS!

Safari
======

Once you have completed the steps to install a SSL certificate on your device, simply open a new tab to apply the changes. If this does not work, quit and restart Safari. You can now security navigate to the LAN address for your Embassy!