.. _trust-ca:

=====================
Trusting Your Root CA
=====================

Download and trust your server's Root Certificate Authority (Root CA) to establish a secure (HTTPS) connection with your server, and to enhance speeds over Tor.

.. warning:: If using Firefox (recommended), ensure you have completed the "Local" portion for your OS:
	:ref:`Linux <ff-linux>`,
	:ref:`Mac <ff-mac>`,
	:ref:`Windows <ff-windows>`,
	:ref:`Android <ff-android>`

.. _download-root-ca:

1. Downloading
==============
There are multiple ways to obtain your server's Root CA. 

a. After Initial Setup
----------------------
To download and trust your Root CA following initial setup, simply follow the on-screen instructions

		.. figure:: /_static/images/setup/trust-ca.png
			:width: 40%
			:alt: Trust your Root CA

		.. note:: You can click "SKIP" to forego trusting your Root CA (not recommended) and then manually bypass the browser's security warning.

b. From StartOS-info.html File
------------------------------
You can download your Root CA by clicking "Download certificate" in the file downloaded at the end of initial setup.

		.. figure:: /_static/images/setup/startos-address-info.png
			:width: 40%
			:alt: StartOS address info

c. Sending to yourself
----------------------
Once you have downloaded your Root CA on any device, you can simply send the file to yourself using email, messaging app, or other file sharing technique.

d. In StartOS UI
----------------
You can find your server's Root CA inside the StartOS dashboard.

	#. Navigate to `System > Root CA` and click `Download Certificate`

		.. figure:: /_static/images/ssl/lan_setup.png
			:width: 40%
			:alt: LAN setup menu item

.. _trust-root-ca:

2. Trusting
===========
To trust your Root CA, select your operating system and follow the guide:

- :ref:`Linux <ca-linux>`
- :ref:`Mac <ca-mac>`
- :ref:`Windows <ca-windows>`
- :ref:`Android <ca-android>`
- :ref:`iOS <ca-ios>`
