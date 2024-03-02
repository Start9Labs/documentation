.. _connecting-lan:

==================
Connecting Locally
==================
When connected to the same Local Area Network (LAN) as your server, you can use its `.local` URLs for fast and secure connections.

All platforms
-------------

.. warning:: You cannot access .local URLs from the Tor Browser.

#. Ensure you have properly :ref:`downloaded and trusted your Root CA<trust-ca>`.

#. Ensure your client device (phone/laptop) is connected to the same Local Area Network (LAN) as your server. This usually means your server and your client device are using the same router, either by ethernet or WiFi.

#. Input your .local URL into the browser.

.. _connecting-lan-windows:

Windows only
------------
On Windows, it is necessary to install Bonjour Print Services in order to access the `.local` URLs of your installed services. In a future release of StartOS, this will no longer be necessary.

#. Download `iTunes64 <https://www.apple.com/itunes/download/win64>`_ from Apple's official website and extract the files using WinRAR. If you do not have WinRAR installed, you can download and install it `here <https://www.win-rar.com/download.html?&L=0>`_.
#. Run the **Bonjour64** package to install it.

.. warning:: Bonjour can be unreliable. If your `local` URLs suddenly stop working, you may need to uninstall and re-install Bonjour. Go to `System Settings > Remove Programs`, uninstall Bonjour `and` Bonjour Print Services, re-install Bonjour Print Services from the link above, then restart Windows.

Troubleshooting
---------------
If you followed the above instructions and are experiencing issues, click :ref:`here <lan-troubleshoot>` to resolve.


