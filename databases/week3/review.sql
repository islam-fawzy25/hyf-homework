/*
Get all reviews
Add a new review
Get a review with any id, fx 1
Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
Delete a review with any id, fx 1
*/
SELECT 
    *
FROM
    review;
    
insert into review (title,description,meal_id,stars,created_date)
values 
('good','very tasty food',3,4,'2021-04-16'),
('very good',' tasty food',3,5,'2021-04-16'),
('good','good food',1,4,'2021-04-16'),
('ok',' tasty food',4,3,'2021-04-16'),
('ok','very tasty food',3,3,'2021-04-16');

SELECT 
    *
FROM
    review
WHERE
    id = 1;
    
UPDATE review 
SET 
    stars = 5,
    title = 'tasty'
WHERE
    id = 1;

DELETE FROM review 
WHERE
    id = 1;