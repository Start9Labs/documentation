.. _alt-reg:

Alternative Registry URL
========================

Embassy OS supports accessing alternative marketplaces by configuring a system file.
Start9 Labs is not responsible for issues encountered by downloading unverified services from these alternative marketplaces.

After SSHing into the Embassy, run the following commands::

    sudo systemctl stop agent
    sudo sh -c "echo '<alternative_registry_url>' > /root/agent/alt_registry_url.txt"
    sudo systemctl start agent

The Embassy is now able to connect to the provided alternative registry. 