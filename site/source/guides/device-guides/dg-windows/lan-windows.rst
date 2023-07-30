.. _lan-windows:

==================================
Trusting Your Start9 CA On Windows
==================================
Complete this guide to download your Start9 server's Root Certificate Authority (CA), and trust it on your client device (Windows).  This allows you to use encrypted ``https`` connections to your ``.local`` (LAN) and ``.onion`` (tor) server addresses, access services on LAN, and enhances performance on tor.  The self-signed certificate was created by your server when you perfomed the initial setup, and applies to your server's main UI connection, as well as all service connections.

Unfortunately, Windows does not have mDNS alias support built-in, which is necessary in order to visit .local addresses for any service you install on your Start9 server, so we recommend using the Bonjour service. Check out this :ref:`FAQ answer<why-bonjour>` for details.

.. note:: Some users who run through the following instructions have successfully connected to their LAN services only to have them stop working weeks or months later. We believe these issues to be due to changes in Windows. When this happens the fix is to simply reinstall Bonjour and Bonjour Print Services. A solution is being worked on and Bonjour will not be necessary to connect to your Start9 server for much longer.

Install Bonjour
---------------
#. Install `Bonjour Print Services <https://support.apple.com/kb/DL999>`_ on your Windows machine.

   .. tip::  If you are still experiencing issues after installing Bonjour, you might have a faulty install.
      
      In that case, run through the known fix:

      #. Uninstall Bonjour and Bonjour Print Services completely via **System Settings > Remove Programs**
      
         Note: Uninstalling Bonjour via the Bonjour Print Services setup package itself is not enough to solve the issue. Bonjour must be uninstalled via Windows' System Settings menu.

      #. Install the Bonjour Print Services package from Apple:
      
         https://support.apple.com/kb/DL999

      #. Test to see if your .local name resolution issue is resolved.  If not, restart Windows and then test again.

Download Root CA
----------------
Download your Start9 server's Root CA, if you have not already.

    - Navigate to *System > LAN*, then click "Download Certificate".

      .. figure:: /_static/images/ssl/lan_setup.png
        :width: 40%
        :alt: LAN setup menu item

Alternatively, you can download the CA certificate to another machine, then transfer the file to your client device.

Trust Root CA
-------------
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

#. You can save the console settings (where we added a snap-in), if desired.  The CA certificate will remain imported to the CA certificate store either way, and you will likely use this guide if you need to import a new certificate.

   .. figure:: /_static/images/ssl/windows/11_console_settings.png
    :width: 20%
    :alt: Console settings

You're now ready to browse your service UIs with encryption, either via the browser, or with native client apps.  For Mozilla apps, such as Firefox, you will need to follow the :ref:`Firefox Config <lan-ff>` guide, which we highly recommend.
