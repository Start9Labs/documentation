Operating System Config
=======================

MacOS
-----

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

#. Open to your favorite browser to import this certificate and follow the steps for :ref:`supported browsers <browsers>`.

Windows
-------

#. Install `Bonjour Print Services <https://support.apple.com/kb/DL999>`_ on your Windows machine. This is necessary in order to visit .local addresses on Windows.
#. If you are having issues running Bonjour after installing, you might have had Bonjour previously installed. To fix:

   #. Check out this video: https://www.youtube.com/watch?v=9ECCB3bqNDQ
   #. UNinstall Bonjour completely via ``system settings -> remove programs``
   #. Reinstall Bonjour Printer Driver package (download at https://support.apple.com/kb/DL999?locale=en_US)
   #. Restart Windows
   #. Note: Uninstalling Bonjour via the setup package seems to be not enough to solve the issue. Bonjour must be uninstalled via windows system settings.

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

    Select the "Root Certificate Authority" sub menu download icon

#. Select the option to save the *Embassy Local CA.crt* file.

   .. figure:: /_static/images/ssl/windows/windows_download_cert.png
    :width: 90%
    :alt: LAN setup prompt

    "Save file" when Opening Embassy Local CA.crt

#. On your computer, right-click the “Start” menu and select “Run”.

#. Type in “mmc” and click “OK”. When prompted on the “User Account Control” window, select “Yes” to allow this program to run.

   .. figure:: /_static/images/ssl/windows/1_windows_mmc.png
    :width: 90%
    :alt: Windows MMC

    Access the Windows Management Console

#. When the Management Console opens, navigate to *File > Add/Remove Snap-in*.

   .. figure:: /_static/images/ssl/windows/2_windows_console_root.png
    :width: 90%
    :alt: Windows Console Root

    Add Snap-in from Console Root

#. Select “Certificates” in the left side menu, then “Add”. This will open another window.

   .. figure:: /_static/images/ssl/windows/3_windows_add_certificates.png
    :width: 90%
    :alt: Add Certificates

    Add Certificates to selected snap-ins

#. Select “Computer account” and click “Next. Leave defaulted options on the next screen and click “Finish”.

#. When you return to the “Add or Remove Snap-ins” page, ensure “Certificates (Local Computer)” exists under “Console Root” in the “Selected snap-ins” section, then click “OK”.

   .. figure:: /_static/images/ssl/windows/4_windows_selected_snapin.png
    :width: 90%
    :alt: Snap-in Selected

    Certificates (Local Computer) is selected as snap-in

#. In the left hand menu of the Management Console, navigate to Certificates (Local Computer) > Trusted Root Certification Authorities > Certificates.

   .. figure:: /_static/images/ssl/windows/5_windows_trusted_certificate_menu.png
    :width: 90%
    :alt: Certificates in Management Console

    Access Certificates in Management Console

#. Right click on “Certificates”, then navigate to *All Tasks > Import*.

   .. figure:: /_static/images/ssl/windows/6_windows_import_cert.png
    :width: 90%
    :alt: Import certificate

    Select "Import" from Certificates sub-menu

#. Click “Next” on the first page of the Certificate Import Wizard, then browse to the location where you saved the downloaded certificate and click “Open”.

   .. figure:: /_static/images/ssl/windows/7_windows_import_cert_wizard.png
    :width: 90%
    :alt: Import cert wizard

    Add downloaded certificate int he Certificate Import Wizard

#. On the “Certificate Store” window, ensure that it says “Trusted Root Certificate Authorities” and click “Next”.

#. Select “OK” when the import is successful.

#. Verify the Embassy Local Root CA certificate is in the “Certificates” folder.

   .. figure:: /_static/images/ssl/windows/8_windows_successful_cert_install.png
    :width: 90%
    :alt: Successful cert install

    Embassy Local Root CA imported into Certificate folder

#. You can save the settings to the console if desired or cancel.

#. Open to your favorite browser to import this certificate and follow the steps for :ref:`supported browsers <browsers>`.


Linux
-----

Nothing specific needs to be configured for this environment. Follow the guides below to import the certificate into your desired browser.
