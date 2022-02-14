.. _environment-setup:

===========================
Packaging Environment Setup
===========================

To get started packaging a service for EmbassyOS, some basic knowledge of software development is required. Don't worry if you are inexperienced, we will provide enough context to get you started, and you can always reach out with questions.

If you are already an experienced developer, :ref:`jump ahead <quick-start>`.

The only system requirements are `Docker <https://docs.docker.com/get-docker>`_ and `Cargo <https://doc.rust-lang.org/cargo/>`_ (Rust package manager).

Of course, there are additional recommendations that would streamline your development experience, but they are not required.

Code Editor
-----------

A code editor is recommended since you will, after all, be writing code! We are fans of `Visual Studio Code <https://code.visualstudio.com/>`_ . Visual Studio Code is a free, batteries-included text editor made by Microsoft.

Terminal / CLI
--------------

We recommend using your computer's built-in terminal as a command line interface (CLI) for your operating system. For Windows users, we recommend the built-in command line (cmd) *Command Prompt* or the Powershell CLI, running in Administrator mode. For macOS and Linux, the native *Terminal* is recommended, but virtually any terminal will work.

If you are new to the command line, Ionic has published this awesome `guide <https://ionicframework.com/blog/new-to-the-command-line/>`_ to get you started.

.. _environment-setup-git:

Git
---

Although not required, the version control system Git is highly recommended.

Git is often accompanied by a Git Host, such as `GitHub <https://github.com/>`_, in which case additional setup is required. Follow the tutorial from the GitHub `here <https://docs.github.com/en/get-started/quickstart/set-up-git>`_ to set up your environment.

To verify the installation, open a new terminal window and run:

.. code:: bash

    git --version

Docker
------

`Docker <https://docs.docker.com/get-docker>`_ must be installed to your computer platform. It is needed to build an image for your package, which will be used to create the running instance of your package on EmbassyOS. In essence, it declares the necessary environment and building stages for your package to run.

We also recommend installing and using `Docker buildx <https://docs.docker.com/buildx/working-with-buildx/>`_, as this adds desirable new features to the Docker build experience. It is included by default with Docker Desktop for Windows and macOS.


Cargo
-----

Cargo is the package management solution for the Rust programming language. It will install Rust to your system, and provide the required environment to build the Embassy SDK for packaging your service into the required format needed by EmbassyOS.

Installation instructions for Cargo can be found `here <https://doc.rust-lang.org/cargo/getting-started/installation.html>`__.

To verify the installation, open a terminal window and run:

.. code:: bash

    cargo --version

SDK
---

EmbassyOS provides a :ref:`software development kit <sdk>` embedded in its environment. You do not need a running instance of EmbassyOS to use this component, it can be installed on any computer platform.

To install the SDK:

.. code:: bash

    git clone https://github.com/Start9Labs/embassy-os.git
    cd backend
    ./install-sdk.sh

To verify the installation, open a terminal window and run:

.. code:: bash

    embassy-sdk --version

EmbassyOS
---------

While not strictly necessary, having a running instance of EmbassyOS is recommended to test installing, running, configuring, and using your package. Without this component, you will have to coordinate with Start9's internal development team to test.

You can acquire EmbassyOS by :ref:`purchasing <purchasing>` or following the :ref:`DIY guide <diy>`.

.. _quick-start:

Quick Start Environment Setup
-----------------------------
- `Docker <https://docs.docker.com/get-docker>`_
- `Docker buildx <https://docs.docker.com/buildx/working-with-buildx/>`_
- `Cargo <https://doc.rust-lang.org/cargo/getting-started/installation.html>`__
- `EmbassyOS <https://github.com/Start9Labs/embassy-os>`_
- `Embassy SDK <https://github.com/Start9Labs/embassy-os/blob/master/backend/install-sdk.sh>`_
