# Start9 Labs Documentation

## Environment Setup

Install [python3](https://docs.python-guide.org/starting/install3/osx/)

Install sphinx: `brew install sphinx-doc`

Python dependencies:
```
pip3 install sphinx-autobuild
pip3 install sphinx-book-theme
```

## To Develop

This project uses [Sphinx](https://www.sphinx-doc.org/en/master/usage/installation.html) and [Restructured Text](https://thomas-cokelaer.info/tutorials/sphinx/rest_syntax.html)

`conf.py` is the configuration source for the Sphinx project

If any css or table of contents organization changes, run: `make clean html`

To activate a live-reload environment on `localhost:8000`, run: `sphinx-autobuild source build/html`