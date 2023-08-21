.. _nc-thunderbird:

===========
Thunderbird
===========

.. contents::
  :depth: 2 
  :local:

Calendar & Contacts Syncing
===========================
If you wish to use a standalone client for Calendar and Contacts, we recommend Mozilla's `Thunderbird <https://www.thunderbird.net>`_.

1. Install the :ref:`Contacts<nc-contacts>` and :ref:`Calendar<nc-calendar>` apps in Nextcloud if they are not yet installed.
2. Make sure you are on the latest version of Thunderbird.  Add your :ref:`RootCA<trust-ca>` to your system and then configure :ref:`Thunderbird<lan-thunderbird>`.

3. Choose wich service you want to integrate.

  .. tabs::
    
    .. group-tab:: Contacts

      - Click on the contacts icon, open scroll down menu on "New Address Book" and click "Add CarDav Address Book".

        .. figure:: /_static/images/nextcloud/thunderbird-contact-step1.png
            :width: 60%
            :alt: thunderbird add new contact book

      - Enter username and location which you can find under Nextcloud > Properties on your start9 server. You can choose a local or remote connection. Click "Continue".

        .. figure:: /_static/images/nextcloud/nextcloud-properties.png
            :width: 60%
            :alt: start9 nextcloud properties

        .. figure:: /_static/images/nextcloud/thunderbird-contact-step2.png
            :width: 60%
            :alt: thunderbird add new contact book
        
      - Enter password for CardDav app created in Nextcloud and click "Ok".

        .. figure:: /_static/images/nextcloud/thunderbird-contact-step3.png
            :width: 60%
            :alt: thunderbird add password

    .. group-tab:: Calendar 

      - Click on the calendar icon, open scroll down menu on "New Address Book" and click "Add CarDav Address Book". 

        .. figure:: /_static/images/nextcloud/thunderbird-calendar-step1.png
            :width: 60%
            :alt: thunderbird add calendar

      - Choose "On the network" checkbox and click "Next".

        .. figure:: /_static/images/nextcloud/thunderbird-calendar-step2.png
            :width: 60%
            :alt: thunderbird add calendar checkbox

      - Enter username and location wich you can find in Nextcloud > Properties tab on start9 server. You can choose .local or Tor connection. Paste it and click "Find calendars".

        .. figure:: /_static/images/nextcloud/nextcloud-properties.png
            :width: 60%
            :alt: start9 nextcloud properties

        .. figure:: /_static/images/nextcloud/thunderbird-calendar-step3.png
            :width: 60%
            :alt: thunderbird add calendar checkbox

      - Enter password for CalDav app created in Nextcloud and click "Ok".

        .. figure:: /_static/images/nextcloud/thunderbird-calendar-step4.png
            :width: 60%
            :alt: thunderbird add calendar password

      - Check which calendars you want to integrate and click "Subscribe".

        .. figure:: /_static/images/nextcloud/thunderbird-calendar-step5.png
            :width: 60%
            :alt: thunderbird add calendar subscribe

4. That's it! Your Nextcloud calendar and contacts are now integrated with Thunderbird. 