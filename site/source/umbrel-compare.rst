=================
Umbrel Comparison
=================
This post will attempt to do a deep dive into the features of the Umbrel 0.4.10 and Embassy 0.3.0 personal servers. Many bitcoin and lightning node operators and other privacy conscious individuals use both platforms on a daily basis, so we think this functional comparison will help when choosing which platform to use for your needs.

Definitions
-----------

Each platform will have different terminology, so let’s first agree on common terms so the comparisons can be easy to understand.

**Embassy “Service” vs Umbrel “App”**

Each platform has a different name for describing server-side applications. Start9 calls them “services”, Umbrel calls them “apps”. For the remainder of this post, we will refer to them as services, but it means the same thing.

**Embassy Service Marketplace vs Umbrel App Store**

Both platforms publish their services through a web portal that allows the user to download and install the service from directly within the OS. Start9 calls it a “service marketplace” and Umbrel calls it an “app store”. For the remainder of this post, we will refer to it as a marketplace. 

Now on to the feature comparisons!

Marketplace
-----------

Both platforms offer a similar experience for discovering and installing services, but beneath the surface there are some important differences.

**Umbrel**

Each version of Umbrel contains a file called registry.json that defines the complete set of possible services and their versions that can be installed on that version of Umbrel. The Umbrel App Store is a graphical interface for examining this file in a visual way, complete with images. When you click “install”, your Umbrel reaches out to dockerhub.io to fetch the docker container for the selected service. In other words, the Umbrel App Store is actually a custom skin for dockerhub.io that exposes a subset of services defined by that version of Umbrel. There are three very important consequences to this architecture:

Dockerhub.io is a single point of failure and de facto dependency of Umbrel. If Dockerhub.io ever goes down or becomes compromised, it will not be possible to reliably install or update services.

**Embassy**

With Embassy, nothing is built-in or pre-installed, not even Bitcoin. This means you can easily run two Embassies: one for Bitcoin services, and another for non-Bitcoin services. Install only the services you want on each device. Packages are entirely modular and self-describing, meaning that you can even install packages to your Embassy that you get from a friend even if that package doesn’t appear on any marketplace.

Moreover, there is no static configuration file that details or limits the set of possible services that can be installed. Installations and updates are done a la carte and are independent of one another. If Start9 releases a new service or updates an existing service, such as an emergency security update for Bitcoin, you can get the new version without needing to update your entire Embassy or any other services.

Finally, anyone can host an alternative or competing marketplace, either on clearnet or over Tor, and users can switch between marketplaces inside the Embassy interface. This means that Start9 does not occupy a central position in the marketplace ecosystem. If Start9 goes down, users can switch to an alternative marketplace and continue to install and update services.

Available Services
------------------

The reason anyone wants a personal server is the same reason anyone wants a personal computer: to do things with it! In other words, services.

**Umbrel**

At the time of this writing, there are 46 services available on Umbrel.

**Embassy**

At the time of this writing, there are 24 services available on Embassy.

Service Contributions
---------------------

There are several services available on both platforms, but even so these platforms are not limited to just what you can find on their respective marketplaces. Both platforms have a developer guide for packaging up your own service from your own repository. 

**Umbrel**

Umbrel uses docker containers to package up services, and can be done in any programming language. The only requirement is for the service to serve up a web page, as the regular user is never expected to have cli access on Umbrel.

The docker containers can be tested on a dedicated Umbrel development environment, available for both Linux and MacOS, or can be tested directly on an Umbrel. Any dependencies on other services would need to be managed by the service author/developer.

Umbrel uses docker images pushed to Docker Hub to catalog services on the Umbrel marketplace. All services are bundled together in UmbrelOS releases, so once you submit a service to Umbrel, you would need to wait until the next UmbrelOS version release in order to see your service in the Umbrel marketplace.

**Embassy**

Embassy uses the concept of a ‘wrapper’ around a docker container to package custom services and provides detailed documentation on how to package a service for the Embassy using any desired programming language. This wrapper acts as a translation layer such that developers can take advantage of the embassyOS’ various APIs mentioned throughout this writing. Embassy will host the service over Tor and LAN without any additional configuration needed. They also provide a hello-world example to refer to when packaging a custom service.

Services can then be submitted to the Start9 Service Marketplace for review and distribution, or they can be hosted on any alternative marketplace.

Backups
-------

When it comes to digital independence, there is nothing more important than maintaining good backups. If your server is stolen or destroyed, and you don’t have good backups, you can lose everything. Again, Embassy and Umbrel are entirely different when it comes to backups.

**Umbrel**

With Umbrel, you do not have to worry about backing up LND, including your lightning payment channels. Umbrel automatically creates encrypted backups of your LND node on their own server. You can, and should, download these backups regularly to ensure you have the latest backup in case something goes wrong. You can also download a .backup file of your channels and save it locally.

Umbrel does not offer a means of backing up other services. If you want to back up your Bitcoin node, or your data, messages, or passwords from other services, you will need to SSH into your Umbrel, then use the command line to manually export data from each service using an over-the-air protocol such as FTP or SMB. You will need to research each service to determine exactly what data should be exported and in what format, and you will need to perform your own encryption if you want the backups to be encrypted. So except for LND, which is backed up on Umbrel’s server, it is not practical to backup your other services.

**Embassy**

With Embassy, creating a complete encrypted backup of your entire system is a matter of clicking “Create Backup” in the GUI and selecting a target destination. The destination can either be a physical hard drive or a shared network folder, basically any device that is connected to the same Local Area Network as your Embassy. Backups are encrypted using your Embassy master password.

You can restore from backup directly from the GUI by clicking “Restore from Backup”, selecting the drive where the backup exists, and then selecting the services you want to restore.

