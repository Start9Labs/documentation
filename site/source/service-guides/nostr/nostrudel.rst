.. _nostrudel:

=========
noStrudel  
========= 

noStrudel is a web app for exploring the nostr protocol. 
    
**Available platforms**

- `StartOS <https://marketplace.start9.com/marketplace/nostrudel>`_

**Using noStrudel on StartOS**

#. Install the noStrudel service from the Start9 registry on your server.  

    .. figure:: /_static/images/services/nostr/nostrudel-1.png
        :width: 50%
        :alt: install

#. Click "Start".

    .. figure:: /_static/images/services/nostr/nostrudel-2.png
        :width: 50%
        :alt: start

#. When the service is ready click "Launch UI" to access noStrudel. 

    .. figure:: /_static/images/services/nostr/nostrudel-3.png
        :width: 50%
        :alt: launch

#. Choose how to setup your relays and create a new account or access an existing account by using a nip-07 browser extension. If creating a new account, be sure to securely back up the private key, preferably using Vaultwarden on StartOS.  

    .. figure:: /_static/images/services/nostr/nostrudel-4.png
        :width: 50%
        :alt: sign in

#. To connect to your own private relay, go to Relays -> App Relays, paste in your Nostr Relay Websocket URL (e.g. ws://address.onion) and click add. You can find this value in the Properties section of your Nostr RS Relay service.  

    .. note:: 
        It is recommended to use your Relay's Tor websocket URL (ws://address.onion), since the LAN websocket URL (wss://address.local) will only work when you are home.

        If you plan to do this, you must use `Tor browser <https://www.torproject.org/>`_ or :ref:`run Tor<connecting-tor>` on your system.  
        
        
    .. note::

        We recommend using Firefox which must be :ref:`configured to use Tor<tor-ff>`.  

        You must also allow ws:// websockets.

        Open Firefox and enter ``about:config`` in the URL bar. Accept any warnings that appear.

        Search for ``network.websocket.allowInsecureFromHTTPS`` and set the value to ``true``. 

        

    .. figure:: /_static/images/services/nostr/nostrudel-5.png
        :width: 50%
        :alt: add relay    

#. To connect to your LND instance using `Alby Hub <https://marketplace.start9.com/marketplace/alby-hub>`_ for LN payments, go to Settings -> Lightning -> Connect wallet. Then see the Alby Hub guide for :ref:`connecting apps <albyhub>`.

.. figure:: /_static/images/services/nostr/nostrudel-6.png
    :width: 50%
    :alt: connect wallet 

More resources
--------------

- :ref:`Nostr RS Relay <nostr-service>` - create a private or public relay to add to noStrudel

- :ref:`Alby Hub <albyhub>` - connect LND to noStrudel for sending zaps (and create an Alby account for receiving zaps via proxy to LND)