.. _alt-marketplace:

===============
Alt Marketplace
===============

EmbassyOS supports accessing alternative marketplaces.

.. caution:: Start9 is not responsible for issues encountered when downloading services from alternative marketplaces, and cannot provide support for services that are not from our offical marketplace.  Here be dragons!!

After SSH-ing into the Embassy, run the following command, replacing ``<url>`` with your desired marketplace URL:

.. code-block:: bash

    embassy-cli server set-marketplace <url>

or to only change the marketplace for fetching packages, but not os updates:

.. code-block:: bash

    embassy-cli package set-marketplace <url>

.. note:: Make sure you have the URL **EXACTLY CORRECT.**  If you do not, your Embassy may crash.  In this case, just reboot the device and try again.
