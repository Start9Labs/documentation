.. _tor-android:

**********************
Running Tor on Android
**********************

#. First, install the Tor proxy service to your system. To do so, download Orbot from the `Play Store <https://play.google.com/store/apps/details?id=org.torproject.android>`_ , or from `F-Droid <https://f-droid.org/packages/org.torproject.android>`_ . Once you have done so, launch Orbot.

#. Once you have done so, launch Orbot.

#. Next, open the kebab menu in the upper right hand corner and select `Settings`:

   .. figure:: /_static/images/tor/orbot_menu.png
    :width: 50%
    :alt: Orbot menu

#. Then, make sure the options for `Start Orbot on Boot` and `Allow Background Starts` are checked:

   .. figure:: /_static/images/tor/orbot_settings.png
    :width: 50%
    :alt: Orbot settings

#. Go back, and tap start:

   .. figure:: /_static/images/tor/orbot_start.png
    :width: 50%
    :alt: Orbot start

#. Orbot will start up the Tor service. Once complete, you will see:

   .. figure:: /_static/images/tor/orbot_started.png
    :width: 50%
    :alt: Orbot started

#. You can now close Orbot. It will continue running in the background.

Setting up Orbot VPN mode
-------------------------

Orbot's VPN mode allows certain applications to utilize it's Tor service. To setup:

#. First disable Private DNS on your device. To do so, navigate to:

   ``Settings > Network & Internet > Advanced > Private DNS > Off``

.. figure:: /_static/images/tor/private_dns_off.png
  :width: 50%
  :alt: Private DNS off

  Toggle Private DNS to "off"

#. Next, launch Orbot and toggle VPN Mode on while on the main screen:

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
- Zeus

You can also add the following browsers to the Tor-Enabled Apps list to easily access Tor addresses (`.onion` URLs):

- Chrome
- Brave