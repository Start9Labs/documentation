.. _lan-windows:

==================================
Trusting Your Start9 CA On Windows
==================================

Unfortunately, Windows does not have mDNS alias support built-in, which is necessary in order to visit .local addresses for any service you install on your Start9 server, so we recommend using the Bonjour service. Check out this :ref:`FAQ answer<why-bonjour>` for details.

.. note:: Recently many users who have run through the following instructions have successfully connected to their Start9 server via LAN only to have it stop working a few days or weeks later. We believe this to be due to a recent change in Windows. When this happens the fix is to simply reinstall Bonjour and Bonjour Print Services. A solution is being worked on and Bonjour will not be necessary to connect to your Start9 server for much longer.

#. Install `Bonjour Print Services <https://support.apple.com/kb/DL999>`_ on your Windows machine.

   .. tip::  If you are experiencing issues after installing Bonjour, you might have had a previous or failed install. To fix:

            #. Check out this video: https://www.youtube.com/watch?v=9ECCB3bqNDQ
            #. Uninstall Bonjour and Bonjour Print Services completely via *system settings > remove programs*
            #. Reinstall Bonjour Printer Driver package (download at https://support.apple.com/kb/DL999?locale=en_US)
            #. Restart Windows
            #. Note: Uninstalling Bonjour via the setup package seems to be not enough to solve the issue. Bonjour must be uninstalled via windows system settings.

#. Back in Windows, click the “Start” menu, type “mmc”, and select "Run as administrator" to access the Windows Management Console.

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

#. You can save the console settings (where we added a snap-in) if desired.  The CA certificate will remain imported to the CA certificate store either way, and you wil likely use this guide if you need to import a new certificate.

   .. figure:: /_static/images/ssl/windows/11_console_settings.png
    :width: 20%
    :alt: Console settings

You're now ready to browse your service UIs with encryption, either via the browser, or with native client apps.  You may wish to :ref:`configure Firefox<lan-ff>` and/or :ref:`Thunderbird<lan-thunderbird>` next.
