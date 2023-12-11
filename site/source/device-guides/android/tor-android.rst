.. _tor-android:

======================
Running Tor on Android
======================
Some apps, such as the official Tor Browser, have Tor built in. They do not require additional software or configurations to utilize Tor. Most apps, however, do not have Tor built in. They require an app called Orbot to be installed in order to utilize the Tor Network.

Running Orbot
-------------
#. Download and install Orbot from the `Play Store <https://play.google.com/store/apps/details?id=org.torproject.android>`_, or from `F-Droid <https://f-droid.org/packages/org.torproject.android>`_ (must open with F-Droid app).  Then launch the app.

    .. note:: When using F-Droid, you will need to activate the Guardian Project repository by visiting the ``Settings`` menu (bottom right) -> ``Repositories`` -> ``Guardian Project Official Releases``

    .. figure:: /_static/images/tor/orbot0.png
      :width: 20  %
      :alt: Orbot
      
#. Tap "Start VPN".

    .. figure:: /_static/images/tor/orbot1.png
      :width: 20  %
      :alt: Orbot starting

#. Orbot will start up the Tor service. Once complete, you will see:

    .. figure:: /_static/images/tor/orbot2.png
      :width: 20  %
      :alt: Orbot running

#. Open the kebab menu in the bottom right hand corner and select `Settings`:

    .. figure:: /_static/images/tor/orbot_menu.png
      :width: 20  %
      :alt: Orbot settings

#. Make sure the options for `Start Orbot on Boot` and `Allow Background Starts` are checked:

    .. figure:: /_static/images/tor/orbot_settings.png
      :width: 20  %
      :alt: Orbot menu

#. That's it, you're now running a Tor client on your Android device! Certain apps, such as Firefox, Fennec, and DuckDuckGo will now work after you configure them to use Tor's local proxy.  Other apps do not have sophisticated proxy configurations and require that Orbot be running in VPN mode.

Orbot VPN mode
--------------
To utilize Tor, some apps require that Orbot be running in VPN mode.  This means that you are sending your application's traffic across the Tor network via Orbot.

#. Disable Private DNS on your device. Navigate to: ``Settings > Network & Internet > Advanced > Private DNS > Off`` and toggle Private DNS to "off".

    .. figure:: /_static/images/tor/private_dns_off.png
      :width: 20%
      :alt: Private DNS off

#. Tap `Select Apps`, and add the apps you want to utilize Tor.

    .. figure:: /_static/images/tor/orbot_apps.png
      :width: 20%
      :alt: Orbot apps

Examples of applications that need this feature for remote access are:

- Bitwarden
- Element (Matrix client)
- Nextcloud

    .. figure:: /_static/images/tor/orbot2.png
      :width: 20%
      :alt: Orbot running

You can also add the following browsers to the Tor-Enabled Apps list to easily access Tor addresses (`.onion` URLs):

- Chrome
- Vanadium
- Firefox (see below)

  .. caution:: Pushing apps through Orbot's VPN mode will allow you to access .onion URLs, however, all other traffic will also go through Tor. This means connections to some sites may be blocked by site operators' fraud prevention measures, especially e-commerce sites where credit cards are used. Proceed with caution especially for Web Browsers. Use Firefox (below) to avoid these issues.

If Using Firefox
----------------
.. warning:: You must use `Firefox Beta <https://blog.mozilla.org/security/2019/02/14/why-does-mozilla-maintain-our-own-root-certificate-store/>`_ on Android.

You can configure the Firefox Beta browser to use Orbot `without` adding it as a VPN app by following :ref:`this guide <tor-ff>`. This way, Firefox will use Tor only when necessary and avoid some of the issue created by using Tor unconditionally.