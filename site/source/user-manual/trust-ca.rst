.. _trust-ca:

=====================
Trusting Your Root CA
=====================

Download and trust your server's Root Certificate Authority (Root CA) to establish a secure (HTTPS) connection with your server, and to enhance speeds over Tor.

.. _download-root-ca:

Downloading Root CA
===================

After Initial Setup
-------------------
You will be directed to your server's **http**://adjective-noun.local. Follow the on screen instructions to complete these mandatory steps.

		.. note:: You can click "SKIP" to forego trusting your Root CA (not recommended) and bypass the browser's security warning.

		.. figure:: /_static/images/setup/trust-ca.png
			:width: 40%
			:alt: Trust your Root CA

From StartOS-info.html File
----------------------------

You can download your Root CA by clicking "Download certificate" in the file downloaded at the end of initial setup.

		.. figure:: /_static/images/setup/startos-address-info.png
			:width: 40%
			:alt: StartOS address info

In StartOS UI
-------------

You can find your server's Root CA inside the StartOS dashboard.

	#. Navigate to `System > Root CA` and click `Download Certificate`

		.. figure:: /_static/images/ssl/lan_setup.png
			:width: 40%
			:alt: LAN setup menu item

.. _trust-root-ca:

Establishing Trust
==================

To trust your Root CA, select your operating system and follow the guide:

- :ref:`Linux <ca-linux>`
- :ref:`Mac <ca-mac>`
- :ref:`Windows <ca-windows>`
- :ref:`Android <ca-android>`
- :ref:`iOS <ca-ios>`
