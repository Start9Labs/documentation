.. _tor-android:

**********************
Running Tor on Android
**********************

.. warning::
    Custom proxies are now only available in `Firefox Beta <https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta&hl=en_US&gl=US>`_ or `Firefox Nightly <https://play.google.com/store/apps/details?id=org.mozilla.fenix&hl=en_US&gl=US>`_ due to a breaking change by the Firefox team.

First, install the Tor proxy service to your system. To do so, open the play store and download `Orbot <https://play.google.com/store/apps/details?id=org.torproject.android>`_. Once you have done so, launch Orbot.

Next, open the kebab menu in the upper right hand corner and select `Settings`:

.. figure:: /_static/images/tor/orbot_menu.png
  :width: 50%
  :alt: Orbot menu

Then, make sure the options for `Start Orbot on Boot` and `Allow Background Starts` are checked:

.. figure:: /_static/images/tor/orbot_settings.png
  :width: 50%
  :alt: Orbot settings

Go back, and tap start:

.. figure:: /_static/images/tor/orbot_start.png
  :width: 50%
  :alt: Orbot start

Orbot will start up the Tor service. Once complete, you will see:

.. figure:: /_static/images/tor/orbot_started.png
  :width: 50%
  :alt: Orbot started

You can now close Orbot.

Setting up Orbot VPN mode
-------------------------

Orbot's VPN mode allows certain applications to utilize it's Tor service.

This process also applies for GrapheneOS.

To setup, first disable Private DNS on your device. To do so, navigate to: ``Settings > Network & Internet > Advanced > Private DNS > Off``

.. figure:: /_static/images/tor/private_dns_off.png
  :width: 50%
  :alt: Private DNS off
  
  Toggle Private DNS to "off"

Next, launch Orbot and toggle VPN Mode on while on the main screen:

.. figure:: /_static/images/tor/orbot_vpn.png
  :width: 50%
  :alt: Orbot vpn mode
  
  Toggle VPN Mode to "on"

Under `Tor-Enabled Apps`, select the gear to add applications that need to be proxied through VPN mode to utilize Tor. 

.. figure:: /_static/images/tor/orbot_apps.png
  :width: 50%
  :alt: Orbot apps
  
Examples of applications that need this feature are:

- Bitwarden
- Zap
