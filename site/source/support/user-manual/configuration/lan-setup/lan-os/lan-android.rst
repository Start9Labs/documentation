.. _lan-android:

=======
Android
=======

If you are running Android 12+ (not yet available on Calyx/Graphene), you can setup :ref:`Local Access<lan>`, please refer to :ref:`Android Limitations <lim-android>` for more details.

.. note:: You must download your certificate via desktop/laptop over Tor and then transfer it to your phone (Step 3)

#. Either use the Root CA you downloaded at the completion of :ref:`Initial Setup<initial-setup>`, or visit your Embassy at its Tor Address (for security purposes), and navigate to the :ref:`Embassy tab<embassy-tab>` -> LAN

    .. figure:: /_static/images/ssl/embassy_lan_setup.png
        :width: 60%
        :alt: LAN setup menu item

#. Click "Download Root CA". This will prompt a download to save the certificate file to your machine

    .. figure:: /_static/images/ssl/embassy_lan_setup0.png
        :width: 60%
        :alt: LAN setup page

#. Send the cert to yourself via Signal, email, File Browser, etc and download onto your Android device

#. Go to Settings -> Security -> Advanced -> Encryption and Credentials -> Install a Certificate and select the cert you downloaded from the file system

    .. figure:: /_static/images/ssl/android/droidLAN0.png
        :width: 30%
        :alt: Install certificate

#. To setup in Firefox Beta or Fennec, go to Settings -> About -> tap the logo several times until it says "Debug menu enabled." Then return to Settings -> Secret Settings and toggle on "Use third party CA certificates."

#. That's it!  You may now browse the ``.local`` addresses on your Embassy.
