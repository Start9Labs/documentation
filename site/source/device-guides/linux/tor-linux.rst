.. _tor-linux:

==================
Using Tor on Linux
==================

Running Tor
-----------

.. tabs::

    .. group-tab:: Debian / Ubuntu

        For Debian and Debian-based systems, such as Mint, PopOS etc.

        .. note:: The following install is for the LTS (Long Term Support) version of Tor from Debian.  If you would like the latest stable release, The Tor Project maintain their own Debian repository.  The instructions to connect to this can be found `here <https://support.torproject.org/apt/tor-deb-repo/>`_.

        Install the Tor proxy service to your system.  To do so, open your terminal and run the following command:

        .. code-block:: bash

            sudo apt update && sudo apt install tor

        .. tip:: You can check that Tor is running with:

            .. code-block:: bash

                systemctl status tor

            In the rare event that Tor is having connectivity issues, you can reset your connection with:

            .. code-block:: bash

                sudo systemctl restart tor

    .. group-tab:: Arch / Garuda / Manjaro

        Simply install Tor with:

            .. code-block:: bash

                sudo pacman -S tor


        .. tip:: You can check that Tor is running with:

            .. code-block:: bash

                systemctl status tor

            In the rare event that Tor is having connectivity issues, you can reset your connection with:

            .. code-block:: bash

                sudo systemctl restart tor

    .. group-tab:: CentOS / Fedora / RHEL

        #. Configure the Tor Package repository.  Add the following to ``/etc/yum.repos.d/tor.repo``:

            - CentOS / RHEL:

            .. code-block:: bash

                [Tor]
                name=Tor for Enterprise Linux $releasever - $basearch
                baseurl=https://rpm.torproject.org/centos/$releasever/$basearch
                enabled=1
                gpgcheck=1
                gpgkey=https://rpm.torproject.org/centos/public_gpg.key
                cost=100


            - Fedora:

            .. tip:: Latest Fedora versions have Tor package available for installation:

            .. code-block:: bash

                [Tor]
                name=Tor for Fedora $releasever - $basearch
                baseurl=https://rpm.torproject.org/fedora/$releasever/$basearch
                enabled=1
                gpgcheck=1
                gpgkey=https://rpm.torproject.org/fedora/public_gpg.key
                cost=100

        #. Install the Tor package:

            .. code-block:: bash

                sudo dnf install tor

        #. Then enable tor service:

            .. code-block:: bash

                sudo systemctl enable --now tor

If using Firefox (recommended)
------------------------------

#. Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that appear

#. Search for ``dom.securecontext.allowlist_onions`` and set the value to ``true``:

    .. figure:: /_static/images/tor/firefox_allowlist.png
        :width: 60%
        :alt: Firefox whitelist onions screenshot

#. Search for ``network.websocket.allowInsecureFromHTTPS`` and set the value to ``true``:

    .. figure:: /_static/images/tor/firefox_insecure_websockets.png
        :width: 60%
        :alt: Firefox allow insecure websockets over https

#. Download a `Proxy Auto Config` file to inform Firefox how to use the Tor daemon running on your computer. You can get Start9's standard file from a terminal, by using:

    .. code-block::

        sudo wget -P ~/ https://start9.com/assets/proxy.pac
    
#. Determine the full path of `proxy.pac`, which we will use in step 9, by executing the following command in the terminal, and copying its output to your clipboard:

    .. code-block::

        echo file://$HOME/proxy.pac

#. Go to the right-hand hamburger menu and select ``Settings``:

    .. figure:: /_static/images/tor/os_ff_settings.png
        :width: 30%
        :alt: Firefox options screenshot

#. Search for the term ``proxy`` in the search bar in the upper right and select ``Settings...``:

    .. figure:: /_static/images/tor/firefox_search.png
        :width: 60%
        :alt: Firefox search screenshot

#. Select ``Automatic proxy configuration URL`` and paste the output from the command you performed in step 6.  Be aware, the triple ``///`` is intentional, and your path *will* be different from the one below - namely, YOUR_LINUX_USERNAME will be your actual linux username:

    .. code-block::

        file:///home/YOUR_LINUX_USERNAME/proxy.pac

    .. figure:: /_static/images/tor/firefox_proxy_linux.png
        :width: 60%
        :alt: Firefox proxy settings screenshot
    
#. Check the box labeled ``Proxy DNS when using SOCKS v5`` in the image above

#. Click ``OK`` and restart Firefox

#. Test that Firefox can resolve `.onion` URLs by visiting Start9's Tor website: http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion. If this does not work, go through this guide again, ensuring you followed every step, including the first which refers to another guide

#. You can now use the `.onion` URLs of your server and installed services
