.. _concepts:


Concepts
********

Depending on your background, the Embassy platform may deal with some unfamiliar concepts. While it is not strictly *necessary* for you to understand these concepts to use your Embassy, we know many of you would like to.

.. _embassy:

Embassy
=======

What is the Embassy?
====================

The internet as we know it is organized into questioners, or clients, and answerers, or servers. When you open a mobile email app, say Gmail, the app (client) begins asking questions: "have I received new mail?", "what are my last 50 messages?", "what drafts am I in the midst of writing?", and so on. Your app's questions are sent to and heard by a Google-run server which then provides answers back to the client and are subsequently displayed to the screen.

The Embassy is exactly that: your very own "answerer", just like Google's, except managed simply and with ease by and for you alone.

In other words, it is a generalized private personal server capable of running all sorts of self hosted open source software.

When you see your credit card information on your banking app, your messages in your texting app, your passwords in your password management app, all of that information comes from somewhere in the cloud: some server run by some company somewhere on the planet. Who can see the data stored in that server? Who can edit it? It's not always clear, but the increasingly common practice of selling your data to advertisers and the high-profile cyber-security breaches of the last decade suggest a pessimistic outlook.

One thing is for certain though: if you control your server, then you control your data. Your finances, your communications, all of it is actually yours -- and only yours -- with an Embassy.

How does the Embassy work?
==========================

The Embassy runs on the Raspberry Pi 4B hardware with a Cortex-a72 CPU, 4GB of RAM, and has 2.4ghz and 5.0ghz IEEE 802.11AC wireless capabilities and a BLE internal speaker for audio feedback of system operations. It also features a high endurance MicroSD card, on which the operating system software is installed.

EmbassyOS is a stripped down version of Raspbian Buster Lite and handles all operations of your Embassy device. This core element of the technology stack is what enables you to set up, login, access your Embassy’s dashboard, and download and install services.

One of these operations is creating and managing Tor addresses, which are uniquely attributed to each service you download, as well as to the Embassy device itself. You can see your uniquely generated Tor address when you complete the setup process using the Setup App. This address is how you view your Embassy’s dashboard, which is actually just a website served up from your Embassy itself! It is authenticated, of course, so only you can access it.

You can connect to and manage your Embassy from any mobile device, desktop computer, or laptop computer. This is accomplished right through the browser by visiting your Embassy's private and unique URL.

Once on Embassy's web page, you can choose what services to install to the Embassy. Then, each installed service also receives its own private and unique URL, such that you can access it from the browser or any mobile app that supports using it as a backend.

The list of services will grow rapidly over the coming months, such that many things you currently do using cloud-based third party servers can be just as easily accomplished using your own personal cloud serving your own personal apps and storing your own private data. No trusted third parties at all.


In depth
--------
  :ref:`tor`

  :ref:`embassyos`

  :ref:`connecting`

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

* a custom application management layer, specialized for installing, running, and backing up .s9pk packaged services
* a layer responsible for Embassy specific operations, such as Tor, Backups, and Notifications

The .s9pk extension is Start9 Labs' custom package format based on tar. It encompasses the necessary components to compress, host, and install a service on the marketplace.


.. _open-source:

Open Source
===========

The Internet itself was built on free and publicly available code, with the values of collaboration, peer review, communication, and openness built into its very foundation. This decentralized model evolved into the open source movement, which uses these values to discover new ways to solve problems across boundaries and industries.

Open source software centered around the concept of user freedoms: freedom to see, modify, and redistribute the code to make it work for the user in whatever way they needed. It does not necessarily mean free to use. It means that the software will be better, cheaper, and more flexible if it is freely accessible, openly modifiable, and shared.

If anyone can inspect, modify, and distribute the code, bugs are more rapidly resolved, security vulnerabilities are more quickly audited and exposed. Community driven development efforts enable diverse collaboration which increases project reliability and longevity.

Distinct from open source software is proprietary, or closed source, software. Closed source software is strictly moderated, cannot legally be altered, copied, or distributed, and is paid for to be used as intended without modification. Only the code owners have the right to access the code.

As a company founded on the principles of freedom, every service we support is open source. We believe in contributing to the future of this vibrant and passionate ecosystem.


.. _lan:

LAN
===

A Local Area Network (LAN) is a computer network that interconnects computers within a limited area such as a residence, school, laboratory, university campus, or office building.

Devices on a LAN are private and protected, such that only devices connected to the same Ethernet or WiFi network can see or communicate with them.

Your Embassy hosts itself on the LAN and is reachable by visiting its *.local* URL in the browser while also connected to the LAN.

.. note:: Any device connected to a LAN can inspect all communications on that LAN. To avoid snooping, your Embassy's LAN communications are encrypted using :ref:`ssl`, which requires :ref:`additional setup <ssl-setup>`.


.. _ssl:

SSL
===

Visiting websites on the Tor network is slow. We wanted to provide a better option to access the Embassy at home. That’s why we created an address for the Embassy that can be accessed on your Local Area Network.

By default, this `.local` address is served like a regular website, over HTTP. Browsers make it noticeable when visiting a site over HTTP in the URL bar - it could be red, show an unlocked lock, or warn that the connection is not secure.

SSL certificates are what enable websites to move from HTTP to HTTPS, which increases security and makes browsers happy. Using the Secure Sockets Layer protocol, HTTPS enabled websites use certificates to establish authenticated and encrypted links between networked computers. It’s the standard technology for keeping an internet connection secure and safeguarding any sensitive data that is being sent between two devices, preventing third parties from reading and modifying any personal information transferred. They also verify ownership of a website.

Valid SSL certificates are typically issued and obtained from Certificate Authorities. These trusted third parties generate and distribute certificates, signing them with their trusted private key, which allows the clients who use them to verify their authenticity. Websites obtain a certificate from a CA then load it onto their website’s hosting service or server, allowing the website to load over HTTPS and have all traffic to and from the website be encrypted and secure.

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

.. _node:

Bitcoin Full Node
=================

The Embassy runs a Bitcoin Full Node.  When most people say "full node" what they mean (or should mean) is "fully validating node", meaning that the node is capable of enforcing the consensus rules of Bitcoin by accepting, validating, and relaying every transaction and block produced by the network. Fully validating nodes are necessary for Bitcoin to exist and function properly and are what protect the network from attackers attempting to bypass the consensus rules. A fully validating node (aka full node) does not need to store the entire blockchain to accomplish this. A node that stores the entire blockchain is called a "full archival node". It is the same as a full node, except that it stores every single valid transaction and block ever produced by the network. There are not many reasons why an individual would want to run a full archival node. Most of the benefits of node operatorship are encompassed by a basic full node described above. Full archival nodes have the added benefit of enabling a block explorer. For instace, if you were interested in looking up the history of a particular address or viewing the details of a transaction, neither of which were your own. If an address or transaction is your own, you can view those details using a pruned node.

All that said, it will soon be possible to run a full archival node with he embassy, should you determine you want block explorer functionality. This will require plugging in an external hard drive to the embassy and changing a setting in the app, and also a resycnhing of the blockchain from genesis.