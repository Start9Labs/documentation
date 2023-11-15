# Start9 Documentation

At Start9, we see great value in maintaining clear and accurate documentation for our already simple and friendly products. These docs are a continuous work-in-progress, and we welcome contributions from our partners and customers.

## Toolkit

These are the basic tools this project uses:

### Markup language

Docs are written in [RestructuredText](https://www.sphinx-doc.org/es/master/usage/restructuredtext/index.html). RestructuredText is a file format for textual data used primarily for technical documentation.

### Sphinx

The tool we used to converts [restructuredText](https://www.sphinx-doc.org) and Markdown to HTML.
Sphinx also has directives and extensions to add additional options for formatting the text.

### Scylla Sphinx Theme

A customized version of the [theme](https://github.com/scylladb/sphinx-scylladb-theme) used by Scylla documentation projects. It also adds a set of custom functionalities and styles.

### Multiversion extension

The [extension](https://github.com/Holzhaus/sphinx-multiversion) used to build docs for different versions.

## Dependencies

Install [python3](https://www.python.org/downloads/)
Install [poetry](https://python-poetry.org/docs/)
Install [pyenv](https://github.com/pyenv/pyenv)

For installations with macOS:

```
brew install python3
brew install poetry
```

## Project Setup

1. Clone this repository and enter the project folder:

```
git clone https://github.com/Start9Labs/documentation.git && cd documentation
```

1. Install theme submodule:

```
git submodule update --init
```

1. Prep NVM:

```
nvm use v16.11 || nvm install v16.11 && nvm use v16.11
```

1. Ensure poetry is updated

```
poetry update
```

1. Run setup script to install project dependencies:

```
chmod a+x site/_utils/setup.sh
./site/_utils/setup.sh
```

1. Make sure sphinx packages in the package.lock file are preset, for consistency:

```
cd sphinx-scylladb-theme
npm ci
cd ..
```

1. Navigate to the `site` folder and start the project:

```
cd site
make clean && make preview
```

## Development

When editing these files, begin a livereload environment by running `make preview` while in the `./site/` directory.

When editing any css or table of contents organization changes, the livereload environment must be ended and `make clean` run before starting `make preview` again.

If you edit something inside `sphinx-scylladb-theme`, you will need to `cd` into that directory and run `npm run build`.

### Versioning

- Build for versioning (must be on master) branch: `make multiversion`
- To view version metadata: `make multiversionpreview`

## Contributing to the docs

If you notice a mistake in the docs, or you have an idea for improving them, we would like to know about it. You can either fix the mistake yourself and submit a pull request, or you can report the mistake by submitting an [issue](https://github.com/Start9Labs/documentation/issues).

### Submitting an issue

Click on the "Issues" tab in the top navbar. Provide a good title and describe clearly the mistake or improvement.

### Submitting a pull request

Click on the "Pull requests" tab in the top navbar. Select the green "New pull request button" in the top right section. Select your branch for the compare dropdown, and master as the base. Provide an appropriate title and summary of the changes in the pull request description. Changes will be reviewed and merged when satisfactory.

## Helpful Resources

### Sphinx and RST syntax guides:

http://sphinx-doc.org/rest.html
http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html
http://www.siafoo.net/help/reST
http://thomas-cokelaer.info/tutorials/sphinx/rest_syntax.html
https://sublime-and-sphinx-guide.readthedocs.io/en/latest/lists.html
