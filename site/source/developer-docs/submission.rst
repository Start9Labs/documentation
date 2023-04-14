.. _community-submission:

============================
Community Submission Process
============================

**The following must be completed for initial publication as well as every new version of a service**

* The source code of the service wrapper and its upstream application must be public (source available)
* Send an email to submissions@start9.com containing a link to your polished service wrapper repository
* Start9 creates a snapshot of the repository
* Start9 reviews the codebase, inspecting for completeness and signs of foul play
* Start9 builds the service on our Debian build box (``prepare.sh`` and ``make<package-id>.s9pk``). Start9 will not spend time fighting build errors or debugging. If your script does not produce a production build on first try, we will reply with the relevant error so you can fix it.
* Start9 installs and tests the service on a StartOS machine. Start9 will NOT test or judge the service itself, only that it runs smoothly and safely on StartOS, including:
  
	* Marketplace listing: the service must include all required metadata fields and valid links
	* Install/Uninstall: the service must install and uninstall smoothly
	* Instructions: if the service offers Instructions, they must display without error
	* Properties: if the service offers Properties, they must display without error
	* Config: if the service offers Config, it must function without error
	* Dependencies: if the service depends on another service(s), it must properly utilize the StartOS dependency management system
	* Actions: if the service offers Actions, they must run without error
	* Health Checks: if the service offers Health Checks, they must display and run without error
	* Interfaces: the service must offer at least one interface, otherwise there is no way to use it
	* Logs: the logs page must display without error
	* Compatibility: the service must run smoothly alongside the entire set of services on the Start9 Registry on a low resource device: think Raspberry PI (8GB) or an equivalent x86 machine
	* Backup/Restore: the service must successfully backup and restore

Upon satisfying all the above criteria, Start9 will publish the s9pk to the Community Beta Registry and send you an email to confirm acceptance. Except in emergency situations, we highly recommend that you leave your service on Beta for a couple of days, such that it can be tested by your own testers plus anyone else who enjoys testing new releases. This will maximize the probability that any bugs will be caught before shipping to production.

When you are ready to publish to production, reply to the  email, instructing Start9 to publish it. A simple "ship it" will do fine.
