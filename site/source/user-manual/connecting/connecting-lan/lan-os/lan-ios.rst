.. _lan-ios:

==========================
Trusting Embassy CA on iOS
==========================

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
