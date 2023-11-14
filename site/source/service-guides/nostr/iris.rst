.. _iris:

====
Iris
====

The Iris client is both a social networking app and library designed to securely store all user data directly on their devices and facilitate direct communication with peers. The application is compatible with various platforms, including web browsers, iOS, Android, Docker, and desktop platforms such as MacOS, Windows, and Linux.
    
**Available clients**

- `Start9 Marketplace <https://marketplace.start9.com/marketplace/iris/>`_
- `iris.to <https://iris.to/>`_ (web)
- `Desktop <https://github.com/irislib/iris-messenger/releases/tag/app-v0.2.2>`_
- `iOS <https://apps.apple.com/us/app/iris-the-nostr-client/id1665849007>`_
- `Android <https://play.google.com/store/apps/details?id=to.iris.twa>`_ 

Using Iris on StartOS
---------------------

- Install Iris service from Start9 registry on your server.

    .. figure:: /_static/images/services/nostr/iris-1.png
        :width: 50%
        :alt: iris install

- Click "Start".

    .. figure:: /_static/images/services/nostr/iris-2.png
        :width: 50%
        :alt: iris start

- When service is ready click launch UI to access your personal Iris website.

    .. figure:: /_static/images/services/nostr/iris-3.png
        :width: 50%
        :alt: iris launch

- Create a new account or access an existing account by pasting in your private key. If creating a new account, be sure to securely back up the private key, preferably using Vaultwarden on your Start9 server.

    .. figure:: /_static/images/services/nostr/iris-4.png
        :width: 50%
        :alt: iris sign in

- To connect to your own private relay, go to Settings -> Network and paste in your Nostr Relay Websocket URL (e.g. ws://address.onion). You can find this value in the Properties section of your Nostr RS Relay service.
.. note:: 
    If you plan to connect to your own private relay, you must first make sure you are already :ref:`running Tor<connecting-tor>` on your system and we suggest using Firefox which must be :ref:`configured to use Tor.<connecting-ff>`.
    It is recommended to use your Relay's Tor websocket URL (ws://address.onion), since the LAN websocket URL (wss://address.local) will only work when you are home.
.. figure:: /_static/images/services/nostr/iris-5.png
    :width: 50%
    :alt: iris add url    

