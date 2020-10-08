.. _alt-marketplace:

***********************
Alternative Marketplace
***********************

Embassy OS supports accessing alternative marketplaces by configuring a system file.
Start9 Labs is not responsible for issues encountered by downloading unverified services from these alternative marketplaces.

After SSH-ing into the Embassy, run the following commands::

    sudo systemctl stop agent
    sudo sh -c "echo '<alternative_marketplace_url>' > /root/agent/alt_registry_url.txt"
    sudo systemctl start agent

The Embassy is now able to connect to the provided alternative registry.

----

To revert this change, simply delete the file::

    sudo rm /root/agent/alt_registry_url.txt