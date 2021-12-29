.. _bitcoin:

=======
Bitcoin - **NEED GUIDES WRITTEN (in bitcoind repo?)**
=======

Here you will find guides on how to connect different kinds of Bitcoin wallets (hardware and software) to your Embassy node, to complete your sovereign Bitcoin stack!

.. _bitcoin-cli:

Using Bitcoin-Cli
-----------------

Instructions for accessing the bitcoind service in order to issue commands directly.

.. warning:: This is an advanced feature and should be used with caution. Start9 is not responsible for any damage you might cause through SSH access.

1. First, you will need SSH access.  Please see the :ref:`setup instructions <ssh-setup>` for details.
2. Access your Embassy and then you can interact with the bitcoind docker container using the following syntax::

    sudo docker exec bitcoind bitcoin-cli COMMAND

.. admonition:: Example

    sudo docker exec bitcoind bitcoin-cli getnetworkinfo

A list of possible commands can be found `here <https://chainquery.com/bitcoin-cli>`_.

You can also drop into a shell using::

    sudo docker exec -it bitcoind bash

and then enter ``bitcoin-cli`` commands.  When you are finished, simply type ``exit``.

.. _electrum:

Electrum
--------

**UNTESTED**

.. _fully-noded:

FullyNoded
----------

.. note:: Mac only

**UNTESTED**

.. _samourai:

Samourai
--------

.. note:: Android only

**UNTESTED**

.. _sparrow:

Sparrow
-------

**UNTESTED**

.. _specter:

Specter
-------

Current - https://github.com/Start9Labs/bitcoind-wrapper/tree/master/docs/integrations/specter

**UNTESTED**

.. _trezor:

Trezor Suite
------------

.. tip:: Built for use with Trezor hardware devices

**UNTESTED**

.. _ledger:

Ledger Live
-----------

.. tip:: Built for use with Ledger hardware devices

**UNTESTED**
