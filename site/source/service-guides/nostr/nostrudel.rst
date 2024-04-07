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
        If you plan to connect to your own private relay, you must use `Tor browser <https://www.torproject.org/>`_ or :ref:`run Tor<connecting-tor>` on your system.  We recommend using Firefox which must be :ref:`configured to use Tor<connecting-ff>`.  
        It is recommended to use your Relay's Tor websocket URL (ws://address.onion), since the LAN websocket URL (wss://address.local) will only work when you are home.

    .. figure:: /_static/images/services/nostr/nostrudel-5.png
        :width: 50%
        :alt: add relay    

#. To connect to your LND instance using `NWC <https://marketplace.start9.com/marketplace/nostr-wallet-connect>`_ (Nostr Wallet Connect) for LN payments, go to Settings -> Lightning -> Connect wallet. Choose NWC and paste your pairing secret.

.. figure:: /_static/images/services/nostr/nostrudel-6.png
    :width: 50%
    :alt: connect wallet 

