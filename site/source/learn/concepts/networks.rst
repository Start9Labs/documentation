.. _networks:

========
Networks
========

.. contents::
  :depth: 2 
  :local:

.. _lan:

LAN
---
A Local Area Network (LAN) is a computer network that interconnects computers within a limited area such as a residence, school, laboratory, university campus, or office building.

Devices on a LAN are private and protected, such that only devices connected to the same Ethernet or WiFi network can see or communicate with them.

You can reach your StartOS dashboard by visiting ``start.local`` for initial setup, and ``<custom-address>.local`` after setup from any browser while also connected to the LAN.

.. note:: Any device connected to a LAN can inspect all communications on that LAN. To avoid snooping, LAN communications are encrypted using :ref:`ssl`, which requires :ref:`additional setup <connecting-lan>`.

.. _lan-cert:

LAN Certificate
---------------
When you visit an SSL website (one with the ``https://`` prefix), the connection is secured using SSL/TLS encryption. The website will present your browser with an SSL certificate showing that the owner of the website has been authenticated by a recognized Certificate Authority (CA).  In the case of StartOS, **you** are the CA, and **you** sign your own certificate.  No third party required!

Your certificate is created when you initially setup StartOS, or migrate to a new version of the OS, such as 0.3.0.

.. _mdns:

MDNS
----
Multicast Domain Name System (MDNS) is a protocol that resolves a human-readable hostname to an IP address on a small network, such as the home or office network where you host your Start9 server.

This is known as a "zeroconf," or zero-configuration service, meaning that you can instantly visit a human-recognizable domain name, such as ``start.local`` from your network.

This domain is not broadcast outside of your local network, so it is as private and secure as your LAN.

.. _ssl:

SSL
---
Remote connections to your server (when you are on the go) are handled via :ref:`tor<tor>`.  Visiting websites on the Tor network can be slow and cumbersome. We wanted to provide a better user experience when accessing your server at home. That's why we created an address for StartOS that can be accessed on your Local Area Network (:ref:`LAN<lan>`).

By default, this ``.local`` address is served like a regular website, over HTTP. Browsers make it noticeable when visiting a site over HTTP in the URL bar - it could be red, show an unlocked lock, or warn that the connection is not secure.

SSL certificates are what enable websites to move from HTTP to HTTPS, which increases security and makes browsers happy (a happy 'green lock' icon, instead of an angry 'red unlocked' one in the URL bar). Using the Secure Sockets Layer protocol, HTTPS enabled websites use certificates to establish authenticated and encrypted links between networked computers. This is the standard technology for keeping an internet connection secure and safeguarding any sensitive data that is being sent between two devices, preventing third parties from reading and modifying any personal information transferred. These certificates also verify ownership of a website.

Valid SSL certificates are typically issued and obtained from Certificate Authorities. These trusted third parties generate and distribute certificates, signing them with their trusted private key, which allows the clients who use them to verify their authenticity. Websites obtain a certificate from a CA then load it onto their website's hosting service or server, allowing the website to load over HTTPS and have all traffic to and from the website be encrypted and secure.

We decided to have StartOS act as a Certificate Authority (CA). It creates a self-signed certificate, which means that the private key used to sign the digital certificate is your server's own private key instead of a third party's.  

When you setup SSL for StartOS and a client device, the certificate communicates to the client (a browser) that the server demonstrated ownership of the domain (``<custom-address>.local``) to the certificate authority at the time of certificate issuance (during the setup process). The StartOS dashboard can then be accessed from a home network (LAN) using a secure HTTPS connection!  You own this entire stack and no third party can interfere.

For more information on how to setup your devices to enable this feature visit :ref:`connecting-lan`.


.. _tor:

Tor
---
The Onion Router, or Tor, is a free and open source software that enables anonymous communication. By routing Internet traffic through a worldwide, volunteer overlay network of nodes, requests are bundled in layers of encryption like the layers of an onion. The request is relayed across nodes, decrypting a layer only to reveal the next relay destination, until the request meets its final destination, without revealing the source IP address.

If a malicious third party were to intercept a request, they would see a garbled mess of the remaining onion encryption, and would only know that it came from some onion node and was heading to some other onion node. The contents, source, and destination of the message are completely anonymous.

When you use Tor to communicate with services running on StartOS, all of the traffic is onion-routed and encrypted, and there are no Tor exit nodes involved - it's completely private with no configuration needed.

Furthermore, every service on StartOS has a different Tor address, including the device itself. This is done for privacy purposes - should one Tor address be exposed, the others will not be compromised. In actuality, Tor addresses are ed25519 keys, which means they also provide all the benefits of cryptographically secure private/public keys.

Here's an introductory video on `Tor <https://www.youtube.com/watch?v=6czcc1gZ7Ak>`__.

.. youtube:: 6czcc1gZ7Ak
  :width: 100%

.. _tor-browser:

Tor Browser
-----------
The Tor Browser is a version of Firefox specifically made for use with the Tor Network.  Tor Browser has Tor built-in, so that you do not need to be running Tor natively in order to use the network.  This makes it a great browser for use with your server.

.. caution::  Tor Browser has some advanced security and privacy settings, which can be useful, but please keep in mind that if you raise them from the standard level, you may be unable to use some websites, such as your StartOS dashboard.

.. _hidden-service:

Tor Hidden Service
------------------
A Tor Hidden Service is essentially just software or a website that is only broadcast on the Tor network.  These are identified by a long, random public key, and end with the ``.onion`` suffix.  

For example, you can visit http://privacy34kn4ez3y3nijweec6w4g54i3g54sdv7r5mr6soma3w4begyd.onion to view the Start9 homepage on Tor.

In order to reach a Tor Hidden Service, you must use a browser that can handle ``.onion`` domains, such as `The Tor Browser <https://www.torproject.org/download/>`_ or by configuring :ref:`Firefox <tor-firefox>`.
