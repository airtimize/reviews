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

