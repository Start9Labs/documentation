.. _ca-ios:

=====================================
Trusting Your Server's Root CA on iOS
=====================================
Complete this guide to trust your server's Root Certificate Authority (Root CA) on iOS.

.. note:: This guide only applies to iOS v15+. For v14, see the `v14 guide </0.3.1.x/user-manual/connecting/connecting-lan/lan-os/lan-ios>`_.

#. Ensure you have already `downloaded your server's Root CA </getting-started/trust-ca/#download-your-server-s-root-ca>`_

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
    