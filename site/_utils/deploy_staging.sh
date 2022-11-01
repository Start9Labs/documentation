#!/bin/bash
set -e

if [ "$0" != "./_utils/deploy_staging.sh" ]; then
	>&2 echo "Must be run from site directory"
	exit 1
fi

echo "FILTER: build theme"
cd ../sphinx-scylladb-theme && npm run build && cd ../site

echo "FILTER: make multiversion"
make clean && make multiversion

echo "FILTER: rsync build"
rsync -rzP --delete ./_build/dirhtml/ root@staging.start9.com:/var/www/html/staging.start9labs.com/dirhtml/

echo "FILTER: ssh restart nginx and tor"
ssh root@staging.start9.com "systemctl reload nginx && systemctl reload tor"

echo "FILTER: fin"
