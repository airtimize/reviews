DROP KEYSPACE IF EXISTS airtimize_reviews;
CREATE KEYSPACE airtimize_reviews with replicaton={'class':'SimpleStrategy','replication_factor': 1};
use airtimize_reviews;

--tracing on;

CREATE TABLE listings (
  listing_id tinyint primary key,
  accuracy decimal,
  communication decimal,
  cleanliness decimal,
  location decimal,
  checkin decimal,
  value decimal,
  num_reviews tinyint
);

CREATE TABLE tester (
  listing_id tinyint,
  guest_user_id tinyint,
  review_text varchar,
  reviews_created_at date,
  accuracy tinyint,
  communication tinyint,
  cleanliness tinyint,
  location tinyint,
  checkin tinyint,
  value tinyint,
  host_user_id tinyint,
  response_text varchar,
  response_created_at date,
  PRIMARY KEY((listing_id, guest_user_id, host_user_id) WITH CLUSTERING ORDER BY (reviews_created_at DESC));
);

CREATE TABLE users (
  id tinyint primary key,
  avatar text,
  username text
)

COPY airtimize_reviews.listings(id, accuracy, communication, cleanliness, location, checkin, value, num_reviews) FROM '/Users/dorriswong/hrsf119/airtimize/review/server/db/listings.csv' WITH DELIMITER ',' AND HEADER=TRUE;

COPY airtimize_reviews.reviews(listing_id, guest_user_id, review_text, reviews_created_at, accuracy, communication, cleanliness,location, checkin, value, host_user_id, response_text, response_created_at) FROM '/Users/dorriswong/hrsf119/airtimize/review/server/db/reviews.csv' WITH DELIMITER ',' AND HEADER=TRUE;

COPY airtimize_reviews.users(id, avatar, username) from '/Users/dorriswong/hrsf119/airtimize/review/server/db/users.csv' WITH DELIMITER ',' AND HEADER=TRUE;