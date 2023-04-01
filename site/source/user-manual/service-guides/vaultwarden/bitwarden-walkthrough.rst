.. _bitwarden-walkthrough:

=========================
Vaultwarden Initial Setup
=========================

.. contents::
  :depth: 2 
  :local:

.. _vaultwarden-webvault:

.. collapse:: Web Vault

    Web Vault
    ---------
    #. First we will open up our Start9 Server and go to the Marketplace tab. Select **Vaultwarden**, and install if you have not already done so:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-in-marketplace.png
                    :width: 50%
                    :alt: vaultwarden-in-marketplace

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-install.png
                    :width: 50%
                    :alt: vaultwarden-install

    #. Once installed click **Configure**:
    
        .. figure:: /_static/images/services/vaultwarden/vaultwarden-needs-config.png
                    :width: 40%
                    :alt: vaultwarden-needs-config

    #. A strong admin token has been securely created by your Server, but you may change it if you wish. This can also be changed later. Click **Save**:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-save-config.png
                    :width: 50%
                    :alt: vaultwarden-save-config
    
    #. Click start to run the service:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-start-service.png
                    :width: 50%
                    :alt: vaultwarden-start-service

    #. Once the health check turns green, click **Launch UI**:
    
        .. figure:: /_static/images/services/vaultwarden/vaultwarden-launch-ui.png
                    :width: 50%
                    :alt: vaultwarden-launch-ui

    #. Time to create an account! Click **Create account**:
    
        .. note:: You are creating an account with yourself on your own Vaultwarden website served from your own Vaultwarden server - there are no third parties involved here.  
            
        .. figure:: /_static/images/services/vaultwarden/vaultwarden-create-account.png
                    :width: 50%
                    :alt: vaultwarden-create-account

    #. Enter an email address for login:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-create-account-email.png
                    :width: 50%
                    :alt: vaultwarden-create-account-email
    
        .. tip:: This email address can be anything you like. It doesn't have to be real. It is simply a way for you to log into Vaultwarden from Bitwarden apps on your devices. Your Vaultwarden server won't ever email you.

        .. tip:: You cannot use this email address to reset your master password - it is simply used to create an account on your server. 
            
        .. warning:: Do not lose it - you will not be able to log in without it!

    #. Enter a name for the account, a strong password and (optionally) a password hint - then click **Create account**:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-account-creation.png
                    :width: 50%
                    :alt: vaultwarden-account-creation
    
        .. warning:: It is important to realize that this is the 'Master password' for all your other passwords. Make it very strong, memorize it, write it down, and back it up to a safe place. If you lose it, you may lose access to all your passwords and your entire digital life.

    #. Now you can log in to your new password manager! Enter your email to login:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-login-email.png
                    :width: 50%
                    :alt: vaultwarden-login-email

    #. Then your master password:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-login-password.png
                    :width: 50%
                    :alt: vaultwarden-login-password

    #. We are greeted with our newly setup Vaultwarden password vault!

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-fresh-vault.png
                    :width: 50%
                    :alt: vaultwarden-fresh-vault
    
    #. At the top you can visit **Tools** for reports and to use the password generator. You can also import data from another program, such as Lastpass, Onepass, or KeePass!

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-tools.png
                    :width: 50%
                    :alt: vaultwarden-tools
    
    #. **Account settings** gives you all your options, including the ability to set up 2 factor authorization.

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-account-settings.png
                    :width: 50%
                    :alt: vaultwarden-account-settings

    #. Now you're ready to start storing some passwords!

