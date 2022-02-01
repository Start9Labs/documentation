.. _lan-mac:

===
Mac
===

#. Visit your Embassy at its Tor Address (for security purposes), and navigate to the :ref:`Embassy tab<embassy-tab>` -> LAN

    .. figure:: /_static/images/ssl/embassy_lan_setup.svg
        :width: 60%
        :alt: LAN setup menu item

#. Click "Download Root CA". This will prompt a download to save the certificate file to your machine.

    .. figure:: /_static/images/ssl/embassy_lan_setup0.svg
        :width: 60%
        :alt: LAN setup page

#. Select the option to ``Open with`` "Keychain Access" and select ``OK``. If you choose to save the file, double click on it once downloaded.

    .. figure:: /_static/images/ssl/embassy_lan_setup1.svg
        :width: 60%
        :alt: LAN setup prompt

#. Enter your computer password when prompted. It will be imported into your mac's keychain.

    .. figure:: /_static/images/ssl/macos/certificate_untrusted.svg
        :width: 60%
        :alt: Keychain access import menu

        Keychain access import menu

    .. note:: If the keychain console did not open, press "Command + spacebar" and type “Keychain Access”, and hit enter to open it.

#. Navigate to the "System" tab on the left, find the certificate entitled “Embassy Local Root CA”, and double click on this certificate. A second window will pop up.

#. Open the “Trust” dropdown and select “Always Trust” from the dropdown next to “When using this certificate”.

    .. figure:: /_static/images/ssl/macos/always_trust.svg
        :width: 60%
        :alt: Keychain submenu

        Select "Always trust" under the "Trust" dropdown for Embassy Local CA

#. Close this window and enter your password to apply the settings.

#. The “Embassy Local Root CA” cert will now read “This certificate is marked as trusted for all users” in Keychain Access.

    .. figure:: /_static/images/ssl/macos/certificate_trusted.svg
        :width: 60%
        :alt: Keychain menu trusted certificate

        Trusted Embassy Local CA certificate

#. Open your favorite browser and follow the steps for :ref:`browser setup <lan-browser>` to complete LAN setup.
