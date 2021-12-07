.. _tor-mac:

********************
Running Tor on MacOS
********************

Install Homebrew
----------------

1. If you do not have Homebrew installed, follow the installation instructions `here <https://brew.sh/>`_.

    TLDR: Open the command line editor (Terminal) and paste the following line:

    .. code-block::

        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

    On new (M1) Macs, you might need to be root for this in which case:

    .. code-block::
	
	sudo /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

2. You will be prompted for your system password before installation; proceed with entering your password:

.. figure:: /_static/images/tor/install_homebrew.png
    :width: 80%
    :alt: Homebrew installation

    Enter your password. You may need to enter this several times.

3. You will be notified which directories Homebrew is going to create, hit :code:`RETURN`:

.. figure:: /_static/images/tor/install_homebrew1.png
    :width: 80%
    :alt: Homebrew installation

Homebrew creates the directories and downloads any other files it needs e.g. “Command Line Tool for Xcode” and “Homebrew”.

Wait a few minutes while it downloads and installs what it needs.

.. warning:: Surprisingly, Homebrew uses Google Analytics to collect anonymous usage data. You can deselect the option to share usage data by `opting out <https://docs.brew.sh/Analytics#opting-out>`_.

For new (M1) macs using zsh, brew will need to be added to your path as follows:

    ..code-block::

	echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
	eval "$(/opt/homebrew/bin/brew shellenv)"

You can test that homebrew was successfully installed and added to your path by typing:

    .. code-block::

	brew --version

It should return a version number and you can continue with installation of Tor.

Install Tor
-----------

.. warning:: If you have the Tor Browser open, close it and quit the application.

#. In the command line, install Tor:

    .. code-block::

        brew install tor

    Once it is finished you have the following options:

    .. figure:: /_static/images/tor/install_tor.png
        :width: 80%
        :alt: Tor installation

#. Then run Tor with:

    .. code-block::

        brew services start tor

This will start Tor and ensure that it is always running, even after a restart.  See the `Tor Project <https://2019.www.torproject.org/docs/tor-doc-osx.html.en>`_ for more details.
