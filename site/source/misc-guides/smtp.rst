.. _smtp:

========================
Getting SMTP Credentials
========================
There are several StartOS services that are capable of sending emails, such as BTCPay Server, Ghost, Gitea, Nextcloud, Synapse, and Vaultwarden, using third party email (SMTP) servers. The guides below are for using Gmail or Amazon SES for SMTP, but you may also use another third party provider of your choice.

.. tabs::
    .. group-tab:: Gmail
        #. Open your **Google Security** by visiting `myaccount.google.com/security <https://myaccount.google.com/security>`_.

        #. You should have your **2-Step Verification** on. If not, please configure it first by `visiting the 2-Step Verification <https://myaccount.google.com/signinoptions/two-step-verification>`_ section.

            .. figure:: /_static/images/misc/gmail_smtp/gmail-smtp-2step-verification.png
                :width: 80%
                :alt: Gmail SMTP 2step Verification

        #. When the 2-Step Verification is active, you should be able to see the **App Password** at the bottom of its configuration page. Enter the `2-Step Verification <https://myaccount.google.com/signinoptions/two-step-verification>`_ section, scroll to the bottom and click the **App Passwords**.

            .. figure:: /_static/images/misc/gmail_smtp/gmail-smtp-app-passwords.png
                :width: 80%
                :alt: Gmail SMTP app password

        #. Select a name for the new app password.  You may call it anything, such as "SMTP."  Click the **Create** button.

            .. figure:: /_static/images/misc/gmail_smtp/gmail-smtp-create-app-password.png
                :width: 80%
                :alt: Gmail SMTP creating an app password

        #. A random 16 character password will be created and shown to you. This is your app password. Save it somewhere secure and click **Done**.

            .. figure:: /_static/images/misc/gmail_smtp/gmail-smtp-show-app-password.png
                :width: 80%
                :alt: Gmail SMTP app password show

        #. Now you can use this SMTP account for any service that has the capability to send an email. The table below shows all the details you may need:

            .. list-table:: Gmail SMTP information
                :widths: 33 67
                :header-rows: 1

                * - Parameter
                  - Value
                * - Host
                  - smtp.gmail.com
                * - Port
                  - 587
                * - Encryption
                  - TLS
                * - Username
                  - yourmail@gmail.com
                * - Password
                  - The 16 character secret you created in the previous step


    .. group-tab:: Amazon SES

      To use Amazon SES you will need:

      * An Amazon Web Services (AWS) account. If you don't have one, you can `register here <https://aws.amazon.com/>`_ for free.
      * To set up Amazon Simple Email Service (SES) on AWS, from `inside your AWS <https://aws.amazon.com/ses>`_ console, also free for a time within `certain limits <https://aws.amazon.com/ses/pricing/>`_.
      * Optional: To purchase your own domain name to send emails from, then add the domain records Amazon provides you. This will allow you to request 'Production Access' to send emails to unverified addresses (i.e. to more than just your own email address).

      You can then refer to the `Amazon SES docs <https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html>`_ to create a SMTP user. 

    .. group-tab:: Proton Mail

      Access to Proton Mail's SMTP settings is currently only made available by Proton to their customers with **Proton for Business**, as well as certain higher tier individual and family plans (**Proton Duo**, **Proton Family** – both with "SMTP Submission" as a listed feature), and then only when you point a custom domain to your account.

      To set up Proton Mail for SMTP you will need:

      * To purchase and point a domain name from a domain registrar to Proton's servers by following this guide here: `Custom Domain  <https://proton.me/support/custom-domain>`_
      * To follow the steps in the secion **How to set up SMTP** in the guide here: `SMTP Submission <https://proton.me/support/smtp-submission>`_