.. _concepts:

********
Concepts
********

Depending on your background, the Embassy platform may deal with some unfamiliar concepts. While it is not strictly *necessary* for you to understand these concepts to use your Embassy, we know many of you would like to.

.. _embassyos:

EmbassyOS
=========

EmbassyOS refers to a custom Linux distribution along with a suite of software tools installed on the Embassy which makes it easy to:

* Install new services
* Uninstall services
* Upgrade services
* Upgrade your Embassy software to future versions
* Manage the data of each installed service

EmbassyOS is a forked branch of the Buster Lite version of Raspberry Pi OS. Start9 Labs augmented this base operating system to include:

* a custom application management layer specialized for installing, running, and backing up .s9pk packaged services
* a layer responsible for Embassy specific operations, such as Tor, Backups, and Notifications

The .s9pk extension is Start9 Labs' custom package format based on tar. It encompasses the necessary components to compress, host, and install a service on the marketplace.


.. _open-source:

Open Source
===========

The Internet itself was built on free and publicly available code, with the values of collaboration, peer review, communication, and openness built into its very foundation. This decentralized model evolved into the open source movement, which uses these values to discover new ways to solve problems across boundaries and industries.

Open source software centered around the concept of user freedoms: freedom to see, modify, and redistribute the code to make it work for the user in whatever way they needed. It does not necessarily mean free to use. It means that the software will be better, cheaper, and more flexible if it is freely accessible, openly modifiable, and shared. 

If anyone can inspect, modify, and distribute the code, bugs are more rapidly resolved, security vulnerabilities are more quickly audited and exposed. Community driven development efforts enable diverse collaboration which increases project reliability and longevity. 

Distinct from open source software is propriety, or closed source, software. Closed source software is strictly moderated, cannot legally be altered, copied, or distributed, and is paid for to be used as intended without modification. Only the code owners have the right to access the code.

As a company founded on the principles of freedom, every service we support is open source. We believe in contributing to the future of this vibrant and passionate ecosystem.


.. _lan:

LAN
===

A Local Area Network (LAN) is a computer network that interconnects computers within a limited area such as a residence, school, laboratory, university campus or office building.

Devices on a LAN are private and protected, such that only devices connected to the same Ethernet or WiFi network can see or communicate with them.

Your Embassy hosts itself on the LAN and is reachable by visiting its *.local* URL in the browser while also connected to the LAN.

.. note:: Any device connected to a LAN can inspect all communications on that LAN. To avoid snooping, your Embassy's LAN communications are encrypted using :ref:`ssl`, which requires :ref:`additional setup <ssl-setup>`.


.. _ssl:

SSL
===

Visiting websites on the Tor network is slow. We wanted to provide a be \er option to access the Embassy at home. That’s why we created an address for the Embassy that can be accessed on your Local Area Network. 

By default, this `.local` address is served like a regular website, over HTTP. Browser's makes it noticeable visiting a site over HTTP in the URL bar - it could be red, show an unlocked lock, or warn the connection is not secure. 

SSL certificates are what enable websites to move from HTTP to HTTPS, which increases security and makes browsers happy. Using the Secure Sockets Layer protocol, HTTPS enabled websites use certificates to establish authenticated and encrypted links between networked computers. It’s the standard technology for keeping an internet connection secure and safeguarding any sensitive data that is being sent between two devices, preventing third parties from reading and modifying any personal information transferred. They also verify ownership of a website. 

Valid SSL certificates are typically issued and obtained from Certificate Authorities. These trusted third parties generate and distribute certificates, signing them with their trusted private key, which allows the clients who use them to verify its authenticity. Websites obtain a certificate from a CA then load it on to their website’s hosting service or server, allowing the website to load over HTTPS and have all traffic to and from the website be encrypted and secure.

We decided to have the Embassy act as a Certificate Authority. It creates a self-signed certificate, which means that the private key used to sign the digital certificate is the Embassy’s own private key instead of a third party’s.

When you setup SSL for your Embassy and device, the certificate communicates to the client (a browser) that the server (the Embassy) demonstrated ownership of the domain (the `start9-xxxxxxxx.local` address) to the certificate authority (created on the Embassy) at the time of certificate issuance (during the setup process). The Embassy dashboard can then be accessed from a home network (LAN) using a secure HTTPS connection!

For more information on how to setup your devices to enable this feature visit :ref:`ssl-setup`.


.. _tor:

Tor
===

The Onion Router, or Tor, is a free and open source software that enables anonymous communication. By routing Internet traffic though a worldwide, volunteer overlay network of nodes, requests are bundled in layers of encryption like the layers of an onion. The request is relayed across nodes, decrypting a layer only to reveal the next relay destination, until the request meets its final destination, without revealing the source IP address.

If a malicious third party were to intercept a request, they would see a garbled mess of the remaining onion encryption, and would only know that it came from some onion node and was heading to some other onion node. The contents, source, and destination of the message are totally anonymous.

When you use Tor to communicate with services running on the Embassy, all the traffic is onion routed and encrypted, and there are no Tor exit nodes involved - it's totally private with no configuration needed.

Furthermore, every service on the Embassy has a different Tor address, including the device itself. This is for privacy reasons - should one Tor address be exposed, the others will not be compromised. Tor addresses are actually ed25519 keys, which means they also provide all the benefits of cryptographically secure private/public keys.