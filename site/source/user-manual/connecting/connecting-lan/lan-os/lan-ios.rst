.. _lan-ios:

==========================
Trusting Embassy CA on iOS
==========================

iOS 15+
-------

.. note:: Using Tor to download your LAN certificate is required for security reasons

#. Using a Tor browser, such as Onion Browser, navigate to your Embassy and tap your LAN certificate from the *Embassy tab > LAN > Download Root CA*, then tap "Open with"

#. Tap "Save to files"

#. Select "On my phone"

#. Tap "Save"

#. Go to "Settings"

#. Tap "Profile downloaded"

#. Tap "Install"

#. Tap "Install" again on the Warning screen, you may need to enter your password

#. Tap "Done"

#. Go to "Settings" again, then select "General" > "About" > "Certificate Trust Settings"

#. Toggle your Embassy's cert to *Green*

iOS 14 and Lower
----------------

#. On your iOS device, go to *Settings > General > Profiles*. Under "Downloaded Profile", click "Embassy Local Root CA"

   .. figure:: /_static/images/ssl/ios/ssl_ipad_profiles.png
    :width: 40%
    :alt: Profiles

#. Click "Install"

    .. tip:: You can safely click ``Yes`` for any warning prompts.

    .. figure:: /_static/images/ssl/ios/ssl_ipad_install_profile.png
      :width: 40%
      :alt: Install profile

#. Next, navigate to *General > About > Certificate Trust Settings*.

   .. figure:: /_static/images/ssl/ios/ssl_ipad_cert_trust_settings.png
    :width: 40%
    :alt: Certificate trust settings

#. Under "Enable full trust for root certificates", enable "Embassy Local Root CA".

   .. figure:: /_static/images/ssl/ios/ssl_ipad_cert_trust.png
    :width: 40%
    :alt: Enable full trust
