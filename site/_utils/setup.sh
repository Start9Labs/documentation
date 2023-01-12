#! /bin/bash

if pwd | egrep -q '\s'; then
	echo "Working directory name contains one or more spaces."
	exit 1
fi

which python3 || { echo "Failed to find python3. Try installing Python for your operative system: https://www.python.org/downloads/" && exit 1; }
which poetry || curl -sSL https://install.python-poetry.org | python3 -

poetry install
poetry update
