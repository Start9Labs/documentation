.. _service_sdk_overview:

********************
Service SDK Overview
********************

Let's start at a high level. What actually is a service, in the technical sense, on the Embassy?

Each service is an image. An image is a snapshot of linux environment in which an application runs. All service application data is stored in a volume directory. This volume is persisted across updates. The image is immutable: when the service is updated, the image is replaced with the complete new image containing the updated features. 

The volume directory (for seeding data into the volume) is typically: ``/root/volumes/<appId>``. With the caveat that any files that are in the image at that path will be overwritten.

A service is mounted to the OS image. Each service application gets a volume allocated to it by the OS. Within the Docker container that encompasses the service image, a path is specified as to where it should mount on the OS. This path is specified in the :ref:`manifest <_service_manifest>`.

The config spec, config rules, and manifest get bundled into the ``.s9pk`` package when built using `appmgr <https://github.com/Start9Labs/appmgr>`_. Thus, each new version release will have these files updated and re-bundled into a new binary. 