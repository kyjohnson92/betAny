.PHONY: db connect-db cleanup-db
PG_DEV_PASSWORD=password

db:
	echo 'setting up local DB'
	export PG_DEV_PASSWORD=$(PG_DEV_PASSWORD) && sh ci/db/setup.sh

connect-db:
	export PGPASSWORD=$(PG_DEV_PASSWORD) && pgcli -h localhost -p 5432 -U postgres

cleanup-db:
	docker kill betany-db
	docker rm betany-db

run:
	python betAny_django/manage.py migrate
	python betAny_django/manage.py runserver
