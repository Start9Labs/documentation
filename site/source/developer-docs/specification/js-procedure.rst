.. _js_procedure:

============
JS Procedure
============

Prerequisites
-------------

An understating of programming with JavaScript and a basic understanding of TypeScript and the ecosystem of imports.

System requirements
-------------------

  - `Deno <https://deno.land/>`__ (recommended) - If you use VSCode as an IDE, you can simply install the Deno extension.

Overview
--------

The purpose for using JS procedures is to easily code rules for configuring a service and its dependencies, for writing migrations, properties, and health checks. Using this SDK library, service packagers can define how to run these processes in the service manifest. 

.. note::
    
    Coming Soon! JS procedures for Actions and Backups

Why use this
-------------

Terms:

**Procedure**: A procedure is run during times that we would like to do an operation. An operation would include actions such as getting or setting a service's configuration file.

**Effects**: A TypeScript object that is used to interact with EmbassyOS. See the `full definition here <https://deno.land/x/embassyd_sdk@v0.3.1.0.5/types.ts>`__.

This new process enabled faster service configuration operations. Previously, Docker was used to preform these actions; however, Docker containers took a long time to spin up.

We use procedures so a service be customized in the UI and interact with the underlying package without needing software development experience.

How to Setup
-------------

1. In the wrapper project root, create a file named `scripts/embassy.ts`. For our example template we will assume that this file will exist at this location, but it could exists anywhere in the project.
2. Copy and paste the template below, keeping the necessary sections for your project.

    .. code:: javascript

        import { types as T } from "https://deno.land/x/embassyd_sdk@v0.3.1.0.5/mod.ts";

        /** Anywhere this exists one needs to implement */
        let todo: any;
        /** Fill this out when manifest @ config.get.type = script */
        export const getConfig: T.ExpectedExports.getConfig = todo;
        /** Fill this out when manifest @ config.set.type = script */
        export const setConfig: T.ExpectedExports.setConfig = todo;
        /** Fill this out when manifest @ properties.type = script */
        export const properties: T.ExpectedExports.properties = todo;
        /** Fill this out when manifest @ dependencies.<packageName>.config.check.type = script AND dependencies.<packageName>.config.auto-configure.type = script  */
        export const dependencies: T.ExpectedExports.dependencies = todo;
        /** Fill this out when manifest @ health-checks.<packageName>.type = script  */
        export const health: T.ExpectedExports.health = todo;
        /** Fill this out when manifest @ migrations.<from/to>.<emver>.type = script
        export const migration: T.ExpectedExports.migration = todo;

        Note: Not all the exports are needed unless one uses the following configuration settings in ``manifest.yaml``

3. Modify service manifest to use the script type like so:

    .. code:: yaml

        config:
            get:
                type: script
            set:
                type: script

4. Fill in the todos in the above template to match the expected Effect parameter defined by the `exported type <https://deno.land/x/embassyd_sdk@v0.3.1.0.3/types.ts#L32>`_. This type describes how to call functions that interact with EmbassyOS.
5. In the build process for packaging the final s9pk, include the following step. **The location of the js is important, and can't be changed**. It must exist at `scripts/embassy.js` in the root of the project's wrapper repository.

    .. code:: bash

        deno bundle scripts/embassy.ts scripts/embassy.js


Syncthing Example
-----------------

- `Manifest <https://github.com/Start9Labs/syncthing-wrapper/blob/master/manifest.yaml>`__
- `Procedures <https://github.com/Start9Labs/syncthing-wrapper/blob/master/scripts/embassy.ts>`__

Core Lightning Example
----------------------

This one is the most complex, we replaced all the running rust with a js function.


- `Manifest <https://github.com/Start9Labs/c-lightning-wrapper/blob/master/manifest.yaml>`__
- `Procedures <https://github.com/Start9Labs/c-lightning-wrapper/blob/master/scripts/embassy.ts>`__