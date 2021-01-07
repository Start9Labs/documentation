.. _tor-system-setup:

**************
Setting up Tor
**************

Operating Systems
=================

Setting up Tor on your operating system enables other applications to utilize its functionality beyond Tor Browser. For example, a bitcoin wallet software that connects to a remote bitcoin node over Tor, or Firefox web browser. In the following guides, we will walk you through setting up Tor globally. That way, you can integrate other applications that use Embassy services all over Tor!

Select your operating system to get started:

.. toctree::
  :maxdepth: 1

  MacOS<mac>
  Windows<windows>
  Linux<linux>
  Android<android>

.. _tor-browser-setup:

Browsers
========

To access websites that provide a Tor address (the :code:`.onion` URL), a Tor enabled browser is required. 

Tor Browser
-----------

The `Tor Browser <https://torproject.org/download/>`_ works right out of the box. Simply download, launch, and plug in a :code:`.onion` URL to access a website over Tor. No extra configuration is needed. However, it is important to note that this is the least flexible option - browser extensions are not enabled, so utilizing password managers such as Bitwarden is not possible. It is also the slowest experience for ordinary web browsing due to the extra hops it makes across the internet.

Brave Browser
-------------

Alternatively, you can use `Brave <https://brave.com/>`_ to access websites over Tor. After downloading and launching, you can open a Brave Private Window with Tor by pressing :code`Option ⌥ + Command ⌘ + N`.
However, this approach is also restricting, since browser extensions are disabled in this mode as well. Ordinary web browsing is also somewhat slower in a Private Window with Tor, so you might choose to navigate between Brave browser windows for either clearnet or Tor websites. This is a somewhat less uniform experience. 

Firefox Browser
---------------

Start9 recommends configuring Firefox to resolve Tor addresses. This is by far the most featureful and flexible approach. It requires a bit more work (< 5 minutes), but the resulting experience is worth the effort. It gives you the best of both worlds: you can browse clearnet websites without latency and visit Onion websites without switching browsers. And for Embassy owners, there is the added benefit of using your `Bitwarden password manager <https://medium.com/@start9labs/start9-welcomes-bitwarden-to-the-sovereign-app-store-8ad31e1a3070>`_!

After completing the steps above to setup Tor on your operating system:

#. Go to :code:`about:config` in the URL bar.
#. Accept any warnings that may appear about accessing advanced settings.
#. Search for :code:`dom.securecontext.whitelist_onions` and set the value to :code:`true`.
#. Restart Firefox.
#. Select your platform below to complete setup:

- :ref:`Android <firefox-tor-android>`
- :ref:`Linux <firefox-tor-linux>`
- :ref:`Mac <firefox-tor-mac>`
- :ref:`Windows <firefox-tor-windows>`

.. toctree::
  :maxdepth: 1
  :hidden:

  Firefox <firefox/index>