DROP DATABASE IF EXISTS airtimize_reviews;
CREATE DATABASE airtimize_reviews;
\connect airtimize_reviews;

CREATE TABLE listings (
  id SMALLINT,
  accuracy FLOAT(1),
  communication FLOAT(1),
  cleanliness FLOAT(1),
  location FLOAT(1),
  checkin FLOAT(1),
  value FLOAT(1),
  num_reviews SMALLINT
);

CREATE TABLE reviews (
  id SERIAL,
  listing_id SMALLINT,
  guest_user_id SMALLINT,
  review_text VARCHAR(255),
  review_created_at DATE,
  accuracy SMALLINT,
  communication SMALLINT,
  cleanliness SMALLINT,
  location SMALLINT,
  checkin SMALLINT,
  value SMALLINT,
  host_user_id SMALLINT,
  response_text VARCHAR(255),
  response_created_at DATE
);

CREATE TABLE users (
  id SERIAL,
  avatar VARCHAR(30),
  username VARCHAR(30)
)

copy listings(id, accuracy, communication, cleanliness,location, checkin, value, num_reviews) FROM '/Users/dorriswong/hrsf119/airtimize/review/server/db/listings.csv' DELIMITER ',' CSV HEADER;

copy reviews(listing_id,guest_user_id,review_text,reviews_created_at, accuracy, communication, cleanliness,location, checkin, value, host_user_id, response_text, response_created_at) FROM '/Users/dorriswong/hrsf119/airtimize/review/server/db/reviews.csv' DELIMITER ',' CSV HEADER;

copy users(avatar, username) from '/Users/dorriswong/hrsf119/airtimize/review/server/db/users.csv' DELIMITER ',' CSV HEADER;

-- EXPLAIN ANALYSE select * from [tablename] where [condition];