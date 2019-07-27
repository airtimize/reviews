#!/bin/bash

createdb
psql -h localhost -f postgresql.sql
echo "Done with Postgres"
cqlsh -f cassandra.cql
echo "Done with Cassandra"
