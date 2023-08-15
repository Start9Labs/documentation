.. _connecting-lan:

==================
Connecting Locally
==================
When connected to the same Local Area Network (LAN) as your server, you can use its `.local` URLs for fast and secure connections.

All clients
-----------
#. Ensure your client device (phone/laptop) is connected to the same Local Area Network (LAN) as your server. This usually means your server and your client device are using the same router, either by ethernet or WiFi

#. Follow instructions to :ref:`trust your server's Root CA<trust-ca>`

Windows Only
------------
On Windows, it is currently necessary to install Bonjour Print Services in order to access the `.local` URLs of your installed services. With the release of StartOS v0.4.0, it will no longer be necessary.

#. Simply install Bonjour Print Services from Apple: https://support.apple.com/kb/DL999

.. warning:: Bonjour can be unreliable. If your `local` URLs suddenly stop working, you may need to uninstall and re-install Bonjour. Go to `System Settings > Remove Programs`, uninstall Bonjour `and` Bonjour Print Services, re-install Bonjour Print Services from the link above, then restart Windows.