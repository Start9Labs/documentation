.. _packaging-makefile:

========================
Step 8 - Create Makefile
========================

For convenience and repeatability, let's combine all of these commands into a Makefile. Then, we can use `make <https://www.gnu.org/software/make/>`_ to rebuild our project quickly. 

.. code:: bash

    touch Makefile

1. Add the build rule with the target executable as the key, including a list of dependencies needed to build the target file. In this case, the ``hello-world`` binary compiled for aarch is the target, and the dependencies are the hello-world source files needed to compile this binary:

    .. code:: bash

        HELLO_WORLD_SRC := $(shell find ./hello-world/src) hello-world/Cargo.toml hello-world/Cargo.lock

        hello-world/target/aarch64-unknown-linux-musl/release/hello-world: $(HELLO_WORLD_SRC)
            docker run --rm -it -v ~/.cargo/registry:/root/.cargo/registry -v "$(shell pwd)"/hello-world:/home/rust/src start9/rust-musl-cross:aarch64-musl cargo build --release

2. Add the step to build the Docker image. Here, the target is the Docker `image.tar` artifact, and the dependencies are the Dockerfile, docker_entrypoint.sh, and the aarch64 compiled hello-world executable:

    .. code:: bash

        image.tar: Dockerfile docker_entrypoint.sh hello-world/target/aarch64-unknown-linux-musl/release/hello-world
            DOCKER_CLI_EXPERIMENTAL=enabled docker buildx build --tag start9/hello-world/main:$(VERSION) --platform=linux/arm64 -o type=docker,dest=image.tar .

3. Next, add the step for building the ``s9pk`` package, with the ``hello-world.s9pk`` as the target, and all the component files as the dependencies:

    .. code:: bash

        ASSETS := $(shell yq e '.assets.[].src' manifest.yaml)

        hello-world.s9pk: manifest.yaml assets/compat/config_spec.yaml assets/compat/config_rules.yaml image.tar instructions.md $(ASSET_PATHS)
         	embassy-sdk pack

4. Then, add the step to verify the package: 

    .. code:: bash

        S9PK_PATH=$(shell find . -name hello-world.s9pk -print)

        verify: hello-world.s9pk $(S9PK_PATH)
         	embassy-sdk verify s9pk $(S9PK_PATH)

5. Add steps to clean up the Makefile build artifacts when you want to build from a fresh slate: 

    .. code:: bash

        clean:
         	rm -f image.tar
         	rm -f hello-world.s9pk

6. Finally, add the ``all`` make target.

    .. code:: bash

        all: verify

    This serves as the entrypoint to build multiple targets, which we have in this case. When the ``make`` command is invoked here, it looks for the "verify" target. Since the "verify" target depends on the "hello-world.s9pk" target, make then runs this target. It continues down this graph until the first target and its dependencies are satisfied, then works its way back up. The final output of this Makefile is the ``image.tar`` and ``hello-world.s9pk`` files.

**That's it!** Our completed Makefile looks like this:

.. code:: make

    ASSETS := $(shell yq e '.assets.[].src' manifest.yaml)
    ASSET_PATHS := $(addprefix assets/,$(ASSETS))
    VERSION := $(shell yq e ".version" manifest.yaml)
    HELLO_WORLD_SRC := $(shell find ./hello-world/src) hello-world/Cargo.toml hello-world/Cargo.lock
    S9PK_PATH=$(shell find . -name hello-world.s9pk -print)

    # delete the target of a rule if it has changed and its recipe exits with a nonzero exit status
    .DELETE_ON_ERROR:

    all: verify

    verify: hello-world.s9pk $(S9PK_PATH)
        embassy-sdk verify s9pk $(S9PK_PATH)

    clean:
        rm -f image.tar
        rm -f hello-world.s9pk

    hello-world.s9pk: manifest.yaml assets/compat/config_spec.yaml assets/compat/config_rules.yaml image.tar instructions.md $(ASSET_PATHS)
        embassy-sdk pack

    image.tar: Dockerfile docker_entrypoint.sh hello-world/target/aarch64-unknown-linux-musl/release/hello-world
        DOCKER_CLI_EXPERIMENTAL=enabled docker buildx build --tag start9/hello-world/main:$(VERSION) --platform=linux/arm64 -o type=docker,dest=image.tar .

    hello-world/target/aarch64-unknown-linux-musl/release/hello-world: $(HELLO_WORLD_SRC)
        docker run --rm -it -v ~/.cargo/registry:/root/.cargo/registry -v "$(shell pwd)"/hello-world:/home/rust/src start9/rust-musl-cross:aarch64-musl cargo build --release