.. collapse:: Storing your first password

    #. Back at the main page for your vault, let's do a quick example login. We'll start by creating a folder for it:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-click-add-folder.png
                    :width: 50%
                    :alt: vaultwarden-click-add-folder
    
    #. Name the folder and click **Save**:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-add-folder.png
                    :width: 50%
                    :alt: vaultwarden-add-folder

    #. Click **Add item**:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-add-item.png
                    :width: 50%
                    :alt: vaultwarden-add-item

    #. Now add the credentials and click **Save**:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-add-new-login.png
                    :width: 50%
                    :alt: vaultwarden-add-new-login

        .. tip:: An entry can have multiple URLs - for example you may wish to enter both an onion address and a .local address for one of the services you have running on your server. We are increasing the numbers of ways in which you can connect to your services, soon they may even have simple .com addresses!

    #. And there we have it - our first set of login credentials.

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-new-login.png
                    :width: 50%
                    :alt: vaultwarden-new-login

    Congratulations! You have setup your own self-hosted password manager and have added a set of login credentials to it!



    .. _vaultwarden-admin:

.. collapse:: Admin Console

    Accessing the Admin Console
    ===========================
    
    #. You will find the Admin console by heading to "Interfaces" on the Vaultwarden Service page.  

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces.png
            :width: 50%
            :alt: vaultwarden-interfaces

    #. Copy either of the addresses here and append **/admin**:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces-both.png
            :width: 50%
            :alt: vaultwarden-interfaces-both

        .. tip:: A typical address would look like https://abcdefghijklmnopqrstuvwxz.local/admin or http://abcdefghijklmnopqrstuvwxz.onion/admin 

    #. You will be prompted for your "Admin Token," which can be found on your Vaultwarden Service page under "Properties."

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-properties.png
            :width: 50%
            :alt: vaultwarden-admin-properties

    #. Copy the token here:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-properties-admin.png
            :width: 50%
            :alt: vaultwarden-admin-properties-admin

    #. And paste it here:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-admin-console-auth.png
            :width: 50%
            :alt: vaultwarden-admin-console-auth

    #. You're now logged in to the admin panel.

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-admin-console.png
            :width: 50%
            :alt: vaultwarden-admin-console

        .. note:: This cannot be used to reset passwords for accounts created on your Vaultwarden server.

|

============
Client Setup
============

.. collapse:: Browser Extension

    .. tabs::

        .. group-tab:: Tor

            Browser Extension
            -----------------
            If connecting via Tor (i.e using the .onion address) the Bitwarden browser extension will only work with a Tor enabled browser. You can use Firefox (recommended), Tor Browser or Brave Browser.

            #. If you choose Firefox, you will need to :ref:`setup Tor on your device <tor-os>` and :ref:`configure Firefox to use Tor <tor-firefox>`. If using Brave you will just need to :ref:`setup Tor on your device <tor-os>`. With Tor Browser, everything will just work right out of the box.

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

            #. Now head to the Bitwarden extension and click the cog in the top left. Under **Self-hosted environment** you will see a field for **Server URL**. Now we need to grab the address of our Vaultwarden server.

            #. Paste the address into your extension and click "Save"

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

            #. Now head to the Bitwarden extension and click the cog in the top left. Under **Self-hosted environment** you will see a field for **Server URL**. Now we need to grab the address of our Vaultwarden server.

            #. Paste the address into your extension and click "Save"

            #. Now enter your credentials and the Bitwarden extension will be logged into your self-hosted Vaultwarden server!


.. collapse:: Android

    Android
    =======

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

            Begin by :ref:`setting up LAN <lan-android>` on your device.

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

