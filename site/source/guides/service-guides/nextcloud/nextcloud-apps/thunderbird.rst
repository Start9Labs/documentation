.. _nc-thunderbird:

===========
Thunderbird
===========

.. contents::
  :depth: 2 
  :local:

Calendar & Contacts Syncing
===========================
You can set up your devices using their :ref:`integrations<nextcloud-setup>`, but if you wish to use a standalone client for your Calendar and Contacts syncing, we recommend Mozilla's `Thunderbird <https://www.thunderbird.net>`_.

1. Install the :ref:`Calendar<nc-calendar>` and :ref:`Contacts<nc-contacts>` apps in Nextcloud if they are not currently installed.
2. Add your :ref:`RootCA<trust-ca>` to your system and then configure :ref:`Thunderbird<lan-thunderbird>`.

3. Select Calendar or Contacts from below to complete each unique setup:

.. tabs::

  .. group-tab:: Calendar 

    1. In Thunderbird, click on the calendar icon, then "New Address Book" in the bottom-left.

      .. figure:: /_static/images/nextcloud/thunderbird-calendar-step1.png
          :width: 60%
          :alt: thunderbird add calendar

    2. Choose "On the network," then click "Next".

      .. figure:: /_static/images/nextcloud/thunderbird-calendar-step2.png
          :width: 60%
          :alt: thunderbird add calendar checkbox

    3. Fill in the Username and Location fields with the credentials from Nextcloud > Properties on your Start9 server.  Click "Find calendars".

      .. figure:: /_static/images/nextcloud/thunderbird-calendar-step3.png
          :width: 60%
          :alt: thunderbird add calendar checkbox

    4. Create a unique app password - In your Nextcloud WebUI, visit the top-right-hand menu and select "Personal Settings" -> "Security." At the bottom, under "Devices & Sessions," create a new app password with a name of your choice, such as "CalDAV." Copy the resulting password and paste it into Thunderbird.

      .. figure:: /_static/images/nextcloud/native-nextcloud-integration-macos-step3.1.png
        :width: 60%
        :alt: nextcloud app password 

      .. figure:: /_static/images/nextcloud/thunderbird-contact-step3.png
          :width: 60%
          :alt: thunderbird add password

    5. Check which calendars you want to integrate and click "Subscribe".

      .. figure:: /_static/images/nextcloud/thunderbird-calendar-step5.png
          :width: 60%
          :alt: thunderbird add calendar subscribe

    Your Nextcloud calendar will now sync with Thunderbird.  Click on the "Contacts" tab above to add your contacts.
  
  .. group-tab:: Contacts

    1. Click on the Address Book icon, open the drop-down menu for "New Address Book" and click "Add CarDav Address Book".

      .. figure:: /_static/images/nextcloud/thunderbird-contact-step1.png
          :width: 60%
          :alt: thunderbird add new contact book

    2. Fill in the Username and Location fields with the credentials from Nextcloud > Properties on your Start9 server. Click "Continue".

      .. figure:: /_static/images/nextcloud/thunderbird-contact-step2.png
          :width: 60%
          :alt: thunderbird add new contact book

    3. Create a unique app password - In your Nextcloud WebUI, visit the top-right-hand menu and select "Personal Settings" -> "Security." At the bottom, under "Devices & Sessions," create a new app password with a name of your choice, such as "CalDAV." Copy the resulting password and paste it into Thunderbird.

      .. figure:: /_static/images/nextcloud/native-nextcloud-integration-macos-step3.1.png
        :width: 60%
        :alt: nextcloud app password 

      .. figure:: /_static/images/nextcloud/thunderbird-contact-step3.png
          :width: 60%
          :alt: thunderbird add password

    Your Nextcloud contacts will now sync with Thunderbird.