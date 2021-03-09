.. _ssl-setup:

*********
LAN Setup
*********

EmbassyOS has ability to securely access your Embassy over HTTPS from any browser in addition to the already secure option of communicating over Tor. This method of connecting is faster when on the same Local Area Network (LAN). This is accomplished by HTTPS using the OpenSSL protocol. Your Embassy becomes a Certificate Authority and uses its root certificate to generate a self-signed cert for you to import on your devices.

The following guides will take you through the steps to install and trust the SSL certificate generated from your Embassy.

#. For security, Secure LAN Setup is only available over the Embassy's Tor address. Ensure you are setup with a :ref:`Tor enabled browser <connecting>`.

#. Complete the setup for your device operating system:

   .. toctree::
    :maxdepth: 2

    desktop
    mobile