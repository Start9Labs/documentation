# Start9 Documentation

At Start9, we see great value in maintaining clear and accurate documentation for our already simple and friendly products. These docs are a continuous work-in-progress, and we welcome contributions from our partners and customers.

## Runbook

This project uses:
- [Sphinx](https://www.sphinx-doc.org/en/master/usage/installation.html)
- [Restructured Text](https://thomas-cokelaer.info/tutorials/sphinx/rest_syntax.html)
- [Sphinx Book Theme](https://sphinx-book-theme.readthedocs.io/)

### Dependencies

Install [python3](https://docs.python-guide.org/starting/install3/osx/)

Install sphinx and dependencies:
```
brew install sphinx-doc
pip3 install sphinx-autobuild
pip3 install sphinx-book-theme || pip install git+https://github.com/executablebooks/sphinx-book-theme.git@master
pip3 install sphinxcontrib.yt
pip3 install sphinx-multiversion
```

### Development

Run: `sphinx-autobuild source build/html` to activate a live-reload environment on `localhost:8000`.

To run in development mode when actively changing js/css files run: `sphinx-autobuild source build/html source/_static/js/main.js source/_static/default.css`. This will auto reload with changes to noted files.

The main configuration file for this project is located at `./source/conf.py`.

The navigation structure is aligned with the folder/file organization under `./source/`. This is where the individual page `.rst` files live and can be edited.

If any css or table of contents organization changes, run: `make clean html`.

## Contributing to the docs

If you notice a mistake in the docs, or you have an idea for improving them, we would like to know about it. You can either fix the mistake yourself and submit a pull request, or you can report the mistake by submitting an issue.

### Submitting an issue

Click on the "Issues" tab in the top navbar. Provide a good title and describe clearly the mistake or improvement.

### Submitting a pull request

Click on the "Pull requests" tab in the top navbar. Select the green "New pull request button" in the top right section. Select your branch for the compare dropdown, and master as the base. Provide an appropriate title and summary of the changes in the pull request description. Changes will be reviewed and merged when satisfactory. 

## Helpful Resources

- [Lists in RST](https://sublime-and-sphinx-guide.readthedocs.io/en/latest/lists.html)

## Updating theme

To update Sphinx Book Theme:
- `pip uninstall sphinx-book-theme` (needed to properly propagate new changes for some undetermined reason)
- `pip install sphinx-book-theme==<tag_version>` || `pip install git+https://github.com/executablebooks/sphinx-book-theme.git@<branch_name>` eg. `pip install sphinx-book-theme==0.0.42`

To deploy theme update:
- Build and publish according to production release process
