.. _embassyd:

==============
StartOS Daemon
==============

.. warning:: This is for advanced users only!! Anything you do while SSH'd into StartOS is NOT SUPPORTED, unless under the guidance of a Start9 technician.

``startd`` is the daemon that runs everything that could be considered StartOS.

When SSH'd into your Start9 server, you may see the status of ``startd`` with the following:

    .. code-block:: bash

        systemctl status startd

If you need to restart the daemon for some reason, you can do so with:

    .. code-block:: bash

        systemctl restart startd