.. collapse:: iOS

    iOS
    ===

    .. tabs::

        .. group-tab:: Tor

            Begin by :ref:`setting up Tor <tor-ios>` on your iPhone.

            #. Visit the App Store and download the `Bitwarden app <https://apps.apple.com/us/app/bitwarden-password-manager/id1137397744>`_

            #. Open the Bitwarden app. You'll be greeted with a log-in screen.
            
            #. Go to the top left gear icon to enter the settings.  
            
            #. Head to the "Interfaces" tab in the Vaultwarden service on your Start9 Server:

                .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces.png
                    :width: 50%
                    :alt: vaultwarden-interfaces

            #. Copy the Tor address:

                .. figure:: /_static/images/services/vaultwarden/vaultwarden-tor-address.png
                    :width: 50%
                    :alt: vaultwarden-tor-address

            #. Now send that address to your phone and paste it into Bitwarden but **before you hit save:**

                .. note:: The Tor address you will have copied will begin with **http** - Please change this to **https** instead of **http**
            
            #. Now you can hit save, and you'll be returned to the log-in screen.

            #. Go ahead and tap 'Log In,' enter your credentials, and you'll be able to access your Bitwarden app / Vaultwarden server!

        .. group-tab:: LAN

            We suggest using Tor, however it is possible have a good experience with LAN. Once synced, your app and all your passwords will be cached and available when you are on the go and not connected to your Start9 Server, and you will only need to be on LAN to update any edits to your vault.

            Begin by :ref:`setting up LAN <lan-ios>` on your device.

            #. Visit the App Store and download the `Bitwarden app <https://apps.apple.com/us/app/bitwarden-password-manager/id1137397744>`_

            #. Open the Bitwarden app. You'll be greeted with a log-in screen.
            
            #. Go to the top left gear icon to enter the settings.  
            
            #. Head to the "Interfaces" tab in the Vaultwarden service on your Start9 Server:

                .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces.png
                    :width: 50%
                    :alt: vaultwarden-interfaces

            #. Copy the LAN address:

                .. figure:: /_static/images/services/vaultwarden/vaultwarden-lan-address.png
                    :width: 50%
                    :alt: vaultwarden-lan-address

            #. Now send that address to your phone and paste it into Bitwarden.
            
            #. Now you can hit save, and you'll be returned to the log-in screen.

            #. Go ahead and tap 'Log In,' enter your credentials, and you'll be able to access your Bitwarden app / Vaultwarden server!


.. collapse:: Desktop Clients

    The desktop app is a bit more finicky, and arguably much less useful than the mobile and browser solutions. We suggest using the browser extension explained above, but below are the configurations for the Bitwarden Desktop App that have been tested and are known to work correctly.

    .. collapse:: Linux

        Linux
        =====

        First, be sure to get Tor :ref:`running on your system <tor-linux>`.

        #. Download the `Bitwarden Desktop app <https://bitwarden.com/download/>`_.  Depending on your Linux distribution and preference, you may want the AppImage, Deb, Snap, etc.  You can also check your favorite package manager.

        #. Run the program with the flag ``--proxy-server=socks5://127.0.0.1:9050`` behind it.  You can run this from a terminal, and if you'd like to use a shortcut, edit that shortcut file to include the flag.

        #. As with the other solutions above, click the 'Settings' icon, and enter your Vaultwarden Tor address.  You can then log in to your vault.

        Alternatively, you may be able to run using your LAN address, but this has proven finicky, especially on Debian/Ubuntu systems.  You will have better luck if you have the Root CA installed at the OS level.  First, be sure to :ref:`Setup LAN <lan-linux>` natively.

    .. collapse:: Mac

        Mac
        ===

        .. tabs::
            
            .. group-tab:: Tor

                #. Begin by making sure that Tor is :ref:`running on your Mac<tor-mac>`.

                #. Download the `Bitwarden Desktop app <https://bitwarden.com/download/>`_.

                #. Open the Bitwarden app and click on "Settings" in the top left:

                    .. figure:: /_static/images/services/vaultwarden/bitwarden-mac.png
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

                    .. figure:: /_static/images/services/vaultwarden/bitwarden-mac-url.png
                        :width: 50%
                        :alt: bitwarden-tor-mac-url

                #. Enter the email used to create the account, followed by the password, then click "Log in with master password".

            .. group-tab:: LAN

                We suggest using Tor, however it is possible have a good experience with LAN. Once synced, your app and all your passwords will be cached and available when you are on the go and not connected to your Start9 Server, and you will only need to be on LAN to update any edits to your vault.

                #. Begin by making sure that LAN is :ref:`steup on your Mac<lan-mac>`.

                #. Download the `Bitwarden Desktop app <https://bitwarden.com/download/>`_.

                #. Open the Bitwarden app and click on "Settings" in the top left:

                    .. figure:: /_static/images/services/vaultwarden/bitwarden-mac.png
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

                    .. figure:: /_static/images/services/vaultwarden/bitwarden-mac-url.png
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