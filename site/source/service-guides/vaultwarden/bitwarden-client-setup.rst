.. _bitwarden-client-setup:

============
Client Setup
============

Here you can setup your various devices and browsers to be able to access your Vaultwarden server.

Browser Extension
-----------------

    .. tabs::

        .. group-tab:: Tor

            If connecting via Tor (i.e using the .onion address) the Bitwarden browser extension will only work with a Tor enabled browser.

            #. If you choose Firefox, you will need to :ref:`follow this guide <tor-ff>` to run Tor on your device and configure Firefox to use it. If using Brave you will just need to :ref:`setup Tor on your device <connecting-tor-native>`. With Tor Browser, everything will just work right out of the box.

                .. tip:: We recommend using Firefox as it is the most compatible browser with Start9 Servers.

            #. In this example we will use Firefox, though these instructions will work just the same for Brave. First, install the `Bitwarden browser extension <https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/>`_.  
            
            #. Head to the "Interfaces" tab in the Vaultwarden service on your Start9 Server:

                .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces.png
                    :width: 50%
                    :alt: vaultwarden-interfaces

            #. Copy the Tor address:

                .. figure:: /_static/images/services/vaultwarden/vaultwarden-tor-address.png
                    :width: 50%
                    :alt: vaultwarden-tor-address

            #. Now head to the Bitwarden extension and click the "Region" dropdown menu and choose self-hosted. Under **Self-hosted environment** you will see a field for **Server URL**.

                .. figure:: /_static/images/services/vaultwarden/bitwarden-firefox-setup-step1.png
                    :width: 40%
                    :alt: vaultwarden-firefox-self-host

            #. Now you need to grab the address of your Vaultwarden server. Paste the address into your extension and click "Save".

                .. figure:: /_static/images/services/vaultwarden/bitwarden-firefox-setup-step2.png
                    :width: 40%
                    :alt: vaultwarden-firefox-url

            #. Now enter your credentials and the Bitwarden extension will be logged into your self-hosted Vaultwarden server!


        .. group-tab:: LAN

            We suggest using Tor, however it is possible have a good experience with LAN. Once synced, your app and all your passwords will be cached and available when you are on the go and not connected to your Start9 Server, and you will only need to be on LAN to update any edits to your vault.

            #. Start by installing the `Bitwarden browser extension <https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/>`_.  
                        
            #. Head to the "Interfaces" tab in the Vaultwarden service on your Start9 Server:

                .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces.png
                    :width: 50%
                    :alt: vaultwarden-interfaces

            #. Copy the LAN address:

                .. figure:: /_static/images/services/vaultwarden/vaultwarden-lan-address.png
                    :width: 50%
                    :alt: vaultwarden-lan-address

             #. Now head to the Bitwarden extension and click the Region dropdown menu and choose self-hosted. Under **Self-hosted environment** you will see a field for **Server URL**.

                .. figure:: /_static/images/services/vaultwarden/bitwarden-firefox-setup-step1.png
                    :width: 40%
                    :alt: vaultwarden-firefox-self-host

            #. Now we need to grab the address of our Vaultwarden server.Paste the address into your extension and click "Save".

                .. figure:: /_static/images/services/vaultwarden/bitwarden-firefox-setup-step2.png
                    :width: 40%
                    :alt: vaultwarden-firefox-url

            #. Now enter your credentials and the Bitwarden extension will be logged into your self-hosted Vaultwarden server!


Android
-------

.. tabs::

    .. group-tab:: Tor

        You will need to :ref:`Setup Tor <tor-android>` on your device first.

        #. Visit your app store of choice and download the Bitwarden app.  Once downloaded and installed, let's go into Orbot, and add the app to the VPN apps list.  You may need to hit the refresh button in the top left to get it to populate.

        #. Next, enter the Bitwarden app.  You'll be greeted with a log-in screen. Go to the top left gear icon to enter the settings.  
        
        #. Head to the "Interfaces" tab in the Vaultwarden service on your Start9 Server:

            .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces.png
                :width: 50%
                :alt: vaultwarden-interfaces

        #. Copy the Tor address:

            .. figure:: /_static/images/services/vaultwarden/vaultwarden-tor-address.png
                :width: 50%
                :alt: vaultwarden-tor-address

        #. Now send that address to your phone and paste it into Bitwarden.

        #. Hit save.

        #. Go ahead and tap 'Log In,' enter your credentials, and you can access your Bitwarden app / Vaultwarden server.

    .. group-tab:: LAN

        We suggest using Tor, however it is possible have a good experience with LAN. Once synced, your app and all your passwords will be cached and available when you are on the go and not connected to your Start9 Server, and you will only need to be on LAN to update any edits to your vault.

        Begin by :ref:`setting up LAN <ca-android>` on your device.

        #. Visit your app store of choice and download the Bitwarden app.  Once downloaded and installed, let's go into Orbot, and add the app to the VPN apps list.  You may need to hit the refresh button in the top left to get it to populate.

        #. Next, enter the Bitwarden app.  You'll be greeted with a log-in screen. Go to the top left gear icon to enter the settings.  
        
        #. Head to the "Interfaces" tab in the Vaultwarden service on your Start9 Server:

            .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces.png
                :width: 50%
                :alt: vaultwarden-interfaces

        #. Copy the LAN address:

            .. figure:: /_static/images/services/vaultwarden/vaultwarden-lan-address.png
                :width: 50%
                :alt: vaultwarden-lan-address

        #. Now send that address to your phone and paste it into Bitwarden.

        #. Hit save.

        #. Go ahead and tap 'Log In,' enter your credentials, and you can access your Bitwarden app / Vaultwarden server.

