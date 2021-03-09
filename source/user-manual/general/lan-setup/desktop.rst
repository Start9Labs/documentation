********
Desktop
********

Operating Systems
=================

MacOS
-----

1. In the Setup App, select your claimed Embassy to view the setup results. Navigate to the "Tor" menu item and copy the Tor address. It is safe to message this address to yourself so that you can paste it in a browser.

2. Navigate to a :ref:`Tor enabled browser <connecting>`.

3. Your browser might display a warning screen. You can typically navigate to *Advanced > Accept the risk and continue*.

4. Allow the page to load with your Tor address over HTTP. Using HTTPS is less performant and unnecessary because Tor v3 is self authenticating.

5. Login to Ambassador UI with the master password you created in the Setup App.

6. Navigate to the “Embassy” tab in the menu.

7. Find the section entitled “Connect over LAN”.

.. figure:: /_static/images/embassy_lan_setup.png
  :width: 90%
  :alt: LAN setup menu item

  Select the "Connect over LAN" menu item

8. Select the "Root Certificate Authority" sub menu. This will prompt a download to save the certificate file to your machine.

.. figure:: /_static/images/secure_lan_setup_page.png
  :width: 90%
  :alt: LAN setup page

  Select the "Root Certificate Authority" sub menu

9.  Select the option to open your key with Keychain Access. If you choose to save file, double click on it once downloaded.

.. figure:: /_static/images/secure_lan_setup_prompt.png
  :width: 90%
  :alt: LAN setup prompt

  Open with "Keychain Access" and select "OK"

10. Enter your computer password when prompted. It will be imported into your computer’s keychain.

.. figure:: /_static/images/ssl/macos/certificate_untrusted.png
  :width: 90%
  :alt: Keychain access import menu

  Keychain access import menu

If the keychain console did not open, press "Command + spacebar" and type “Keychain Access”, and hit enter to open it.

11. Navigate to the "System" tab and find the certificate entitled “Embassy Local Root CA”.

12. Double click on this certificate. A second window will pop up.

13. Open the “Trust” dropdown and select “Always Trust” from the dropdown next to “when using this certificate”.

.. figure:: /_static/images/ssl/macos/always_trust.png
  :width: 90%
  :alt: Keychain submenu

  Select "Always trust" under SSL dropdown for Embassy Local CA

14. Close this window and enter your password to apply the settings.

15. The “Embassy Local Root CA” cert will now read “This certificate is marked as trusted for all users” in Keychain Access.

.. figure:: /_static/images/ssl/macos/certificate_trusted.png
  :width: 90%
  :alt: Keychain menu trusted certificate

  Trusted Embassy Local CA certificate

16. Navigate to your desired browser to import this certificate and follow the steps for :ref:`supported browsers <browsers>`.

Windows
-------

1. In the Setup App, select your claimed Embassy to view the setup results. Navigate to the "Tor" menu item and copy the Tor address. It is safe to message this address to yourself so that you can paste it in a browser.

2. Navigate to a :ref:`Tor enabled browser <connecting>`.

3. Your browser might display a warning screen. You can typically navigate to *Advanced > Accept the risk and continue*.

4. Allow the page to load with your Tor address over HTTP. Using HTTPS is less performant and unnecessary because Tor v3 is self authenticating.

5. Login to Ambassador UI with the master password you created in the Setup App.

6. Navigate to the “Embassy” tab in the menu.

7. Find the section entitled “Connect over LAN”.

.. figure:: /_static/images/embassy_lan_setup.png
  :width: 90%
  :alt: LAN setup menu item

  Select the "Connect over LAN" menu item

8. Select the "Root Certificate Authority" sub menu. This will prompt a download to save the certificate file to your machine.

.. figure:: /_static/images/secure_lan_setup_page.png
  :width: 90%
  :alt: LAN setup page

  Select the "Root Certificate Authority" sub menu download icon

9.  Select the option to save the *Embassy Local CA.crt* file. 

.. figure:: /_static/images/ssl/windows/windows_download_cert.png
  :width: 90%
  :alt: LAN setup prompt

  "Save file" when Opening Embassy Local CA.crt

10. On your computer, right-click the “Start” menu and select “Run”.

11. Type in “mmc” and click “OK”. When prompted on the “User Account Control” window, select “Yes” to allow this program to run.

.. figure:: /_static/images/ssl/windows/1_windows_mmc.png
  :width: 90%
  :alt: Windows MMC

  Access the Windows Management Console
  
12. When the Management Console opens, navigate to *File > Add/Remove Snap-in*.

.. figure:: /_static/images/ssl/windows/2_windows_console_root.png
  :width: 90%
  :alt: Windows Console Root

  Add Snap-in from Console Root

13. Select “Certificates” in the left side menu, then “Add”. This will open another window.

.. figure:: /_static/images/ssl/windows/3_windows_add_certificates.png
  :width: 90%
  :alt: Add Certificates

  Add Certificates to selected snap-ins

14. Select “Computer account” and click “Next. Leave defaulted options on the next screen and click “Finish”.

15. When you return to the “Add or Remove Snap-ins” page, ensure “Certificates (Local Computer)” exists under “Console Root” in the “Selected snap-ins” section, then click “OK”.

.. figure:: /_static/images/ssl/windows/4_windows_selected_snapin.png
  :width: 90%
  :alt: Snap-in Selected

  Certificates (Local Computer) is selected as snap-in

16. In the left hand menu of the Management Console, navigate to Certificates (Local Computer) > Trusted Root Certification Authorities > Certificates.

.. figure:: /_static/images/ssl/windows/5_windows_trusted_certificate_menu.png
  :width: 90%
  :alt: Certificates in Management Console

  Access Certificates in Management Console

17. Right click on “Certificates”, then navigate to *All Tasks > Import*.

.. figure:: /_static/images/ssl/windows/6_windows_import_cert.png
  :width: 90%
  :alt: Import certificate

  Select "Import" from Certificates sub-menu

18. Click “Next” on the first page of the Certificate Import Wizard, then browse to the location where you saved the downloaded certificate and click “Open”.

.. figure:: /_static/images/ssl/windows/7_windows_import_cert_wizard.png
  :width: 90%
  :alt: Import cert wizard

  Add downloaded certificate int he Certificate Import Wizard

19. On the “Certificate Store” window, ensure that it says “Trusted Root Certificate Authorities” and click “Next”.

20. Select “OK” when the import is successful.

21. Verify the Embassy Local Root CA certificate is in the “Certificates” folder.

.. figure:: /_static/images/ssl/windows/8_windows_successful_cert_install.png
  :width: 90%
  :alt: Successful cert install

  Embassy Local Root CA imported into Certificate folder

22. You can save the settings to the console if desired or cancel.

23. Navigate to your desired browser to import this certificate and follow the steps for :ref:`supported browsers <browsers>`.

Linux
-----

Nothing specific needs to be configured for this environment. Follow the guides below to import the certificate into your desired browser.

Browsers
========

Select the browser you would like to configure to import the certificate from your desktop:

.. toctree::
  :hidden:

  browser

- :ref:`Brave <brave>`
- :ref:`Chrome <chrome>`
- :ref:`Firefox <firefox>`
- :ref:`Safari <safari>`