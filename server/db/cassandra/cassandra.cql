DROP KEYSPACE IF EXISTS airtimize_reviews;
CREATE KEYSPACE airtimize_reviews WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

use airtimize_reviews;

--tracing on;

CREATE TABLE listings (
  listing_id int primary key,
  accuracy decimal,
  communication decimal,
  cleanliness decimal,
  location decimal,
  checkin decimal,
  value decimal,
  num_reviews tinyint
);

CREATE TABLE reviews (
  listing_id int,
  guest_user_id int,
  review_text varchar,
  reviews_created_at date,
  accuracy tinyint,
  communication tinyint,
  cleanliness tinyint,
  location tinyint,
  checkin tinyint,
  value tinyint,
  host_user_id int,
  response_text varchar,
  response_created_at date,
  PRIMARY KEY(listing_id, reviews_created_at)
)
WITH CLUSTERING ORDER BY (reviews_created_at DESC);

CREATE TABLE users (
  id int primary key,
  username text,
  avatar text
);

CREATE TABLE reviews_by_accuracy (
  listing_id int,
  accuracy tinyint,
  PRIMARY KEY(listing_id, accuracy)
);

CREATE TABLE reviews_by_communication(
  listing_id int,
  communication tinyint,
  PRIMARY KEY(listing_id, communication)
);

CREATE TABLE reviews_by_cleanliness(
  listing_id int,
  cleanliness tinyint,
  PRIMARY KEY(listing_id, cleanliness)
);

CREATE TABLE reviews_by_location(
  listing_id int,
  location tinyint,
  PRIMARY KEY(listing_id, location)
);

CREATE TABLE reviews_by_checkin(
  listing_id int,
  checkin tinyint,
  PRIMARY KEY(listing_id, checkin)
);

CREATE TABLE reviews_by_value(
  listing_id int,
  value tinyint,
  PRIMARY KEY(listing_id, value)
);

CREATE TABLE overall_listings (
  listing_id int,
  overallaccuracy decimal,
  overallcommunication decimal,
  overallcleanliness decimal,
  overalllocation decimal,
  overallcheckin decimal,
  overallvalue decimal,
  num_reviews tinyint,
  review_id int,
  guest_user_id int,
  review_text varchar,
  reviews_created_at date,
  accuracy tinyint,
  communication tinyint,
  cleanliness tinyint,
  location tinyint,
  checkin tinyint,
  value tinyint,
  host_user_id int,
  response_text varchar,
  response_created_at date,
  PRIMARY KEY((listing_id, review_id), reviews_created_at)
)
WITH CLUSTERING ORDER BY (reviews_created_at DESC);

-- COPY listings (listing_id, accuracy, communication, cleanliness, location, checkin, value, num_reviews)
-- FROM '/Users/dorriswong/hrsf119/airtimize/review/server/db/csv/listings.csv'
-- WITH DELIMITER = ',' AND HEADER = TRUE;

-- COPY reviews(listing_id, guest_user_id, review_text, reviews_created_at, accuracy, communication, cleanliness,location, checkin, value, host_user_id, response_text, response_created_at)
-- FROM '/Users/dorriswong/hrsf119/airtimize/review/server/db/csv/reviews.csv'
-- WITH DELIMITER = ',' AND HEADER = TRUE;

-- COPY users(id, username, avatar)
-- FROM '/Users/dorriswong/hrsf119/airtimize/review/server/db/csv/users.csv'
-- WITH DELIMITER = ',' AND HEADER = TRUE;