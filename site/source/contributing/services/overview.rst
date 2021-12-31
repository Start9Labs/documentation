.. _service_package_overview:

************************
Service Package Overview
************************

There are several main components that comprise a service package for EmbassyOS. This overview will introduce them and following sections will dive into technical specifics.

First, let's get your system setup with the necessary software dependencies.

Environment Setup
=================

At minimum, ``docker``, ``docker-buildx``, and ``appmgr`` are required. The rest of the recommendations serve to optimize the build process.

Recommended Dependencies
------------------------

    `docker <https://docs.docker.com/get-docker>`_

    `docker-buildx <https://docs.docker.com/buildx/working-with-buildx/>`_

    `appmgr <https://github.com/Start9Labs/embassy-os/tree/master/appmgr>`_

    `cargo <https://doc.rust-lang.org/cargo/>`_

    `yq (version 4) <https://mikefarah.gitbook.io/yq>`_

    `make <https://www.gnu.org/software/make/>`_

    `musl <https://github.com/Start9Labs/rust-musl-cross>`_

Package Components
==================

Image
-----

Each service boils down to a Docker image. We're not going to dive into Docker specifics in this guide, since there exists tons of `resources <https://docs.docker.com/>`_ for developing with this containerization tool.

Because the service ultimately runs on a Raspberry Pi, the created Docker image should be a snapshot of an arm based linux environment. The service image is then mounted to the EmbassyOS image during installation. This path is defined in the :ref:`manifest <service_manifest>` configuration file.

The image is immutable, meaning that when the service is updated, the image is replaced with a completely new image containing the updated features.

Volume
------
Each service application gets a volume allocated to it by EmbassyOS. All service application data is stored in this directory and is persisted across updates.

The volume directory (for seeding data into the volume) is typically: ``/root/volumes/<service-id>``.

.. warning::
    Any files that are in the image at the volume path will be overwritten when a backup restore occurs.

Dependencies
------------

When it comes to running your own server, managing dependencies is perhaps the most difficult part. The term "dependency hell" emerged from this sentiment. Even the best developers have lost significant amounts of time trying to find, correct, or clarify documentation for dependencies or dependency configuration. Individuals who manage their own servers have specific technical skills and are willing to devote the time and effort necessary to maintain them. Companies have entire departments dedicated to this feat.

Some other personal server products aimed at non-technical individuals tackle this problem by simply hard coding dependencies. Since EmbassyOS is a platform for running all open-source, self-hosted software, it is not possible to hard code every possible service, service dependency, and service dependency configuration forever. Instead, Start9 built a new, unprecedented operating system that touts a generalized, intuitive approach to dependency management and service configuration. EmbassyOS enables users to easily and selectively install, uninstall, and update any service they want without getting stuck in dependency hell.

This may sound cool or neat, but it is more than that: *it’s novel*. This has never been done before.

The key to making the system work is a new, domain-specific-language (DSL) and set of standards that are used by developers to define the rules and requirements of their services. Run in the context of EmbassyOS, these rules and requirements appear as simple UI elements, such as inputs, toggles, and drop downs, and they are enforced by validations and clear user instructions. Using this system, what previously required involved time and expertise, can now be done by anyone in a matter of seconds.

This DSL is utilized in the :ref:`config rules <config_rules>` and :ref:`dependencies <dependencies>` key in the service manifest.

Manifest
--------

This file describes the service and its requirements. It is used to:

- create a listing in the marketplace
- denote any installation considerations
- define dependency requirements

Each time a service is updated, the manifest should be updated to include the new version, release notes, and any pertinent updates to the install, uninstall, or restoration flows. All this information is displayed in the marketplace listing, and the optionally denoted alerts will be displayed when appropriate to provide the user with more information about the particularities of the service.

For instance, `LND displays alerts <https://github.com/Start9Labs/lnd-wrapper/blob/master/manifest.yaml#L28>`_  around restoration since data will be overwritten.

There is nothing you need to do as a developer to enable the service to run over Tor. This is *completely* handled by EmbassyOS - a Tor address will be automatically generated and an Nginx server configured (if a client application) when the service is installed. Just define which version of Tor your service needs in this manifest file!

Config
------

Most self-hosted applications require the user to tell the app how to behave using a config file in a specific format, environment variables, command-line arguments, or some combination of these inputs. One of the coolest features of EmbassyOS is that, when packaged correctly, the app's :ref:`configuration <service_config>` will be available to the user as a slick GUI that always produces a valid configuration no matter how little experience or skill the user has.

With EmbassyOS, this means a service wrappers' configuration requires a particular format and rule structure to ensure it integrates smoothly with the user interface. This format enables clean handling of improper values and configuration dependencies.

.s9pk Bundle
------------

The configuration and manifest files get bundled into the ``.s9pk`` package, which is `built using appmgr <https://github.com/Start9Labs/embassy-os/tree/master/appmgr>`_. Each new version release should include the updated version of these files re-bundled into a new binary. This is the file that will be downloaded from the marketplace. Upon user initiation, EmbassyOS then un-packages and installs the service.

Hello World Example
-------------------

For reference, the `Hello world <https://github.com/Start9Labs/hello-world-wrapper>`_ repository should be used as an example. A project template can be cloned using the "Use this template" button in GitHub.


.. role:: raw-html(raw)
    :format: html

:raw-html:`<br />`
