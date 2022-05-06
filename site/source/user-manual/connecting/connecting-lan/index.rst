.. _connecting-lan:

===================
Connecting Over LAN
===================

Whenever you are connected the same Local Area Network (LAN) as your Embassy (i.e. the same WiFi network), it is best to access your Embassy's LAN Address (.local URL). LAN connections are fast and secure and do not even require Internet access!

.. note:: Your Embassy creates its own Certificate Authority (CA) to establish trust with client devices.

Download Root CA
----------------

Video Guide:

  .. youtube:: aZYGVFBicbs
    :width: 100%



First, download your Embassy's Root CA. There are two way to accomplish this:

Option 1
........

Download it from html page you saved at the completion of :ref:`Initial Setup<initial-setup>`.

Option 2
........

visit your Embassy over :ref:`Tor<connecting-tor>` and navigate to *Embassy > LAN*, then click "Download".

    .. figure:: /_static/images/ssl/embassy_lan_setup.png
      :width: 60%
      :alt: LAN setup menu item

Trust Root CA
-------------

First instruct your **operating system** to trust your Embassy's Root CA.

    .. toctree::
      :maxdepth: 2

      lan-os/index

Then instruct your **browser** to trust your Embassy's Root CA. 

    .. note:: On a Mac - this is only necessary on Firefox. Brave, Chrome and Safari will already work.

    .. toctree::
      :maxdepth: 2

      lan-browser/index

Access your Embassy LAN Address
-------------------------------

With the Root CA downloaded and trusted by both your operating system and your browser, you can now visit your Embassy's LAN Address (.local URL) over secure https. Any service that offers a LAN URL will also be securely accessible!