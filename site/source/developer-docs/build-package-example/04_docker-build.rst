.. _packaging-docker-build:

=====================
Step 4 - Docker Build
=====================

Now that we have our code properly built/compiled, we can create a Dockerfile. This file defines how to build the Docker image for the service by declaring the environment, building stages, and copying any binaries or assets needed to run the service to the Docker image filesystem.

In other words, the Dockerfile serves as a recipe for creating a Docker image, from which Docker containers are spun up. This is ultimately what runs an instance of your service on the Embassy.

1. Create the necessary Docker files:

  .. code:: bash

      touch Dockerfile
      touch docker_entrypoint.sh

2. We'll start editing the ``Dockerfile`` by importing a base image, in this case Alpine, as recommended.

  .. code:: docker

    FROM arm64v8/alpine:3.12

3. Next, we issue some commands to setup the filesystem. Here we update repositories and install required system packages.

  .. code:: docker

    RUN apk update
    RUN apk add tini curl

4. Next, we add the cross-compiled binary of ``hello-world`` to ``/usr/local/bin/`` and add the ``docker_entrypoint.sh`` file from the project root.  Then, we set permissions for ``docker_entrypoint.sh``.

  .. code:: docker

    ADD ./hello-world/target/aarch64-unknown-linux-musl/release/hello-world /usr/local/bin/hello-world
    ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
    RUN chmod a+x /usr/local/bin/docker_entrypoint.sh

5. Next, we set a working directory, and set the location of the entrypoint. Exposing ports is not necessary for EOS, but its often useful to leave this line for quick reference and clarity.

  .. code:: docker

    WORKDIR /root

    EXPOSE 80

    ENTRYPOINT ["/usr/local/bin/docker_entrypoint.sh"]

6. **That's it!** Let's take a look at our final ``Dockerfile``:

.. code:: docker

    FROM arm64v8/alpine:3.12

    RUN apk update
    RUN apk add tini

    ADD ./hello-world/target/aarch64-unknown-linux-musl/release/hello-world /usr/local/bin/hello-world
    ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh
    RUN chmod a+x /usr/local/bin/docker_entrypoint.sh

    WORKDIR /root

    # not necessary for EmbassyOS, but often left for quick reference and clarity
    EXPOSE 80

    ENTRYPOINT ["/usr/local/bin/docker_entrypoint.sh"]

7. Finally, add the following code to the ``docker_entrypoint.sh``:

.. code:: bash

    #!/bin/sh

    exec tini hello-world

This is a script that defines how the service starts, and often acts as an init system.  It will need to complete any environment setup (such as folder substructure), set any environment variables, and execute the run command. It's also PID 1 in the Docker container, so should do all of the signal handling for container exits.
