.. _lightning-service:

=========
Lightning
=========

The following guide will get you up and running with a lightning node and walk you through opening your first channel.

.. toctree::
  :maxdepth: 1

  lightning-first-channel

Now that you're up and running, it's time to connect an interface so that you can use your node to make and receive payments from anywhere!

If you're using **Core Lightning (CLN)** and would like a direct connection you can select one of the following options:

  .. toctree::
    :maxdepth: 2

    connecting-cln

If you're using **LND**, you can select one of the following options:

  .. toctree::
    :maxdepth: 2

    connecting-lnd

If you would like to connect to LND via LND Connect **(LNC)** in order to avoid using Tor, you can do so with Alby and Zeus via the Lightning Terminal service:

  .. toctree::
    :maxdepth: 2

    connecting-lndc

If you'd like to allocate only a portion of your lightning node's liquidity to a wallet or have a wallet that can receive but not make payments, you can use **LNbits** - LNbits allows you to create a wallet that makes use of your node with only an alloted amount of sats and it works with both **Core Lightning** and **LND**

  .. toctree::
    :maxdepth: 3

    connecting-lnbits

