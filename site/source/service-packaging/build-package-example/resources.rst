.. _packaging-resources:

=========
Resources
=========

Get help
--------

If you get stuck or are having issues debugging why your service is not packaging or running as expected, reach out to our community `dev chat <https://matrix.to/#/#community-dev:matrix.start9labs.com>`_ with questions.

Submission Process
------------------

When you have built and tested your project for EmbassyOS, please send Start9 a submission to dev@start9labs.com with a link to the wrapper repository. After being reviewed for security and compatibility, the service will be deployed to the Start9 Marketplace and available for all EmbassyOS users to download.

If you are deploying to an alternative marketplace, please shout it out in our community channels!

Additional Options
------------------

Properties - TODO

References
----------

Below are links to working examples of more advanced configurations for current Embassy services. They might serve as a starting point or reference during your development process: 

- Detailed ``docker_entrypoint.sh`` - `Filebrowser <https://github.com/Start9Labs/filebrowser-wrapper/blob/master/docker_entrypoint.sh>`_
- Optional dependencies - `BTCPay Server <https://github.com/Start9Labs/btcpayserver-wrapper/blob/master/assets/compat/dependencies.yaml>`__
- Config spec - `BTCPay Server <https://github.com/Start9Labs/btcpayserver-wrapper/blob/master/assets/compat/config_spec.yaml>`__
- Config rules - `BTC RPC Proxy <https://github.com/Start9Labs/btc-rpc-proxy-wrapper/blob/master/assets/compat/config_rules.yaml>`__
- Multiple dependencies - `BTCPay Server <https://github.com/Start9Labs/btcpayserver-wrapper/blob/master/manifest.yaml#L172-L187>`__
- Actions - `BTCPay Server <https://github.com/Start9Labs/btcpayserver-wrapper/blob/master/actions/btcpay-admin.sh>`__
- Health checks - `BTCPay Server <https://github.com/Start9Labs/btcpayserver-wrapper/blob/master/assets/utils/health_check.sh>`__
- Alerts - `BTCPay Server <https://github.com/Start9Labs/btcpayserver-wrapper/blob/master/manifest.yaml#L207-L218>`__
