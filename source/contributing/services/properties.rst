.. _service_properties:

******************
Service Properties
******************

The output of this step is a file titled ``stats.yaml``. This file contains a mapping of the values that will be displayed in the ``Properties`` section in a service's menu.

.. figure:: /_static/images/service/service_properties.png
  :width: 40%
  :alt: Service Properties

  Service Properties Tab

Due to the fact that config variables are only available when the service is running, this file can only be populated at runtime. In services Start9 has wrapped or created, we typically handle this in ``configurator/src/main.rs``. This file is essentially a script that acquires the necessary values at runtime from config (eg. ``/root/.lnd/start9/config.yaml``), and dynamically populating them to the ``stats.yaml`` file, marking each value with the appropriate keys for UI display (ie. masked or copyable). Running the configurator is typically included in the ``docker_entrypoint.sh`` file.