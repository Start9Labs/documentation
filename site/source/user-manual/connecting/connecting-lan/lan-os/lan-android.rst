.. _lan-android:

==============================
Trusting Embassy CA on Android
==============================

.. note:: This should work on stock Android, and equally well on CalyxOS, GrapheneOS or LineageOS.

.. warning:: This is only possible on Android version 12 or greater.  For LineageOS, that corresponds to v19+.

.. tabs::

    .. group-tab:: Android v12

        Tap **Settings > Security > Advanced > Encryption and Credentials > Install from Storage** and select your "Embassy Local Root CA" certificate.

        .. figure:: /_static/images/ssl/android/droidLAN0.png
            :width: 30%
            :alt: Install certificate

    .. group-tab:: Android v13+

        Tap **Settings > Security > More security settings > Encryption & credentials > Install a certificate > CA Certificate > Install Anyway** and select your "Embassy Local Root CA" certificate.

        .. figure:: /_static/images/ssl/android/droidLAN2.png
            :width: 30%
            :alt: Install certificate