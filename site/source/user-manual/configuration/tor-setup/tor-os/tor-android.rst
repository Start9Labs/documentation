.. _tor-android:

=======
Android
=======

Some apps, such as :ref:`Tor Browser<tor-browser>`, have Tor built in. They do not require additional software or configurations to utilize Tor. Most apps, however, do not have Tor built in. They require an app called Orbot to be installed in order to utilize the Tor Network.

.. youtube:: b__mVfN-BP8

Running Orbot
-------------

Orbot is a system wide proxy for your Android or Graphene device that enables communications over Tor.

1. Download Orbot from the `Play Store <https://play.google.com/store/apps/details?id=org.torproject.android>`_ , or from `F-Droid <https://f-droid.org/packages/org.torproject.android>`_.

2. Launch Orbot.

3. Open the kebab menu in the upper right hand corner and select `Settings`:

.. figure:: /_static/images/tor/orbot_menu.png
  :width: 50%
  :alt: Orbot menu

4. Make sure the options for `Start Orbot on Boot` and `Allow Background Starts` are checked:

.. figure:: /_static/images/tor/orbot_settings.png
  :width: 50%
  :alt: Orbot settings

5. Go back, and tap start:

.. figure:: /_static/images/tor/orbot_start.png
  :width: 50%
  :alt: Orbot start

6. Orbot will start up the Tor service. Once complete, you will see:

.. figure:: /_static/images/tor/orbot_started.png
  :width: 50%
  :alt: Orbot started

7. That's it. Certain apps, such as Firefox or DuckDuckGo will now just work. Other apps, however, require that Orbot be running VPN mode.

Orbot VPN mode
--------------

To utilize Tor, most apps require that Orbot be running in VPN mode.

1. Disable Private DNS on your device. To do so, navigate to:

   ``Settings > Network & Internet > Advanced > Private DNS > Off``

.. figure:: /_static/images/tor/private_dns_off.png
  :width: 50%
  :alt: Private DNS off

  Toggle Private DNS to "off"

2. Launch Orbot and toggle VPN Mode on:

.. figure:: /_static/images/tor/orbot_vpn.png
  :width: 50%
  :alt: Orbot vpn mode

  Toggle VPN Mode to "on"

Under `Tor-Enabled Apps`, click the gear icon and add apps you want to utilize Tor.

.. figure:: /_static/images/tor/orbot_apps.png
  :width: 50%
  :alt: Orbot apps

Examples of applications that need this feature are:

- Bitwarden
- Zeus

You can also add the following browsers to the Tor-Enabled Apps list to easily access Tor addresses (`.onion` URLs):

- Chrome
- Firefox
