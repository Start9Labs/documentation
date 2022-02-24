#!/bin/bash
set -e

echo "FILTER: make multiversion"
make clean && make multiversion

echo "FILTER: scp build"
scp -r _build/* root@staging.start9labs.com:/var/www/html/staging.start9labs.com

echo "FILTER: ssh restart nginx and tor"
ssh root@staging.start9labs.com "systemctl reload nginx && systemctl reload tor"

echo "FILTER: fin"
