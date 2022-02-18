.. _ssh-tor:

============
SSH Over Tor
============

.. warning:: This is an advanced feature and should be used with caution. Start9 is not responsible for any damage you might cause while using SSH access.

.. note:: The following guide requires that you have already added an `SSH key to your Embassy<ssh>`.

This is currently only supported on Linux, but may work on Windows with `Torifier <https://torifier.com/>`_.

Setup
-----

#. First, you'll need one dependency, ``torsocks``, which will allow you to use SSH over Tor on the machine that you want access with.  Select your Linux flavor to install:

    .. tabs::

        .. group-tab:: Debian / Ubuntu

            .. code-block:: bash

                apt install torsocks

        .. group-tab:: Arch / Garuda / Manjaro

            .. code-block:: bash

                pacman -S torsocks

#. SSH in:

    .. code-block:: bash

        ssh root@embassy-xxxxxxx.local

#. Add the following 2 lines to ``/etc/tor/torrc`` **EITHER** by using your preferred text editor (such as ``nano`` or ``vim``):

    ``HiddenServiceDir /var/lib/tor/ssh``
    ``HiddenServicePort 22 127.0.0.1:22``

    **OR** by entering the following 2 commands:

    .. code-block:: bash

        echo "HiddenServiceDir /var/lib/tor/ssh" >> /etc/tor/torrc
        echo "HiddenServicePort 22 127.0.0.1:22" >> /etc/tor/torrc

#. Then reload the Tor configuration with your edits:

    .. code-block:: bash

        systemctl reload tor

#. Next, gather the ``.onion`` address you just created:

    .. code-block:: bash

        cat /var/lib/tor/ssh/hostname

    .. note:: All these changes are on the overlay and won't persist after a restart of your Embassy

#. Add an additional SSH key in your EmbassyUI if you want to access from a machine other than the one you did this setup with.

Access
------

Now to log in, simply use the following command, using the ``.onion`` hostname you printed above:

    .. code-block::

        torsocks ssh root@xxxxxxxxxxxxxxxxx.onion
