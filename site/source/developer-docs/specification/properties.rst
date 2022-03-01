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


.. code-block:: rst
    :caption: Properties Type

    interface Properties {
      version: Enum<v1 | v2>,
      data: Data,
    }

    interface Data {
      # The key here is an string that describes the property appropriately 
      <String> : PropertiesString | PropertiesObject
    }

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

An example ``stats.yaml`` file generation can be found `here <https://github.com/Start9Labs/filebrowser-wrapper/blob/master/docker_entrypoint.sh#L15-L30>`__.

.. role:: raw-html(raw)
    :format: html

:raw-html:`<br />`
