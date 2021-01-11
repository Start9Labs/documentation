******
Mobile
******

iOS
====

1. Navigate back to the `Start9 Setup App <https://apps.apple.com/us/app/start9-setup-app/id1528125889>`_. 

2. Select your claimed Embassy to view the setup results.

3. Find the "LAN (advanced)" menu item at the bottom of the Setup App screen.

.. figure:: /_static/images/ssl/mobile/ssl_setup_app_complete.png
  :width: 90%
  :alt: Setup app complete

  Completed Setup App screen

4. Select the "Embassy Local Root CA" menu item. Clicking this will prompt you to “Save to device”.

.. figure:: /_static/images/ssl/mobile/ssl_setup_app_advanced.png
  :width: 90%
  :alt: Setup app advanced menu

  Setup App advanced menu

.. note:: At this point, you may see a yellow messaging indicating you need to reclaim your Embassy to activate this feature. Proceed with the recommendation.

5. You will be directed to a page in Safari indicating next steps and that the profile has been successfully downloaded. Be sure to complete all steps in this process. These steps are also outlined below.

.. figure:: /_static/images/ssl/mobile/ssl_certificate_install_page.png
  :width: 90%
  :alt: Certificate install page

  Select "Allow" on the certificate install page

6. Go to Settings on your iOS device.

.. figure:: /_static/images/ssl/mobile/ssl_ipad_general_settings.png
  :width: 90%
  :alt: General settings

  General settings

7. Navigate to *General > Profile(s) > Downloaded Profile > Install*.

.. figure:: /_static/images/ssl/mobile/ssl_ipad_profiles.png
  :width: 90%
  :alt: Profiles

  Profiles view

.. figure:: /_static/images/ssl/mobile/ssl_ipad_install_profile.png
  :width: 90%
  :alt: Install profile

  Select "Install" for Embassy Local Root CA

8. Select “yes” to any warning prompts.

9. Next, navigate to *General > About > Certificate Trust Settings*.

.. figure:: /_static/images/ssl/mobile/ssl_ipad_cert_trust_settings.png
  :width: 90%
  :alt: Certificate trust settings

  Select Certificate Trust Settings (scroll all the way down)

10. Enable full trust for root certificates.

.. figure:: /_static/images/ssl/mobile/ssl_ipad_cert_trust.png
  :width: 90%
  :alt: Enable full trust

  Toggle to enable full trust for root certificates. "Continue" when warning prompts.

11. Test that this process worked successfully by navigating to the LAN address provided in the Setup App. You should no longer see warnings about the security of this site in your browser. We recommend using Start9’s own `Consulate browser <https://apps.apple.com/us/app/consulate/id1528124570>`_ for a faster and better experience.


Android
=======

Unfortunately, Android devices do not yet natively support mDNS, which is used to access LAN addresses on a mobile device browser. As a result, you cannot yet access your LAN address from the browser on Android. We are tracking this issue `here <https://issuetracker.google.com/issues/140786115>`_, please star it to get more attention from the development team!

We are also working on the `Consulate <https://medium.com/@start9labs/announcing-the-consulate-browser-76d94a8599cb>`_ for Android, which will enable this feature by default and allow you to bookmark your LAN address for efficient access to your Embassy over HTTPS.
In the meantime, you can access your Embassy on Android using the `Tor Browser <https://www.torproject.org/download/>`_.