.. _packaging-checklist:

=========
Checklist
=========

.. contents::
  :depth: 2
  :local:

This guide outlines a checklist of steps to complete in order to package a service for StartOS. For a more in depth example, visit the :ref:`build your first package <service-packaging>` guide.

Packaging
---------

    1. Create or select project
    2. Build project
    3. Cross compile for armv8/aarch64 if necessary
    4. Create Dockerfile and docker entrypoint file
    5. Add build steps, compiled executables, assets, etc in Dockerfile and specify run command in docker entrypoint, handling signal exiting if the service does not already do this gracefully
    6. Create Manifest file
    7. Create instructions file
    8. Create icon file
    9. Add license
    10. Package all components into s9pk using start-sdk
    11. Verify package components using start-sdk
    12. Create a wrapper repository on GitHub to host all package assets for review
    13. (Optional) Add all package build steps to a Makefile for replicability

Testing:
--------

    1. Sideload ``<package-id>.s9pk`` onto StartOS
    2. Install package using start-cli
    3. Start package using start-cli, or in the UI
    4. Check logs to see if errors
    5. Ensure service is reachable/launchable
    6. (Optional) Ensure data persists after stopping and restarting service.
