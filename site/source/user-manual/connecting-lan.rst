.. _connecting-lan:

==================
Connecting Locally
==================
When connected to the same Local Area Network (LAN) as your server, you can use its `.local` URLs for fast and secure connections.

#. Ensure you have properly :ref:`downloaded and trusted your Root CA<trust-ca>`, including configuring Firefox if you are using it (recommended).

#. Ensure your client device (phone/laptop) is connected to the same Local Area Network (LAN) as your server. This usually means your server and your client device are using the same router, either by ethernet or WiFi

.. _connecting-lan-windows:

Windows only
------------
On Windows, it is necessary to install Bonjour Print Services in order to access the `.local` URLs of your installed services. In a future release of StartOS, this will no longer be necessary.

#. Simply install Bonjour Print Services from Apple: https://support.apple.com/kb/DL999

.. warning:: Bonjour can be unreliable. If your `local` URLs suddenly stop working, you may need to uninstall and re-install Bonjour. Go to `System Settings > Remove Programs`, uninstall Bonjour `and` Bonjour Print Services, re-install Bonjour Print Services from the link above, then restart Windows.