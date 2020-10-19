.. _service_makefile:

****************
Service Makefile
****************

*This file is optional*
It is a convenience if anyone else wants to contribute to project. An alternative is using the nix specification.

This purpose of this file is to:
 - read the docker container and build the project
 - build all prerequisite for running the docker file, build all dependencies of application, and package into .s9pk (ie. invoke ``appmgr``)