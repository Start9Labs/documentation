.. _lan-ios:

===
iOS
===

.. note:: For security, this will need to be done using a Tor connection.  Please use Onion Browser or Consulate to access your Embassy and complete the following steps.

#. You will first need to get your :ref:`LAN Certificate<lan-cert>`, which can be found either:

   #. When completing your Embassy :ref:`Initial Setup<initial-setup>`, it is provided on the final screen

      or:

   #. In the ``Embassy`` tab in your Embassy, under ``Settings`` -> ``LAN``

      .. figure:: /_static/images/ssl/embassy_lan_setup.svg
         :width: 60%
         :alt: LAN setup menu item

#. Select ``Download Root CA``. Clicking this will prompt you to “Save to device”.

   .. figure:: /_static/images/ssl/embassy_lan_setup0.svg
      :width: 60%
      :alt: LAN setup page

#. You will be directed to a page in your default browser indicating next steps and that the profile has been successfully downloaded.  Be sure to complete all steps in this process! These steps are also outlined below.

   .. note::
        If you have changed the default browser from Safari to Brave, the following auto save certificate to device flow will *not* work. Safari, Firefox, and Chrome work as expected. We recommend you temporarily use one of these browsers to complete this action.

   .. figure:: /_static/images/ssl/ios/ssl_certificate_install_page.svg
    :width: 40%
    :alt: Certificate install page

    Select "Allow" on the certificate install page

#. Go to Settings on your iOS device.

   .. figure:: /_static/images/ssl/ios/ssl_ipad_general_settings.svg
    :width: 40%
    :alt: General settings

#. Navigate to *General > Profile(s) > Downloaded Profile > Install*.

   .. figure:: /_static/images/ssl/ios/ssl_ipad_profiles.svg
    :width: 40%
    :alt: Profiles

   .. figure:: /_static/images/ssl/ios/ssl_ipad_install_profile.svg
    :width: 40%
    :alt: Install profile

    Select "Install" for Embassy Local Root CA

#. Select “Yes” to any warning prompts.

#. Next, navigate to *General > About > Certificate Trust Settings*.

   .. figure:: /_static/images/ssl/ios/ssl_ipad_cert_trust_settings.svg
    :width: 40%
    :alt: Certificate trust settings

    Select Certificate Trust Settings (scroll all the way down)

#. Enable full trust for root certificates.

   .. figure:: /_static/images/ssl/ios/ssl_ipad_cert_trust.svg
    :width: 40%
    :alt: Enable full trust

    Toggle to enable full trust for root certificates. "Continue" when warning prompts.

#. Test that this process worked successfully by navigating to the LAN address provided from one of the locations listed under Step 1 at the top of this page. You should not see warnings about the security of this site in your browser (if you do, setup was not successful).

