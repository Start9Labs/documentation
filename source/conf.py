# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))

# -- Project information -----------------------------------------------------

project = 'Start9 Docs'
copyright = '2021, Start9 Labs, Inc'

# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinxcontrib.yt',
    'sphinx_multiversion'
    # 'sphinxcontrib.needs'
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# HTML sidebar widgets
# html_sidebars = {
#     '**': [
#         'versioning.html',
#     ],
# }

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []

# Multiversion settings
smv_tag_whitelist = 'None'
smv_prefer_remote_refs = True
# smv_branch_whitelist = master


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.

html_theme = 'sphinx_book_theme'
html_copy_source = True
html_last_updated_fmt = ""

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

html_theme_options = {
    # "theme_dev_mode": True,
    "path_to_docs": "source",
    "repository_url": "https://github.com/Start9Labs/documentation",
    "repository_branch": "master",
    "use_edit_page_button": True,
    "use_issues_button": True,
    "use_repository_button": True,
    "extra_navbar": "Powered by <a href=\"https://start9.com\">Start9</a>", # Will be displayed underneath the left navbar"
    "show_navbar_depth": 1,
    "use_download_button": True,
    "use_edit_page_button": True,
    "launch_buttons": {
        "main_site": "https://start9.com",
    },
}
html_logo = "_static/logo.png"
html_title = "Docs"
html_favicon = "_static/favicon.ico"
html_js_files = [
    'js/main.js'
]
html_cs_files = [
    'default.css'
]