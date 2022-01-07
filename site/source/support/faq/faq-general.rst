.. _faq-general:

===========
General FAQ
===========

What is Start9Labs?
-------------------
Start9Labs is a company based in Denver, CO that builds the Embassy and EmbassyOS.

What is the Embassy?
--------------------
The Embassy is a "shelf-top" computer built using a `Raspberry Pi <https://www.raspberrypi.org/products/raspberry-pi-4-model-b/>`_ for hardware and running EmbassyOS software.

The internet as we know it is organized into questioners, or clients, and answerers, or servers. When you open a mobile email app, say Gmail, the app (client) begins asking questions: "have I received new mail?", "what are my last 50 messages?", "what drafts am I in the midst of writing?", and so on. Your app's questions are sent to and heard by a Google-run server which then provides answers back to the client and are subsequently displayed to the screen.

The Embassy is exactly that: your very own "answerer", just like Google's, except managed simply and with ease by and for you alone.

In other words, it is a generalized private personal server capable of running all sorts of self hosted open source software.

When you see your credit card information on your banking app, your messages in your texting app, your passwords in your password management app, all of that information comes from somewhere in the cloud: some server run by some company somewhere on the planet. Who can see the data stored in that server? Who can edit it? It's not always clear, but the increasingly common practice of selling your data to advertisers and the high-profile cyber-security breaches of the last decade suggest a pessimistic outlook.

One thing is for certain though: if you control your server, then you control your data. Your finances, your communications, all of it is actually yours -- and only yours -- with an Embassy.

Why do I care?
--------------
As an example, let's talk about the password manager, Bitwarden. It may help convey the concept of a personal server. Currently, when you use Bitwarden, your passwords are stored on a physical device (aka server) owned and operated by the Bitwarden team. Your phone or laptop sends requests to their server when you want to do anything: create an account, create a new password, retrieve existing passwords, etc. Your passwords are stored on their device, encrypted with your Bitwarden password. They are the custodian of your passwords, similar to getting a safe deposit box at the bank. The bank keeps your valuables in their vault, presumably they don't know what's in the box, and any time you want access to your box, you ask the bank for permission. This is exactly how a hosted Bitwarden experience works, as well as just about everything on the internet.

When you install Bitwarden on your Embassy, by contrast, it's like building your own safe deposit box in a private bunker whose location is only known to you and whose keys only you posses. You create an account with yourself, store your passwords with yourself, etc. You are your own custodian. This same concept can be applied to just about everything on the Internet, without losing the convenience of the custodial model, which is what we are out to accomplish. This may sound cool, or neat, but it is so much more than that. The custodial data model is amongst the greatest threats to human liberty the world has ever seen.

This `podcast <https://www.youtube.com/watch?v=aylDowaSdzU&t=270s>`_ may help expound upon why this is important.

How does the Embassy work?
--------------------------
The Embassy runs on the Raspberry Pi 4B hardware with a Cortex-a72 CPU, 4GB of RAM, and has 2.4ghz and 5.0ghz IEEE 802.11AC wireless capabilities and an internal speaker for audio feedback of system operations. It also features a high endurance MicroSD card, on which the operating system software is installed.

EmbassyOS is a stripped down version of Raspbian Buster Lite and handles all operations of your Embassy device. This core element of the technology stack is what enables you to set up, login, access your Embassy’s dashboard, and download and install services.

One of these operations is creating and managing Tor addresses, which are uniquely attributed to each service you download, as well as to the Embassy device itself. You can see your uniquely generated Tor address when you complete the setup process using the Setup App. This address is how you view your Embassy’s dashboard, which is actually just a website served up from your Embassy itself! It is authenticated, of course, so only you can access it.

You can connect to and manage your Embassy from any mobile device, desktop computer, or laptop computer. This is accomplished right through the browser by visiting your Embassy's private and unique URL.

Once on Embassy's web page, you can choose what services to install to the Embassy. Then, each installed service also receives its own private and unique URL, such that you can access it from the browser or any mobile app that supports using it as a backend.

The list of services will grow rapidly over the coming months, such that many things you currently do using cloud-based third party servers can be just as easily accomplished using your own personal cloud serving your own personal apps and storing your own private data. No trusted third parties at all.

What is EmbassyOS?
------------------
EmbassyOS is a new kind of Operating System (OS). It is built from the ground up to allow anyone to easily run their own "cloud," become independent from Big Tech, and own their own data. EmbassyOS allows anyone to easily self-host their own software services.

EmbassyOS is a custom-built Linux distribution, which is a stripped down and beefed up version of `Raspbian Buster Lite OS <https://www.raspberrypi.org/software/operating-systems/>`_, along with a suite of software tools which make it easy to:

