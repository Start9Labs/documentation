.. _tor-windows:

======================
Running Tor on Windows
======================

Install Tor
-----------

#. Unfortunately, `The Tor Project <https://torproject.org>`_ no longer publishes a standalone Tor binary for Windows, so the recommended way to get it is with the Tor Browser Bundle. You can download it `here <https://www.torproject.org/download/>`_.

   .. figure:: /_static/images/tor/tor_download_windows.png
    :width: 80%
    :alt: Tor download

    Download Tor for Windows

#. Once it is downloaded, run the installer by right clicking on it and selecting `Run as Administrator`.

#. Once you have selected a language, you should see a menu like this:

   .. figure:: /_static/images/tor/tor_windows_install.png
    :width: 80%
    :alt: Tor install wizard

   We will install it to ``C:\Program Files\Tor Browser``.  If you choose a different folder, it needs to *not* be anywhere under ``C:\Users\``.  Note the path you use here for the step after next.

#. Now you want to set up Tor to run as a service: to run in the background and keep itself running so you don't have to worry about it again. To do so, you need to open your Command Prompt as an administrator.

   * In Windows 10, you can simply type ``cmd`` in the Windows search bar, right click on the first result, and select `Run as Administrator`.

#. Once it opens, you can run the following commands, inserting your destination folder (from above) between `binPath="` and the `Browser` subfolder, like this:

   .. code-block::

      sc create tor start= auto binPath="C:\Program Files\Tor Browser\Browser\TorBrowser\Tor\tor.exe -nt-service"

   .. tip:: If you get the error "Access denied," please ensure you are running the command prompt in Administrator mode.  You can tell because the prompt will show C:\\Users\\YOUR-USERNAME> if you are NOT in admin mode, and it will show C:\\WINDOWS\\system32 if you ARE in admin mode.

   .. code-block::

      sc start tor

#. When you run this, it should look something like this:

   .. figure:: /_static/images/tor/tor_windows_terminal.png
    :width: 80%
    :alt: Tor windows terminal

   .. note:: If you get the error "The specified service already exists," complete the following steps:

      1. Run the command:

         .. code-block::

            sc delete tor
      2. Uninstall the Tor Browser, following `these steps <https://tb-manual.torproject.org/uninstalling/>`_.
      3. Begin this guide again from the beginning.

If using Firefox
----------------
Firefox can be configured to use Tor running on your Windows machine to resolve .onion URLs. Complete this guide: :ref:`tor-ff`