iOS
---

.. tabs::

    .. group-tab:: Tor

        .. warning:: Orbot is currently broken for iOS, which means it is not possible to use Bitwarden over Tor. We are hopeful that a future release of Orbot or iOS will resolve the issue.

        .. Begin by :ref:`setting up Tor <tor-ios>` on your iPhone.

        .. You will also need :ref:`LAN access <ca-ios>` setup on your iPhone.

        .. #. Visit the App Store and download the `Bitwarden app <https://apps.apple.com/us/app/bitwarden-password-manager/id1137397744>`_

        .. #. Open the Bitwarden app. You'll be greeted with a log-in screen. Click the "Region" drop-down menu.

        ..     .. figure:: /_static/images/services/vaultwarden/bitwarden-iOS-setup-step1.png
        ..             :width: 40%
        ..             :alt: vaultwarden-iOS-log-in-screen
        
        .. #. Choose the "Self-hosted" option.  

        ..     .. figure:: /_static/images/services/vaultwarden/bitwarden-iOS-setup-step2.png
        ..             :width: 40%
        ..             :alt: vaultwarden-iOS-self-hosted-screen
        
        .. #. Head to the "Interfaces" tab in the Vaultwarden service on your Start9 Server:

        ..     .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces.png
        ..         :width: 50%
        ..         :alt: vaultwarden-interfaces

        .. #. Copy the Tor address:

        ..     .. figure:: /_static/images/services/vaultwarden/vaultwarden-tor-address.png
        ..         :width: 50%
        ..         :alt: vaultwarden-tor-address

        .. #. Now send that address to your phone and paste it into Bitwarden.

        ..     .. caution::  **Before you hit save:**  The Tor address you will have copied will begin with **http** - Please change this to **https** instead of **http**
        
        ..     .. figure:: /_static/images/services/vaultwarden/bitwarden-iOS-setup-step3.png
        ..             :width: 40%
        ..             :alt: vaultwarden-iOS-url-screen

        .. #. Now you can hit save, and you'll be returned to the log-in screen.

        .. #. Go ahead and tap 'Log In,' enter your credentials, and you'll be able to access your Bitwarden app / Vaultwarden server!

    .. group-tab:: LAN

        .. note:: You must be connected to your home network to create and update your passwords. The iOS Bitwarden app is good at caching, so you *will* have access to your passwords remotely.

        Begin by :ref:`setting up LAN <ca-ios>` on your device.

        #. Visit the App Store and download the `Bitwarden app <https://apps.apple.com/us/app/bitwarden-password-manager/id1137397744>`_

        #. Open the Bitwarden app. You'll be greeted with a log-in screen.
        
        #. Open the Bitwarden app. You'll be greeted with a log-in screen. Click the "Region" drop-down menu.

            .. figure:: /_static/images/services/vaultwarden/bitwarden-iOS-setup-step1.png
                    :width: 40%
                    :alt: vaultwarden-iOS-log-in-screen
        
        #. Choose the "Self-hosted" option.  

            .. figure:: /_static/images/services/vaultwarden/bitwarden-iOS-setup-step2.png
                    :width: 40%
                    :alt: vaultwarden-iOS-self-hosted-screen 
        
        #. Head to the "Interfaces" tab in the Vaultwarden service on your Start9 Server:

            .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces.png
                :width: 50%
                :alt: vaultwarden-interfaces

        #. Copy the LAN address:

            .. figure:: /_static/images/services/vaultwarden/vaultwarden-lan-address.png
                :width: 50%
                :alt: vaultwarden-lan-address

        #. Now send that address to your phone and paste it into Bitwarden.

            .. figure:: /_static/images/services/vaultwarden/bitwarden-iOS-setup-step3.png
                    :width: 40%
                    :alt: vaultwarden-iOS-url-screen

        #. Now you can hit save, and you'll be returned to the log-in screen.

        #. Go ahead and tap 'Log In,' enter your credentials, and you'll be able to access your Bitwarden app / Vaultwarden server!


