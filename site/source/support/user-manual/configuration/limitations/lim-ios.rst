.. _lim-ios:

=====================
iOS Known Limitations
=====================

Tor
---
It is not currently possible to run Tor natively (in the background) on iOS.  The best chance for this functionality coming to iOS in the future is via the `iCepa Project <https://github.com/iCepa>`_.

Workarounds
===========
The only way to use Tor (in the background) on iOS is with apps that come with Tor built-in, such as :ref:`Zap Wallet <zap>`.  For visiting Embassy UI Tor sites, you may use `Onion Browser <https://apps.apple.com/us/app/onion-browser/id519296448>`_ or `Start9's Consulate <https://apps.apple.com/us/app/start9-consulate-browser/id1528124570>`_ application.

Matrix
------
The lack of Tor support on iOS means that Element/Matrix cannot be run on an iPhone in conjunction with your Embassy Matrix server, as that currently requires a Tor connection.  This will be fixed when `Element <https://github.com/vector-im/element-ios>`_ builds Tor into their app.  An issue specifically in regard to this can be found `here <https://github.com/vector-im/element-ios/issues/1085>`_.

Workarounds
===========
None currently known, but may be solved with forthcoming "clearnet" support on EmbassyOS.

Spark Wallet
------------
Unfortunately, Spark cannot currently be used in Consulate.  This issue is being tracked `here <https://github.com/Start9Labs/consulate-ios/issues/30>`__.
