DROP KEYSPACE IF EXISTS airtimize_reviews;
CREATE KEYSPACE airtimize_reviews with replicaton={'class':'SimpleStrategy','replication_factor': 1};
use airtimize_reviews;


CREATE TABLE listings (
  listing_id tinyint primary key,
  accuracy decimal,
  communication decimal,
  cleanliness decimal,
  location decimal,
  check_in decimal,
  value decimal,
  num_reviews tinyint
);

CREATE TABLE reviews (
  listing_id tinyint,
  guest_user_id tinyint,
  review_text varchar,
  reviews_created_at date,
  accuracy tinyint,
  communication tinyint,
  cleanliness tinyint,
  location tinyint,
  check_in tinyint,
  value tinyint,
  host_user_id tinyint,
  response_text varchar,
  response_created_at date,
  PRIMARY KEY((listing_id, guest_user_id, host_user_id) WITH CLUSTERING ORDER BY ( reviews_created_at DESC));
);

CREATE TABLE users (
  id tinyint primary key,
  avatar text,
  username text
)
