.. _embassyd:

========
EmbassyD
========

.. warning:: This is for advanced users only!! Anything you do while SSH'd into your Embassy is NOT SUPPORTED, unless under the guidance of a Start9 technician.

EmbassyD is the daemon that runs everything that could be considered EmbassyOS.

When SSH'd into your Embassy, you may see the status of EmbassyD with the following:

    .. code-block:: bash

        systemctl status embassyd

If you need to restart the daemon for some reason, you can do so with:

    .. code-block:: bash

        systemctl restart embassyd
        