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

Install [pyenv](https://github.com/pyenv/pyenv)

## Development

When editing these files, begin a livereload environment by running `make preview` while in the `./site/` directory.

When editing any css or table of contents organization changes, the livereload environment must be ended and `make clean` run before starting `make preview` again.

### Versioning
- Build for versioning (must be on master) branch: `make multiversion`
- To view version metadata: `make multiversionpreview`

## Contributing to the docs

If you notice a mistake in the docs, or you have an idea for improving them, we would like to know about it. You can either fix the mistake yourself and submit a pull request, or you can report the mistake by submitting an `issue <https://github.com/Start9Labs/documentation/issues>`__ .

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