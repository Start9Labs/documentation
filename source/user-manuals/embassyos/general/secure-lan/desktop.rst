********
Desktop
********

MacOS
=====

1. Copy the Tor address from the Setup App. It is safe to message this address to yourself so that you can paste it in a browser.

2. Navigate to a `Tor enabled browser <_connecting>`.

3. Your browser might display a warning screen. You can typically navigate to ``Advanced > Accept the risk and continue``.

4. Allow the page to load with your Tor address over HTTP. Using HTTPS is less performant and unnecessary because Tor v3 is self authenticating.

5. Login to Ambassador UI with the master password you created in the Setup App.

6. Navigate to the “Embassy” tab in the menu.

7. Find the section entitled “Secure LAN Setup”.

.. figure:: /_static/images/embassy_lan_setup.png
  :width: 90%
  :alt: Secure LAN setup menu item

  Select the "Secure LAN Setup" menu item

8. Select the "SSL Certificate" sub menu. This will prompt a download.

.. figure:: /_static/images/secure_lan_setup_page.png
  :width: 90%
  :alt: Secure LAN setup page

  Select the "SSL Certificate" sub menu

9.  Select the option to open your key with Keychain Access. If you choose to save file, double click on it once downloaded.

.. figure:: /_static/images/secure_lan_setup_prompt.png
  :width: 90%
  :alt: Secure LAN setup prompt

  Open with "Keychain Access" and select "OK"

10. Enter your computer password when prompted. It will be imported into your computer’s keychain.

.. figure:: /_static/images/ssl/macos/certificate_untrusted.png
  :width: 90%
  :alt: Keychain access import menu

  Keychain access import menu

If the keychain console did not open, press ``Command + spacebar`` and type “Keychain Access”, and hit enter to open it.

11. Navigate to the “System” tab and find the certificate entitled “Embassy Local Root CA”.

12. Double click on this certificate. A second window will pop up.

13. Open the “Trust” dropdown and select “Always Trust” from the dropdown next to “when using this certificate”.

.. figure:: /_static/images/ssl/macos/always_trust.png
  :width: 90%
  :alt: Keychain submenu

  Selec "Always trust" under SSL dropdown for Embassy Local CA

14. Close this window and enter your password to apply the settings.

15. The “Embassy Local Root CA” cert will now read “This certificate is marked as trusted for all users” in Keychain Access.

.. figure:: /_static/images/ssl/macos/certificate_trusted.png
  :width: 90%
  :alt: Keychain menu trusted certificate

  Trusted Embassy Local CA certificate

16. Navigate to your desired browser to import this certificate and follow the steps for `supported browsers <browsers>`.

Windows
=======

1. Copy the Tor .onion link from the final page of the Setup App. It is safe to message this address to yourself so that you can paste it in a browser.
2. Navigate to a Tor enabled browser. *
3. Your browser might display a warning screen. You can typically navigate to Advanced > Accept the risk and continue.
4. Allow the page to load with your Tor address over HTTP. Using HTTPS is less performant and unnecessary because Tor v3 is self authenticating.
5. Login to Ambassador UI with the master password you created in the Setup App.
6. Navigate to the “Embassy” tab in the menu.
7. Find the section entitled “Install SSL Certificate”.
8. This will prompt a download to save the certificate file to your machine.
Image for post
9. Right-click the “Start” menu and select “Run”.
10. Type in “mmc” and click “OK”. When prompted on the “User Account Control” window, select “Yes” to allow this program to run.
Image for post
11. When the Management Console opens, navigate to File > Add/Remove Snap-in.
Image for post
12. Select “Certificates” in the left side menu, then “Add”. This will open another window.
Image for post
13. Select “Computer account” and click “Next. Leave defaulted options on the next screen and click “Finish”.
14. When you return to the “Add or Remove Snap-ins” page, ensure “Certificates (Local Computer)” exists under “Console Root” in the “Selected snap-ins” section, then click “OK”.
Image for post
15. In the left hand menu of the Management Console, navigate to Certificates (Local Computer) > Trusted Root Certification Authorities > Certificates.
Image for post
16. Right click on “Certificates”, then select All Tasks > Import.
Image for post
17. Click “Next” on the first page of the Certificate Import Wizard, then browse to the location where you saved the downloaded certificate and click “Open”.
Image for post
18. On the “Certificate Store” window, ensure that it says “Trusted Root Certificate Authorities” and click “Next”.
19. Select “OK” when the import is successful.
20. Verify the Embassy Local Root CA certificate is in the “Certificates” folder.
Image for post
21. You can save the settings to the console if desired or cancel.
22. Navigate to your desired browser to import this certificate. Steps for supported browsers are outlined below.

Linux
=====

Please reach out to `@ProofOfKeags <http://twitter.com/ProofOfKeags>`_ on `Telegram <https://t.me/start9_labs>`_ if you would like assistance setting up SSL Certificates in this environment.
