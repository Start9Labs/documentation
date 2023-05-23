.. _faq-general:

===========
General FAQ
===========

.. contents::
  :depth: 2 
  :local:

What is Start9 Labs?
--------------------
Start9 Labs is a small, but quickly growing group of builders based in Denver, CO (with a global team) that build Start9 servers and StartOS.

What is a Start9 server?
------------------------
A Start9 server is a "shelf-top" personal computer running StartOS as its operating system.

The internet as we know it is organized into questioners, or clients, and answerers, or servers. When you open a mobile email app, say Gmail, the app (client) begins asking questions: "have I received new mail?", "what are my last 50 messages?", "what drafts am I in the midst of writing?", and so on. Your app's questions are sent to and heard by a Google-run server which then provides answers back to the client and are subsequently displayed to the screen.

A server is exactly that: your very own "answerer", just like Google's, except managed simply and with ease by and for you alone.

In other words, it is a generalized private personal server capable of running all sorts of self hosted open source software.

When you see your credit card information on your banking app, your messages in your texting app, your passwords in your password management app, all of that information comes from somewhere in the cloud: some server run by some company somewhere on the planet. Who can see the data stored in that server? Who can edit it? It's not always clear, but the increasingly common practice of selling your data to advertisers and the high-profile cyber-security breaches of the last decade suggest a pessimistic outlook.

One thing is for certain though: if you control your server, then you control your data. Your finances, your communications, all of it is actually yours -- and only yours.

Why do I care?
--------------
As an example, let's talk about the password manager, Bitwarden. It may help convey the concept of a personal server. Currently, if you sign up with Bitwarden, your passwords are stored on a physical device (aka server) owned and operated by the Bitwarden team. Your phone or laptop sends requests to their server when you want to do anything: create an account, create a new password, retrieve existing passwords, etc. Your passwords are stored on their device, encrypted with your Bitwarden password. They are the custodian of your passwords, similar to getting a safe deposit box at the bank. The bank keeps your valuables in their vault, presumably they don't know what's in the box, and any time you want access to your box, you ask the bank for permission. This is exactly how a hosted Bitwarden experience works, as well as just about everything on the internet.

When you install Bitwarden on StartOS, by contrast, it's like building your own safe deposit box in a private bunker whose location is only known to you and whose keys only you posses. You create an account with yourself, store your passwords with yourself, etc. You are your own custodian. This same concept can be applied to just about everything on the Internet, without losing the convenience of the custodial model, which is what we are out to accomplish. This may sound cool, or neat, but it is so much more than that. The custodial data model is amongst the greatest threats to human liberty the world has ever seen.

This `podcast <https://www.youtube.com/watch?v=aylDowaSdzU>`_ may help expound upon why this is important.

.. youtube:: aylDowaSdzU
    :width: 100%

How does StartOS work?
----------------------
StartOS (see next question) is based on Linux and handles all operations of your server device. This core element of the technology stack is what enables you to set up, login, access your server's dashboard, and install services.

One of these operations is creating and managing Tor addresses, which are uniquely attributed to each service you download, as well as to the server itself. You can see your uniquely generated Tor address when you complete the setup process using the Setup App. This address is how you view your server's dashboard, which is actually just a website served up from your server itself! It is authenticated, of course, so only you can access it.

You can connect to and manage your server from any mobile device, desktop computer, or laptop computer. This is accomplished right through the browser by visiting your server's private and unique URL.

Once on your server's web page (the StartOS dashboard), you can choose what services to install. Then, each installed service also receives its own private and unique URL, such that you can access it from the browser or any mobile app that supports using it as a backend.

The list of services will grow rapidly over the coming months and years, such that many things you currently do using cloud-based third party servers can be just as easily accomplished using your own personal cloud serving your own personal apps and storing your own private data. No trusted third parties at all.

What is StartOS?
----------------
StartOS is a new kind of Linux Operating System (OS). It is a built from the ground up to allow anyone to easily run their own "cloud," become independent from Big Tech, and own their own data. StartOS allows anyone to easily host their own software services.

StartOS is custom-built Linux distribution with a suite of software tools which make it easy to:

