******
Mobile
******

Android
=======

Unfortunately, LAN addresses (URLs ending in `.local`) are not supported on Android devices. This is because Android does not yet natively support mDNS, which is used to access LAN addresses on mobile device browsers. As a result, you cannot access your Embassy's or service's LAN address from the browser on Android. We are tracking this issue `here <https://issuetracker.google.com/issues/140786115>`_, please star it to get more attention from the development team!

iOS
====

#. Navigate back to the `Start9 Setup App <https://apps.apple.com/us/app/start9-setup-app/id1528125889>`_. 

#. Select your claimed Embassy to view the setup results.

#. Find the "LAN (advanced)" menu item at the bottom of the Setup App screen.

   .. figure:: /_static/images/ssl/mobile/ssl_setup_app_complete.png
    :width: 70%
    :alt: Setup app complete

    Completed Setup App screen

#. Select the "Embassy Local Root CA" menu item. Clicking this will prompt you to “Save to device”.

   .. figure:: /_static/images/ssl/mobile/ssl_setup_app_advanced.png
    :width: 70%
    :alt: Setup app advanced menu

    Setup App advanced menu

#. You will be directed to a page in your default browser indicating next steps and that the profile has been successfully downloaded. 

   .. note::
        If you have changed the default browser from Safari to Brave, the following auto save certificate to device flow will *not* work. Safari, Firefox, and Chrome work as expected. We recommend you temporarily use one of these browsers to complete this action.

#. Be sure to complete all steps in this process! These steps are also outlined below.

   .. figure:: /_static/images/ssl/mobile/ssl_certificate_install_page.png
    :width: 70%
    :alt: Certificate install page

    Select "Allow" on the certificate install page

#. Go to Settings on your iOS device.

   .. figure:: /_static/images/ssl/mobile/ssl_ipad_general_settings.png
    :width: 70%
    :alt: General settings

    General settings

#. Navigate to *General > Profile(s) > Downloaded Profile > Install*.

   .. figure:: /_static/images/ssl/mobile/ssl_ipad_profiles.png
    :width: 70%
    :alt: Profiles

    Profiles view

   .. figure:: /_static/images/ssl/mobile/ssl_ipad_install_profile.png
    :width: 70%
    :alt: Install profile

    Select "Install" for Embassy Local Root CA

#. Select “yes” to any warning prompts.

#. Next, navigate to *General > About > Certificate Trust Settings*.

   .. figure:: /_static/images/ssl/mobile/ssl_ipad_cert_trust_settings.png
    :width: 70%
    :alt: Certificate trust settings

    Select Certificate Trust Settings (scroll all the way down)

#. Enable full trust for root certificates.

   .. figure:: /_static/images/ssl/mobile/ssl_ipad_cert_trust.png
    :width: 70%
    :alt: Enable full trust

    Toggle to enable full trust for root certificates. "Continue" when warning prompts.

#. Test that this process worked successfully by navigating to the LAN address provided in the Setup App. You should no longer see warnings about the security of this site in your browser. We recommend using Start9’s own `Consulate browser <https://apps.apple.com/us/app/consulate/id1528124570>`_ for a faster and better experience.