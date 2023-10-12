.. _trust-ca:

=====================
Trusting Your Root CA
=====================

Download and trust your server's Root Certificate Authority (Root CA) to enable encrypted communications locally and enhance speeds over Tor.

.. _trust-root-ca-on-initial-setup:

Trust Root CA on Initial Setup
------------------------------

If you've just completed initial setup, you will automatically be prompted to trust your server's Root CA.  Do these mandatory steps below:
 
	#. Click `DOWNLOAD`` to download your Root CA

		.. figure:: /_static/images/setup/trust-ca-1.png
			:width: 40%
			:alt: Download your Server's Root CA

 
	#. You may see a dialog box noting it saved to your Downloads folder.  Select :ref:`VIEW DOCS<trust-your-root-ca>` to learn how to trust your server's Root CA on your device's operating system.

		.. figure:: /_static/images/setup/trust-ca-2.png
			:width: 40%
			:alt: 
 
	#. The `Go To Login` panel will display "Waiting for trust..." until you have completed the process to install and trust your Root CA on your device.

		.. figure:: /_static/images/setup/trust-ca-3.png
			:width: 40%
			:alt:
  
  
	#. Once you've successfully trusted your Root CA, you can login by selecting `OPEN`.

		.. figure:: /_static/images/setup/trust-ca-4.png
			:width: 40%
			:alt:

.. _download-root-ca:

Download Your Server's Root CA
------------------------------
Your server's Root CA was included in the downloaded file at the end of initial setup. If you do not have that file, you can find your server's Root CA inside the StartOS dashboard.

	#. Navigate to `System > Root CA` and click `Download Certificate`

		.. figure:: /_static/images/ssl/lan_setup.png
			:width: 40%
			:alt: LAN setup menu item

.. _trust-your-root-ca:

Trust Your Server's Root CA
---------------------------

Select your operating system:

.. raw:: html

  <div class="topics-grid grid-container full">

  <div class="grid-x grid-margin-x">

.. topic-box::
  :title: Linux
  :link: ../../../../guides/device-guides/linux/ca-linux/
  :icon: scylla-icon scylla-icon--linux
  :class: large-4
  :anchor: View

  Trust your Root CA on Linux

.. topic-box::
  :title: Mac
  :link: ../../../../guides/device-guides/mac/ca-mac
  :icon: scylla-icon scylla-icon--apple
  :class: large-4
  :anchor: View

  Trust your Root CA on Mac

.. topic-box::
  :title: Windows
  :link: ../../../../guides/device-guides/windows/ca-windows
  :icon: scylla-icon scylla-icon--windows
  :class: large-4
  :anchor: View

  Trust your Root CA on Windows

.. topic-box::
  :title: Android
  :link: ../../../../guides/device-guides/android/ca-android
  :icon: scylla-icon scylla-icon--android
  :class: large-4
  :anchor: View

  Trust your Root CA on Android

.. topic-box::
  :title: iOS
  :link: ../../../../guides/device-guides/ios/ca-ios
  :icon: scylla-icon scylla-icon--ios
  :class: large-4
  :anchor: View

  Trust your Root CA on iOS