.. _ca-chrome:

==========================================
Configuring Chrome to Respect Your Root CA
==========================================

This guide applies to Chrome, Chromium, Brave, Vivaldi and any other Chrome-based browser, only on Linux, where by default, Chrome does not look to the system trust store but provides its own build-in trust store.


#. Visit `chrome://settings/certificates` in Chrome
#. Select the **Authorities** tab
#. Select **Import**
#. Find and select your *adjective-noun.crt* file
#. Check “Trust this certificate for identifying websites”
#. Select OK

