.. _bitcoin:

=======
Bitcoin
=======

Here you will find guides on how to connect different kinds of Bitcoin wallets (hardware and software) to your Embassy node, to complete your sovereign Bitcoin stack!

Tested Wallets
--------------
.. _blockstream-green:

Blockstream Green
=================

.. note:: Not Possible at this time - No ability to connect to a Bitcoin node

.. _blue-wallet:

BlueWallet
==========

.. note:: Not Possible at this time - Requires Electrum Server

.. _electrum:

Electrum
========

.. warning:: UNTESTED

.. _fully-noded:

FullyNoded
==========

Available For
.............
- iOS
- Mac

Instructions
............
1. In Fully Noded, go to `Settings > Node Manager > +`
2. Enter your Bitcoin Core credentials. You can do this in one of two ways: (1) Use Fully Noded to scan your QuickConnect QR code (located in `Services > Bitcoin Core > properties`); or (2) copy/paste your Bitcoin Core Tor Address (located in `Services > Bitcoin Core > Interfaces`) with :8332 appended, as well as you rpc username and password (located in `Services > Bitcoin Core > Config > RPC Settings`).

.. _ledger-live:

Ledger Live
===========

.. tip:: Built for use with Ledger hardware devices

.. warning:: UNTESTED

.. _samourai:

Samourai
========

.. note:: Not Possible at this time - Requires Dojo Stack

.. _sparrow:

Sparrow
=======

Available For
.............
- Linux
- Mac
- Windows

Instructions
............
Follow the `guide <https://github.com/start9labs/bitcoind-wrapper/docs/integrations/sparrow/guide.md>`_.

.. _specter:

Specter
=======

Available For
.............
- Linux
- Mac
- Windows

Instructions
............
Follow the `guide <https://github.com/Start9Labs/bitcoind-wrapper/tree/master/docs/integrations/specter>`_.

.. _trezor-suite:

Trezor Suite
============

.. tip:: Built for use with Trezor hardware devices

.. warning:: UNTESTED

.. _bitcoin-cli:

Using Bitcoin-Cli
-----------------

Instructions for accessing the bitcoind service in order to issue commands directly.

.. warning:: This is an advanced feature and should be used with caution. Start9 is not responsible for any damage you might cause through SSH access.

1. First, you will need SSH access.  Please see the :ref:`setup instructions <ssh-setup>` for details.
2. Access your Embassy and then you can interact with the bitcoind docker container using the following syntax::

    sudo docker exec bitcoind bitcoin-cli COMMAND

.. tip:: For example ``sudo docker exec bitcoind bitcoin-cli getnetworkinfo``

A list of possible commands can be found `here <https://chainquery.com/bitcoin-cli>`_.

You can also drop into a shell using::

    sudo docker exec -it bitcoind bash

and then enter ``bitcoin-cli`` commands.  When you are finished, simply type ``exit``...