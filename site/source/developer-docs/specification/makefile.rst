.. _service_makefile:

========
Makefile
========

.. note:: *This file is optional*

A Makefile serves as a convenience for outlining the build. This helps streamline additional developer contributions to the project. Please reference the GNU `documentation <https://www.gnu.org/software/make/manual/html_node/Introduction.html>`_ for implementation details.

An alternative to using ``make`` is to use the `nix <https://nixos.wiki/wiki/Nix>`_ specification.

This purpose of this file is to:

- Read the docker container and build the project
- Build all prerequisites for running the docker file
- Build all dependencies
- Package assets and docker image using ``start-sdk pack``

Example
-------

The `LND wrapper <https://github.com/Start9Labs/lnd-wrapper/blob/master/Makefile>`_ features a well defined Makefile, for example.

.. role:: raw-html(raw)
    :format: html

:raw-html:`<br />`
