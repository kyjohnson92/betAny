#!/bin/bash

# flag to fail bash script if error occurs
set -e

# grabs PG_DEV_PASSWORD from env, if it doesn't exist use 'password' string
PG_DEV_PASSWORD=${PG_DEV_PASSWORD:-'password'}
PG_SCHEMA_FILE=${PG_SCHEMA_FILE:-'db/schema.sql'}

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

# deploy schema to container
export PGPASSWORD=${PG_DEV_PASSWORD} \
    && psql -h localhost -p 5432 -U postgres -f ${PG_SCHEMA_FILE}
