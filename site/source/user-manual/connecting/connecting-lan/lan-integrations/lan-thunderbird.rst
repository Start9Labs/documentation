.. _lan-thunderbird:

==================================
Trusting Start9 CA in Thunderbird
==================================

.. caution:: You will first need to complete :ref:`lan-os` for your device before continuing.  Take special note of the Thunderbird-specific instructions there.

.. tabs::

    .. group-tab:: Linux/Mac/Windows

        #. Open Thunderbird and do the following:

            a. Select the hamburger menu bar near the top right of the tab
            b. Select *Settings* from the resulting drop-down menu

            .. figure:: /_static/images/ssl/integrations/thunderbird_1.png
                :width: 80%
                :alt: Thunderbird config editor

            c. In the search bar in the top right, type "*config*"
            d. Select *Config Editor...*

            .. figure:: /_static/images/ssl/integrations/thunderbird_2.png
                :width: 80%
                :alt: Thunderbird config editor
        
        #. Search for **security.enterprise_roots.enabled**, and click the toggle button so that it turns to **true**:

            .. figure:: /_static/images/ssl/integrations/thunderbird_3.png
                :width: 80%
                :alt: Thunderbird enterprise_roots settings



