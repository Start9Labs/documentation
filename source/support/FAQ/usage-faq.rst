***********
Basic Usage
***********

Is it easy to use?
------------------
Yes!  The Embassy is designed to be plugged into power and internet, and after a short setup, is immediately ready to use.  Getting services is as easy as getting apps for a smartphone.

So I can run my own cloud?
--------------------------
Yes! No special skills or knowledge are required to host all your own services and replace those previously thought "necessary" for modern digital life.

Can I run multiple Embassies?
-----------------------------
Yes, but there is currently no way to synchronize or federate them.  We are working on ways to make this possible in the future.

What if I forget my Embassy password?
-------------------------------------
Check out the `docs <https://docs.start9labs.com/user-manual/general/forgot-password.html>`_ on forgot password, and let us know if you have any additional questions.  All your services and data will remain.

Can I move my Embassy to another location?  What happens when I do this?
------------------------------------------------------------------------
Yes, you can move the Embassy to another network.  Your service tor addresses will remain the same.

What’s the advantage of using the .local address over the .onion address?
-------------------------------------------------------------------------
If you are in your home network it is both faster and more private since the connection never leaves your household.  The downside is that it won’t work if you’re on the go.

Is the software Open Source?
----------------------------
Yes! EmbassyOS is open sourced under the `Start9 Personal Use License <https://start9labs.com/license>`_.  Some of our other projects are currently open sourced under MIT. You can find these in the Start9 Labs `GitHub repository <https://github.com/Start9Labs>`_.

Is there a product warranty?
----------------------------
Yes! Start9 commits, to the best of our ability, to serving each beta Embassy product released until the wild. We will resolve any issue encountered with our provided hardware or software in a personalized matter.  We strive to provide highly available, quality customer service.

Can you tell me about the License?
----------------------------------
EmbassyOS is published under our own Start9 Non-Commercial License, which has similar properties to many open source licenses with the exception that users cannot in any way, either through products or services, commercialize the source code, and any changes to the code or derivative works of the code are treated in the same manner. This means people will be welcome to access the source code, download it, use it, run it, fork it, change it, improve it - whatever they want - except sell it or sell services related to it.

I run a business, can I use an Embassy for tasks such as password management and file sharing?
----------------------------------------------------------------------------------------------
Absolutely.  An Embassy would be a great addition to any business as it is easy to use and provides services that you control, with no subscription fees.

With the addition of `BTCPay Server <https://btcpayserver.org/>`_, you can even run your own payment processor and accept cryptocurrency payments with no third party necessary!

Can I have multiple users on my Embassy?
----------------------------------------
Currently, the Embassy itself is designed to for a single user. There is no way to grant others access to your Embassy without sharing your personal, master password, which is not recommended. There are certain services, however, such as Bitwarden, File Browser, and Mastodon, that absolutely support multiple users (aka multi-tenancy, aka uncle Jim model) where people who trust you can create their own, personal accounts for these services on your Embassy. Just remind them that they are trusting you with their data, and that it might be preferable for them to take the final leap of self-sovereignty and get an Embassy of their own.

Do I need to delete existing backups before doing a new backup? Or does a new backup override the old backup?
-------------------------------------------------------------------------------------------------------------
No, you don’t need to delete the old backups. The technology we use updates the existing backup.

Can I clone my Embassy SD card for backup purposes?
---------------------------------------------------
It is absolutely possible to do a deep clone of the card as a backup if you wish to do so, but there are some considerations when it comes to this. First off, we don't test/support that officially; it doesn't get nearly the same level of attention that the backups feature *within* the Embassy does. Secondly, it may take a while to do a deep clone of the card since the ones we ship are 128GB and there isn't a really effective way to clone the Embassy card that isn't a byte-for-byte copy. However, if you do a byte for byte copy (128GB), and run pishrink you could flash that image file onto a new card and restore all of your data.

Another thing that must be mentioned, depending on what services you are running, if you are going outside of the Embassy backup flow you should be deeply aware of the implications of restoring backups. For instance, with LND it is *dangerous* to have multiple instances of the same LND node running at once because it can cause your channel funds to be completely lost. So while it would be safe for LND to restore the SD card if the original copy was completely offline, you should be aware that if it isn't offline you can lose all of that money.

This is not just if you run two embassies. It can also happen if you conduct any lightning activity including letting the commitment fees update. The embassy backup system informs each service when it has been restored through the backup flow so that each service can respond appropriately how it sees fit. At the moment LND and c-lightning both respond to this by deleting their dangerous state. If you restore with a deep clone of the sd, this information is not included and so LND/c-lightning will unwittingly expose themselves to channel fund loss.

And to be crystal clear, commitment fees update without user action.

So all in all, if you are running lightning, we strongly advise that you DO NOT DO THIS.

Why would I even buy this when I can just build it for free??
-------------------------------------------------------------
(1) White glove support. Because each Embassy comes with a unique product key engraved on it, and we have a record of all product keys ever, we can ask the user to verify their product key in order to receive a higher tier of support, such as phone calls.

(2) Supporting the project. Buying an Embassy from Start9 is your way of supporting the development of the project. And it's not just out of gratitude, but rather, a recognition that if the project isn't funded, the cool software stops coming.

(3) Convenience. This is the big one. It's true, some people will choose to use the software without buying an Embassy, but most will not. Very few people on Earth are comfortable using the command line, compiling code, and configuring an OS. Furthermore, hardware is necessary. Sure, some people already have a Raspberry Pi, and others may try to re-purpose an old laptop, but many people would be choosing between buying the Embassy hardware components themselves and assembling vs buying pre-assembled at a reasonable markup. And it's not just a pi, the Ambassador utilizes audio feedback, so a speaker is necessary too. Finally, due to the product key aspect, we can gate certain features of our hosted Service Marketplace. As in, if you buy an Embassy from us, certain services may be free, whereas they may be charged if you don't buy from us. Nothing stops a user from getting the service themselves from elsewhere, but again, convenience.

Bottom line...We are charging a very marginal rate for something incredibly powerful, and we think the convenience of a plug-and-play device, free service marketplace, and free white glove support is where the money is. Anyone could build their own couches too, but here is a reason furniture stores exist. How much is your time worth?

The fastest way to get support is via our `Telegram <https://t.me/start9_labs>`_ or `Matrix <https://matrix.to/#/!lMnRwPWnyQvOfAoEnD:matrix.start9labs.com>`_ channels.  You can also `email us <support@start9labs.com>`_.  Please do not hesitate to reach out!
