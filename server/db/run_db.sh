#!/bin/bash

#createdb
psql -h localhost -f schema/postgresql.sql
# pv /tmp/data.txt | psql -c "COPY mytest FROM STDIN;"
echo "Done with Postgres"
cqlsh -f schema/cassandra.cql
echo "Done with Cassandra"
