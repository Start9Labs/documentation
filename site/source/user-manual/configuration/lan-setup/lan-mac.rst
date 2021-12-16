.. _lan-mac:

===
Mac
===

#. Visit your Embassy at its Tor Address.

#. Navigate to --> Embassy --> Connect Over LAN

   .. figure:: /_static/images/embassy_lan_setup.png
    :width: 90%
    :alt: LAN setup menu item

    Select the "Connect over LAN" menu item

#. Select the "Root Certificate Authority" sub menu. This will prompt a download to save the certificate file to your machine.

   .. figure:: /_static/images/secure_lan_setup_page.png
    :width: 90%
    :alt: LAN setup page

    Select the "Root Certificate Authority" sub menu

#. Select the option to open your key with Keychain Access. If you choose to save file, double click on it once downloaded.

   .. figure:: /_static/images/secure_lan_setup_prompt.png
    :width: 90%
    :alt: LAN setup prompt

    Open with "Keychain Access" and select "OK"

#. Enter your computer password when prompted. It will be imported into your computer’s keychain.

   .. figure:: /_static/images/ssl/macos/certificate_untrusted.png
    :width: 90%
    :alt: Keychain access import menu

    Keychain access import menu

#. If the keychain console did not open, press "Command + spacebar" and type “Keychain Access”, and hit enter to open it.

#. Navigate to the "System" tab and find the certificate entitled “Embassy Local Root CA”.

#. Double click on this certificate. A second window will pop up.

#. Open the “Trust” dropdown and select “Always Trust” from the dropdown next to “when using this certificate”.

   .. figure:: /_static/images/ssl/macos/always_trust.png
    :width: 90%
    :alt: Keychain submenu

    Select "Always trust" under SSL dropdown for Embassy Local CA

#. Close this window and enter your password to apply the settings.

#. The “Embassy Local Root CA” cert will now read “This certificate is marked as trusted for all users” in Keychain Access.

   .. figure:: /_static/images/ssl/macos/certificate_trusted.png
    :width: 90%
    :alt: Keychain menu trusted certificate

    Trusted Embassy Local CA certificate

#. Open your favorite browser to import this certificate and follow the steps for :ref:`browser setup <browser-setup>`.