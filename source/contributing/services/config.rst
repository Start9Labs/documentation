.. _service_config:

**********************
Service Configurations
**********************


Config Spec
===========

.. code:: yaml

    ---
    password:
    type: string
    nullable: false
    name: "Password"
    description: "The password for connecting to the server."
    default:
        charset: "a-k,m-z,2-9"
        len: 20
    pattern: '^[^\n"]*$'
    patternDescription: "Must not contain newline or quote characters."

Config Rules
============

.. code:: yaml

    ---
    - rule: 'rpc.enable? OR !(''advanced.pruning.mode = "manual")'
    description: "RPC must be enabled for manual pruning."

