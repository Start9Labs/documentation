*******
Bitcoin
*******

The Tor address provided by the Bitcoin service can be used in the configuration settings for wallet applications.

Specter Desktop
===============

This guide was written for MacOS on Catalina 10.15.7 courtesy of @Chiefmonkey.

Step 1 - Install Homebrew
-------------------------

If you do not have Homebrew installed, go to https://brew.sh/ and install it by opening up the command line editor (Terminal) and cut’n’paste the line from Homebrew that looks like this:

``/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"``

It will ask you for your system password before it installs:

.. figure:: /_static/images/specter/install-homebrew.png
  :width: 90%
  :alt: Homebrew installation

It will tell you which directories it’s going to create and hit ``return``:

.. figure:: /_static/images/specter/install-homebrew1.png
  :width: 90%
  :alt: Homebrew directories

It creates the directories and downloads any other files it needs e.g. “Command Line Tool for Xcode” and “Homebrew”.
Wait 5 minutes whilst it downloads and installs what it needs.

Surprisingly, Homebrew uses Google Analytics to collect anonymous usage data. You can deselect the option to share usage data `by opting out <https://docs.brew.sh/Analytics#opting-out>`_.


Step 2 - Install Tor
--------------------

.. note:: Close Tor Browser before you edit your ``torrc``, otherwise Tor Browser may erase your modifications.

In the command line type: ``brew install tor``

See `the tor project <https://2019.www.torproject.org/docs/tor-doc-osx.html.en>`_ for more details.

Once it’s finished you have the following options:

.. figure:: /_static/images/specter/install_tor.png
  :width: 90%
  :alt: Install Tor

Step 3 - Edit torrc config file
-------------------------------

Once tor is installed you will need to edit the tor config file. You can do this using Finder, or via the command line if you are a developer. Reference `these <https://support.torproject.org/tbb/tbb-editing-torrc/>`_ instructions for the Finder approach.

Newer Macs hide certain files like torrc so you need to do do this:

Open Finder and click Go menu > Go to Folder

.. figure:: /_static/images/specter/go-to-folder.png
  :width: 40%
  :alt: Mac go to folder menu

Then enter:

``~/Library/Application Support/TorBrowser-Data/Tor``

.. figure:: /_static/images/specter/go-to-folder2.png
  :width: 70%
  :alt: Mac go to folder submenu

This will display all hidden folders in that folder.

The hidden folder will open, and you can right click the torrc file to open with a text editor:

.. figure:: /_static/images/specter/edit-tor-config1.png
  :width: 90%
  :alt: Edit torrc file

Copy the following lines into your torrc file if they do not exist already:

.. code:: bash

    ## The port on which Tor will listen for local connections from Tor
    ## controller applications, as documented in control-spec.txt.
    ControlPort 9051
    CookieAuthentication 1
    CookieAuthFileGroupReadable 1


.. note:: For further help or reference, visit the `specter desktop docs <https://github.com/cryptoadvance/specter-desktop/blob/master/docs/tor.md#install-tor-service>`_ here. 


Step 4 - Reboot
---------------

Reboot your machine.

Step 5 - Configure Specter Desktop App
--------------------------------------

`Download <https://specter.solutions/>`_ specter.

Under “Wallets” on the left click ``Configure``.

Turn off Auto-detect.

.. figure:: /_static/images/specter/specter-desktop.png
  :width: 75%
  :alt: Specter desktop

In a Tor enabled browser connected to your Embassy click: ``Services > Bitcoin Core`` and copy your Tor address.

.. figure:: /_static/images/specter/embassy1.png
  :width: 90%
  :alt: Embassy Bitcoin service menu


Paste it into Specter in the Host field.

Go back to your Embassy to get your Username and Password by selecting: ``Config > RPC Settings``.

Go back to Specter and fill it out like this:

.. figure:: /_static/images/specter/specter-desktop.png
  :width: 75%
  :alt: Specter desktop

Click “Test”. It can take a few minutes.

If all is well several green checkboxes will appear and some config settings:

.. figure:: /_static/images/specter/specter-desktop2.png
  :width: 75%
  :alt: Specter desktop config

Click “Save”.

Have a beer and some tacos before journeying further into the rabbit hole.