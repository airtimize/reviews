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
  listing_id tinyint primary key,
  guest_user_id tinyint,
  review_text varchar,
  reviews_created_at date,
 host_user_id tinyint,
 response_text varchar,
  response_created_at date
);

CREATE TABLE users (
  id tinyint primary key,
  avatar text,
  username text
)
