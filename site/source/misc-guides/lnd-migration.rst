.. _lnd-migration:

========================
Migrating LND to StartOS
========================

    .. warning:: **After migrating an LND wallet to StartOS, NEVER restart your old node. Turning on your old node can result in the broadcast of old channel states and potentially loss of funds!**

This guide is for users seeking to migrate LND on-chain and lightning funds from a different node to StartOS easily and without closing channels. This migration will require two sets of hardware, your existing hardware you wish to migrate from, and the hardware running StartOS you are migrating to. Both devices must be running on the same LAN. The LND service on StartOS provides easy to use actions for users migrating from the below Node implementations:

- Umbrel (Both 1.x and 0.5)
- RaspiBlitz
- myNode

**Instructions**

#. First, you will need a fresh installation of LND on StartOS which has *never* been started. Starting the LND service will create a wallet; if there is an existing LND wallet on StartOS, LND will *not* allow any of the `import` actions to be run.

#. Select the action corresponding to the node you are migrating from and fill out the corresponding IP and password(s). If you are unsure of the IP address of your node, you may need to check your router.

    .. figure:: /_static/images/hardware-pics/lnd_migration_actions.png
        :width: 60%

#. The migration action may take several minutes to complete. Once the action has completed and your old node has been unplugged, you may safely start LND on StartOS. **Remember - NEVER restart your old node after the migration has completed!**