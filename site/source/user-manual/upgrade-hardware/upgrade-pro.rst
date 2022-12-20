.. _upgrade-pro:

=================================================
Migrating From Embassy One to Embassy Pro (NASPi)
=================================================

This is for Embassy One users upgrading from a NASPi (pictured below). If you're using a Samsung T5/T7 please go :ref:`here <samsung-drives>`.

    .. figure:: /_static/images/hardware-pics/embassy-one.png
        :width: 30%

You will need a high quality USB-A to USB-A cable like `this <https://www.amazon.com/UGREEN-Transfer-Enclosures-Printers-Cameras/dp/B00P0E3954/?th=1>`_. Or a USB-A to USB-C cable like `this <https://www.amazon.com/AmazonBasics-Type-C-USB-Male-Cable/dp/B01GGKYKQM/?th=1>`_.

#. Shutdown your Embassy One 

    .. figure:: /_static/images/walkthrough/shutdown.png
        :width: 60%

#. Listen out for the shutdown sounds, then after few more seconds, disconnect the power.

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/SHUTDOWN.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * Shutdown sound

#. Now disconnect the USB adapter found here:

    .. figure:: /_static/images/hardware-pics/naspi-jameson-loop2.png
        :width: 60%

#. Connect the USB cable to the lowest blue USB port like this:

    .. figure:: /_static/images/hardware-pics/usb-into-naspi-edited.jpg
        :width: 60%

#. Now connect the Ethernet cable and then the power to your Embassy Pro

    .. figure:: /_static/images/hardware-pics/pro-all.jpg
        :width: 60%

#. Head to http://embassy.local on any device on the same LAN

#. Select "Recover"

   .. figure:: /_static/images/setup/screen0-startfresh_or_recover.png
      :width: 60%

#. Select "Transfer"

   .. figure:: /_static/images/setup/transfer.png
      :width: 60%

#. Now connect the other end of the USB cable to either an Embassy Pro USB-3 port or the USB-C port:

    .. figure:: /_static/images/hardware-pics/pro-all-highlighted.jpg
       :width: 60%

#. Connect the power to the NASPi - you will hear this sound and can ignore it:

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/BEETHOVEN.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * Beethoven's 5th

#. Select the drive inside the NASPi (you may need to hit refresh):

    .. figure:: /_static/images/setup/transfer-from.png
       :width: 60%

#. Select the drive inside the Embassy Pro that you are migrating *to* (this will erase any data on this drive):

    .. figure:: /_static/images/setup/transfer-to.png
       :width: 60%

#. You will be asked to create a password. It can be the same as it was previously:

    .. figure:: /_static/images/setup/screen5-set_password.png
        :width: 60%

#. Your data will now transfer over - the length of this process will vary depending on how much data you have, but will likely take several hours:

    .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
        :width: 60%

#. You are now ready to proceed and use your Embassy Pro - it will have the same addresses and root certificate as it did before migrating.

    .. figure:: /_static/images/setup/screen7-startfresh_complete.jpg
        :width: 60%

    .. warning:: Do not unders any circumstances reassemble your Embassy One without wiping the SD card first and wiping the SSD during initial setup! If you do not this will cause serious problems! If you have lightning channels you could lose all your funds!

.. _samsung-drives:

Samsung T5/T7/alternative drives
================================

#. Shutdown your Embassy One 

    .. figure:: /_static/images/walkthrough/shutdown.png
        :width: 60%

#. Listen out for the shutdown sounds, then after few more seconds, disconnect the power.

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/SHUTDOWN.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * Shutdown sound

#. Now connect the Ethernet cable and then the power to your Embassy Pro

    .. figure:: /_static/images/hardware-pics/pro-all.jpg
        :width: 60%

#. Head to http://embassy.local on any device on the same LAN

#. Select "Recover"

   .. figure:: /_static/images/setup/screen0-startfresh_or_recover.png
      :width: 60%

#. Select "Transfer"

   .. figure:: /_static/images/setup/transfer.png
      :width: 60%

#. Now connect your Samsung T5/T7/alternative drive to any USB-3 or USB-C port on your Embassy Pro

#. Select this drive (you may need to hit refresh):

    .. figure:: /_static/images/setup/transfer-from.png
       :width: 60%

#. Select the drive inside the Embassy Pro that you are migrating *to* (this will erase any data on this drive):

    .. figure:: /_static/images/setup/transfer-to.png
       :width: 60%

#. You will be asked to create a password. It can be the same as it was previously:

    .. figure:: /_static/images/setup/screen5-set_password.png
        :width: 60%

#. Your data will now transfer over - the length of this process will vary depending on how much data you have, but will likely take several hours:

    .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
        :width: 60%

#. You are now ready to proceed and use your Embassy Pro - it will have the same addresses and root certificate as it did before migrating.

    .. figure:: /_static/images/setup/screen7-startfresh_complete.jpg
        :width: 60%

    .. warning:: Do not unders any circumstances reassemble your Embassy One without wiping the SD card first and wiping the SSD during initial setup! If you do not this will cause serious problems! If you have lightning channels you could lose all your funds!