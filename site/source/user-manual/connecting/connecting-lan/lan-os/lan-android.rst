.. _lan-android:

==================================
Trusting Your Start9 CA on Android
==================================

.. note:: This will work on most Android phones running Android v13+, as well as phones running CalyxOS, GrapheneOS or LineageOS (v19+).

.. tabs::

    .. group-tab:: Android v13+

        Tap **Settings > Security > More security settings > Encryption & credentials > Install a certificate > CA Certificate > Install Anyway** and select your "<custom-address> Local Root CA" certificate.

        .. figure:: /_static/images/ssl/android/droidLAN2.png
            :width: 30%
            :alt: Install certificate
    
    .. group-tab:: Android v12

        .. tip:: Some phones running Android v12 will work, others won't. It depends on the vendor. Most Androids running v12 that we have tested do work with the exception of the Samsung Galaxy S10 which does not.

        Tap **Settings > Security > Advanced > Encryption and Credentials > Install from Storage** and select your "<custom-address> Local Root CA" certificate.

        .. figure:: /_static/images/ssl/android/droidLAN0.png
            :width: 30%
            :alt: Install certificate
