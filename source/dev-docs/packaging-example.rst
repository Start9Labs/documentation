.. _packaging-example:

*****************
Packaging Example
*****************

A rough walkthrough of how to package a service using our example "Hello World" wrapper.

1.	Introduction

Hello!  The following guide will serve as a walkthrough of the process to packaging a service for the Start9 Embassy, in the format of an example.  This is an attempt to cover the process in as much detail as possible, but keep in mind that it is by no means exhaustive.  

The example service being packaged is Hello World, a simple example that will display a greeting in its own web UI.

2.	Selecting a Service

There are many considerations when choosing a service to package.  The following parameters are suggested for those coming at service packaging for the first time, as they simplify the process.  Some of these may be ignored, at the cost of having a larger workload.  Requirements are indicated.  A package will be more straightforward to package if it:

- is a self-hosted, open-source service.  Here’s a great list of options <https://github.com/awesome-selfhosted/awesome-selfhosted> - *this is a requirement*
- has already been dockerized, ideally using Alpine Linux
- 


3.	Pre-requisites

It is not necessary to have extensive programming or development experience, however, it is useful to have some understanding of the linux command line, git, docker, and basic development tools.  This guide will use a debian-based environment, but differences ought to be minimal when using another Linux flavor, or brew on a Mac.

EmbassyOS will be required for testing the packaged service.  You can get this by:
- building from source <https://github.com/Start9Labs/embassy-os/blob/master/CONTRIBUTING.md#setting-up-your-development-environment>
- following the DIY guide <https://docs.start9.com/getting-started/diy.html#diy>
- purchasing an Embassy device <https://store.start9.com/collections>

Let’s get started on our example service, Polaris.

4.	Dependencies

First, we’ll get the base required packages (if you don’t have them already).   At minimum you will need the following:

- docker <https://docs.docker.com/get-docker>
- docker buildx <https://docs.docker.com/buildx/working-with-buildx/>
- appmgr <https://github.com/Start9Labs/embassy-os/tree/master/appmgr>

And to optimize the build process, we recommend the following:

- cargo <https://doc.rust-lang.org/cargo/>
- yq (version 4) <https://mikefarah.gitbook.io/yq>
- make <https://www.gnu.org/software/make/>
- musl <https://github.com/Start9Labs/rust-musl-cross>

We’ll get all of these for our example.  First, docker/buildx and make:

```sudo apt install docker.io make```

For appmgr, clone the repo and enter it’s directory:

```git clone https://github.com/Start9Labs/embassy-os.git
cd embassy-os/appmgr’’’

Then install the portable version:

```cargo install --path=. --features=portable –no-default-features```

Next, we’ll get rust and cargo:

```curl https://sh.rustup.rs -sSf | sh```

Then yq:

```wget https://github.com/mikefarah/yq/releases/download/${VERSION}/${BINARY}.tar.gz -O - |\
tar xz && mv ${BINARY} /usr/bin/yq```

And finally, musl:

```docker build -t start9/rust-musl-cross:armv7-musleabihf .
alias 'rust-musl-builder=docker run --rm -it -v "$HOME"/.cargo/registry:/root/.cargo/registry -v "$(pwd)":/home/rust/src start9/rust-musl-cross:armv7-musleabihf'```


5.	