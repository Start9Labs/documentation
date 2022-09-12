.. _packaging-install:

============
10 - Install
============

Now that we have a process for iterating on producing a valid package for EmbassyOS, let's load it onto an Embassy!

1. First, generate an ssh key for the Embassy:

    .. code:: bash

        ssh-keygen -t ed25519
        # Press Enter to leave filename as default
        # Press Enter to leave password empty
        # Press Enter to confirm password is empty
        # Copy file contents to clipboard. This is your ssh pubkey.
        pbcopy .ssh/id_ed25519.pub 

2. On an Embassy device, enter the ssh pubkey into your SSH settings:

    1. Click on Embassy in the menu
    2. Click on SSH under SETTINGS
    3. Click on + Add new key
    4. Paste pubkey from clipboard 
 
3. Copy the ``hello-world.s9pk`` to the Embassy device:

    .. code:: bash

        # Confirm you can ssh into your Embassy
        ssh start9@<lan-url>
        # Log out of Embassy SSH session
        exit

        scp <package-id>.s9pk ssh start9@<lan-url>:/working/directory/path

        eg. scp hello-world.s9pk ssh start9@embassy-12345678.local:~

4. Finally, install the package on an Embassy device:

    .. code:: bash

        ssh start9@<lan-url>
        # log in to the command line interface using the Embassy password
        embassy-cli auth login
        embassy-cli package install hello-world.s9pk

**Congratulations!** You have successfully created and installed a package you created onto EmbassyOS. The package should now be viewable in the "Services" tab in EmbassyUI.

From here, you can play with viewing the results of your Manifest file settings, such as config, actions, interfaces, health checks, etc. You can also view the logs of your service right in the UI!

In order to verify your service is functioning as expected:

   - Ensure your service is in "Running" state
   - Make sure there are no apparent errors or warnings in the logs
   - Ensure each UI component renders as expected:
       - Instructions
       - Config
       - Properties
       - Actions
       - Interfaces
       - Marketplace listing
       - Donation
   - Launch or use your service in the intended way and make sure all aspects function 
