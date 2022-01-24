.. _error-logs:

=============================
Anonymous Error Log Reporting
=============================

When you fire up your Embassy for the first time, you will be greeted with a modal asking you if you would be willing to provide your error logs to Start9 to assist us in improving EmbassyOS and its ecosystem.  The decision to send or retain this data is 100% yours.  Below are details to aid you in determining your choice.

Why do we ask for this?
-----------------------
The last thing Start9 wants is data that relates to users of EmbassyOS, but data that is generated within the system is *extremely* helpful for our engineers to stabilize and enhance the software.

What data is sent?
------------------
* Every log entry that is WARN or above, such as:
    * Service crashes
    * Failed updates
* Metadata, such as:
    * What services are running

Data is catalogued with a random 64-bit integer that is generated upon creating a new :ref:`Session<sessions>`.  Data cannot be correlated across sessions.  This means that every time you create a new session, such as a browser log on, error logs are attached to that session *only*, and you can kill a session at any time (see :ref:`Active Sessions<active-sessions>`).  These session ids are NOT used during support sessions (they are not even provided to the user), such that a support technician CAN NOT attach any kind of identity to a session or its logs.

How is data sent?
-----------------
These error logs are sent exclusively across Tor, and as such, we cannot even identify what machine, address, or user sent them.
