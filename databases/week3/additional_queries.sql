/*
Get meals that has a price smaller than a specific price fx 90
Get meals that still has available reservations
*/

SELECT 
    *
FROM
    meal
WHERE
    price < 90;

SELECT 
    COALESCE(SUM(reservation.number_of_guests), 0) AS total_reservation,
    meal.max_reservation,
    meal.title,
    meal.id
FROM
    meal
        LEFT JOIN
    reservation ON reservation.meal_id = meal.id
GROUP BY meal.id
HAVING max_reservation > total_reservation;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT 
    *
FROM
    meal
WHERE
    title LIKE 'Rød grød med %';
    
    -- Get meals that has been created between two dates
    SELECT 
    *
FROM
    meal
WHERE
    created_date BETWEEN '2021-04-15' AND '2021-04-16';
    
    -- Get only specific number of meals fx return only 5 meals
    SELECT 
    *
FROM
    meal
ORDER BY id
LIMIT 2;

-- Get the meals that have good reviews
SELECT 
    *
FROM
    meal
        JOIN
    review ON review.meal_id = meal.id
WHERE
    stars > 3;
    
    -- Get reservations for a specific meal sorted by created_date
SELECT 
   reservation.*
FROM
    meal
        JOIN
    reservation ON meal.id = reservation.meal_id
WHERE
    meal.id = 3
ORDER BY reservation.created_date;

-- Sort all meals by average number of stars in the reviews
SELECT 
    meal.id, meal.title, AVG(review.stars) as average_stars
FROM
    meal
        JOIN
    review ON meal.id = review.meal_id
GROUP BY meal.id
order by average_stars desc;