.. _alt-registries:

======================
Alternative Registries
======================
It is critical to Start9's mission that Start9 is **not** a central point of failure. Software distribution is critical infrastructure and therefore the Start9 Marketplace supports adding and accessing of custom registries for maximum resiliency and decentralization.

The most basic method Start9 has made available is the ability to use and distribute packages in their ``.s9pk`` form, which can be simply hosted as a file anywhere you'd like, even on your Start9 server (see below)!  Start9 has also built open source tools for the Marketplace UI, to keep the community in maximum control with minimal inconvenience.

See this `blog post <https://blog.start9.com/start9-marketplace-strategy/>`_ for more details.

Changing Registries
-------------------
By default, there are 2 registries available in the Marketplace: Start9 (officially developed/supported) and Community (community developed/supported).

.. caution:: Start9 is not responsible for issues encountered when downloading services from alternative marketplaces, and cannot provide support for services that are not from our official marketplace. Here be dragons!!

Go to *Marketplace > Change*.

    .. figure:: /_static/images/marketplaces/marketplace-switch0.png
        :width: 60%

Adding a Registry
-----------------
Click "Add custom registry" and enter the URL of your desired Marketplace. You may connect immediately, or save for later use.

    .. figure:: /_static/images/marketplaces/marketplace-switch1.png
        :width: 60%

.. note:: Currently this change will only permit the downloading of *services* from alternative marketplaces. embassyOS itself may only be obtained from Start9 (or building from source) at this time.

Hosting a Registry
------------------
You can run your own basic registry using your Start9 server!  On each service's GitHub Releases page, such as `Bitcoin <https://github.com/Start9Labs/bitcoind-wrapper/releases/tag/v23.0.0>`_ for example, you will find the ``.s9pk`` Asset.  You can download this package, upload to a folder on `File Browser <https://marketplace.start9.com/marketplace/filebrowser>`_ or `Nextcloud <https://marketplace.start9.com/marketplace/nextcloud>`_, and then host it over :ref:`Tor<tor>` using `Start9 Pages <https://marketplace.start9.com/marketplace/embassy-pages>`_!

If you are interested in building and hosting your own full registry that can be accessed in the Start9 Marketplace UI, you can check out the `registry repository <github.com/start9labs/registry>`_.