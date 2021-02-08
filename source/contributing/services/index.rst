.. _service_pacakge:

***********************
Service Packaging Guide
***********************

This technical guide covers the necessary steps to package up a service for deployment to the EmbassyOS platform. To start, you will need to acquire EmbassyOS for testing the packaged service. This can be done by:

- building from `source <https://github.com/Start9Labs/embassy-os/blob/master/CONTRIBUTING.md#setting-up-your-development-environment>`_
- :ref:`DIY <diy>`
- :ref:`purchasing <purchasing>`

While you are waiting to assemble a device, you can begin the process of building your project in the format necessary to run on the Embassy. The sections below outline these steps in detail.

For reference, the `Hello world <https://github.com/Start9Labs/hello-world-wrapper>`_ repository should be used as an example. A project template can be cloned using the "Use this template" button in GitHub.

.. toctree::
  :maxdepth: 2

  Overview <overview>
  Wrapper <wrapper>
  Manifest <manifest>
  Docker <docker>
  Makefile <makefile>
  Config <config>
  Properties <properties>
  Docs <docs>

Submission process
------------------

When you have built and tested your project for EmbassyOS, please send us a submission with the project repository to ``dev@start9labs.com``. Reach out with questions in the Matrix community `dev channel <https://matrix.to/#/#community-dev:matrix.start9labs.com>`_.

.. role:: raw-html(raw)
    :format: html

:raw-html:`<br />`