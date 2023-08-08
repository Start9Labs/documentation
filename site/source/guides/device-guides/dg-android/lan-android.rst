.. _lan-android:

=============================
Trust Your Root CA on Android
=============================
Complete this guide to download your Start9 server's Root Certificate Authority (CA), and trust it on your client device (Android).  This allows you to use encrypted ``https`` connections to your ``.local`` (LAN) and ``.onion`` (tor) server addresses, access services on LAN, and enhances performance on tor.  The self-signed certificate was created by your server when you perfomed the initial setup, and applies to your server's main UI connection, as well as all service connections.

.. note:: This guide applies to most Android phones running Android v13+, as well as phones running CalyxOS, GrapheneOS, or LineageOS (v19+).

Download Root CA
----------------
First, download your Start9 server's Root CA, if you have not already.

    - Navigate to **System** -> **Root CA**, then click "Download Root CA".

      .. figure:: /_static/images/ssl/lan_setup.png
        :width: 40%
        :alt: Root CA menu item

Alternatively, you can download to another machine, then transfer the file to your device.

Trust Root CA
-------------
.. tabs::
    
    .. group-tab:: Android v13+

        Tap **Settings > Security > More security settings > Encryption & credentials > Install a certificate > CA Certificate > Install Anyway** and select your custom-named ``adjective-noun.local.crt`` certificate.

        .. figure:: /_static/images/ssl/android/droidLAN2.png
            :width: 15%
            :alt: Install certificate
    
    .. group-tab:: Android v12

        .. caution:: Some phones running Android v12 will work, others won't. It depends on the vendor. Most Androids running v12 that we have tested do work with the exception of the Samsung Galaxy S10 which does not.

        Tap **Settings > Security > Advanced > Encryption and Credentials > Install from Storage** and select your unique ``adjective-noun.local.crt`` certificate.

        .. figure:: /_static/images/ssl/android/droidLAN0.png
            :width: 15%
            :alt: Install certificate

.. _lan-ff-android:

Configure Firefox
-----------------
On some devices, it may be necessary to also activate this setting in Firefox / Fennec:

#. Tap **Kebab Menu > Settings > About Firefox** and tap the Firefox icon 5 times to enable "developer mode."

#. Go back to **Kebab Menu > Settings > Secret Settings** (at the bottom), and tap "Use third party CA certificates" to enable the use of your system-wide Root CA.

You're now ready to browse your service UIs with encryption, either via the browser, or with native client apps.  For Mozilla apps, such as Firefox, you will need to follow the :ref:`Firefox Config <ff-android>` guide, which we highly recommend.
