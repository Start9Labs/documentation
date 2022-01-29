.. _lim-android:

=======
Android
=======

Local Access
------------
Older versions of Android (previous to version 12, and some custom ROMs, such as Graphene/Calyx) do not have native support for :ref:`mDNS<mdns>` and therefore cannot resolve ``.local`` addresses.  This issue has been long known by Google, and can be tracked `here <https://issuetracker.google.com/issues/140786115>`_ (Google account required to view).

Workarounds
===========
An app developer can add mDNS support, and some projects, such as Chromium, have long `considered it <https://bugs.chromium.org/p/chromium/issues/detail?id=405925>`_, but the real solution is for support to occur at the OS level.

LineageOS
---------
Unfortunately, there seems to be a bug in Lineage that makes using Firefox over Tor currently unusable.  Currently, this feature works fine on Calyx and Graphene.
