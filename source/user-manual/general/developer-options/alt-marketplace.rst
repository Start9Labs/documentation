***********************
Alternative Marketplace
***********************

EmbassyOS supports accessing alternative marketplaces by configuring a system file. Start9 is not responsible for issues encountered by downloading services from alternative marketplaces.

After SSH-ing into the Embassy, run the following commands::

    sudo systemctl stop agent
    sudo sh -c "echo '<alternative_marketplace_url>' > /root/agent/alt_registry_url.txt"
    sudo systemctl start agent

The Embassy is now able to connect to the provided alternative registry.

----

To revert this change, simply delete the file::

    sudo systemctl stop agent
    sudo rm /root/agent/alt_registry_url.txt
    sudo systemctl start agent