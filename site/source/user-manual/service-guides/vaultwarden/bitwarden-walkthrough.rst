.. _bitwarden-walkthrough:

=========================
Vaultwarden Initial Setup
=========================

.. contents::
  :depth: 2 
  :local:

.. _vaultwarden-webvault:

Web Vault
---------

#. Ensure Vaultwarden is running - click **START** on your Start9 Server if not:

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-start-service.png
                :width: 30%
                :alt: vaultwarden-start-service

#. Once the health check turns green, click **Launch UI**:

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-launch-ui.png
                :width: 30%
                :alt: vaultwarden-launch-ui

#. Time to create an account! Click **Create account**:
        
    .. figure:: /_static/images/services/vaultwarden/vaultwarden-create-account.png
                :width: 40%
                :alt: vaultwarden-create-account

    .. note:: You are creating an account with yourself on your own Vaultwarden website served from your own Vaultwarden server - there are no third parties involved here.  


#. Enter an email address for login:

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-create-account-email.png
                :width: 30%
                :alt: vaultwarden-create-account-email

    .. tip:: This email address can be anything you like. It doesn't have to be real. It is simply a way for you to log into Vaultwarden from Bitwarden apps on your devices. Your Vaultwarden server won't ever email you.

    .. tip:: You cannot use this email address to reset your master password - it is simply used to create an account on your server. 
        
    .. warning:: Do not lose it - you will not be able to log in without it!

#. Enter a name for the account, a strong password and (optionally) a password hint - then click **Create account**:

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-account-creation.png
                :width: 30%
                :alt: vaultwarden-account-creation

    .. warning:: It is important to realize that this is the 'Master password' for all your other passwords. Make it very strong, memorize it, write it down, and back it up to a safe place. If you lose it, you may lose access to all your passwords and your entire digital life.

#. Now you can log in to your new password manager! Enter your email to login:

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-login-email.png
                :width: 30%
                :alt: vaultwarden-login-email

#. Then your master password:

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-login-password.png
                :width: 30%
                :alt: vaultwarden-login-password

#. We are greeted with our newly setup Vaultwarden password vault!

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-fresh-vault.png
                :width: 30%
                :alt: vaultwarden-fresh-vault

#. At the top you can visit **Tools** for reports and to use the password generator. You can also import data from another program, such as Lastpass, Onepass, or KeePass!

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-tools.png
                :width: 40%
                :alt: vaultwarden-tools

#. **Account settings** gives you all your options, including the ability to set up 2 factor authorization.

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-account-settings.png
                :width: 40%
                :alt: vaultwarden-account-settings

#. Now you're ready to start storing some passwords!

Storing your first password
---------------------------

    #. Back at the main page for your vault, let's do a quick example login. We'll start by creating a folder for it:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-click-add-folder.png
                    :width: 50%
                    :alt: vaultwarden-click-add-folder
    
    #. Name the folder and click **Save**:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-add-folder.png
                    :width: 30%
                    :alt: vaultwarden-add-folder

    #. Click **Add item**:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-add-item.png
                    :width: 30%
                    :alt: vaultwarden-add-item

    #. Now add the credentials and click **Save**:

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-add-new-login.png
                    :width: 40%
                    :alt: vaultwarden-add-new-login

        .. tip:: An entry can have multiple URLs - for example you may wish to enter both an onion address and a .local address for one of the services you have running on your server. We are increasing the numbers of ways in which you can connect to your services, soon they may even have simple .com addresses!

    #. And there we have it - our first set of login credentials.

        .. figure:: /_static/images/services/vaultwarden/vaultwarden-new-login.png
                    :width: 45%
                    :alt: vaultwarden-new-login

    Congratulations! You have setup your own self-hosted password manager and have added a set of login credentials to it!



    .. _vaultwarden-admin:



Accessing the Admin Console
---------------------------

#. You will find the Admin console by heading to "Interfaces" on the Vaultwarden Service page.  

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces.png
        :width: 40%
        :alt: vaultwarden-interfaces

#. Copy either of the addresses here and append **/admin**:

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-interfaces-both.png
        :width: 40%
        :alt: vaultwarden-interfaces-both

    .. tip:: A typical address would look like https://abcdefghijklmnopqrstuvwxz.local/admin or http://abcdefghijklmnopqrstuvwxz.onion/admin 

#. You will be prompted for your "Admin Token," which can be found on your Vaultwarden Service page under "Properties."

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-properties.png
        :width: 40%
        :alt: vaultwarden-admin-properties

#. Copy the token here:

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-properties-admin.png
        :width: 40%
        :alt: vaultwarden-admin-properties-admin

#. And paste it here:

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-admin-console-auth.png
        :width: 40%
        :alt: vaultwarden-admin-console-auth

#. You're now logged in to the admin panel.

    .. figure:: /_static/images/services/vaultwarden/vaultwarden-admin-console.png
        :width: 40%
        :alt: vaultwarden-admin-console

    .. note:: This cannot be used to reset passwords for accounts created on your Vaultwarden server.

|

Now you'll want to setup some client devices! :ref:`Head here for instructions on how to do so.<bitwarden-client-setup>`