.. _service_docker:

==========
Dockerfile
==========

This purpose of the Dockerfile is to define how to build the image for the service. It declares the environment and building stages.

The Dockerfile is responsible for mounting the service application to whatever volume the manifest specifies, typically ``/root/.<service-id>``.

Since the build requires specific arm runtime environments, these base images can be imported into the Dockerfile as a starting point so the base system does not need to be completely redefined. This enables importing a specific build environment version that encapsulates any necessary libraries for running the service build, eg. golang, rust.

For instance:

``FROM alpine:3.12``

``FROM arm32v7/alpine``

``FROM arm32v7/golang:alpine``

We recommended using ``alpine`` since it produces the smallest image. We try to keep the image under 100MB when possible.

Image
-----

Each service boils down to a Docker image. We're not going to dive into Docker specifics in this guide, since there exists tons of `resources <https://docs.docker.com/>`__ for developing with this containerization tool.

The image is immutable, meaning that when the service is updated, the image is replaced with a completely new image containing the updated features.

When installed, the service image is mounted to the EmbassyOS image. This path is defined in the :ref:`manifest <service_manifest>` configuration file:

.. code:: yaml

    ...
    main:
        type: docker
        image: main
        entrypoint: "docker_entrypoint.sh"
        args: []
        mounts:
            # Specified where to mount the volume in the container
            main: /root
        io-format: yaml
    ...

In EmbassyOS, the mount specified in the Manifest gets bound to ``/embassy-data/package-data/volumes/main/<service-id>``.

Volumes
-------

Each service application gets one or more volumes allocated to it by EmbassyOS. All service application data is stored in this directory and is persisted across updates.

This is also defined in the Manifest in the volumes section:

.. code:: yaml

    volumes:
        # This key correlates to the image name specified above. The default is "main".
        main:
            type: data

.. warning:: Any files in the mounted volume path will be overwritten when a backup restore occurs.

Entrypoint
----------

The ``docker_entrypoint.sh`` defines what to do when the service application starts.

It consists of a bash script that completes any environment setup (eg. creating folder substructure), sets any environment variables, and executes the run command. The only required feature of this file is to execute the run command for the service.

Example
-------

The `LND wrapper <https://github.com/Start9Labs/lnd-wrapper/blob/master/Dockerfile>`_ features a well defined Dockerfile, for example.
