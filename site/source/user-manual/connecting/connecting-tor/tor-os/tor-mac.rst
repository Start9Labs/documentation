.. _tor-mac:

==================
Running Tor on Mac
==================

Install Homebrew
----------------

#. If you do not have Homebrew installed, follow the installation instructions `here <https://brew.sh/>`_.  TLDR: Open the Terminal and paste the following line:

    .. code-block::

        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

    .. note:: On new (M1) Macs, you might need to be root for this in which case add ``sudo`` at the front of the command, with a space before ``/bin/bash``

#. You will be prompted for your system password before installation; proceed with entering your password.  You may be asked more than once.

    .. figure:: /_static/images/tor/install_homebrew.png
        :width: 80%
        :alt: Homebrew installation

#. You will be notified which directories Homebrew is going to create, hit :code:`RETURN`:

    .. figure:: /_static/images/tor/install_homebrew1.png
        :width: 80%
        :alt: Homebrew installation

    Homebrew creates the directories and downloads any other files it needs e.g. “Command Line Tool for Xcode” and “Homebrew”.

    Wait a few minutes while it downloads and installs what it needs.

.. warning:: Surprisingly, Homebrew uses Google Analytics to collect anonymous usage data. You can deselect the option to share usage data by `opting out <https://docs.brew.sh/Analytics#opting-out>`_.

Install Tor
-----------

.. caution:: If you have the Tor Browser open, close it and quit the application.

#. In the command line, install Tor:

    .. code-block::

        brew install tor


#. Then run Tor with:

    .. code-block::

        brew services start tor

This will start Tor and ensure that it is always running, even after a restart.  See the `Tor Project docs <https://2019.www.torproject.org/docs/tor-doc-osx.html.en>`_ for more details.

Enable Tor System-wide
----------------------

#. Now enable apache service:

    .. code-block::

        sudo launchctl load -w /System/Library/LaunchDaemons/org.apache.httpd.plist

#. Enable proxy autoconfig file (This will download the Start9 standard proxy config file. You can use your own if you prefer):

    .. code-block::

        sudo curl https://registry.start9labs.com/sys/proxy.pac --output /Library/WebServer/Documents/proxy.pac

#. Go to system preferences:

    .. figure:: /_static/images/tor/systemprefs.png
        :width: 40%
        :alt: System Preferences

#. Click on Network:

    .. figure:: /_static/images/tor/network.png
        :width: 80%
        :alt: Select Network

#. In this example, we'll select WiFi on the left panel. If you're using Ethernet, click that instead. Next click "Advanced":

    .. figure:: /_static/images/tor/wifi_click_advanced.png
        :width: 80%
        :alt: Click Advanced

#. Select "Proxies":

    .. figure:: /_static/images/tor/proxys.png
        :width: 80%
        :alt: Select Proxys

#. Select "Automatic Proxy Configuration", add this URL: http://localhost/proxy.pac then click "OK"

    .. figure:: /_static/images/tor/entertorproxyURL.png
        :width: 80%
        :alt: Select Automatic proxy config and enter URL

#. Finally, click "Apply"

    .. figure:: /_static/images/tor/applyproxy.png
        :width: 80%
        :alt: Apply proxy

Done! You have now enabled system-wide Tor potential.

If you'd like to setup Firefox to use Tor you can follow  :ref:`this guide<torff-mac>`.