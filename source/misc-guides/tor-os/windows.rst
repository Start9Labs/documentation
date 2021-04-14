.. _tor-windows:

**********************
Running Tor on Windows
**********************

#. First, you need to install the Tor proxy service to your system. Unfortunately, `torproject.org` no longer publishes a standalone Tor binary for Windows, so the recommended way to get it is with the Tor Browser Bundle. You can download it `here <https://www.torproject.org/download/>`_.

   .. figure:: /_static/images/tor/tor_download_windows.png
    :width: 80%
    :alt: Tor download

    Download Tor for Windows

#. Once it is downloaded, go ahead and run the installer. If you want to install the program outside of your user directory, you will have to right click and select `Run as Administrator`.

#. Once you have selected a language, you should see a menu like this:

   .. figure:: /_static/images/tor/tor_windows_install.png
    :width: 80%
    :alt: Tor install wizard

    Note Tor destination folder when installing

#. It does not matter where you set the destination folder; however, you need to make note of it for later. Go ahead and finish the installation.

#. Now you want to set up Tor to run as a service: to run in the background and keep itself running so you don’t have to worry about it again. To do so, you need to open your Command Prompt as an administrator.

   * In Windows 10, you can simply type ``cmd`` in the Windows search bar, right click on the first result, and select `Run as Administrator`.

#. Once it opens, you can run the following commands, inserting your destination folder (from above) in place of ``<PATH TO>``:

   .. code-block::

    sc create tor start=auto binPath="<PATH TO>\Browser\TorBrowser\Tor\tor.exe -nt-service"
    sc start tor

#. When you run this, it should look something like this:

   .. figure:: /_static/images/tor/tor_windows_terminal.png
    :width: 80%
    :alt: Tor windows terminal

    Replace highlighted section with noted destination folder

#. That's it! Your Windows computer is now setup to natively use Tor.
