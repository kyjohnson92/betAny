#!/bin/bash

# flag to fail bash script if error occurs
set -e

# pulls latest postgres image
docker pull postgres:12.1

docker run -d \
    --name betany-db \
    -e POSTGRES_PASSWORD=password \
    -p 5432:5432 \
    postgres:12.1

echo 'waiting for postgres DB to complete setup...'
sleep 5

# checks to see if pgcli is installed. If not, brew install it.
if type pgcli >/dev/null 2>&1; then
    echo 'pgcli already installed...'
else
    echo 'installing pgcli...'
    brew install postgres
    brew install pgcli
fi
