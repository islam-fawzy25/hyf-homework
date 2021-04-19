-- Part 3: More queries
-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT 
    task.id, task.title, user.email
FROM
    task
        JOIN
    user_task ON task.id = user_task.task_id
        JOIN
    user ON user_task.user_id = user.id
WHERE
    user.email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT 
    task.id, task.title, user.name, status.name
FROM
    task
        JOIN
    user_task ON task.id = user_task.task_id
        JOIN
    user ON user_task.user_id = user.id
        JOIN
    status ON task.status_id = status.id
WHERE
    user.name = 'Donald Duck'
        AND status.name = 'Not started';
 
 /*
 Get all the tasks for 'Maryrose Meadows' that were created in september 
 (hint: month(created)=month_number)
*/
 SELECT 
    task.id, task.title, task.created, user.name
FROM
    task
        JOIN
    user_task ON task.id = user_task.task_id
        JOIN
    user ON user_task.user_id = user.id
WHERE
    user.name LIKE 'Maryrose Meadows'
        AND MONTH(created) = 09;
 -- or :  created  between  '2017-09-01'  and '2017-09-30' ;
 
 /*
 Find how many tasks where created in each month, e.g.
 how many tasks were created in october,
 how many tasks were created in november, etc. (hint: use group by)
 */
SELECT 
    COUNT(id), month(created)
FROM
    task
GROUP BY MONTH(created);

