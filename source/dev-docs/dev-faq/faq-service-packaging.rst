.. _faq-service-packaging:

*********************
Service Packaging FAQ
*********************

How can my service access the data directory of another service?
----------------------------------------------------------------

1. Provider service needs to expose datadir to other services on embassy
2. Consumer services needs to list the provider service as a dependency AND set a particular config value, stating that it wants data from that particular service
