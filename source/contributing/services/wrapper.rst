.. _service_wrapper:

***************
Service Wrapper
***************

Each service is bound with a wrapper repository. The purpose of this repo is:

- Denote any dependencies required to run and build the project.
- To define the necessary, ``config_rules.yaml``, ``config_spec.yaml`` and ``manifest.yaml`` options.
- To build the project into the ``.s9pk`` format digestible to the Embassy.
- Link to the source project as a git submodule.
- Define the docker file for running the project on an Embassy.
- Provide documentation for the project, especially user runbook instructions.
- symlink of ``instructions.md`` from ``docs`` directory to wrapper repo root

File Structure
==============

The project structure should be used as a model:

.. code-block:: bash

    ├── Dockerfile
    ├── Makefile
    ├── README.md
    ├── assets
    │   ├── httpd.conf
    │   └── httpd.conf.template
    ├── config_rules.yaml
    ├── config_spec.yaml
    ├── <submodule_project_dir>
    ├── docker_entrypoint.sh
    ├── docs
    │   └── instructions.md
    ├── instructions.md -> docs/instructions.md (symlink)
    └── manifest.yaml

Submodule
==========

Git submodules allow use of another project while in the working project directory. Setting up this feature enables linking of the source service repository so that it's context is available.

Run ``git submodule add <link_to_source_project>``

For reference: `git-submodules <https://www.git-scm.com/book/en/v2/Git-Tools-Submodules>`_

