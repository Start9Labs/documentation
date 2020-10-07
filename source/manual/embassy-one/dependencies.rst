.. _dependencies:

Dependencies
============

Some services require a dependency on another service. For example, in order to run Lightning, Bitcoin also needs to be installed and running on the Embassy - Bitcoin is a *depencency* of Lightning.

Dependency management is complicated. Managing the installation of dependent software is something a computer's operating system does well behind the scenes and with little user input. In this sense, it is not very transparent. Start9 has opted to take a transparency first approach by generating a user interface that supplies awareness to required dependencies. As such, input is required to opt in to such installations, and nothing will be installed on the Embassy without the user's knowledge. Furthermore, Start9 has made it supremely easy by making a one click install for all services and their associated dependencies. 

Dependencies can be required, optional, or dependently-optional, such as if a particular subset of features on a service want to be enabled. All of this information is presented upfront to the user before a service is installed to demonstrate transparency. As always, the user is in control of what is running on their Embassy.

