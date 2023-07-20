.. _lan-ff:

==================================
Trusting Your Start9 CA in Firefox
==================================
This guide applies to Firefox, Firefox ESR, and Librewolf.  Mozilla apps need to be configured to use the certificate store of your device.  To find out why Mozilla does this differently, you can read their `blog post <https://blog.mozilla.org/security/2019/02/14/why-does-mozilla-maintain-our-own-root-certificate-store/>`_ on the topic.

.. caution:: You will first need to complete the :ref:`Trust Root CA <trust-ca>` guide for your device before continuing.

.. tabs::

    .. group-tab:: Linux

        #. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that may appear about changing advanced configuration preferences.

        #. Search for *security.enterprise_roots.enabled* and double click on *false* so that it turns to *true*:

            .. figure:: /_static/images/ssl/browser/enterprise_roots_enabled_true.png
                :width: 80%
                :alt: Firefox security settings

        Most Debian-based distributions (Debian, Linux Mint, PopOS, Ubuntu, etc) will require the following setup.  If you run Arch, CentOS, Garuda, Fedora, etc, then you may skip all the way down to :ref:`Restart Firefox<restart-ff>`.

        For each Mozilla-based application (Firefox, Firefox ESR, LibreWolf, Thunderbird, etc) you plan on using, you will need to complete the following guide.  This is in order for them to trust your Start9 server's CA certificate directly from your Linux distribution's certificate trust store.

        #. Select the hamgurger menu, then *Settings*, then search for "*security devices*", then select "*Security Devices...*"

            .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-1.png
                :width: 60%
                :alt: Mozilla application p11kit trust #1

        #. When the Device Manager dialog window opens, select "*Load*"

            .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-2.png
                :width: 60%
                :alt: Mozilla application p11kit trust #2

        #. Give the Module Name a title such as "*System CA Trust Module*" and for the Module filename, paste in ``/usr/lib/x86_64-linux-gnu/pkcs11/p11-kit-trust.so`` and hit *OK*:

            .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-3.png
                :width: 60%
                :alt: Mozilla application p11kit trust #3

        #. Verify that the new module shows up on the left hand side and select *OK* at the bottom right:

            .. figure:: /_static/images/ssl/linux/cert-trust-linux-firefox-p11kit-4.png
                :width: 60%
                :alt: Mozilla application p11kit trust #4

        .. _restart-ff:

        Now restart Firefox (or other Mozilla application), and log in to your server using ``https``.  You should now see this symbol indicating a secure connection:

            .. figure:: /_static/images/ssl/browser/firefox-https-good.png
                :width: 80%
                :alt: Firefox security settings

        .. tip:: If you see an exclamation point inside a triangle by the lock, you have made a security exception in the browser.  You will need to remove it by clicking the lock and then "Connection not secure":

            .. figure:: /_static/images/ssl/browser/cert-trust-exception-remove-1.png
                :width: 80%
                :alt: Firefox - Remove security exception (Part 1)

            Then click "Remove Exception":

            .. figure:: /_static/images/ssl/browser/cert-trust-exception-remove-2.png
                :width: 80%
                :alt: Firefox - Remove security exception (Part 2)

        You should now see that the website is trusted as in the final step show above.
    
    .. group-tab:: Mac/Windows

        #. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that may appear about changing advanced configuration preferences.

        #. Search for *security.enterprise_roots.enabled* and double click on *false* so that it turns to *true*:

            .. figure:: /_static/images/ssl/browser/enterprise_roots_enabled_true.png
                :width: 80%
                :alt: Firefox security settings

        #. Now restart Firefox and you should now see this symbol indicating a secure connection:

            .. figure:: /_static/images/ssl/browser/firefox-https-good.png
                :width: 80%
                :alt: Firefox security settings
        
        .. note:: If you see an exclamation point inside a triangle by the lock, you have made a security exception in the browser.  To remove it, click the lock and go to "Connection not secure":

            .. figure:: /_static/images/ssl/browser/cert-trust-exception-remove-1.png
                :width: 80%
                :alt: Firefox - Remove security exception (Part 1)

            Then click "Remove Exception":

            .. figure:: /_static/images/ssl/browser/cert-trust-exception-remove-2.png
                :width: 80%
                :alt: Firefox - Remove security exception (Part 2)

        You should now see that the website is trusted as in the final step show above.

    .. group-tab:: Android

        #. To setup in Firefox Beta or Fennec, tap the kebab menu, then go to *Settings > About Firefox Beta* and tap the Firefox logo five times until it says "Debug menu enabled."
        
        #. Return to *Settings > Secret Settings* and enable "Use third party CA certificates".
    
    .. group-tab:: iOS

        No additional configuration for iOS is required, as all iOS browsers are really Safari under the hood.


