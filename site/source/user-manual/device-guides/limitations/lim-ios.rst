.. _lim-ios:

===
iOS
===

.. contents::
  :depth: 2 
  :local:

Tor
---
Only recently has it become possible to run Tor natively (in the background) on iOS, via :ref:`Orbot<tor-ios>`. Before that, the best chance for a Tor background process on iOS was the `iCepa Project <https://github.com/iCepa>`_.

Now, most apps which require .onion resolution should work.  Many apps, such as :ref:`Fully Noded <fully-noded>` and :ref:`Zap <zap>`, already supported Tor natively, and any Embassy service that had a Tor UI could be accessed using `Onion Browser <https://apps.apple.com/us/app/onion-browser/id519296448>`_, however, now almost any app should work when you have Orbot installed and :ref:`properly configured<tor-ios>`.

Matrix
------
The lack of background Tor support on iOS means that you cannot use `Element <https://github.com/vector-im/element-ios>`_ to connect to your Embassy Matrix server. This will be fixed when `Element introduces Tor support <https://github.com/vector-im/element-ios/issues/1085>`_ or when `iCepa Project <https://github.com/iCepa>`_ comes to fruition.
