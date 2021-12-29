.. _faq-contributing:

============
Contributing - **EXPAND**
============

We ❤️ contributions!

Please follow the guide `here <https://github.com/Start9Labs/embassy-os/blob/master/CONTRIBUTING.md>`_ and reach out to the `Community Dev <https://matrix.to/#/#community-dev:matrix.start9labs.com>`_ channel on Matrix with any questions.

Do I need to be a professional developer or have coding experience to contribute?
---------------------------------------------------------------------------------
Absolutely not!  Contributions can be as simple as finding a typo in our docs, making a suggestion on GitHub, creating educational or promotional content, and the list goes on!  Everyone that wants to contribute can do so in some unique way.  Please don't hesitate to ***CONTACT LINK*** us for ideas if you're not sure where to begin.

The guide says that a Makefile is optional, why is this?
--------------------------------------------------------
The ``Makefile`` simplifies the development process by putting all your build steps into one place so that you can simply use the ``make`` to build with.  A ``Makefile`` is not required however, and you may instead choose to use something like ``nix``, ``bash``, ``perl``, ``python``, or ``ruby`` for your build orchestration.

Expound the following into FAQs move to other dev-faq section if necessary:
---------------------------------------------------------------------------

- Release notes need to be in quotations? As it is a string? (they aren’t by default) – this is a yaml thing and SOMETIMES they are required and SOMETIMES NOT
- Alerts in LND example are not wrapped in quotes, same with CUPS release notes – yaml thing
- Ports in manifest – can leave as default (80), as it is a docker container?? - Sure

- Type definitions – is this just for dependencies? Can a blurb be added here for extra clarity?
- Config spec – Admin pass?
- Makefile
	- Not required, but simplifies dev process
