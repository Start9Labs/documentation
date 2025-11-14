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

   * In Windows 10+, you can simply type ``cmd`` in the Windows search bar (but don't hit enter).  Under the Command Prompt result, select "Run as Administrator".

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

Let all apps reach .onion sites system-wide
-------------------------------------------

#. Enable IIS:
   * Open the Start menu and select or type in **Control Panel**, then select **Programs > Programs and Features > Turn Windows features on or off**

      .. figure:: /_static/images/tor/windows-proxy-step1-iis-programs_and_features-turn_on_iis_manager.png
       :width: 80%
       :alt: Windows System-wide proxy.pac: Control Panel > Programs > Programs and Features > Turn Windows features on or off

   * In the Turn Windows features on or off dialog box, enable "Internet Information Server"

#. Go to the Start menu, type "cmd" into the search box (but don't hit enter).
   "Command Prompt" will be the first search result.  Select "Run as Administrator" underneath it.

#. You may be prompted for your password, then the Command Prompt will open.  Run the following two commands in succession:
   .. code-block::

      cd C:\inetpub\wwwroot\
      curl -O https://start9.com/assets/proxy.pac

#. Configure the proxy.pac MIME type in IIS Manager:

   a) Open IIS Manager as Administrator. You can search for **IIS Manager** in the Start menu or find it under **Control Panel > System and Security > Windows Tools**:

      .. figure:: /_static/images/tor/windows-proxy-step2-iis-manager.png
       :width: 80%
       :alt: Windows System-wide proxy.pac: Open IIS Manager

   b) In the Connections pane on the left, expand your server name and then expand the Sites node.
   c) Click on the Default Web Site
   d) In the central Home pane, double-click the MIME Types feature icon.
   e) In the MIME Types pane on the right, click Add...
   f) In the Add MIME Type dialog box, enter the following information:
      File name extension: `.pac`
      MIME type: `application/x-ns-proxy-autoconfig`
   g) Click OK to save the new MIME type.

#. Go to your Start menu and select Settings:

   .. figure:: /_static/images/tor/windows-proxy-step3-settings.png
    :width: 80%
    :alt: Windows System-wide proxy.pac: Start > Settings

#. Select Network & Internet > Proxy​

   .. figure:: /_static/images/tor/windows-proxy-step4-network-proxy.png
    :width: 80%
    :alt: Windows System-wide proxy.pac: Network & Internet > Proxy

#. Under Proxy, select Use Setup Script -> Edit

   .. figure:: /_static/images/tor/windows-proxy-step5-network-edit.png
    :width: 80%
    :alt: Windows System-wide proxy.pac: Use Setup Script -> Edit

#. In the "Script address" field, enter:
   .. code-block::

      http://loalhost/proxy.pac

#. Hit Save

Now your browsers (and any other application system-wide) should be able to access .onion domains.