.. _service_docker:

******************
Service Dockerfile
******************

Dockerfile
==========

This purpose of the Dockerfile is to define how to build the image for the service. It declares the environment and building stages.
The Dockerfile is responsible for mounting the service application to whatever volume the manifest specifies, typically ``/root``.

Since the build requires specific arm runtime environments, these base images can be imported into the Dockerfile as a starting point so the base system does not need to be completely redefined. This enables importing a specific build environment version that encapsulates any necessary libraries for running the service build, eg. golang, rust.

For instance: 

``FROM alpine:3.12``

``FROM arm32v7/alpine``

``FROM arm32v7/golang:alpine``

We recommended using ``alpine`` since it produces the smallest image. We try to keep the image under 100MB when possible.

Entry-point
===========

The ``docker_entrypoint.sh`` defines what to do when the service application starts.

It consists of a bash script that completes any environment setup (eg. creating folder substructure), sets any environment variables, and executes the run command. The only required feature of this file is to execute the run commands for EmbassyOS.

Example
=======

The `LND wrapper <https://github.com/Start9Labs/lnd-wrapper/blob/master/Dockerfile>`_ features a well defined Dockerfile, for example.

.. role:: raw-html(raw)
    :format: html

:raw-html:`<br />`