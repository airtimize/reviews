#!/bin/bash

#createdb
# pv /tmp/data.txt | psql -c "COPY mytest FROM STDIN;"

psql -h localhost -f postgres/postgresql.sql
echo "Done with Postgres"
cqlsh -f cassandra/cassandra.cql
echo "Done with Cassandra"
