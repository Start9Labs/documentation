.. _updating-eos:

================
Updating StartOS
================

.. contents::
  :depth: 2
  :local:

.. note:: StartOS will **NEVER** update itself without your approval. But we highly recommended keeping StartOS up to date for the latest security and performance patches, as well as to take advantage of new features.

How to Update
-------------

#. When a new version of StartOS is available, a badge will appear on the "System" tab.
#. Go to *System > Software Update*.

    .. warning:: Ensure you have a stable Internet connection before beginning an OS update, and do not unplug your server while StartOS is downloading.

#. Read the release notes and click "Begin Update".
#. While the new version of StartOS is downloading, you may continue to use your device as usual.
#. Once the download is complete, you will be prompted to restart your server.
#. After restart, but before the web interface becomes available again, there may be an upgrade period of up to thirty minutes while data is transitioned.  
  
  **Do not unplug or otherwise power off your server during this period.**

Next, you may be prompted to refresh the browser window.

.. _manual-update:

Manual Update
-------------
In some cases, it may be necessary to manually update by :ref:`re-flashing StartOS<flashing>`.  Reasons might include:

  - Updating from a beta or other experimental install
  - :ref:`Reset your password<reset-password>`
  - Something went wrong during an update (very rare)
