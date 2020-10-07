.. _best-testing:

************
Beta Testing
************

On request, or by selective offerings, we will admit certain users to test upcoming releases in our beta environment. This environment requires authorized SSH authentication, the credentials for which will be provided to selected users.

After successful authentication, run the following commands::

    sudo systemctl stop agent
    sudo sh -c "echo '<https://beta-registry.start9labs.com:443>' > /root/agent/alt_registry_url.txt"
    sudo systemctl start agent