* Install, uninstall, and upgrade services from a Marketplace (similar to your phone's app store)
* Manage and run services that YOU own and control
* Upgrade StartOS with the latest features and security updates
* Backup services, and restore from backups if needed

It includes:

* a custom application management layer, specialized for installing, running, and backing up .s9pk packaged services
* a layer responsible for StartOS specific operations, such as Tor, Backups, and Notifications
* a system of :ref:`Health Checks<health-checks>` for simple monitoring
* an SDK for developers, including an "Actions" API to simplify complex operations for the common user
* and much, much more.  Please see the corresponding :ref:`Concepts<start-os>` section.

The `.s9pk` extension is Start9's custom package format based on `tar`. It encompasses the necessary components to compress, host, and install a service on a Marketplace registry.

What are StartOS Services?
--------------------------
A Service can be any piece of software added to the Marketplace.  Unlike "apps," services are (usually) "server-side" software, meaning they are intended to run 24/7/365 and listen for requests from your clients (apps).  All services are "self-hosted," meaning that you are in complete control of your data.  This means you can run your own "cloud!"  Learn more about managing services :ref:`here <managing-services>` and see our currently `Available Services <https://marketplace.start9.com/>`_.

Does Start9 ship worldwide?
--------------------------
We ship everywhere that DHL ships.  Please consider that in some countries, the VAT and Customs fees are so ridiculous that they cost as much as the server itself.  You may wish to consider buying your hardware locally and building your own device, downloading StartOS from our github, and `donating <https://donate.start9.com/>`_ to us.  Please see the :ref:`DIY<diy>` page for details.

Do you have international electrical plugs?
-------------------------------------------
Power supplies for EU, AU, US, and UK are available.

Is the power supply 220v compatible?
------------------------------------
Yes.

Does StartOS have a license?
----------------------------
StartOS is published under our own Start9 Non-Commercial License, which has similar properties to many open source licenses with the exception that users cannot in any way, either through products or services, commercialize the source code, and any changes to the code or derivative works of the code are treated in the same manner. This means people will be welcome to access the source code, download it, use it, run it, fork it, change it, improve it - whatever they want - except sell it or sell services related to it.

Is there a product warranty?
----------------------------
Yes! The full warranty for a device purchased from us is located on the insert in the box (1 year).  Furthermore, Start9 commits, to the best of our ability, to serving our users. We will resolve any issue encountered with our provided hardware or software in a personalized manner.  We strive to provide highly available, quality customer service.

What kind of Internet connection does a server require?
-------------------------------------------------------
In general, any modern Internet connection is usually fine.  We have had reports from users on rural satellite connections with high latency (ping), and low up/download speeds who had issues accessing via Tor.  You can check your internet connection at `SpeedTest <https://speedtest.net>`_ to find your ping and speed.  If your ping is higher than 200ms and/or your speeds are lower than 5Mbps, you may want to locate your server somewhere with a better connection.  Please don't hesitate to contact us with any questions.

I run a business, can I use StartOS for tasks such as password management and file sharing?
-------------------------------------------------------------------------------------------
Absolutely.  A StartOS server would be a great addition to any business as it is easy to use and provides services that you control, with no subscription fees.

With the addition of `BTCPay Server <https://btcpayserver.org/>`_, you can even run your own payment processor and accept cryptocurrency payments with no third party necessary!

What are you using for a store backend?  Do you store my data?
--------------------------------------------------------------
Here is our exact situation currently:
Server sales are processed through Shopify, which we do not like, but it was expedient in the early days, especially for shipping, so we went with it. Aside from a master list of email addresses for those who have explicitly opted in to our mailing list, all customer data is contained within Shopify. We do not duplicate it anywhere. We are asking Shopify to delete our customer data, but they claim it will take upward of 3 months to comply and we of course have no guarantee the data will actually be deleted permanently. This is partly why we exist...as such, we will be moving off of Shopify and onto a self-hosted solution, where Start9 alone controls our customer data for purchases, which we will delete as a matter of policy following a short grace period after delivery.

In summary: (1) the shipping data we currently have is stored in Shopify (2) we are asking Shopify to delete all our customer data (3) we will be migrating off of Shopify (4) going forward, we alone will control customer data and will purge it regularly (5) you can always assemble the hardware yourself and just download StartOS for free.

We are currently working on a better solution.

I want to help, but I'm not a developer.  Are there any ways for non-coders to contribute?
------------------------------------------------------------------------------------------
1. Shill it to everyone and create awareness
2. Answer questions from new users in the community channels
3. Make tutorial videos
4. Write instruction manuals or commit to the docs

Check out the `Contribute <https://start9.com/contribute>` page for more details.
