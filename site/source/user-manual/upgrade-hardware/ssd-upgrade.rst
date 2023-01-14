.. _ssd-upgrade:

================
Upgrade Your SSD
================

This guide will go over how to switch out an old drive on your Embassy One to a different drive and migrate the data from the old one to the new one.

This will preserve the entire state of your Embassy, inlcluding all Tor and LAN addresses as well as channels you have open on the lightning network!

This is not the same as backing up services and recovering them onto a new Embassy.

#. Start by shutting down your Embassy:

    .. figure:: /_static/images/walkthrough/shutdown.png
        :width: 50%

#. Remove the power and Ethernet cables:
    
    .. figure:: /_static/images/hardware-pics/back-no-cables.jpg
        :width: 50%

#. Unscrew the two screws here and remove the USB adaptor:

    .. figure:: /_static/images/hardware-pics/back-screws-usb-loop.jpg
        :width: 50%

#. Remove the micro SD card from the front:

    .. figure:: /_static/images/hardware-pics/front-sd-card.jpg
        :width: 50%

#. Remove the bottom four screws:

    .. figure:: /_static/images/hardware-pics/bottom-screws.jpg
        :width: 50%

#. Carefully slide the contents of the case out and disassemble the Embassy by disconnecting the power wire and removing the 5 screws (and 4 brass spacers beneath the fan bracket) highlighted below:

    .. figure:: /_static/images/hardware-pics/disassembly-0.png
        :width: 50%

#. This top section should lift off now and you'll be left with the SSD still attached. Remove the two screws shown below:

    .. figure:: /_static/images/hardware-pics/disassembly-1.png
        :width: 50%

#. Now slide the **old** SSD off the connector:

    .. figure:: /_static/images/hardware-pics/old-drive-exposed.jpg
        :width: 50%

#. Now take the **new** SSD, and connect it where the old one was:

    .. figure:: /_static/images/hardware-pics/new-ssd-attach-0.png
        :width: 50%

#. Secure the SSD with the two silver screws:

    .. figure:: /_static/images/hardware-pics/disassembly-1.png
        :width: 50%

#. Reattach the 4 brass spacers holding the Pi to the SSD board, followed by the 5 black screws to secure the fan bracket and power management board.  Then reconnect the power wire:

    .. figure:: /_static/images/hardware-pics/disassembly-0.png
        :width: 50%

#. Now reinsert the Embassy back into the case and reattach the bottom four black screws:

    .. figure:: /_static/images/hardware-pics/bottom-screws.jpg
        :width: 50%

#. Reconnect the USB adaptor and back two black screws:

    .. figure:: /_static/images/hardware-pics/back-screws-usb-loop.jpg
        :width: 50%

#. Flash the micro SD card with a fresh install of embassyOS - you can follow the flashing guide :ref:`here <flashing-pi>`

#. Once flashed, reinsert the micro SD card into the Embassy:

    .. figure:: /_static/images/hardware-pics/front-sd-card.jpg
        :width: 50%

#. Reconnect the Ethernet cable, make sure the USB adaptor is connect and then finally connect the power cable:

    .. figure:: /_static/images/hardware-pics/plugged-in-back.jpg
        :width: 50%

    .. figure:: /_static/images/hardware-pics/plugged-in-front.jpg
        :width: 50%

#. Head to http://embassy.local on any device on the same LAN

#. Select "Recover"

   .. figure:: /_static/images/setup/screen0-startfresh_or_recover.png
      :width: 60%

#. Select "Transfer"

   .. figure:: /_static/images/setup/transfer.png
      :width: 60%

#. Now connect the **old ssd** to your Embassy:

    .. figure:: /_static/images/hardware-pics/attach-ssd.jpg
       :width: 60%

#. Select the **old drive** - the one that is externally connect to your Embassy (you may need to hit *REFRESH*):

    .. figure:: /_static/images/setup/transfer-from.png
       :width: 60%

#. Select the drive **inside the Embassy** that you are migrating **to** - this is your **NEW** drive - and any data on this drive will be erased:

    .. figure:: /_static/images/setup/transfer-to.png
       :width: 60%

#. You will be asked to create a password. It can be the same as it was previously:

    .. figure:: /_static/images/setup/screen5-set_password.png
        :width: 60%

#. Your data will now transfer over - the length of this process will vary depending on how much data you have, but will likely take several hours:

    .. figure:: /_static/images/setup/screen6-storage_initialize.jpg
        :width: 60%

#. You are now ready to proceed and use your Embassy with its new drive! It will have the same addresses and root certificate as it did before migrating.

    .. figure:: /_static/images/setup/screen7-startfresh_complete.jpg
        :width: 60%

    .. warning:: Do not unders any circumstances use the old SSD to setup another Embassy unless you wipe it first or wipe it during the initial setup proecess! If you have lightning channels you could lose all your funds!
