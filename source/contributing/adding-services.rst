***************
Adding Services
***************

We are finalizing the OS infrastructure requirements to ensure a smooth process for developer contribution. This includes wrapping everything up into a software development kit for developing services on the EmbassyOS platform.

If you are interested in developing a service, keep the following in mind:

Marketplace services need to provide a "service manifest" and a "config spec", which the SDK will facilitate. The service manifest is for the store listing. The config spec is a detailed mapping of configuration options with acceptable values, defaults, and relational rule-sets. For example, if the user chooses config option A, then config option B must be between 5 and 10. That way, users can enjoy a simple GUI configuration experience, complete with validations and protections, and not have to worry about screwing up a .conf file in some unknown way. 

The config spec will also denote any dependencies. Many services depend on other libraries and services on the Embassy (such as Bitcoin), sometimes even a particular version of those services, which need to be specified by the developers so that EmbassyOS can handle installing these dependencies under the hood.

Check back soon for more details!