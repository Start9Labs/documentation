.. _packaging-create-wrapper:

============================
Step 9 - Create Wrapper Repo
============================

In order for the Start9 team to review your package for submission to the Start9 Marketplace, we ask that you create a wrapper repository for the project and its components. Let's do that for our hello-world service.

For a quick start convenience, Start9 has made the finalized version of the `hello-world-wrapper <https://github.com/Start9Labs/hello-world-wrapper>`_ available as a *GitHub template*. Clicking "Use this template" in that repository will clone the entire contents to a specified location. Each file will still have to be manually edited to reflect the changes necessary for your service. 

If you want to proceed from scratch, follow these steps:

1. In GitHub, create a new public repository with the name "hello-world-wrapper" under your user profile. Go ahead and select the options to include a README file and a .gitignore file. You can always add these files later too.

2. Once the hosted repository is created, select the "Code" dropdown to copy the https or ssh URL for the repository. If you do not have git setup locally, follow the :ref:`setup steps <environment-setup-git>` first. 

    .. code:: bash

        git clone https://github.com/<username>/hello-world-wrapper.git
        cd hello-world-wrapper


3. Include the ``hello-world`` project in the wrapper repo. It can either be included directly, or it can be hosted separately. If it is hosted separately, it should be included as a `git submodule <https://git-scm.com/book/en/v2/Git-Tools-Submodules>`_ within the wrapper repository:

    .. code:: bash

        git submodule add <link_to_source_project>

4. Edit the ``.gitignore`` file to include the ``.s9pk`` file and ``image.tar`` bundle. This will exclude these files from being published remotely, as they can be large or binary representations.

    .. code:: bash

        hello-world.s9pk
        image.tar

5. Move the Dockerfile, docker_entrypoint.sh, LICENSE, icon, and Manifest to the root of the wrapper repository. At the end, your project structure should look similar to this:

    .. code:: bash

        ├── Dockerfile
        ├── LICENSE
        ├── Makefile
        ├── README.md
        ├── assets
        │   └── compat
        │       ├── config_rules.yaml
        │       └── config_spec.yaml
        ├── docker_entrypoint.sh
        ├── hello-world
        │   ├── Cargo.lock
        │   ├── Cargo.toml
        │   ├── src
        │   │   ├── index.html
        │   │   └── main.rs
        │   └── target
        │       ├── aarch64-unknown-linux-musl
        │       ├── debug
        │       └── release
        ├── hello-world.s9pk
        ├── icon.png
        ├── image.tar
        ├── instructions.md
        └── manifest.yaml
