.. _lan-mac:

==============================
Trusting Your Start9 CA on Mac
==============================

#. In your Start9 server's UI, navigate to *System* -> *Lan* -> click *Download Certificate* and save it to your Mac.

    .. figure:: /_static/images/ssl/macos/mac-lan-setup0.png
        :width: 60%
        :alt: LAN setup prompt

#. Locate the certificate and double click it.

    .. figure:: /_static/images/ssl/macos/mac-lan-setup1.png
        :width: 60%

#. In the resulting  box, choose "System" from the "Keychain" dropdown menu.  Then click "Add."

    .. figure:: /_static/images/ssl/macos/mac-lan-setup2.png
        :width: 60%
        :alt: System Keychain

#. Enter your computer password when prompted. It will be imported into your mac's keychain.

    .. figure:: /_static/images/ssl/macos/certificate_untrusted.png
        :width: 60%
        :alt: Keychain access import menu

    .. note:: If the keychain console did not open, press "Command + spacebar" and type “Keychain Access”, and hit enter to open it.

#. Navigate to the "System" tab on the left, find the certificate named as a custom ``adjective-noun.local.crt``, and double click on this certificate. A second window will pop up.

#. Open the "Trust" dropdown and select "Always Trust" from the dropdown next to "When using this certificate".

    .. figure:: /_static/images/ssl/macos/always_trust.png
        :width: 60%
        :alt: Keychain submenu

#. Close this window and enter your password to apply the settings.

#. The unique ``adjective-noun.local.crt`` cert will now read "This certificate is marked as trusted for all users" in Keychain Access.

    .. figure:: /_static/images/ssl/macos/certificate_trusted.png
        :width: 60%
        :alt: Keychain menu trusted certificate

No additional setup is required for most browsers and you will now be able to safely connect to your Start9 server over LAN.

For Firefox, you will need to follow :ref:`these <lan-ff>` instructions.
