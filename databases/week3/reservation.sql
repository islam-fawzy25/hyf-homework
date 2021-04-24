/*
Get all reservations
Add a new reservation
Get a reservation with any id, fx 1
Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
Delete a reservation with any id, fx 1
*/
SELECT 
    *
FROM
    reservation;
insert into reservation (number_of_guests , meal_id ,created_date ,contact_phonenumber,contact_name , contact_email )
values
 (5,3,'2021-04-15','555','islam','islam@email.com'),
 (4,1,'2021-04-16','555111','gohar','gohar@email.com'),
 (4,3,'2021-04-17','5554444','hani','hani@email.com'),
 (5,3,'2021-04-18','555777','marta','marta@email.com'),
  (7,3,'2021-04-16','555999','ahmad','ahmad@email.com');

UPDATE reservation 
SET 
    contact_phonenumber = '555-00-22',
    created_date = '2021-02-25'
WHERE
    id = 5;
    
    DELETE FROM reservation 
WHERE
    id = 5;