* Install, uninstall, and upgrade services from the custom Marketplace (similar to your phone's app store)
* Manage and run services that YOU control
* Upgrade your Embassy software with the latest features and security updates
* Backup services, and restore from backups if needed

Start9 augmented the original Raspbian OS to include:

* a custom application management layer, specialized for installing, running, and backing up .s9pk packaged services
* a layer responsible for Embassy specific operations, such as Tor, Backups, and Notifications

The .s9pk extension is Start9's custom package format based on tar. It encompasses the necessary components to compress, host, and install a service on the marketplace.

What are EmbassyOS Services?
----------------------------
A Service can be any piece of software added to the Marketplace.  All services are "self-hosted," meaning that you are in complete control of your data.  This means you can run your own "cloud!"  Learn more about managing services :ref:`here <managing-services>` and see our currently :ref:`Available Services <service-marketplace>`.

Does the Embassy ship worldwide?
--------------------------------
No.  We ship everywhere that DHL ships, with the unfortunate exception of Europe, where the VAT and Customs are so ridiculous that they cost as much as Embassy itself or more.  Please consider buying your hardware locally, and purchasing EmbassyOS as a download from us instead.

Does the Embassy have international electrical plugs?
-----------------------------------------------------
Power supplies for EU, AU, US, and UK are available.

Is the power supply that comes with Embassy 220v compatible?
------------------------------------------------------------
Yes.

Is the software Open Source?
----------------------------
Yes! EmbassyOS is open sourced under the `Start9 Personal Use License <https://start9.com/license>`_.  Some of our other projects are currently open sourced under MIT. You can find these in the Start9 `GitHub repository <https://github.com/Start9Labs>`_.

Is there a product warranty?
----------------------------
Yes! Start9 commits, to the best of our ability, to serving each beta Embassy product released into the wild. We will resolve any issue encountered with our provided hardware or software in a personalized matter.  We strive to provide highly available, quality customer service.

Can you tell me about the License?
----------------------------------
EmbassyOS is published under our own Start9 Non-Commercial License, which has similar properties to many open source licenses with the exception that users cannot in any way, either through products or services, commercialize the source code, and any changes to the code or derivative works of the code are treated in the same manner. This means people will be welcome to access the source code, download it, use it, run it, fork it, change it, improve it - whatever they want - except sell it or sell services related to it.

What kind of Internet connection is required to use Embassy?
------------------------------------------------------------
In general, any modern Internet connection is usually fine.  We have had reports from users on rural satellite connections with high latency (ping), and low up/download speeds who had issues accessing via Tor.  You can check your internet connection at `SpeedTest <https://speedtest.net>`_ to find your ping and speed.  If your ping is higher than 200ms and/or your speeds are lower than 5Mbps, you may want to host your Embassy somewhere with a better connection.  Please don't hesitate to contact us with any questions.

I run a business, can I use an Embassy for tasks such as password management and file sharing?
----------------------------------------------------------------------------------------------
Absolutely.  An Embassy would be a great addition to any business as it is easy to use and provides services that you control, with no subscription fees.

With the addition of `BTCPay Server <https://btcpayserver.org/>`_, you can even run your own payment processor and accept cryptocurrency payments with no third party necessary!

What are you using for a store backend?  Do you store my data?
--------------------------------------------------------------
Here is our exact situation currently:
Embassy device sales are processed through Shopify, which we do not like, but it was expedient in the early days, especially for shipping, so we went with it. Aside from a master list of email addresses for those who have explicitly opted in to our mailing list, all customer data is contained within Shopify. We do not duplicate it anywhere. We are asking Shopify to delete our customer data, but they claim it will take upward of 3 months to comply and we of course have no guarantee the data will actually be deleted permanently. This is partly why we exist...as such, we will be moving off of Shopify and onto a self-hosted solution, where Start9 alone controls our customer data for Embassy purchases, which we will delete as a matter of policy following a short grace period after delivery.

For EmbassyOS sales, we took the maximally private approach right out of the gate. When you buy EmbassyOS, the only thing we need is an email address, and you can only pay with bitcoin. That's it. Then, unless you have explicitly requested that we keep your email for mailing list purposes, we delete the email immediately upon transaction completion.

So...in summary: (1) the shipping data we currently have is stored in Shopify (2) we are asking Shopify to delete all our customer data (3) we will be migrating off of Shopify (4) going forward, we alone will control customer data and will purge it regularly (5) you can always assemble the hardware yourself and just buy EmbassyOS from us with bitcoin, which only requires an email, which is gets purged immediately.

I want to help, but I'm not a developer.  Are there any ways for non-coders to contribute?
------------------------------------------------------------------------------------------
1. Shill it to everyone and create awareness
2. Answer questions from new users in the community channels
3. Make tutorial videos
4. Write instruction manuals or commit to the docs
