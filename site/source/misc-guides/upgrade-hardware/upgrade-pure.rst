.. _upgrade-pi:

=========================
Upgrade From Raspberry Pi
=========================
Follow this guide to upgrade from a Raspberry Pi StartOS server to a Server One, Server Pure, or similar device.

.. _external-drives:

External Drive
==============
If your current Raspberry Pi setup uses an external drive over USB.

#. Shutdown your Raspberry Pi server and disconnect from power. If you have a speaker, wait for shutdown noises.

    .. figure:: /_static/images/walkthrough/shutdown.png
        :width: 60%

    .. raw:: HTML

      <audio controls>
        <source src="/_static/sounds/SHUTDOWN.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

    * Shutdown sound

#. Connect your new server to power and ethernet.

    .. figure:: /_static/images/hardware-pics/pro-all.jpg
        :width: 60%

#. Visit http://start.local on any device on the same LAN.

#. Select "Recover".

   .. figure:: /_static/images/setup/screen0-recover.jpg
      :width: 60%

#. Select "Transfer".

   .. figure:: /_static/images/setup/transfer.png
      :width: 60%

#. Connect your previous external drive to any USB-3 or USB-C port on your new server.

#. Select this drive (you may need to hit refresh):

    .. figure:: /_static/images/setup/transfer-from.png
       :width: 60%

#. Select the destination drive that you are migrating *to* (this will erase any data on this drive):

    .. figure:: /_static/images/setup/transfer-to.png
       :width: 60%

#. You will be asked to create a password. It can be the same as it was previously.

    .. figure:: /_static/images/setup/screen5-set_password.png
        :width: 60%

#. Your data will now transfer over - the length of this process will vary depending on how much data you have, but will likely take several hours.

    .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
        :width: 60%

#. You are now ready to proceed and use your new server - it will have the same addresses and Root CA as it did before.

    .. figure:: /_static/images/setup/screen7-startfresh_complete.jpg
        :width: 60%

    .. warning:: DO NOT reconnect your old server without first wiping the SD card and SSD! This can cause serious problems! If you have lightning channels you could lose your money!

NASPI (Embassy One)
===================

    .. figure:: /_static/images/hardware-pics/server-one.png
        :width: 30%

#. Get a high quality `USB-A to USB-A cable <https://www.amazon.com/UGREEN-Transfer-Enclosures-Printers-Cameras/dp/B00P0E3954/?th=1>`_, or a `USB-A to USB-C cable <https://www.amazon.com/AmazonBasics-Type-C-USB-Male-Cable/dp/B01GGKYKQM/?th=1>`_.

#. Disconnect the USB adapter.

    .. figure:: /_static/images/hardware-pics/naspi-jameson-loop2.png
        :width: 60%

#. Connect one side of the USB-A cable to the lowest blue USB port on the NASPI, and the other side to your new server.

    .. figure:: /_static/images/hardware-pics/usb-into-naspi-edited.jpg
        :width: 60%

#. Follow the instructions above.
