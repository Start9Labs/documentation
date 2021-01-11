.. _tor-firefox-setup:

*****************
Firefox Tor Setup
*****************

.. warning::
  These guides assume you have completed :ref:`setting up Tor for your operating system<tor-system-setup>`. Please visit this section first before you proceed as it is required for Firefox to properly work with Tor.

After completing the steps above to setup Tor on your operating system:

#. Go to :code:`about:config` in the URL bar.
#. Accept any warnings that may appear about accessing advanced settings.
#. Search for :code:`dom.securecontext.whitelist_onions` and set the value to :code:`true`.
#. Restart Firefox.
#. Select your platform below to complete setup:

.. toctree::
  :maxdepth: 1

  Android <android>
  Mac <mac>
  Linux <linux>
  Windows <windows>