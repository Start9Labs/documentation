.. _service_manifest:

========
Js Procedure
========

Overview
--------

Procedure: A procedure is ran during times that we would like to do an operation. An operation would includes such things as getting the configuration, or setting them. 

Effects: https://start9.com/procedure/types.0.3.1.d.ts From this file the effects are passed to the js procedures to allow the js/ts to read/write to files and make some logging.

The reason to use this is that when one would like to have a procedure, one has to have a docker file or a js function in the ``embassy.js``. The js runs faster than the docker since we don't have to wait for a docker instance to be spun up. And one doesn't have to learn the magic implicit rules in the compat image of docker,
nor figure out how to create the dockerfile and how to run the docker image with magic configs that are not in our specs.

The location of the procedures will exists at scripts/embassy.js of where we are packing from.


Template for Embassy.ts
----------------

For our example template we will assume that this file will exist at scripts/embassy.ts, but this is only needed for the following commands. It could exists any where in the project.
Here lies the template that one should run a ``deno bundle scripts/embassy.ts scripts/embassy.js`` to compile our file into the embassy file that our embassy packer will use. The location of the js is important, and can't be changed.
Would recommended something like the deno for the vs code, so one can use the language server to hover over the types and get the living documentation or possible values. And in the examples we use the Deno to bundle and check the ts.

Note: Not all the exports are needed unless one uses the following configuration settings in ``manifest.yaml``


.. code:: typescript

    import { ExpectedExports } from "https://start9.com/procedure/types.0.3.1.d.ts";

    /** Anywhere this exists one needs to implement */
    let todo: any;
    /** Fill this out when manifest @ config.get.type = script */
    export const getConfig: ExpectedExports.getConfig = todo;
    /** Fill this out when manifest @ config.set.type = script */
    export const setConfig: ExpectedExports.setConfig = todo;
    /** Fill this out when manifest @ properties.type = script */
    export const properties: ExpectedExports.properties = todo;
    /** Fill this out when manifest @ dependencies.<packageName>.config.check.type = script AND dependencies.<packageName>.config.auto-configure.type = script  */
    export const dependencies: ExpectedExports.dependencies = todo;
    /** Fill this out when manifest @ health-checks.<packageName>.type = script  */
    export const health: ExpectedExports.health = todo;
    /** Fill this out when manifest @ migrations.<from/to>.<emver>.type = script
    export const migration: ExpectedExports.migration = todo;

Coming soon: Actions, Backups

Syncthing Example
-----------------


- `Manifest <https://github.com/Start9Labs/syncthing-wrapper/blob/master/manifest.yaml>`__
- `Procedures <https://github.com/Start9Labs/syncthing-wrapper/blob/master/scripts/embassy.ts>`__

Syncthing Example
-----------------


- `Manifest <https://github.com/Start9Labs/bitcoind-wrapper/blob/master/manifest.yaml>`__
- `Procedures <https://github.com/Start9Labs/bitcoind-wrapper/blob/master/scripts/embassy.ts>`__

Core Lightning Example
----------------------

This one is the most complex, we replaced all the running rust with a js function.


- `Manifest <https://github.com/Start9Labs/c-lightning-wrapper/blob/master/manifest.yaml>`__
- `Procedures <https://github.com/Start9Labs/c-lightning-wrapper/blob/master/scripts/embassy.ts>`__