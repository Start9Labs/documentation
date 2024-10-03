.. _initial-setup-starting-fresh:

=============
Start Fresh
=============

.. contents::
  :depth: 2
  :local:

Set up a new server
-----------------------

The video below demonstrations how to set up a newly purchased Start9 server. If you are familar with the process or you have recently :ref:`flashed <flashing>` an existing server, you may want to skip the video and scroll down straight to Step 1.


        .. youtube:: DzikmY4S42Y
            :width: 95%

 

**First Steps**

#. Connect your server to power and ethernet.

#. From a client device (desktop/laptop/phone) connected to the same local network as your server, open a browser and visit ``http://start.local``.

	.. note:: If you are `not` using a Raspberry Pi, you can also plug a monitor and keyboard into the server. This is known as "Kiosk mode" but is not recommedend for general use.

#. Follow the on-screen instructions.

_________


Start Over
--------------

To `Factory Reset` an existing server, you must first go through the flashing process to reinstall StartOS.

#. Flash your device with a fresh install of StartOS by following the :ref:`flashing guides <flashing>`, making sure to select `Factory Reset` when booting from external media.

	.. note:: On a Raspberry Pi you will simply flash the microSD card and reinsert it, connect to power and skip to step 3.

      .. figure:: /_static/images/flashing/factory-reset.png
            :width: 55%

#. After install is complete, you will be prompted to remove your externally connected USB drive you used with Balena Etcher and restart.


#. From a client device (desktop/laptop/phone) connected to the same local network as your server, open a browser and visit ``http://start.local``.

#. Choose `Start Fresh` and follow the on-screen instructions.

_________


Troubleshooting
---------------
If you followed the above instructions and are experiencing issues, click :ref:`here <setup-troubleshoot>` to resolve.

You can also to `reach out to support <https://start9.com/contact>`_ if you need a hand.
