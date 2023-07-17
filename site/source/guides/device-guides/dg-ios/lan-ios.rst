.. _lan-ios:

=========================
Trust Your Root CA on iOS
=========================
This applies to iOS v15 and v16.  For older versions, see the `v14 guide </0.3.1.x/user-manual/connecting/connecting-lan/lan-os/lan-ios>`_.

#. Download the certificate to your Downloads folder

   .. note::
      In order to do this, open Safari and visit your Start9 server's .local URL while connected to WiFi, but make sure it is prefixed with ``http://`` and not ``https://``.

      Log in using your password, then click the hamburger (3 lines) menu at the top right, select System > LAN > Download Certificate.  It may say `This website is trying to download a configuration profile.  Do you want to allow this?` Click `Allow`.

      Once this is done, you can skip to step 3, below.
      
      If you downloaded the certificate from a browser such as Firefox, you will need to copy the file from that Downloads folder to your iCloud Downloads folder.  Navigate there via `Files > iCloud Drive > Downloads`.  Otherwise, the "Profile Download" dialog will not appear when you click on the file in the next step.

#. Open your iCloud Downloads folder and click on the certificate.  It will display a dialog box that says "Profile Downloaded."  Click `Close`.

   .. figure:: /_static/images/ssl/ios/import_cert.png
    :width: 20%
    :alt: Profiles

#. Head to *Settings > General > VPN & Device Management*

   .. figure:: /_static/images/ssl/ios/settings_general_vpn.png
    :width: 20%
    :alt: Profiles

#. Locate the profile under "DOWNLOADED PROFILE" and tap on it

   .. figure:: /_static/images/ssl/ios/install_1.png
    :width: 20%
    :alt: Profiles

#. Tap *Install*

   .. figure:: /_static/images/ssl/ios/install_2.png
    :width: 20%
    :alt: Profiles

#. Tap *Install* again

   .. figure:: /_static/images/ssl/ios/install_3.png
    :width: 20%
    :alt: Profiles

#. Tap *Install* yet again

   .. figure:: /_static/images/ssl/ios/install_4.png
    :width: 20%
    :alt: Profiles

#. You should see green text with a check-mark saying "Verified" under the Profile Installed dialog. 

   .. figure:: /_static/images/ssl/ios/install_5.png
    :width: 20%
    :alt: Profiles

#. Tap *Done* near the top right.

#. Next, navigate to *General > About > Certificate Trust Settings*.

   .. figure:: /_static/images/ssl/ios/trust_1.png
    :width: 20%
    :alt: Certificate trust settings

#. Under "Enable full trust for root certificates", enable your "<custom-address> Local Root CA".

   .. figure:: /_static/images/ssl/ios/trust_2.png
    :width: 20%
    :alt: Enable full trust

#. Tap *Continue*

   .. figure:: /_static/images/ssl/ios/trust_3.png
    :width: 20%
    :alt: Profiles

#. Your certificate should now be installed and trusted:

   .. figure:: /_static/images/ssl/ios/trust_4.png
    :width: 20%
    :alt: Profiles
    