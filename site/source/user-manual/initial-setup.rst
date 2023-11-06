.. _initial-setup:

=============
Initial Setup
=============
Follow the instructions below to set up your server for the first time.

#. Connect your server to power and Ethernet

#. From a client device (desktop/laptop/phone), open a browser and visit ``http://start.local``. Your client must be connected to the same Local Area Network (LAN) as your server. This usually means they are using the same router, either by ethernet or WiFi

	.. note:: If you are `not` using a Raspberry Pi, you can also plug a monitor and keyboard into the server.

#. Select ``Start Fresh``

	.. figure:: /_static/images/setup/screen0-startfresh_or_recover.jpg
		:width: 50%
		:alt: Fresh Setup

#. Select your storage drive. In most cases, there will be only one

	.. figure:: /_static/images/setup/screen2-select_storage.jpg
		:width: 50%
		:alt: Select Drive

#. Create a master password for your server and click ``Finish``

	.. warning:: Choose a strong master password. Write it down. Store it somewhere safe. DO NOT LOSE IT.

	.. figure:: /_static/images/setup/screen5-set_password_complete.jpg
		:width: 50%
		:alt: Create New Password

#. StartOS will initialize. This can take a few minutes

	.. figure:: /_static/images/setup/screen6-storage_initialize.jpg
		:width: 50%
		:alt: SSD Initialization

#. Click the ``Download`` button to download a file containing the URLs (`.local` and `.onion`) and Root CA of your server. Keep this file for future reference.

	.. note:: If you connected a monitor, you will `not` see the download button

	.. figure:: /_static/images/setup/screen7-startfresh_complete.jpg
		:width: 50%
		:alt: Setup Complete

#. Setup complete! Click ``Login to StartOS`` to access your new server

	.. figure:: /_static/images/setup/screen9-startfresh_complete_saved.jpg
		:width: 50%
		:alt: Setup Complete

#. Now you will need to :ref:`trust your root CA<trust-root-ca-on-initial-setup>` in order to login.

.. _setup-troubleshooting:

Troubleshooting
---------------
If you are experiencing issues with setup, try the following:

#. Confirm that the server is plugged into both power `and` Ethernet      
#. Confirm your phone/computer is `not` connected to a "Guest" network
#. Confirm your phone/computer is not using a VPN, or that if you are, that it allows LAN connections, such as the examples below:

    - Mullvad - Go to "Settings -> VPN Settings -> Local Network Sharing"
    - ProtonVPN - Go to "Preferences -> Connection -> Allow LAN Connections"

#. Visit or refresh (ctrl+shift+R on Linux/Windows, cmd+shift+R on macOS Firefox, cmd+option+E then cmd+R on macOS Safari) the start.local page in a web browser
#. To avoid networking issues, it is recommended to use your `primary` router, not an extender or mesh router
#. Very rarely, your firewall settings may block mDNS. In this case:

    - From your browser, navigate to your router configuration settings. This is usually an IP address such as 192.168.1.1. A simple web search will usually reveal how to access the router configuration settings for a particular brand.
    - Once in the router config settings, find the section that lists the devices on your network. You should see a device labeled ``start``. Take note of the associated IP address and enter it into your browser's URL field to enter the setup.

You can always to `reach out to support <https://start9.com/contact>`_ if you need a hand.
