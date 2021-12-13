.. _lim-ios:

=====================
iOS Known Limitations
=====================

Tor
---
It is not currently possible to run Tor natively (in the background) on iOS.  The best chance for this functionality coming to iOS is via the `iCepa Project <https://github.com/iCepa>`_.

Workarounds
...........
The only way to use Tor on iOS is with apps that come with Tor built-in, such as :ref:`Zap Wallet <zap>`.

Matrix
------
The lack of Tor support on iOS means that Element/Matrix cannot be run on an iPhone in conjunction with your Embassy Matrix server, as that currently requires a Tor connection.  This will be fixed if `Element <https://github.com/vector-im/element-ios>` builds Tor into their app.

Workarounds
...........
None currently known.
