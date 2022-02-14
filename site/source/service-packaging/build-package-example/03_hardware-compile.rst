.. _packaging-compile-raspi:

===========================
Step 3 - Build for Hardware
===========================

EmbassyOS is run on the arm-v8 architecture, specifically the aarch64 state, for the RaspberryPi.

Depending on the programming language or libraries used in a project, you might need to set up an environment to *cross compile* the executable for this runtime environment.

We were able to easily build and run our project locally. However, Rust is one of those programming languages that needs to be cross compiled. This step can be skipped if it does not apply to your project.

Since Start9 uses Rust throughout its service ecosystem, the team has built a helper to cross compile Rust projects for the Embassy.

This Rust cross compiler for aarch64 can be downloaded and build from `GitHub <https://github.com/Start9Labs/rust-musl-cross>`_:

.. code:: bash

    git clone https://github.com/Start9Labs/rust-musl-cross.git
    cd rust-musl-cross
    chmod a+x ./build.sh
    ./build.sh

This actually builds a Docker container for us to use locally so we can emulate the environment we need to compile our project for aarch64!


Next, we enable cross-arch emulated builds in Docker

.. code:: bash
    
    docker run --privileged --rm linuxkit/binfmt:v0.8

Finally, we run the following command to build the project, replacing `/absolute/path/to` with the output of `pwd` as necessary:

.. code:: bash

    docker run --rm -it -v ~/.cargo/registry:/root/.cargo/registry -v "/absolute/path/to"/hello-world:/home/rust/src start9/rust-musl-cross:aarch64-musl cargo build --release

Awesome! We can now see the compiled executable here: `./hello-world/target/aarch64-unknown-linux-musl/release/hello-world`