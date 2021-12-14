.. _dev_faq:

**************************
Contributing & Development
**************************

What versions does this FAQ concern?
------------------------------------
This FAQ concerns only EmbassyOS version 0.3.0 and above.  For v0.2.x documentation, please see our :ref:`Service Packaging Guide <service_package_overview>`.

What language does the application I want to package need to be written in?
---------------------------------------------------------------------------
The application can be written in any language, so you may prefer to select an application in a language you are comfortable with (or write your own application).  It is only important that the packaging specifications be followed.

What considerations go into selecting an application to package?
----------------------------------------------------------------
With sufficient effort, most any software with the ability to be self-hosted could make its way onto EmbassyOS.  That being said, the following features will make service packaging much easier:

- Already built with self-hosting in mind
- Active development / community
- Native proxy/tor support
- Already 'dockerized'

Which possible formats can I use to write the :code:`manifest`, :code:`config_spec`, and :code:`config_rules` files?
--------------------------------------------------------------------------------------------------------------------
JSON, TOML, or YAML are valid options.

I'm getting errors on the `embassy-sdk pack` step.  What's going on?
--------------------------------------------------------------------
There is something either missing or incorrect in regard to one of the :code:`manifest`, :code:`configs`, :code:`instructions`, or :code:`icon` files.

