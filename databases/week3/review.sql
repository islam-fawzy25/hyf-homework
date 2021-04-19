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
('good','very tasty food',3,8,'2021-04-16'),
('very good',' tasty food',3,9,'2021-04-16'),
('good','good food',1,7,'2021-04-16'),
('ok',' tasty food',4,5,'2021-04-16'),
('ok','very tasty food',3,6,'2021-04-16');

select * from meal 
join review on meal.id = review.meal_id;

SELECT 
    *
FROM
    review
WHERE
    id = 1;
    
UPDATE review 
SET 
    stars = 7,
    title = 'tasty'
WHERE
    id = 1;

DELETE FROM review 
WHERE
    id = 1;