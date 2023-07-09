.. _connecting-lan:

===================
Connecting Over LAN
===================
Whenever you are connected to the same Local Area Network (LAN) as your Start9 server, it is best to access your Start9 server's LAN Address (.local URL). LAN connections are fast and secure and do not even require Internet access!

.. note:: StartOS creates its own Certificate Authority (CA) to establish trust with client devices.

Download Root CA
----------------
First, download your Start9 server's Root CA. There are two way to accomplish this:

    - Download it from the info page you saved at the completion of :ref:`Initial Setup<initial-setup>`, OR

    - Navigate to *System > LAN*, then click "Download Certificate".

      .. figure:: /_static/images/ssl/lan_setup.png
        :width: 60%
        :alt: LAN setup menu item

Trust Root CA
-------------
Instruct your **client device** to trust your Start9 server's Root CA.

    .. toctree::
      :maxdepth: 2

      lan-os/index

**RECOMMENDED**: :ref:`Configure Firefox<lan-ff>` to use your system's certificate store. 

    .. note:: Brave, Chrome and Safari will work without additional configuration.

**OPTIONAL**: :ref:`Configure Thunderbird<lan-thunderbird>` to use your system's certificate store (for Nextcloud integration).

Access your Start9 server's LAN Address
---------------------------------------
With the Root CA downloaded and trusted by both your operating system and your browser, you can visit your Start9 server's LAN Address (.local URL) over secure ``https``. Any service that offers a LAN URL will also be securely accessible!

.. toctree::
   :maxdepth: 2
   :hidden:

   lan-ff
   lan-thunderbird
