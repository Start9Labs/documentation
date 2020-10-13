.. _service_manifest:

****************
Service Manifest
****************

Types:

Manifest
.. code:: rust

    id: String
    version: semver::Version
    title: String
    description: Description
    release_notes: String
    has_instructions: bool
    os_version_required: semver::VersionReq
    os_version_recommended: semver::VersionReq
    ports: Vec<PortMapping>
    image: ImageConfig
    mount: PathBuf
    assets: Vec<Asset>
    hidden_service_version: HiddenServiceVersion
    dependencies: Dependencies
    extra: LinearMap<String, serde_yaml::Value>

Version
.. code:: rust

VersionReq
.. code:: rust

ImageConfig

pub enum ImageConfig {
    Tar,
}


#[derive(Debug, Clone, serde::Deserialize, serde::Serialize)]
pub struct Asset {
    pub src: PathBuf,
    pub dst: PathBuf,
    pub overwrite: bool,
}

pub struct Description {
    pub short: String,
    pub long: String,
}

pub struct PortMapping {
    pub internal: u16,
    pub tor: u16,
}

pub enum HiddenServiceVersion {
    V1,
    V2,
    V3,
}

pub struct Dependencies(pub LinearMap<String, DepInfo>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize)]
pub struct DepInfo {
    pub version: VersionReq,
    pub optional: Option<String>,
    pub description: Option<String>,
    #[serde(default)]
    pub config: Vec<ConfigRuleEntryWithSuggestions>,
}

----

Example ``manifest.yaml``:

.. code:: yaml

    compat: v0
    id: cups
    version: "0.3.6"
    title: "Cups Messenger"
    description:
    short: "Real private messaging"
    long: "Cups is a private, self-hosted, peer-to-peer, Tor-based, instant messenger. Unlike other end-to-end encrypted messengers, with Cups on the Embassy there are no trusted third parties."
    release-notes: |
    Features
        - Adds instructions defined by EmbassyOS 0.2.4 instructions feature
    ports:
    - internal: 59001
        tor: 59001
    - internal: 80
        tor: 80
    image:
    type: tar
    mount: /root
    has-instructions: true
    os-version-required: ">=0.2.4"
    os-version-recommended: ">=0.2.4"
    assets:
    - src: httpd.conf
        dst: "."
        overwrite: true
    - src: www
        dst: "."
        overwrite: true
    hidden-service-version: v3
