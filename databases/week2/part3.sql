-- Part 3: More queries
-- Get all the tasks assigned to users whose email ends in @spotify.com
select  task.id , task.title  , user.email 
from task 
 join user_task on task.id = user_task.task_id 
 join user on user_task.user_id = user.id 
where user.email like '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
select task.id, task.title ,user.name , status.name
 from task 
  join user_task on task.id = user_task.task_id 
 join user on user_task.user_id = user.id 
 join status on task.status_id = status.id
 where user.name = 'Donald Duck' and status.name = 'Not started' ;
 
 /*
 Get all the tasks for 'Maryrose Meadows' that were created in september 
 (hint: month(created)=month_number)
*/
 select task.id ,task.title,task.created ,user.name 
 from task 
 join user_task on task.id = user_task.task_id
 join user on user_task.user_id =user.id
 where user.name like 'Maryrose Meadows' and month(created) =09 ;
 -- or :  created  between  '2017-09-01'  and '2017-09-30' ;
 
 /*
 Find how many tasks where created in each month, e.g.
 how many tasks were created in october,
 how many tasks were created in november, etc. (hint: use group by)
 */
select count(created), task.created from task
group by month(created) ;
