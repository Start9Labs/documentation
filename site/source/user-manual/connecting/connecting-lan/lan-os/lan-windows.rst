.. _lan-windows:

==============================
Trusting Embassy CA On Windows
==============================

Unfortunately, Windows does not have mDNS alias support built-in, which is necessary in order to visit .local addresses for any service you install on your Embassy, so we recommend using the Bonjour service. Check out this :ref:`FAQ answer<why-bonjour>` for details.

.. note:: Recently many users who have run through the following instructions have successfully connected to their Embassy via LAN only to have it stop working a few days or weeks later. We believe this to be due to a recent change in Windows. When this happens the fix is to simply reinstall Bonjour and Bonjour Print Services. A solution is being worked on and Bonjour will not be necessary to connect to your Embassy for much longer.

#. Install `Bonjour Print Services <https://support.apple.com/kb/DL999>`_ on your Windows machine.

   .. tip::  If you are experiencing issues after installing Bonjour, you might have had a previous or failed install. To fix:

            #. Check out this video: https://www.youtube.com/watch?v=9ECCB3bqNDQ
            #. Uninstall Bonjour and Bonjour Print Services completely via *system settings > remove programs*
            #. Reinstall Bonjour Printer Driver package (download at https://support.apple.com/kb/DL999?locale=en_US)
            #. Restart Windows
            #. Note: Uninstalling Bonjour via the setup package seems to be not enough to solve the issue. Bonjour must be uninstalled via windows system settings.

#. Back in Windows, click the “Start” menu, type “mmc”, and select "Run as administrator"

   .. figure:: /_static/images/ssl/windows/0_windows_mmc.png
    :width: 50%
    :alt: Windows MMC

    Access the Windows Management Console.  When prompted with the “User Account Control” window, select “Yes” to allow this program to run.

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

#. Select “Computer account” and click “Next". Leave defaulted options on the next screen and click “Finish”.

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

    Add downloaded certificate in the Certificate Import Wizard

#. On the “Certificate Store” window, ensure that it says “Trusted Root Certificate Authorities” and click “Next”.

#. Select “OK” when the import is successful.

#. Verify the Embassy Local Root CA certificate is in the “Certificates” folder.

   .. figure:: /_static/images/ssl/windows/8_windows_successful_cert_install.png
    :width: 90%
    :alt: Successful cert install

    Embassy Local Root CA imported into Certificate folder

#. You can save the settings to the console if desired, or not by pressing `Yes` or `No`.  The CA certificate will remain imported to the CA certificate store either way.
