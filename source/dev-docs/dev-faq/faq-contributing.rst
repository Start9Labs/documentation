.. _faq-contributing:

************
Contributing
************

We ❤️ contributions! 

Please follow the guide `here <https://github.com/Start9Labs/embassy-os/blob/master/CONTRIBUTING.md>`_ and reach out to the `community dev <https://matrix.to/#/#community-dev:matrix.start9labs.com>`_ channel on Matrix with any questions.

Expound the following into FAQs move to other dev-faq section if necessary:
---------------------------------------------------------------------------

- Not requred to be a developer? * - Programming experience is not required**  Sysadmin exp would be helpful
- Release notes need to be in quotations? As it is a string? (they aren’t by default) – this is a yaml thing and SOMETIMES they are required and SOMETIMES NOT
- Ports in manifest – can leave as default (80), as it is a docker container?? - Sure
- Type definitions – is this just for dependencies? Can a blurb be added here for extra clarity?
- Alerts in LND example are not wrapped in quotes, same with CUPS release notes – yaml thing
- If already dockerized – use most of the existing, presumably?
- Config spec – Admin pass?
- Makefile
	- Not required (required for make)
- config yamls CAN be empty, if there is nothing to config