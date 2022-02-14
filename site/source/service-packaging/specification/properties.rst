.. _service_properties:

==========
Properties
==========

The output of this step is a file titled ``stats.yaml``. This file contains a mapping of the values that will be displayed in the ``Properties`` section in a service's menu.

Due to the fact that config variables are only available when the service is running, this file can only be populated at runtime.

.. figure:: /_static/images/services/service-properties.png
  :width: 80%
  :alt: Service Properties

  Service Properties


.. code:: typescript

  :caption: Properties Type

    interface PropertiesString {
      type: 'string'
      name: string
      value: string
      description: string | null
      copyable: boolean
      qr: boolean
      masked: boolean
    }

    interface PropertiesObject {
      type: 'object'
      name: string
      value: PropertiesObject | PropertiesString
    }

Example
-------

A good example of the configurator producing the ``stats.yaml`` file can be found `here <https://github.com/Start9Labs/lnd-wrapper/blob/master/configurator/src/main.rs>`_.

.. role:: raw-html(raw)
    :format: html

:raw-html:`<br />`
