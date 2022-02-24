#!/bin/bash
set -e

if [ "$0" != "./_utils/deploy_staging.sh" ]; then
	>&2 echo "Must be run from site directory"
	exit 1
fi

echo "FILTER: make multiversion"
make clean && make multiversion

echo "FILTER: scp build"
scp -r _build/* root@staging.start9labs.com:/var/www/html/staging.start9labs.com

echo "FILTER: ssh restart nginx and tor"
ssh root@staging.start9labs.com "systemctl reload nginx && systemctl reload tor"

echo "FILTER: fin"
