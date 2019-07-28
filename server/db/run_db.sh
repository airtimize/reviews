#!/bin/bash

#createdb
# pv /tmp/data.txt | psql -c "COPY mytest FROM STDIN;"

# psql -h localhost -f schema/postgresql.sql
# echo "Done with Postgres"
cqlsh -f schema/cassandra.cql
echo "Done with Cassandra"
