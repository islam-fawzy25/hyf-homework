/*
Get all meals
Add a new meal
Get a meal with any id, fx 1
Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
Delete a meal with any id, fx 1
*/
select * from meal ;
 insert into meal ( title ,description , location , max_reservation, price ,created_date) 
 values 
 ('grilled chicken','grilled marinated chicken  ','everywhere',10,100,'2020-01-25'),
  ('chicken pizza','pizza with  chicken pieces ','copenhagen',20,80,'2021-03-16'),
     ('Rød grød med fløde','Rød grød med fløde ','Danmark',5,50,'2021-04-16'),
   ('shawrma','meat ','valby',5,50,'2021-04-16');


 UPDATE meal 
SET 
    location = 'valby',
    price = 50
WHERE
    id = 2;
 
 DELETE FROM meal 
WHERE
    id = 2;