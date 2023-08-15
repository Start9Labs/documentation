.. _service_instructions:

============
Instructions
============

Within each wrapper repository, a file should exist that includes instructions for a service. This file should include any pertinent documentation, instructions, external integrations, or other details about the service that users or developers might find relevant.

This markdown formatted file will be rendered in the "Instructions" section within the service page on StartOS:

  .. figure:: /_static/images/services/service-instruct.png
    :width: 80%
    :alt: Start9 Pages Instructions

Below is the markdown file for Start9 Pages' instructions, as shown above:

  .. code-block::

    # Start9 Pages

    ## About

    Start9 Pages is a simple web server that uses directories inside File Browser to serve Tor websites. Your website could be a blog, a resume, a portfolio, a business landing page, a product brochure, or just a set of static folders and/or files that you want to share with the world.

    When you first install Start9 Pages, there will be a default Homepage hosted at the root, <tor-address>.onion. You can change the behavior of this page, and you can also create Subdomain websites. For example, one site could be hello.<tor-address>.onion and another could be goodbye.<tor-address>.onion. What is served from the Homepage and each Subdomain is totally up to you.

    Self-hosting Tor  websites using Start9 Pages is easy, permissionless, and censorship-resistant; there are no trusted third parties involved.

    ## Instructions

    1. Inside `Config`, you can easily change the behavior of your Homepage to serve:
      a. A list of hyperlinks to all your Subdomains
      b. A personal web page
      c. An automatic redirect to a Subdomain
      d. A static web page that tells anyone visiting it to fuck off, politely.

    2. Inside `Config`, you can create one or more Subdomains, giving each a unique name.

    3. To serve a personal website, simply upload the website directory to File Browser. Then, inside the settings for a particular page (either your Homepage or a Subdomain), enter the path to that directory. For example, a path of websites/blog would tell Start9 Pages that it can find the blog website inside the websites directory in File Browser.

    4. A list of all your Subdomains can be found inside the Properties section of your Start9 Pages service.

    ## Restore from Backup

    1. In `Config`, select "Restore from Backup".
    2. After the restoration completes, navigate to the Marketplace.
    3. Downgrade Start9 Pages.
    4. Upgrade Start9 Pages to the latest version.
    5. Start Start9 Pages.
    6. Start9 Pages is now successfully restored!

Example
-------

The `bitcoind wrapper <https://github.com/Start9Labs/bitcoind-wrapper/tree/master/docs>`_ demonstrates a good use of instructions and external integrations.

.. role:: raw-html(raw)
    :format: html

:raw-html:`<br />`
