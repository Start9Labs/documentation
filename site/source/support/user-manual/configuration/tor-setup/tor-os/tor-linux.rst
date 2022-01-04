.. _tor-linux:

=====
Linux
=====

.. tabs::

    .. group-tab:: Debian / Ubuntu

        For Debian and Debian-based systems, such as Mint, PopOS etc.

        .. note:: The following install is for the LTS (Long Term Support) version of Tor from Debian.  If you would like the latest stable release, The Tor Project maintain their own Debian repository.  The instructions to connect to this can be found `here <https://support.torproject.org/apt/tor-deb-repo/>`_.

        Install the Tor proxy service to your system. To do so, open your terminal and run the following command:

        .. code-block:: bash

            sudo apt update && sudo apt install tor

        .. tip:: You can check that Tor is running with:

            .. code-block:: bash

                systemctl status tor

            In the rare event that Tor is having connectivity issues, you can reset your connection with:

            .. code-block:: bash

                sudo systemctl restart tor

    .. group-tab:: Arch / Manjaro

        Simply install Tor with:

            .. code-block:: bash

                sudo pacman -S tor


        .. tip:: You can check that Tor is running with:

            .. code-block:: bash

                systemctl status tor

            In the rare event that Tor is having connectivity issues, you can reset your connection with:

            .. code-block:: bash

                sudo systemctl restart tor

    .. group-tab:: CentOS / RHEL / Fedora

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

            .. code-block:: bash

                [Tor]
                name=Tor for Fedora $releasever - $basearch
                baseurl=https://rpm.torproject.org/fedora/$releasever/$basearch
                enabled=1
                gpgcheck=1
                gpgkey=https://rpm.torproject.org/fedora/public_gpg.key
                cost=100

        #. Then install the Tor package:

            .. code-block:: bash

                sudo dnf install tor
