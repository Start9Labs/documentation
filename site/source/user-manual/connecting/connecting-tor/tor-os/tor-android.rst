.. _tor-android:

======================
Running Tor on Android
======================

Some apps, such as :ref:`Tor Browser<tor-browser>`, have Tor built in. They do not require additional software or configurations to utilize Tor. Most apps, however, do not have Tor built in. They require an app called Orbot to be installed in order to utilize the Tor Network.

  .. youtube:: b__mVfN-BP8
    :width: 100%

Running Orbot
-------------

Orbot is a system wide proxy for your Android device that enables communications over Tor.

1. Download and install Orbot from the `Play Store <https://play.google.com/store/apps/details?id=org.torproject.android>`_, or from `F-Droid <https://f-droid.org/packages/org.torproject.android>`_ (must open with F-Droid app).

  .. tip:: When using F-Droid, you will want to activate the Guardian Project repository by visiting the ``Settings`` menu (bottom right) -> ``Repositories`` -> ``Guardian Project Official Releases``

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

7. That's it, you're now running a Tor client on your Android device! Certain apps, such as Firefox, Fennec, and DuckDuckGo will now work after you configure them to use Tor's local proxy.  Other apps do not have sophisticated proxy configurations and require that Orbot be running in VPN mode.

Orbot VPN mode
--------------

To utilize Tor, some apps require that Orbot be running in VPN mode.  This means that you are sending your application's traffic across the Tor network via Orbot.

1. Disable Private DNS on your device. Note: This is not necessary if running GrapheneOS.  To do edit Private DNS, navigate to:

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
- Element (Matrix client)

You can also add the following browsers to the Tor-Enabled Apps list to easily access Tor addresses (`.onion` URLs):

- Chrome
- Vanadium

  .. caution:: Pushing apps through Orbot's VPN mode will allow you to access .onion URLs, however, all other traffic will also go through Tor.  This means connections to some sites may be blocked by site operators' fraud prevention measures, especially e-commerce sites where credit cards are used.  Proceed with caution especially for Web Browsers.