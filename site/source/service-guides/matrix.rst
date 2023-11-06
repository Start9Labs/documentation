.. _matrix:

======
Matrix
======

Synapse
-------

  With registrations disabled, the only way to create an account on your Server is through the Admin Portal.  The Admin Portal is the preferred method for creating an account.

#. In your Start9 UI, under `Services > Synapse`, click "Launch UI"
#. Log in with your Admin Username and Password (located in Properties). For "Homeserver URL", do `not` enter your Homeserver address. Instead, enter your Admin Portal URL.

    .. note:: This is the URL currently showing in your browser URL bar, excluding the path. e.g. https://exampleaddress.local or http://exampleaddress.onion.

    .. figure:: /_static/images/services/matrix/synapse-admin-1.png
     :width: 60%
     :alt: Synapse Admin

#. In the "Users" tab, you will notice the admin user already created.

#. In the "Users" tab, click "+ Create"

    .. figure:: /_static/images/services/matrix/synapse-admin-2.png
     :width: 60%
     :alt: Synapse Admin
   
#. Choose a User-ID, Displayname, and Password for your account. Optionally enter an email address under the 3PIDs section. It is not recommended to make this user a Server Administrator, as it is best to limit admin access.
   
    .. figure:: /_static/images/services/matrix/synapse-admin-3.png
     :width: 60%
     :alt: Synapse Admin
    