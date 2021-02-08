.. _service_package_overview:

************************
Service Package Overview
************************

Let's start at a high level. What actually is a service, in a technical sense, on the Embassy?

Each service is an image. An image is a snapshot of a linux environment in which an application runs. All service application data is stored in a volume directory. This volume is persisted across updates. The image is immutable: when the service is updated, the image is replaced with the complete new image containing the updated features. 

The volume directory (for seeding data into the volume) is typically: ``/root/volumes/<serviceId>``.

.. important::
    Any files that are in the image at the volume path will be overwritten when a backup restore occurs.

A service is mounted to the EmbassyOS image. Each service application gets a volume allocated to it by EmbassyOS. Within the Docker container that encompasses the service image, a path is specified as to where it should mount on EmbassyOS. This path is specified in the :ref:`manifest <service_manifest>`.

The config spec, config rules, and manifest get bundled into the ``.s9pk`` package when built using `appmgr <https://github.com/Start9Labs/appmgr>`_. Each new version release should include the updated version of these files re-bundled into a new binary. 

.. note::
    Due to tech debt, code in appmgr may reference ``app-id`` instead of ``service-id``.

Environment Setup
=================

At minimum, docker, docker-builx, and appmgr are required to package a service for EmbassyOS.

Recommended Dependencies
------------------------

`docker <https://docs.docker.com/get-docker>`_

`docker-buildx <https://docs.docker.com/buildx/working-with-buildx/>`_

`appmgr <https://github.com/Start9Labs/embassy-os/tree/master/appmgr>`_

`cargo <https://doc.rust-lang.org/cargo/>`_

`yq (version 4) <https://mikefarah.gitbook.io/yq>`_

`make <https://www.gnu.org/software/make/>`_

`musl <https://github.com/Start9Labs/rust-musl-cross>`_
