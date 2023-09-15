.. _lan-thunderbird:

=========================
Thunderbird Configuration
=========================
.. caution:: You will first need to complete :ref:`device-guides` for your client before continuing.  Take special note of the Thunderbird-specific instructions there.

Trusting Your Start9 CA in Thunderbird
======================================

#. Open Thunderbird and do the following:

    a. Select the hamburger menu bar and click **Settings** from the resulting drop-down menu.
  
    .. figure:: /_static/images/nextcloud/thunderbird-ca-1.png
        :width: 60%
        :alt: Thunderbird settings

    b. Search for the term ``config`` in the search bar and click **Config Editor...**.

    .. figure:: /_static/images/nextcloud/thunderbird-ca-2.png
        :width: 60%
        :alt: Thunderbird config editor

#. Search for ``security.enterprise_roots.enabled``, and click the toggle button to ``true``.

    .. figure:: /_static/images/nextcloud/thunderbird-ca-3.png
        :width: 60%
        :alt: Thunderbird enterprise_roots settings

Configure Tor in Thunderbird
============================

.. note:: This only applies if you have **NOT** enabled sytem-wide Automatic proxy configuration. 

#. Open Thunderbird and do the following:

    a. Select the hamburger menu bar and click **Settings** from the resulting drop-down menu.

    .. figure:: /_static/images/nextcloud/thunderbird-ca-1.png
        :width: 60%
        :alt: Thunderbird settings

    b. Search for the term ``proxy`` in the search bar and click **Settings...**:

    .. figure:: /_static/images/nextcloud/thunderbird-proxy-1.png
        :width: 60%
        :alt: Thunderbird proxy settings

#. Choose **Automatic proxy configuration URL** and paste the appropriate URL:

    .. caution:: This step assumes you saved proxy.pac file as per :ref:`device-guides`. If you saved this file in different location please provide correct path.

   - For Linux: ``file:///home/$YOUR_USERNAME/proxy.pac``
   - For macOS: ``file:///Library/WebServer/Documents/proxy.pac``
   - For Windows: ``file://C:/Program Files/Tor Browser/proxy.pac``

    .. figure:: /_static/images/nextcloud/thunderbird-proxy-2.png
        :width: 60%
        :alt: Thunderbird proxy url



