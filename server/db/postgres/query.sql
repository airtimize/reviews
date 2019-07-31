--POST
INSERT INTO reviews (listing_id,guest_user_id,review_text,review_created_at,accuracy,communication,cleanliness,location,checkin,value,host_user_id,response_text,response_created_at) VALUES (5,270,'Aut dolor facilis et culpa.','Thu Aug 30 2018',3,4,4,5,1,1,738,'Ut similique quia deleniti ut ullam quia odit debitis.','Sat Mar 16 2019');

--GET
SELECT * FROM reviews WHERE listing_id = 999999 ORDER BY review_created_at DESC;
SELECT * FROM reviews JOIN listings ON reviews.listing_id = listings.id WHERE listing_id = 999999 ORDER BY review_created_at DESC;

--PUT
UPDATE reviews SET listing_id = 2, guest_user_id = 2, review_text = 'Aut dolor', review_created_at = 'Sat Mar 16 2019',accuracy = 2, communication = 2,cleanliness = 2,location = 2,checkin = 2,value = 2,host_user_id = 3,response_text = 'Aut dolor',response_created_at = 'Sat Mar 16 2019' WHERE listing_id = 1 AND id = 1;

--PATCH
UPDATE reviews SET accuracy = 1 WHERE listing_id = 2 AND id = 1;

--DELETE
DELETE FROM reviews WHERE listing_id = 2 AND id = 1;

--CREATE INDEXES
CREATE INDEX idx_id ON listings (id);
CREATE INDEX idx_reviews ON reviews (id);