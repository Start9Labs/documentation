.. _service_wrapper:

=======
Wrapper
=======

Each service is bound with a wrapper repository, which contains everything you need to build a service.

The purpose of this repo is:

- To define the necessary Manifest and configuration options (ie. config spec and rules)
- To build the project into the ``.s9pk`` format digestible to EmbassyOS
- Link to the source project as a git submodule
- Define the Dockerfile for running the project on EmbassyOS
- Provide documentation for the project, especially user runbook instructions

File Structure
--------------

The project structure should be used as a model:

.. code-block:: bash

        ├── Dockerfile
        ├── LICENSE
        ├── Makefile
        ├── README.md
        ├── assets
        │   └── compat
        │       ├── config_rules.yaml
        │       └── config_spec.yaml
        ├── docker_entrypoint.sh
        ├── <submodule-project>
        ├── <package-id>>.s9pk
        ├── icon.png
        ├── image.tar
        ├── instructions.md
        └── manifest.yaml


Submodule
---------

`Git submodules <https://www.git-scm.com/book/en/v2/Git-Tools-Submodules>`__ allow use of another project while in the working project directory. Setting up this feature enables linking of the source service repository so that its context is available.  The submodule is added into the wrapper so that the wrapper can build the submodule and also track the exact code that's being built.

Run:

.. code:: bash
    
    git submodule add <link_to_source_project>
