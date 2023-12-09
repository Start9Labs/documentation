.. _ca-android:

================================
Trusting Your Root CA on Android
================================
Complete this guide to trust your server's Root Certificate Authority (Root CA) on Android.

.. warning:: This guide only applies to Android phones running Android v13+, as well as phones running CalyxOS, GrapheneOS, or LineageOS (v19+).

#. Ensure you have :ref:`downloaded your Root CA <root-ca-download>`

#. Tap **Settings > Security > More security settings > Encryption & credentials > Install a certificate > CA Certificate > Install Anyway** and select your custom-named ``adjective-noun.crt`` certificate.

    .. figure:: /_static/images/ssl/android/droidLAN2.png
        :width: 15%
        :alt: Install certificate

#. If you choose to use Firefox, you must use `Firefox Beta <https://blog.mozilla.org/security/2019/02/14/why-does-mozilla-maintain-our-own-root-certificate-store/>`_. Then complete :ref:`this final step <ca-ff>`.