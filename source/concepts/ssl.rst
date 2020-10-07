.. _ssl-concept:

SSL / TLS
=========

Visiting websites on the Tor network is slow. We wanted to provide a be \er option to access the Embassy at home. That’s why we created an address for the Embassy that can be accessed on your Local Area Network. 

By default, this `.local` address is served like a regular website, over HTTP. Browser's makes it noticeable visiting a site over HTTP in the URL bar - it could be red, show an unlocked lock, or warn the connection is not secure. 

SSL certificates are what enable websites to move from HTTP to HTTPS, which increases security and makes browsers happy. Using the Secure Sockets Layer protocol, HTTPS enabled websites use certificates to establish authenticated and encrypted links between networked computers. It’s the standard technology for keeping an internet connection secure and safeguarding any sensitive data that is being sent between two devices, preventing third parties from reading and modifying any personal information transferred. They also verify ownership of a website. 

Valid SSL certificates are typically issued and obtained from Certificate Authorities. These trusted third parties generate and distribute certificates, signing them with their trusted private key, which allows the clients who use them to verify its authenticity. Websites obtain a certificate from a CA then load it on to their website’s hosting service or server, allowing the website to load over HTTPS and have all traffic to and from the website be encrypted and secure.

We decided to have the Embassy act as a Certificate Authority. It creates a self-signed certificate, which means that the private key used to sign the digital certificate is the Embassy’s own private key instead of a third party’s.

When you setup SSL for your Embassy and device, the certificate communicates to the client (a browser) that the server (the Embassy) demonstrated ownership of the domain (the `start9-xxxxxxxx.local` address) to the certificate authority (created on the Embassy) at the time of certificate issuance (during the setup process). The Embassy dashboard can then be accessed from a home network (LAN) using a secure HTTPS connection!

For more information on how to setup your devices to enable this feature visit :ref:`ssl-setup`.