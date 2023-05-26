.. _specter:

=======
Specter
=======

There are two ways to use Specter with your Start9 server.

You can :ref:`run it as a service<specter-service>` in which case it will automatically connect to Bitcoin Core and can be optionally configured to connect via Electrs.

If you wish to do this in conjuction with a USB connecting hardware wallet/signing device like the Trezor One, then you will also have to install Specter Desktop on your local device. However the instructions for doing so are in the guide mentioned above. There is no need to follow the Specter Desktop guide below - that is just for people not wishing to use Specter as a service.

If you wish to use Specter Desktop and have it connect to your server's bitcoin node or Electrs service please :ref:`see here <specter-desktop>`.

.. toctree::
  :maxdepth: 1

  specter-service
  specter-desktop