.. _synapse:

=======
Synapse
=======

.. contents::
  :depth: 2 
  :local:


.. _synapse-admin:

-------------------
Creating a new user
-------------------

These instructions will guide you through creating your first Matrix user on your Synapse service via the admin interface.

#. Visit the instructions page by clicking `Services > Synapse > Instructions` and following along.

#. As you come to **Step 2: Creating Your First Account**, continue below for instructions augmented with screenshots:

  **Substep 1**: In your Synapse dashboard, click "Launch UI"

  **Substep 2**: "Log in with your Admin Username and Password (located in Properties). For 'Homeserver URL', do not enter your Homeserver address. Instead, enter your Admin Portal URL"
    
    .. figure:: /_static/images/services/matrix/synapse-admin-1.png
      :width: 60%
      :alt: Synapse Admin login

    .. note:: The default login URL will end in `/#/login` which you must remove.  Only `https://yourlongsynapsehostname.local` should remain.

  **Substep 3**: "In the 'Users' tab, you will notice the admin user already created."
  
  **Substep 4**: "In the "Users" tab, click '+ Create'"

    .. figure:: /_static/images/services/matrix/synapse-admin-2.png
      :width: 60%
      :alt: Synapse Admin create user

  **Substep 5**: "Choose a User-ID, Displayname, and Password for your account."

    .. figure:: /_static/images/services/matrix/synapse-admin-3.png
      :width: 60%
      :alt: Synapse Admin new user creation