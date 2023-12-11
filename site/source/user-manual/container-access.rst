.. _container-access:

============================
Accessing Service Containers
============================

Instructions for accessing a service container directly, in order to perform advanced operations.
  
.. warning:: HERE BE DRAGONS!!  This is an advanced feature and should be used with caution. If you continue, you are responsible for any damage you might cause.  For general use, there is no need to enter a container, and you probably only want to do this if under the direction of a Start9 Support Technician.
 
#. First, you will need SSH access.  Please see the :ref:`setup instructions <ssh>` for details.
#. Access your server via SSH and then you can interact with a service container using the following syntax:

   .. code-block:: bash
      
         sudo podman exec -it SERVICE-NAME COMMAND
 
   Replace ``SERVICE-NAME`` and ``COMMAND`` with your service and desired commands.  For example ``sudo podman exec -it bitcoind.embassy bitcoin-cli getnetworkinfo``
 
   To find the currently available services, use the following command:

      .. code-block:: bash

         sudo podman ps --all
   
   You can also drop into a shell using

      .. code-block:: bash
   
         sudo podman exec -it SERVICE-NAME bash

   and then enter your service commands.  When you are finished, simply type ``exit``.
