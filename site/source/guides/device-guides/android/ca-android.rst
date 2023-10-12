.. _ca-android:

=========================================
Trusting Your Server's Root CA on Android
=========================================
Complete this guide to trust your server's Root Certificate Authority (Root CA) on Android.

.. note:: This guide only applies to Android phones running Android v13+, as well as phones running CalyxOS, GrapheneOS, or LineageOS (v19+).

#. Ensure you have already `downloaded your server's Root CA </getting-started/trust-ca/#download-root-ca>`_

#. Tap **Settings > Security > More security settings > Encryption & credentials > Install a certificate > CA Certificate > Install Anyway** and select your custom-named ``adjective-noun.local.crt`` certificate.

    .. figure:: /_static/images/ssl/android/droidLAN2.png
        :width: 15%
        :alt: Install certificate
