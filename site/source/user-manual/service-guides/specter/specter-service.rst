.. _specter-service:

Specter
-------

To run Specter as a service on your Start9 server, simply `install it from the marketplace <https://marketplace.start9.com/marketplace/specter>`_.

You can then configure it to connect to the bitcoin network via connecting to Bitcoin Core directly, or to Electrs.

Electrs will be more performant but will use more system resources.

Once up and running you can follow these instructions to setup a signing device with Specter.

There are two ways to create a wallet from a signing device using Specter.

Some signing devices permit you to "air gap" which means transferring the xpub (and subsequent unsigned/signed transactions) back and forth between Specter and the signing device via an SD card (Coldcard for example) - other devices require a direct USB connection between the device and Specter (Trezor One for example).

.. note:: Using an airgapped signing device like a Coldcard is far easier to setup as unsigned transactions can be simply downloaded to your local machine where they can be saved to an SD card and transferred to a signing device for signing. Signing devices that connect via USB is a more complicated setup.

.. tabs:: 
    
    .. group-tab:: USB Connected Signing Devices:

        For devices like the Trezor One, air gapping is not possible. This means importing xpubs via USB - Specter permits this via the HWI which requires running a second instance of Specter on your *local* machine (i.e *not* your server).

        #. Start by heading to Specter running on your Embassy (you can use either Tor or LAN - if you are accessing your Embassy over LAN the Launch UI button will open up the LAN interface for Specter - if you're accessing over Tor it will open up the Tor interface).

        #. Click on the cog in the top right, or **Update your settings**:

            .. figure:: /_static/images/services/specter/img-1.png
                :width: 60%
                :alt: img-1

        #. Click **USB devices** and then **Remote Specter USB connection**:

            .. figure:: /_static/images/services/specter/img-2.png
                :width: 60%
                :alt: img-2

        #. Click **copy** under step 2:

            .. figure:: /_static/images/services/specter/img-3.png
                :width: 60%
                :alt: img-3

        #. Now start Specter on your *local* machine (**not** your server) by either installing the application [here](https://specter.solutions) or run it in the background by following the instructions `here <https://github.com/cryptoadvance/specter-desktop#installing-specter-from-pip>`_.

        #. Once it's up and running, Head to the HWI settings here - http://127.0.0.1:25441/hwi/settings/

            .. figure:: /_static/images/services/specter/img-4.png
                :width: 60%
                :alt: img-4

        #. Paste in the domain that you copied from Specter running on your Embassy and click Update

            .. figure:: /_static/images/services/specter/img-5.png
                :width: 60%
                :alt: img-5

        #. Now connect your Trezor One or other signing device to your local machine:

            .. figure:: /_static/images/services/specter/img-6.png
                :width: 60%
                :alt: img-6

        #. Head back to Specter on your server and click **Save Changes**

        #. Click **Test connection**

        #. You should see this along the top of the screen:

            .. figure:: /_static/images/services/specter/img-7.png
                :width: 60%
                :alt: img-7

            .. note:: At current time of writing, you must hit save **before** hitting test connection.

        #. You can now click **Add new device** and select the type of signing device you're using (in this case, a Trezor).

            .. figure:: /_static/images/services/specter/img-8.png
                :width: 60%
                :alt: img-8

        #. Name the device and click **Get via USB**:

            .. figure:: /_static/images/services/specter/img-9.png
                :width: 60%
                :alt: img-9

        #. You may be asked for your PIN and passphrase here, and you may need to confirm extraction on the signing device.

        #. Specter will then begin extracting the public key(s) from your device:

            .. figure:: /_static/images/services/specter/img-10.png
                :width: 60%
                :alt: img-10

        #. You may not want all the default types of extended public key. Remove/keep the ones you want by clicking "edit" and "remove".

        #. Click "Continue"

        #. You can now **Add new wallet** or **create single key wallet**:

            .. figure:: /_static/images/services/specter/img-12.png
                :width: 60%
                :alt: img-12

            .. tip:: If you want to create a multisig wallet, add another device first, and make sure you generated an xpub intented for multisig on the first device, then come back to this step.

        #. Select the device (or devices if you are making a multisig wallet) that you want to use.

            .. figure:: /_static/images/services/specter/img-13.png
                :width: 60%
                :alt: img-13

        #. Name the wallet and select the key(s) you want to use.

            .. tip:: (If you only have one key, it will automatically use that key)

        #. Select **Scan for existing funds**"** if you have already used this wallet and wish to establish the transaction history, if this is a brand new wallet this is not necessary and should be deselected.

        #. Click **Create wallet**:
        
            .. figure:: /_static/images/services/specter/img-11.png
                :width: 60%
                :alt: img-11

        #. If you selected "rescan" you can refresh the page and watch as your bitcoin node rescans the blockchain for your wallet's history.

            .. note:: This will be very slow if Specter is configured to connect to Bitcoin Core directly, and extremely fast if connecting via Electrs.

        Specter is now setup to use your signing device!

    .. group-tab:: Air Gapped Signing Devices

        This part of the guide will go over how to upload an xpub from a device that permits air gapping - in this case a Coldcard.

        #. Power up the Coldcard, enter your pin and any passphrase necessary.

        #. Go down to **Advanced**, **MicroSD card**, **Export Wallet**, **Generic JSON**:

            .. figure:: /_static/images/services/specter/img-14.png
                :width: 60%
                :alt: img-14

        #. Remove the SD card from your Coldcard and insert it into your *local* machine (not the Embassy)

        #. Go to Specter on your Embassy, click "Add new device" and select Coldcard (or other air gap permitting device):

            .. figure:: /_static/images/services/specter/img-15.png
                :width: 60%
                :alt: img-15

        #. Name the device and click **Upload from SD card**:

            .. figure:: /_static/images/services/specter/img-16.png
                :width: 60%
                :alt: img-16

        #. Navitage to the SD card and select **coldcard-export.json** and click open:

            .. figure:: /_static/images/services/specter/img-17.png
                :width: 60%
                :alt: img-17

        #. You may not want all the default types of extended public key. Remove/keep the ones you want by clicking **edit**.

        #. Click **Continue**:

            .. figure:: /_static/images/services/specter/img-18.png
                :width: 60%
                :alt: img-18

        #. You can now **Add new wallet** or **create single key wallet.**:

            .. note:: If you want to create a multisig wallet, add another device first, and make sure you generated an xpub intented for multisig on the first device, then come back to this step.

        #. Select the device (or devices if you are making a multisig wallet) that you want to use.

        #. Name the wallet and select the key(s) you want to use.

            (If you only have one key, it will automatically use that key)

        #. Select "Scan for existing funds" if you have already used this wallet and wish to establish its transaction history, if this is a brand new wallet this is not necessary and should be deselected.

        #. Click **Create wallet**:

            .. figure:: /_static/images/services/specter/img-19.png
                :width: 60%
                :alt: img-19

        #. If you selected "rescan" you can refresh the page and watch as your bitcoin node rescans the blockchain for your wallet's history.

        Specter is now setup to use your signing device!