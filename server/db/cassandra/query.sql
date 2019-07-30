--POST
INSERT INTO
reviews1 (review_id,
listing_id,
guest_username,
guest_avatar,
review_text,
review_created_at,
accuracy,
communication,
cleanliness,
location,
checkin,
value,
host_username,
host_avatar,
response_text,
response_created_at)
VALUES (now(),
5,
'helen',
'img',
'Aut dolor facilis et culpa.',
'Thu Aug 30 2018',
3,
4,
4,
5,
1,
1,
'helen',
'img',
'Ut similique quia deleniti ut ullam quia odit debitis.',
'Sat Mar 16 2019');

--GET
SELECT * FROM reviews WHERE listing_id = 2 ORDER BY review_created_at DESC;
SELECT * FROM listings WHERE listing_id = 2;

--PUT
UPDATE delete_reviews SET guest_username = 'hellen',guest_avatar = 'imgasd',review_text = 'Aut dolor',review_created_at = 'Sat Mar 16 2019',accuracy = 2,communication = 2,cleanliness = 2,location = 2,checkin = 2,value = 2,host_username = 'hellen',host_avatar = 'img',response_text = 'Aut dolor',response_created_at = 'Sat Mar 16 2019' WHERE listing_id = 2 AND review_id = 077ae6c9-b27a-11e9-aee2-6839e69d3338;

--PATCH
UPDATE delete_reviews SET accuracy = 1 WHERE listing_id = 1 AND review_id = 077ae6c9-b27a-11e9-aee2-6839e69d3338;

--DELETE
DELETE FROM delete_reviews WHERE listing_id = 2 AND review_id = 077ae6c9-b27a-11e9-aee2-6839e69d3338;
