# TODO
- Update all guides in service repos
    - Service-specific Guides (link to wrapper repos)
- Verify LAN and Tor setup steps on a Mac
- Address build errors
- Add / verify ALL links in the **UI** go to the right place in docs

# BLOCKED:
- LAN Setup - Android - Screenshots of LAN setup and verify steps on an Android 12+ device
- Mission / values
- Initial Setup
- DIY Guide
- Possible sounds in troubleshooting (and walkthrough?)
- Migration / Recovery
- Backups
    - CIFS
        - OS guides for CIFS (screens)
    - Local
    - Restore from backup
- Alt Market Build Guide
- Refactor and update Roadmap
- Launch versioned site/docs to start9.com
- Verify ALL links (especially in device guides as they are all external)

# AFTER PUBLISHING:
- Create badges for device guide topic boxes <connectivity, performance, resilience and/or tuning>
- There are many issues that should be closed by 0.3 docs release (some issues await new processes in order to test)
- Email signup


- download "Embassy Local CA.crt" from settings (must be done over desktop/laptop Tor)
- send cert to self via Telegram, email, cloud storage, etc
- download cert on Android device
- go to Settings -> Security -> Advanced -> Encryption and Credentials -> Install a Certificate
- Selected cert from file system
- In Firefox, enter about:config in URL bar
- search for security.enterprise_roots.enabled and set to true
It will be the same for 0.3.0 except they can also get the cert in the final step of setup or from the downloaded file from setup
