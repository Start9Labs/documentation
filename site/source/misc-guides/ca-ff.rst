.. _ca-ff:

===========================================
Configuring Firefox to Respect Your Root CA
===========================================

.. tabs::

    .. group-tab:: Mac/Windows

        #. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that appear

        #. Search for ``security.enterprise_roots.enable``, set it to ``true``.

            .. figure:: /_static/images/ssl/browser/enterprise_roots_enabled_true.png
                :width: 80%
                :alt: Firefox security settings

        #. Restart Firefox

    .. group-tab:: Debian/Ubuntu

        This guide applies to Firefox, Firefox ESR, Librewolf, and Thunderbird. Mozilla apps need to be configured to use the certificate store of your device. To find out why Mozilla does this differently, you can read their `blog post <https://blog.mozilla.org/security/2019/02/14/why-does-mozilla-maintain-our-own-root-certificate-store/>`_ on the topic (TLDR: for security purposes).

        #. Select the hamburger menu -> ``Settings``. Search for ``security devices`` and select ``Security Devices...``

            .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-1.png
                :width: 60%
                :alt: Mozilla application p11kit trust #1

        #. When the Device Manager dialog window opens, select ``Load``

            .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-2.png
                :width: 60%
                :alt: Mozilla application p11kit trust #2

        #. Give the Module Name a title such as "System CA Trust Module". For the Module filename, paste in ``/usr/lib/x86_64-linux-gnu/pkcs11/p11-kit-trust.so`` and hit ``OK``

            .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-3.png
                :width: 60%
                :alt: Mozilla application p11kit trust #3
            
            .. tip:: The path to p11-kit-trust.so will be slightly different if your processor's architecture is not x86_64.

        #. Verify that the new module shows up on the left hand side and select ``OK`` at the bottom right:

            .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-4.png
                :width: 60%
                :alt: Mozilla application p11kit trust #4
        
        #. Restart Firefox

    .. group-tab:: Arch/Garuda/CentOS/Fedora

        No special steps are needed for Arch/Garuda/CentOS/Fedora.

    .. group-tab:: Android

        .. note:: You must use Firefox Beta on Android. The regular Firefox app will not work.

        #. Tap ``Kebab Menu > Settings > About Firefox`` and tap the Firefox icon 5 times to enable "developer mode"

        #. Go back to ``Kebab Menu > Settings > Secret Settings`` (at the bottom), and tap ``Use third party CA certificates``

