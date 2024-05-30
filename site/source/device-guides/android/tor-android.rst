.. _tor-android:

======================
Running Tor on Android
======================
Some apps, such as the official Tor Browser, have Tor built in. They do not require additional software or configurations to utilize Tor. Most apps, however, do not have Tor built in. They require an app called Orbot to be installed in order to utilize the Tor Network.


Install Orbot
-------------
#. Download and install Orbot from the `Play Store <https://play.google.com/store/apps/details?id=org.torproject.android>`_, or from `F-Droid <https://f-droid.org/packages/org.torproject.android>`_ (must open with F-Droid app).  Then launch the app.

    .. note:: When using F-Droid, you will need to activate the Guardian Project repository by visiting the ``Settings`` menu (bottom right) -> ``Repositories`` -> ``Guardian Project Official Releases``

Running Orbot in "Power User Mode" and initial configuration
------------------------------------------------------------

This configuration allows you to run Tor `in the background` listening for just ``.onion`` addresses. Anything that isn't an ``.onion`` address will be treated normally and not go through the Tor network.

  .. note:: Some Android apps won't work on this setting and will need Orbot to be run in VPN mode. There is more on this in the next section, but it's useful to know how to toggle between the two modes so that when not using Tor services you can continue to access the internet at ordinary speeds. This setting is ideal for using :ref:`Firefox Beta configured as per this guide<tor-ff>` and for those who have another VPN activated at the same time.
    

#. Tap `More` in the bottom right hand corner and select `Settings`:

    .. figure:: /_static/images/tor/tor-android-orbot-settings-menu.png
      :width: 70  %
      :alt: Tap on More


#. Make sure the options for `Start Orbot on Boot` and `Allow Background Starts` are checked:

    .. figure:: /_static/images/tor/tor-android-orbot-vpn-off.jpeg
      :width: 40  %
      :alt: Orbot menu

#. And then also check `Power User Mode`.

  .. note:: This is what you'll uncheck, check and uncheck again to switch between `VPN mode` and `Power User Mode` as you need to.

  .. figure:: /_static/images/tor/tor-android-orbot-proxy-mode.png
    :width: 80%
    :alt: Orbot connecting and running


That's it, you're now running a Tor client on your Android device! Certain apps, such as Firefox, Fennec, and DuckDuckGo will now work after you configure them to use Tor's local proxy.  Other apps do not have sophisticated proxy configurations and require that Orbot be running in VPN mode.

Orbot VPN mode
--------------
To utilize Tor, some apps require that Orbot be running in VPN mode.  This means that you are sending your application's traffic across the Tor network via Orbot (and all other traffic too).

#. Disable Private DNS on your device. Navigate to: ``Settings > Network & Internet > Advanced > Private DNS > Off`` and toggle Private DNS to "off".

    .. figure:: /_static/images/tor/private_dns_off.png
      :width: 40%
      :alt: Private DNS off

#. Make sure the option for `Power User Mode` is unchecked:

    .. figure:: /_static/images/tor/tor-android-orbot-vpn-on.jpeg
      :width: 40  %
      :alt: Orbot menu

#. Tap `Choose Apps`, and add the apps you want to utilize Tor.

    .. figure:: /_static/images/tor/tor-android-orbot-vpn-choose-apps.jpeg
      :width: 40%
      :alt: Orbot apps

Examples of applications that need this feature for remote access are:

- Bitwarden
- Element (Matrix client)
- Nextcloud
- SimpleX

    .. figure:: /_static/images/tor/tor-android-orbot-vpn-mode.png
      :width: 80%
      :alt: Orbot connecting and running in VPN mode

You can also add the following browsers to the Tor-Enabled Apps list to easily access Tor addresses (`.onion` URLs):

- Chrome
- Vanadium
- Firefox (see below)

  .. caution:: Pushing apps through Orbot's VPN mode will allow you to access .onion URLs, however, all other traffic will also go through Tor. This means connections to some sites may be blocked by site operators' fraud prevention measures, especially e-commerce sites where credit cards are used. Proceed with caution especially for Web Browsers. Use Firefox (below) to avoid these issues.

If Using Firefox
----------------
.. warning:: You must use `Firefox Beta <https://blog.mozilla.org/security/2019/02/14/why-does-mozilla-maintain-our-own-root-certificate-store/>`_ on Android.

You can configure the Firefox Beta browser to use Orbot `without` adding it as a VPN app by following :ref:`this guide <tor-ff>`. This way, Firefox will use Tor only when necessary and avoid some of the issue created by using Tor unconditionally.