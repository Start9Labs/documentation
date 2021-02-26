.. _faq:

***
FAQ
***

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

In depth
--------
  :ref:`tor`

  :ref:`embassyos`

  :ref:`connecting`


I can't connect to my Embassy.
==============================

If the Embassy is connected to a WiFi network, ensure your phone / computer is connected to the same network.

If the Embassy is connected via ethernet or to a router, ensure your phone / computer is connected to the same network as the router.

Ensure that your server has been running long enough for the startup chime noise to sound.


Do I plug the Embassy into my computer?
=======================================

The Embassy does not plug into any other device. It is a just a small computer without a screen designed for constant uptime, aka a server. You can connect to and manage your Embassy from any mobile device, desktop computer, or laptop computer. This is accomplished right through the browser by visiting your Embassy's private and unique URL.

In other words, the interface and admin dashboard for your Embassy is simply a web page/application served up by the Embassy itself into the browser. It's radical, but also very simple. It does not require any technical expertise.

Once on Embassy's web page, you can choose what services to install to the Embassy. Then, each installed service also receives its own private and unique URL, such that you can access it from the browser or any mobile app that supports using it as a backend.

The list of services will grow rapidly over the coming months, such that many things you currently do using cloud-based third party servers can be just as easily accomplished using your own personal cloud serving your own personal apps and storing your own private data. No trusted third parties at all.


Are my Internet requests anonymous and secure?
==============================================

EmbassyOS and every service on the Embassy are served on their own Tor Hidden Services with unique Tor addresses. The private keys used to create these addresses are generated on your phone or computer when you first set up the Embassy. No one, not even Start9, has any idea what your Tor addresses are, let alone the password(s) you choose to authenticate with them.

There is also the option to communicate with your Embassy using standard :ref:`ssl` encryption and a uniquely generated `.local` address. This method is faster than Tor, but can only be used on your home network.


I cannot connect to a service.
==============================

Make sure the service is started by viewing it in the Services tab in the Embassy dashboard menu. A green indicator bar should be visible.


Can I run multiple Embassies?
=============================

Yes, but there is currently no way to synchronize them. Each Embassy will be isolated from the others. In the future, we plan to enable a local mesh network so you can store backup data across devices.

Is the software open source?
============================

Yes! `EmbassyOS <https://github.com/Start9Labs/embassy-os>`_ is open sourced under the `Start9 Personal Use License <https://start9labs.com/license>`_.

Some of our other projects are currently open sourced under MIT. You can find these in the Start9 Labs GitHub `repository <https://github.com/Start9Labs/>`_.


Is there a product warranty?
============================

Yes. Start9 commits to serving each beta Embassy product released into the wild. We commit, to the best of our ability, to resolve any issue encountered with our provided hardware or software in a personalized manner until resolved.

Do not hesitate to :ref:`contact`. We strive to also provide quality and available customer service upfront.


Can I run EmbassyOS on a VPS or VM?
===================================

No, and we do not advise this. It is designed to be used on a RaspberryPi.


Is it possible to DIY the EmbassyOS on my own hardware?
=======================================================

Yes! You can follow the diy guide :ref:`here <diy>`. This option is great for people who already own the necessary hardware or who live outside the US and want to save on shipping and customs fees.

Additionally, EmbassyOS is available to build from `source <https://github.com/Start9Labs/embassy-os>`_ under the `Start9 Personal Use License <https://start9labs.com/license>`_. If you have the time and energy, it is possible to download and compile EmbassyOS yourself, for free, with the caveat that your "Embassy" will not have a product key generated by us. This means you will miss out on the perks that come along with purchasing from us, which will grow over time.
