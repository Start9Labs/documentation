.. _embassy-os-concept:

Embassy OS
==========

Embassy OS refers to a custom Linux distribution along with a suite of software tools installed on the Embassy which makes it easy to:

* Install new services
* Uninstall services
* Upgrade services
* Upgrade your Embassy software to future versions
* Manage the data of each installed service

Embassy OS is a forked branch of the Buster Lite version of Raspberry Pi OS. Start9 Labs augmented this base operating system to include:

* a custom application management layer specialized for installing, running, and backing up .s9pk packaged services
* a layer responsible for Embassy specific operations, such as Tor, Backups, and Notifications

The .s9pk extension is Start9 Labs's custom package format based on tar. It encompasses the necessary components to compress, host, and install a service on the marketplace.
