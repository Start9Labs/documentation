.. _service-packaging-spec:

======================
Service Packaging Spec
======================

Welcome! If you are here, you are interested in becoming part of the mission to change the future of personal computing. This guide will take you through the process of packaging a service for EmbassyOS, a novel, self-hosted, sovereign computing platform.

A service in this context is any open source project that has been bundled into the appropriate format to run on EmbassyOS. By configuring and packaging a project according to this guide, it can be installed on EmbassyOS with no command line or technical expertise required. This opens up an entire platform for self-hosted software to run independent of third parties in a completely private and sovereign way for all individuals.

This guide is technical, but breaks down the steps for deployment. If you have any feedback or questions concerning this guide, please don't hesitate to `reach out <https://matrix.to/#/#community-dev:matrix.start9labs.com>`_ or submit a pull request with alterations.

To start, you will need to acquire EmbassyOS for testing the packaged service. This can be done by:

- building from `source <https://github.com/Start9Labs/embassy-os/blob/master/CONTRIBUTING.md#setting-up-your-development-environment>`_
- following the :ref:`DIY <diy>` guide
- :ref:`purchasing <purchasing>` the ready to run personal server

While you are waiting to receive or assemble a device, you can begin the process of packaging a project. The next sections outline these steps in detail.

Happy building!

.. toctree::
  :hidden:

  overview
  wrapper
  manifest
  docker
  makefile
  config
  properties
  instructions
  backups
  submission
