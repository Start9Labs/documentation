.. _tor-mac:

********************
Running Tor on MacOS
********************

#. First, you need to install the Tor proxy service to your system. This will require opening your Terminal. 

#. To open your terminal, hold the command key ⌘ + spacebar. `Spotlight Search` will appear. Start typing "terminal" and select the program called `Terminal`.

#. Paste in the following commands and hit <Enter>.

   .. code-block::

    which brew || /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    brew install tor
    brew services start tor

#. When this completes, you should see something like:

   .. code-block::

    ==> Successfully started `tor` (label: homebrew.mxcl.tor)

#. If you notice issues connecting to Tor websites, try restarting the Tor service. Open the terminal and run:

   .. code-block::

    brew services restart tor

#. After running this command, you should see something like:

   .. code-block::

    Stopping `tor`... (might take a while)
    ==> Successfully stopped `tor` (label: homebrew.mxcl.tor)
    ==> Successfully started `tor` (label: homebrew.mxcl.tor)

#. That's it! Your Mac is now setup to natively use Tor.