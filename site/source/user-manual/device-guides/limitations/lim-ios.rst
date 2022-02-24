.. _lim-ios:

===
iOS
===

Tor
---
It is not currently possible to run Tor natively (in the background) on iOS. This means that many iOS apps will be unable to connect to your Embassy. The best chance for a Tor background process on iOS in the future is via the `iCepa Project <https://github.com/iCepa>`_.

Many apps, such as :ref:`Fully Noded <fully-noded>` and :ref:`Zap <zap>`, support Tor natively, and any Embassy service that has a Tor UI can be accessed using `Onion Browser <https://apps.apple.com/us/app/onion-browser/id519296448>`_.

Matrix
------
The lack of background Tor support on iOS means that you cannot use `Element <https://github.com/vector-im/element-ios>`_ to connect to your Embassy Matrix server. This will be fixed when `Element introduces Tor support <https://github.com/vector-im/element-ios/issues/1085>`_ or when `iCepa Project <https://github.com/iCepa>`_ comes to fruition.
