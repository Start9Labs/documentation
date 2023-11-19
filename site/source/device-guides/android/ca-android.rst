.. _ca-android:

================================
Trusting Your Root CA on Android
================================
Complete this guide to trust your server's Root Certificate Authority (Root CA) on Android.

.. note:: This guide only applies to Android phones running Android v13+, as well as phones running CalyxOS, GrapheneOS, or LineageOS (v19+).

.. _ca-android-trust:

Trusting
--------

#. Ensure you have already :ref:`downloaded your Root CA <root-ca-download>`

#. Tap **Settings > Security > More security settings > Encryption & credentials > Install a certificate > CA Certificate > Install Anyway** and select your custom-named ``adjective-noun.local.crt`` certificate.

    .. figure:: /_static/images/ssl/android/droidLAN2.png
        :width: 15%
        :alt: Install certificate

.. _ca-android-ff:

If using Firefox (recommended)
------------------------------

#. Tap ``Kebab Menu > Settings > About Firefox`` and tap the Firefox icon 5 times to enable "developer mode"

#. Go back to ``Kebab Menu > Settings > Secret Settings`` (at the bottom), and tap ``Use third party CA certificates``