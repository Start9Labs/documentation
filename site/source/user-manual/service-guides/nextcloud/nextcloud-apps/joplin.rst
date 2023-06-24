.. _nc-joplin:

==================
Joplin Integration
==================
`Joplin <https://joplinapp.org/>`_  is an open source note-taking app. Capture your thoughts and securely access them from any device.  First set up your :ref:`client devices<nextcloud-setup>`, so that Nextcloud will automatically keep your notes synced.

Clients available for:

- Desktop
    - Linux
    - Mac
    - Windows

- Mobile
    - Android
    - iOS

Connecting Joplin to Nextcloud (Mac Desktop Example)
----------------------------------------------------
This guide will go over how to connect Joplin running on a desktop machine to your Start9 server's Nextcloud over LAN.

.. note:: This guide assumes your Nextcloud username is "embassy," replace with your username if different.

You will need your device set up to connect via :ref:`LAN<connecting-lan>` first.

#. First go into Nextcloud on your server and click on the "Files" app icon.

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup0.png
        :width: 30%
        :alt: Click on Folders

#. Click on the + icon, then "New folder".

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup1.png
        :width: 30%
        :alt: New Folder

#. Create a new folder called "joplin" and click the arrow to the right.

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup3.png
        :width: 30%
        :alt: Joplin Directory

#. Click on "Files settings" in the bottom left and copy the WebDAV link.

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup4.png
        :width: 30%
        :alt: Files Settings

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup5.png
        :width: 30%
        :alt: WedDAV Link

#. Open up Joplin, click on "Joplin" in the top left and click "Preferences" (on Mac).

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup7.png
        :width: 30%
        :alt: Preferences

#. Click on "Synchronisation".

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup8.png
        :width: 30%
        :alt: Click on Synchronisation

#. Under "Synchronisation target" select "Nextcloud", paste the WebDAV and append onto the end of it "joplin" so the entire URL should look like this (replace ``xxxx`` with your unique Nextcloud LAN address): ``https://xxxx.local/remote.php/dav/files/embassy/joplin``.

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup9.png
        :width: 30%
        :alt: Click on Synchronization

#. Under "Nextcloud username" enter "embassy" (or your username).

#. Under "Nextcloud password" enter your password.

#. The username and password for your Nextcloud can be found in your server's UI by clicking on the Nextcloud service then clicking on "Properties".

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup10.png
        :width: 30%
        :alt: Select Nextcloud and enter URL

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup11.png
        :width: 30%
        :alt: Select Nextcloud and enter URL

#. Now click "Show advanced settings".

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup12.png
        :width: 30%
        :alt: Select Nextcloud and enter URL

#. Scroll down then check the box that says "Ignore TLS certificate errors".

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup13.png
        :width: 30%
        :alt: Select Nextcloud and enter URL

#. Now scroll back up and select "Check sychronisation configuration" and you should see the following success message:

    .. figure:: /_static/images/nextcloud/joplin/joplin-setup14.png
        :width: 30%
        :alt: Select Nextcloud and enter URL

#. You have now connected your Joplin client to your Start9 server's Nextcloud and your notes will sync automatically!
