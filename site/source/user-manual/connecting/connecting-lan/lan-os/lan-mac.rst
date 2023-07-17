.. _lan-mac:

================================
Trusting Your Start9 CA on macOS
================================

#. In your Start9 server's UI, navigate to **System** -> **LAN**

    .. figure:: /_static/images/ssl/macos/trust-cert-macos-1-system-lan.png
        :width: 60%
        :alt: Navigate to System > LAN

#. Click **Download Certificate** and your browser will either automatically save the certificate to your Downloads folder or ask you where to save it:

    .. figure:: /_static/images/ssl/macos/trust-cert-macos-2-download_cert.png
        :width: 60%
        :alt: Download Certificate

#. Among the browser's downloads, right click your certificate file and select *Show in Folder*:

    .. figure:: /_static/images/ssl/macos/trust-cert-macos-3-show_in_folder.png
        :width: 60%
        :alt: Show certificate file in Downloads folder

#. Finder will open.  Locate your unique `adjective-noun Local CA.crt` file in your *Downloads* folder and double click it to open it in the Keychain Access program.  You will be prompted for your macOS username and password, or thumbprint.  Then select *Modify Keychain*:

    .. figure:: /_static/images/ssl/macos/trust-cert-macos-4-modify_keychain.png
        :width: 60%

#. Your server's CA certificate will be displayed among the imported certificates in Keychain Access.  Right-click on the imported CA cert and select *Get Info*:

    .. figure:: /_static/images/ssl/macos/trust-cert-macos-5-cert-get_info.png
        :width: 60%
        :alt: Keychain Access - Get Info of CA Certificate

#. The details of your CA certificate will be displayed in a new dialog window.  Expand the **Trust** heading, then select "**Always Trust**" on **Secure Sockets Layer (SSL)** and **X.509 Basic Policy**.

    .. figure:: /_static/images/ssl/macos/trust-cert-macos-6-ssl_tls-always_trust.png
        :width: 60%
        :alt: Trust CA Certificate

    Click the red (x) button at the top left of the Local Root CA dialog window.

#. You will then be prompted again for your username and password, or thumbprint.  Enter those and click **Update Settings**:

    .. figure:: /_static/images/ssl/macos/trust-cert-macos-7-password-update_settings.png
        :width: 60%
        :alt: Authenticate to change the settings

#. You will see your server's CA certificate as trusted now, signified by a blue (+) sign and the CA cert information will now say "This certificate is marked as trusted for all users" in Keychain Access:

    .. figure:: /_static/images/ssl/macos/trust-cert-macos-8-cert_trusted.png
        :width: 60%
        :alt: Keychain submenu

    .. note:: If the keychain console did not show the certificate as trusted, press "Command + spacebar" and type “Keychain Access”, and hit enter to re-open it.

No additional setup is required for most browsers and you will now be able to safely connect to your Start9 server over LAN.

For Firefox, you will need to follow :ref:`these <lan-ff>` instructions.
