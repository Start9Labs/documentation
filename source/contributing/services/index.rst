.. _service_pacakge:

***********************
Service Packaging Guide
***********************

Welcome! If you are here, you are interested in becoming part of the mission to change the future of personal computing. This guide will take you through the process of packaging a service for EmbassyOS, a novel, self-hosted, sovereign computing platform.

A service in this context is any open source project that has been bundled into the appropriate format to run on EmbassyOS. By configuring and packaging a project according to this guide, it can be installed on EmbassyOS with no command line or technical expertise required. This opens up an entire platform for self-hosted software to run independent of third parties in a completely private and sovereign way for all individuals. 

This guide is technical, but breaks down the steps for deployment. If you have any feedback or questions concerning this guide, please don't hesitate to `reach out <https://matrix.to/#/#community-dev:matrix.start9labs.com>`_ or submit a pull request with alterations.

To start, you will need to acquire EmbassyOS for testing the packaged service. This can be done by:

- building from `source <https://github.com/Start9Labs/embassy-os/blob/master/CONTRIBUTING.md#setting-up-your-development-environment>`_
- following the :ref:`DIY <diy>` guide
- :ref:`purchasing <purchasing>` the ready to run personal server

While you are waiting to receive or assemble a device, you can begin the process of packaging a project. The sections below outline these steps in detail.

Happy building!

.. toctree::
  :maxdepth: 1

  Overview <overview>
  Wrapper <wrapper>
  Manifest <manifest>
  Docker <docker>
  Makefile <makefile>
  Config <config>
  Properties <properties>
  Instructions <instructions>

Submission process
------------------

When you have built and tested your project for EmbassyOS, please send Start9 a submission with the project repository to ``dev@start9labs.com``. After being reviewed for security and compatibility, the service will be deployed to the marketplace and available for all EmbassyOS users to download. 

.. role:: raw-html(raw)
    :format: html

:raw-html:`<br />`