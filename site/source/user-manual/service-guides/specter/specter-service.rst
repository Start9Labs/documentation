.. _specter-service:

Specter Service
---------------

To run Specter as a service on your Start9 server, simply `install it from the marketplace <https://marketplace.start9.com/marketplace/specter>`_.

You can then configure it to connect to the bitcoin network via connecting to Bitcoin Core directly, or to Electrs.

Electrs will be more performant but will use more system resources.

Once up and running you can follow these instructions to setup a signing device with Specter.

There are two ways to do this.

Some signing devices permit you to **airgap** which means transferring the xpub and subsequent unsigned/signed transactions back and forth between Specter and the signing device via an SD card (Coldcard for example) or via QR codes. Other devices require a **direct USB connection** i.e the Trezor One.

.. note:: Using an airgapped signing device like a Coldcard is far easier to setup as unsigned transactions can be simply downloaded to your local machine from the Specter webUI where they can be saved to an SD card and transferred to a signing device for signing, then uploaded back to the Specter UI once signed just like uploading any file to a website or adding an attachment to an email. Signing devices that connect via USB require a more complicated setup.

.. tabs:: 
    
    .. group-tab:: Air Gapped Signing Devices

        This part of the guide will go over how to upload an xpub from a device that permits air gapping - in this case a Coldcard.

        #. Power up the Coldcard, enter your pin and any passphrase necessary.

        #. Go down to **Advanced**, **MicroSD card**, **Export Wallet**, **Generic JSON**:

            .. figure:: /_static/images/services/specter/img-14.png
                :width: 60%
                :alt: img-14

        #. Remove the SD card from your Coldcard and insert it into your *local* machine (not the server)

        #. Go to Specter on your server, click "Add new device" and select Coldcard (or other air gap permitting device):

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

    .. group-tab:: USB Connected Signing Devices:

        For devices like the Trezor One on which air gapping is not possible xpubs must be imported via USB - Specter permits this via the HWI which requires running a second instance of Specter on your *local* machine (i.e *not* your server).

            .. note:: This means you will be running Specter as a service on your Start9 server, which you will be accessing through a webUI and *in addition* you will be running **Specter Desktop** as an application on your local device (laptop/desktop).

        #. Download and install `Specter Desktop <https://specter.solutions/downloads/>`_ on your local machine.

        #. Now head to Specter running on your server and click Launch UI.

            .. figure:: /_static/images/services/specter/launch-ui.png
                :width: 60%
                :alt: launch-ui

            .. tip:: You can use either Tor or LAN - if you are accessing your server over LAN the Launch UI button will open up the LAN interface for Specter, if you're accessing over Tor it will open up the Tor interface.

            .. note:: We recommend using Tor (.onion) as this will mean that you will be able to use your signing device from anywhere in the world.

        #. Click **Update settings**:

            .. figure:: /_static/images/services/specter/update-settings.png
                :width: 60%
                :alt: update-settings

        #. Ensure **USB Devices** is selected - click **Remote Specter USB connection** and click **Save**:

            .. figure:: /_static/images/services/specter/remote-usb.png
                :width: 60%
                :alt: remote-usb

        #. Scroll down and copy the address highlighted below (yours will be different):

            .. figure:: /_static/images/services/specter/address-for-copy.png
                :width: 60%
                :alt: address-for-copy

            Include the http:// (if .onion) or https:// (if .local) at the start, and the slash at the end.

        #. Now start Specter Desktop on your **local** machine:

            .. figure:: /_static/images/services/specter/specter-desktop-app.png
                :width: 60%
                :alt: specter-desktop-app

        #. Once it's up and running, Head to the HWI settings here - http://127.0.0.1:25441/hwi/settings/

            .. figure:: /_static/images/services/specter/hwi-ip.png
                :width: 60%
                :alt: hwi-ip

        #. Paste in the address that you copied and click **Update**:

            .. figure:: /_static/images/services/specter/hwi-new-address.png
                :width: 60%
                :alt: hwi-new-address

        #. Now connect your signing device to your local machine:

            .. figure:: /_static/images/services/specter/connect-trezor.png
                :width: 60%
                :alt: connect-trezor

            .. note:: You are **not** connecting it to your Start9 server - the point of this is so that your server's Specter can reach out to your signing device from anywhere in the world via your local machine.

        #. Head back to Specter on your **server**, click **Save** if you haven't already and then click **Test connection**:

            .. figure:: /_static/images/services/specter/test-connection.png
                :width: 60%
                :alt: test-connection

        #. If the connection is working, you will see this message in the bottom right:

            .. figure:: /_static/images/services/specter/success-connection.png
                :width: 60%
                :alt: success-connection

            .. tip:: If this isn't working it could be for a number of reasons. Your signing device may need to be updated to the latest firmware, or simply still require setup. If using a Trezor you must first set it up in the `Trezor Suite <https://trezor.io/trezor-suite>`_. Other reasons this connection could fail is if your LAN isn't setup or Tor is not running on your local device. See :ref:`here<connecting>` for advice on how to setup LAN and Tor on your device.

        #. You can now click **Add device** and select the type of signing device you're using (in this case, a Trezor).

            .. figure:: /_static/images/services/specter/add-device.png
                :width: 60%
                :alt: add-device

        #. Name the device and click **Get via USB**:

            .. figure:: /_static/images/services/specter/name-device.png
                :width: 60%
                :alt: name-device

        #. You will be asked for your PIN and passphrase here, and you may need to confirm extraction on the signing device.

            .. figure:: /_static/images/services/specter/pin-passphrase.png
                :width: 60%
                :alt: pin-passphrase

            .. tip:: Specter will now pull wallet info from your signing device. No private keys are leaving your signing device, only addresses.

        #. You will now see a few extended public keys (xpubs):

            .. figure:: /_static/images/services/specter/xpubs.png
                :width: 60%
                :alt: xpubs

        #. You may not want all the default types of extended public key. Remove/keep the ones you want by clicking **edit**, removing the ones you don't want and then clicking **Done**:

            .. figure:: /_static/images/services/specter/remove-unwanted.png
                :width: 60%
                :alt: remove-unwanted

            .. tip:: If you aren't sure what to do here, a sensible default is to leave the second option - with the derivation **m/84h/0h/0h** as in the picture below. This will result in addresses beginning with **bc1** - the most commonly used and most modern address type (native segwit). There is no harm in adding multiple derivation paths, but if you aren't sure which one to use, you probably want **m/84h/0h/0h**.

        #. Click **Continue**:

            .. figure:: /_static/images/services/specter/click-continue.png
                :width: 60%
                :alt: click-continue

        #. You can now create a new wallet by clicking on the prompt here where it says **Create single key wallet** or by clicking on **Add wallet**:

            .. figure:: /_static/images/services/specter/add-wallet.png
                :width: 60%
                :alt: add-wallet

            .. tip:: If you want to create a multisig wallet, add another device first, and make sure you generated an xpub intented for multisig on the first device, then come back to this step.

        #. Select the device (or devices if you are making a multisig wallet) that you want to use and click **Continue**:

            .. figure:: /_static/images/services/specter/pick-device.png
                :width: 60%
                :alt: pick-device

        #. Create a name for this wallet::

            .. figure:: /_static/images/services/specter/name-create.png
                :width: 60%
                :alt: name-create

            .. tip:: (If you only have one key, it will automatically use that key). You cannot select a configuration that doesn't match the available derivation path(s).

        #. Select **Scan for existing funds** if you have already used this wallet and wish to establish the transaction history, if this is a brand new wallet this is not necessary and should be deselected:

            .. figure:: /_static/images/services/specter/scan-funds.png
                :width: 60%
                :alt: scan-funds

        #. Click **Create wallet**:
        
            .. figure:: /_static/images/services/specter/create-wallet.png
                :width: 60%
                :alt: create-wallet

            .. note:: Rescanning will be very slow if Specter is configured to connect to Bitcoin Core directly, and extremely fast if connecting via Electrs.

        Specter is now setup to use your signing device!

            .. figure:: /_static/images/services/specter/final-screen-trezor.png
                :width: 60%
                :alt: final-screen-trezor