Service Configuration
---------------------

Services, like client apps on your phone or computer, usually have settings. Unlike these apps, however, services often (1) do not have a user interface or (2) rely on certain settings for their boot process; meaning, by the time you might see a settings menu, it’s too late. So instead of a settings menus, services usually rely on configuration files that instruct the service not only how to initialize, but also how to function once initialization is complete. In Bitcoin, for example, configuration is accomplished by editing the bitcoin.conf file, then starting or restarting the node. Configuration files are often massive, require using the command line, and are generally not validated, meaning it is easy to make a mistake, which can cause the entire service to crash or stop functioning properly. Furthermore, config files rarely self-describe the set of possible options or values for each option, leaving users wondering what is even available to them.

**Umbrel**

Umbrel provides sane defaults for service configurations. If the user wishes to change the defaults, they must use SSH, the command line, and a command line text editor such as vim or nano to modify whatever configuration file the service uses, such as bitcoin.conf. It is left up to the user to research the possible configuration options and modify the files without making a mistake.

**Embassy**

Embassy also provides sane defaults for service configurations. If the user wishes to change the defaults, they can do so through the Embassy GUI using a graphical form, complete with descriptions, toggles, dropdowns, and standard inputs, all fully validated to ensure no mistakes are made.

Health Checks
-------------

Perhaps the most important (and difficult) task of a systems administrator is to constantly monitor the health and availability of their services. And it is not always obvious what constitutes health. For example, if your Bitcoin node is running, does that mean it is healthy? The answer is no. A running Bitcoin node is useless if it hasn’t fully started up or its P2P interface is unreachable. What about if your node is not fully synced. Is a partially synced Bitcoin node considered healthy? The answer is that it depends on who is asking. From LNDs perspective, a partially synced Bitcoin node is not healthy, since until Bitcoin is fully synced, LND cannot do its job. As a systems administrator, monitoring the health of your services from a variety of perspectives and use cases is a serious challenge.

**Umbrel**

There is no health check system for services in Umbrel. It is up to the user to know what constitutes health for each service and to manually inspect logs and use SSH and the command line to determine if their services are healthy.

**Embassy**

In Embassy, package developers define what constitutes health for a given service and write scripts to test for it. Embassy performs these health checks on a continuous basis, presenting results to the user inside the GUI. Users can tell at a glance if Bitcoin is running smoothly, or if LND is satisfied with the state of Bitcoin’s health. In the event that a health check fails, Embassy can issue a notification, informing the user of the failure along with a report for how the issue was resolved or whether resolution requires further action.

Actions
-------

In the course of running your own services, you will often enter commands into the command line to execute certain actions or scripts, such as resyncing the Bitcoin blockchain, or resetting a password. Being aware of these commands and knowing how and when to use them gives you more control over your services and are sometimes necessary for resolving issues. Here, again, we see big differences between Embassy and Umbrel.

**Umbrel**

Umbrel does not make actions available to users. If you want to execute a command, you must use SSH and the command line. From there, you can run any command you want, but there is no guidance or protection from the operating system.

**Embassy**

In Embassy, the Actions interface allows users to execute common commands inside the GUI. Actions are developer defined and can be any command, including commands that take user input. Commands that have not been formally converted into Actions may be executed using SSH and the command line.

LAN SSL
-------

When communicating with your personal server in a browser context, it is important to ensure that your communication is private and secure. For this reason, Both Embassy and Umbrel serve their user interfaces over Tor as V3 Hidden Service. This enables you to access your server from anywhere in the world, right from the browser, by visiting a unique .onion URL. But Tor is slow and clunky. As such, both platforms also serve their user interfaces over the Local Area Network (LAN), such that you can access your server in a more performant manner while connected to the same LAN by visiting a unique .local URL.

**Umbrel**

Umbrel uses an unencrypted http connection for communicating over the LAN. If your LAN is secure, this is not an issue. But anyone with access to your LAN, including guests who have your WiFi password or who plug in via Ethernet, would trivially be able to sniff traffic.

**Embassy**

Embassy acts as its own Certificate Authority (CA), such that it can use an encrypted https connection for communicating over the LAN. This requires a bit of setup, namely downloading your Embassy’s SSL CA certificate and trusting it in both your device and your device’s browser. It takes a few minutes to set up, but once complete, you can be sure that no one can sniff your traffic, even if they have access to your LAN.

Properties
----------

Often, you will want to inspect the data of one of your services or query it for a specific value. We will refer to these values as Properties. For example, what is the sync progress of your Bitcoin node? Or what are the gRPC credentials of your LND node? Or what is the default username and password of your photo sharing service?

**Umbrel**

With Bitcoin and Lightning, Umbrel provides a beautiful GUI that displays properties in real time, such as sync progress and current block height. Umbrel does not, however, have a generalized interface for displaying arbitrary properties for any service. These properties must be obtained by using SSH and the command line.

**Embassy**

In Embassy, what qualifies as a property that is worth displaying is determined by the package developer. Embassy offers a generalized interface for presenting properties to the user, such that they can view, copy, or QR scan important values inside the GUI. Properties that are not made available by the package developer can be obtained by using SSH and the command line.

Notifications
-------------

When it comes to running your own server, knowing what happened and when can be very important for debugging, or for resolving an issue as soon as it arises.

**Umbrel**

Umbrel does not have a notification system. If something goes wrong with your Umbrel or any of its services, you will have to figure it out from unexpected behavior.

**Embassy**

If something important happens (i.e. a service crashes, or a health check fails, or  backup completes), Embassy will issue a notification. These notifications are retained and displayed chronologically inside the Notifications section of your Embassy. Some notifications also contain metadata. For example, a notification about a completed backup will contain a detailed report of that backup.