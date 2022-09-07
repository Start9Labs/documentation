.. _bitcoin-service:

=======
Bitcoin
=======

.. contents::
  :depth: 2
  :local:

Here you will find guides on how to connect different kinds of Bitcoin wallets (hardware and software) to your Embassy node, to complete your sovereign Bitcoin stack!


.. _blockstream-green:

Blockstream Green
-----------------

**Available For**

 - Android/CalyxOS/GrapheneOS/LineageOS
 - iOS
 - Linux
 - MacOS
 - Windows
 
**Instructions**
 
 Follow the `guide <https://github.com/Start9Labs/electrs-wrapper/blob/master/docs/integrations/blockstreamgreen/guide.md>`__.


.. _blue-wallet:

BlueWallet
----------

 **Available For**

  - Android/CalyxOS/GrapheneOS/LineageOS
  - iOS
 
 **Instructions**

  Follow the `guide <https://github.com/Start9Labs/electrs-wrapper/blob/master/docs/integrations/bluewallet/guide.md>`__.


.. _electrum:

Electrum
--------

 **Available For**

  - Android/CalyxOS/GrapheneOS/LineageOS
  - Linux
  - MacOS
  - Windows
 
 **Instructions**
  
  Follow the `guide <https://github.com/Start9Labs/electrs-wrapper/blob/master/docs/integrations/electrum/guide.md>`__.


.. _fully-noded:

FullyNoded
----------

 **Available For**

  - iOS
  - MacOS

 **Instructions**
 
  #. In Fully Noded, go to `Settings > Node Manager > +`
  #. Enter your Bitcoin Core credentials. You can do this in one of two ways:

    (A) Use Fully Noded to scan your QuickConnect QR code (located in `Services > Bitcoin Core > properties`); or 
    (B) copy/paste your Bitcoin Core Tor Address (located in `Services > Bitcoin Core > Interfaces`) with :8332 appended, as well as you rpc username and password (located in `Services > Bitcoin Core > Config > RPC Settings`).


.. _ledger-live:

.. Ledger Live
.. ===========

.. .. tip:: Built for use with Ledger hardware devices

.. .. warning:: UNTESTED


.. _samourai:

Samourai
--------

 .. note:: Not Possible at this time - Requires Dojo Stack
 
 .. _sparrow:

Sparrow
-------

 **Available For**

  - Linux
  - MacOS
  - Windows
 
 **Instructions**
 
  Follow the `guide <https://github.com/Start9Labs/bitcoind-wrapper/blob/master/docs/integrations/sparrow/guide.md>`__.


.. _specter:

Specter
-------

 **Available For**

  - Linux
  - MacOS
  - Windows
 
 **Instructions**

  Follow the guide for `MacOS <https://github.com/Start9Labs/bitcoind-wrapper/blob/master/docs/integrations/specter/macos.md>`__ or `Windows <https://github.com/Start9Labs/bitcoind-wrapper/blob/master/docs/integrations/specter/windows.md>`__.


.. _trezor-suite:

Trezor Suite
------------

 .. tip:: Built for use with Trezor hardware devices
 
 **Available For**

  - Linux
  - MacOS
  - Windows
 
 **Instructions**
  
  Follow the `guide <https://github.com/Start9Labs/electrs-wrapper/blob/master/docs/integrations/trezor/guide.md>`__.


.. _bitcoin-cli:

Bitcoin-Cli
-----------

 Instructions for accessing the bitcoind service in order to issue commands directly.
 
 .. warning:: This is an advanced feature and should be used with caution. Start9 is not responsible for any damage you might cause through SSH access.
 
 #. First, you will need SSH access.  Please see the :ref:`setup instructions <ssh>` for details.
 #. Access your Embassy and then you can interact with the bitcoind docker container using the following syntax:

  .. code-block:: bash
    
      sudo docker exec -ti bitcoind.embassy bitcoin-cli COMMAND
 
 .. tip:: For example ``sudo docker exec -ti bitcoind.embassy bitcoin-cli getnetworkinfo``
 
 A list of possible commands can be found `here <https://chainquery.com/bitcoin-cli>`__.
 
 You can also drop into a shell using::
 
    sudo docker exec -ti bitcoind.embassy bash

 and then enter ``bitcoin-cli`` commands.  When you are finished, simply type ``exit``...
