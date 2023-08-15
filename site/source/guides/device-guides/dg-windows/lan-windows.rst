.. _lan-windows:

=========================================
Trusting Your Server's Root CA on Windows
=========================================
Complete this guide to trust your server's Root Certificate Authority (Root CA) on Windows.

#. Ensure you have already `downloaded your server's Root CA </user-manual/getting-started/trust-ca/#download-your-server-s-root-ca>`_

#. Ensure you have already `installed bonjour </user-manual/getting-started/connecting-lan/#windows-only>`_

#. Click the “Start” menu, type “mmc”, and select "Run as administrator" to access the Windows Management Console.

   .. figure:: /_static/images/ssl/windows/0_windows_mmc.png
    :width: 50%
    :alt: Windows MMC

    When prompted with the “User Account Control” window, select “Yes” to allow this program to run.

#. When the Management Console opens, navigate to *File > Add/Remove Snap-in*.

   .. figure:: /_static/images/ssl/windows/1_windows_console_root.png
    :width: 50%
    :alt: Windows Console Root

#. Select “Certificates” in the left side menu, then “Add”. This will open another window.

   .. figure:: /_static/images/ssl/windows/2_windows_add_certificates.png
    :width: 50%
    :alt: Add Certificates

#. Select “Computer account” and click “Next". Leave defaulted options on the next screen and click “Finish”.

   .. figure:: /_static/images/ssl/windows/3_snap_in_wizard.png
    :width: 50%
    :alt: Add Snap-in

#. When you return to the “Add or Remove Snap-ins” page, ensure “Certificates (Local Computer)” exists under “Console Root” in the “Selected snap-ins” section, then click “OK”.

   .. figure:: /_static/images/ssl/windows/4_windows_selected_snapin.png
    :width: 50%
    :alt: Snap-in Selected

#. In the left hand menu of the Management Console, navigate to Certificates (Local Computer) > Trusted Root Certification Authorities > Certificates.

   .. figure:: /_static/images/ssl/windows/5_windows_trusted_certificate_menu.png
    :width: 50%
    :alt: Certificates in Management Console

#. Right click on the “Certificates” directory, then navigate to *All Tasks > Import*.

   .. figure:: /_static/images/ssl/windows/6_windows_import_cert.png
    :width: 50%
    :alt: Import certificate

#. Click “Next” on the first page of the Certificate Import Wizard, then browse to the location where you saved the downloaded certificate and open it.  Then click "Next".

   .. figure:: /_static/images/ssl/windows/7_windows_import_cert_wizard.png
    :width: 50%
    :alt: Import cert wizard

#. On the “Certificate Store” window, ensure that it says “Trusted Root Certificate Authorities” and click “Next”.  Then click "Finish" on the final screen.

   .. figure:: /_static/images/ssl/windows/8_windows_import_cert_wizard.png
    :width: 50%
    :alt: Import cert wizard

#. Select “OK” when the import is successful.

   .. figure:: /_static/images/ssl/windows/9_success.png
    :width: 20%
    :alt: Import success!

#. Verify your server's unique `<adjective-noun> Local Root CA` certificate is in the “Certificates” folder:

   .. figure:: /_static/images/ssl/windows/10_successful_cert_install.png
    :width: 50%
    :alt: Successful cert install

#. You can save the console settings (where we added a snap-in), if desired. The CA certificate will remain imported to the CA certificate store either way, and you will likely use this guide if you need to import a new certificate.

   .. figure:: /_static/images/ssl/windows/11_console_settings.png
    :width: 20%
    :alt: Console settings