Desktop Clients
---------------

    .. collapse:: Linux

        First, be sure to get Tor :ref:`running on your system <tor-linux>`.

        #. Install Bitwarden either by using a package manager like **apt** (we recommend against using **snap**) or download it from `here <https://bitwarden.com/download/>`_.

        #. Run the program with the flag ``--proxy-server=socks5://127.0.0.1:9050`` behind it.  You can run this from a terminal, and if you'd like to use a shortcut, edit that shortcut file to include the flag.

        #. As with the other solutions above, click the 'Settings' icon, and enter your Vaultwarden Tor address.  You can then log in to your vault.

        Alternatively, you may be able to run using your LAN address, but this has proven finicky, especially on Debian/Ubuntu systems.  You will have better luck if you have the Root CA installed at the OS level.  First, be sure to :ref:`Setup LAN <ca-linux>` natively.

    .. collapse:: Mac

        .. tabs::
            
            .. group-tab:: Tor

                #. Begin by making sure that Tor is :ref:`running on your Mac<tor-mac>`.

                #. Download the `Bitwarden Desktop app <https://bitwarden.com/download/>`_.

                #. Open the Bitwarden app and click on the "Region" drop-down menu:

                    .. figure:: /_static/images/services/vaultwarden/bitwarden-macOS-setup-step1.png
                        :width: 50%
                        :alt: bitwarden-mac

                #. Head to the "Interfaces" tab in the Vaultwarden service on your Start9 Server:

                    .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces.png
                        :width: 50%
                        :alt: vaultwarden-interfaces

                #. Copy the Tor address:

                    .. figure:: /_static/images/services/vaultwarden/vaultwarden-tor-address.png
                        :width: 50%
                        :alt: vaultwarden-tor-address

                #. Paste the address into Bitwarden and click the save button:

                    .. figure:: /_static/images/services/vaultwarden/bitwarden-macOS-setup-step2.png
                        :width: 50%
                        :alt: bitwarden-tor-mac-url

                #. Enter the email used to create the account, followed by the password, then click "Log in with master password".

            .. group-tab:: LAN

                We suggest using Tor, however it is possible have a good experience with LAN. Once synced, your app and all your passwords will be cached and available when you are on the go and not connected to your Start9 Server, and you will only need to be on LAN to update any edits to your vault.

                #. Begin by making sure that LAN is :ref:`steup on your Mac<ca-mac>`.

                #. Download the `Bitwarden Desktop app <https://bitwarden.com/download/>`_.

                #. Open the Bitwarden app and click on the "Region" drop-down menu:

                    .. figure:: /_static/images/services/vaultwarden/bitwarden-macOS-setup-step1.png
                        :width: 50%
                        :alt: bitwarden-mac

                #. Head to the "Interfaces" tab in the Vaultwarden service on your Start9 Server:

                    .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces.png
                        :width: 50%
                        :alt: vaultwarden-interfaces

                #. Copy the LAN address:

                    .. figure:: /_static/images/services/vaultwarden/vaultwarden-lan-address.png
                        :width: 50%
                        :alt: vaultwarden-lan-address

                #. Paste the address into Bitwarden and click the save button:

                    .. figure:: /_static/images/services/vaultwarden/bitwarden-macOS-setup-step2.png
                        :width: 50%
                        :alt: bitwarden-tor-mac-url

                #. Enter the email used to create the account, followed by the password, then click "Log in with master password".

    .. collapse:: Windows

        .. tabs::

            .. group-tab:: Tor


                #. Download the `Bitwarden Desktop app <https://bitwarden.com/download/>`_.

                #. Follow the Tor setup in the instructions below.  Make sure the Bitwarden directory is located in your user's directory, ``C:\Users\YOURUSER\AppData\Local\Bitwarden``.  This is because you need permission to run over a proxy.  You can make a shortcut wherever you'd like.

                #. Right-click the shortcut and click 'Properties.'  Add the flag ``--proxy-server=socks5://127.0.0.1:9050`` to the end of the 'Target' field.  Click 'Apply,' then 'OK.'  Close Properties and launch the shortcut.

                #. As with the other solutions above, click the 'Settings' icon, and enter your Vaultwarden Tor address.  You can then log in to your vault.

            .. group-tab:: LAN

                This is not known to work at this time - LAN is tricky with Windows due to the often unreliable Bonjour and Bonjour Print Services required for handling mDNS. We suggest using Tor anyway if you are able as you will then be able to maintain connectivity to your server from anywhere in the world.
