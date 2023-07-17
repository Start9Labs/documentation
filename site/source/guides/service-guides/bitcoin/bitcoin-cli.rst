.. _bitcoin-cli:

===========
Bitcoin CLI
===========

 Instructions for accessing the bitcoind service in order to issue commands directly.
 
 .. warning:: This is an advanced feature and should be used with caution. Start9 is not responsible for any damage you might cause through SSH access.
 
 #. First, you will need SSH access.  Please see the :ref:`setup instructions <ssh>` for details.
 #. Access your server and then you can interact with the bitcoind docker container using the following syntax:

  .. code-block:: bash
    
      sudo docker exec -ti bitcoind.embassy bitcoin-cli COMMAND
 
 .. tip:: For example ``sudo docker exec -ti bitcoind.embassy bitcoin-cli getnetworkinfo``
 
 A list of possible commands can be found `here <https://developer.bitcoin.org/reference/rpc/>`__.
 
 You can also drop into a shell using::
 
    sudo docker exec -ti bitcoind.embassy bash

 and then enter ``bitcoin-cli`` commands.  When you are finished, simply type ``exit``...
