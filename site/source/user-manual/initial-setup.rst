.. _initial-setup:

=============
Initial Setup
=============

.. _fresh-setup:

Starting Fresh
--------------

#. If using Firefox (*recommended for all platform except iOS*) to connect to your server, you must complete the "Local" portion for your OS:

    .. note:: Firefox is the only browser that can be configured to access both LAN (`.local`) and Tor (`.onion`) URLs, including extensions, without affecting normal browser functionality. For iOS, all browsers actually use Safari under the hood, so it is preferable not to stack unnecessary software on top of it. Just use Safari.

    - :ref:`Linux <ca-linux-ff>`
    - :ref:`Mac <ca-mac-ff>`
    - :ref:`Windows <ca-windows-ff>`
    - :ref:`Android <ca-android-ff>`
    - iOS (use Safari)

#. Connect your server to power and Ethernet

#. From a client device (desktop/laptop/phone), open a browser (Firefox recommended) and visit ``http://start.local``. Your client device must be connected to the same Local Area Network (LAN) as your server. This usually means they are using the same router, either by ethernet or WiFi

	.. note:: If you are `not` using a Raspberry Pi, you can also plug a monitor and keyboard into the server. This is known as "Kiosk mode".

#. Follow the on-screen instructions.

.. _recover-options:

Recover Options
---------------
If you are using an existing drive, transferring data from one drive to another, or restoring your entire system from a backup, follow the appropriate guide below:

    - :ref:`Use Existing Drive <attach-drive>`
    - :ref:`Transfer <transfer-data>`
    - :ref:`Restore from Backup <backup-restore>`

.. _setup-troubleshooting:

Troubleshooting
---------------
If you are experiencing issues with setup, try the following:

#. Confirm that the server is plugged into both power `and` Ethernet
#. Confirm your phone/computer is `not` connected to a "Guest" network
#. If using Firefox (recommended) from Mac, Windows or Android, ensure you have set ``security.enterprise_roots.enable`` to ``true`` in ``about:config`` per the :ref:`instructions<configuring-ff>`
#. Confirm your phone/computer is not using a VPN, or that if you are, that it allows LAN connections, such as the examples below:

    - Mullvad - Go to "Settings -> VPN Settings -> Local Network Sharing"
    - ProtonVPN - Go to "Preferences -> Connection -> Allow LAN Connections"

#. Visit or refresh (ctrl+shift+R on Linux/Windows, cmd+shift+R on macOS Firefox, cmd+option+E then cmd+R on macOS Safari) the start.local page in a web browser
#. To avoid networking issues, it is recommended to use your `primary` router, not an extender or mesh router
#. Very rarely, your firewall settings may block mDNS. In this case:

    - From your browser, navigate to your router configuration settings. This is usually an IP address such as 192.168.1.1. A simple web search will usually reveal how to access the router configuration settings for a particular brand.
    - Once in the router config settings, find the section that lists the devices on your network. You should see a device labeled ``start``. Take note of the associated IP address and enter it into your browser's URL field to enter the setup.

You can always to `reach out to support <https://start9.com/contact>`_ if you need a hand.
