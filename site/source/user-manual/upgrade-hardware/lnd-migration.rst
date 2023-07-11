.. _lnd-migration:

========================
Migrating LND to StartOS
========================

    .. warning:: **After migrating an LND wallet to StartOS, NEVER restart your old node. Turning on your old node can result in the broadcast of old channel states and potentially loss of funds!**

This guide is for users seeking to migrate LND on-chain and lightning funds from a different node to StartOS easily and without closing channels. This migration will require two sets of hardware, your existing hardware you wish to migrate from, and the hardware running StartOS you are migrating to. Both devices must be running on the same LAN. The LND service on StartOS provides easy to use actions for users migrating from the below Node implementations:

- Umbrel (Both 0.4 and 0.5)
- RaspiBlitz
- myNode

**Instructions**

#. First, you will first navigate to your LND service on StartOS and click the `Stop` button to stop LND.

    .. warning:: Running any of the migration actions above will delete any existing LND wallet running on your StartOS server. If you have funds on your StartOS LND node, make sure to transfer these funds to another wallet before running a migration action.

#. Select the action corresponding to the node you are migrating from and fill out the corresponding IP and password(s). If you are unsure of the IP address of your node, you may need to check your router.

    .. figure:: /_static/images/hardware-pics/lnd_migration_actions.png
        :width: 60%

#. The migration action may take several minutes to complete. Once the action had completed and your old node has been unplugged, you may safely start LND on StartOS. **Remember - Do not restart your old node after the migration has completed!**