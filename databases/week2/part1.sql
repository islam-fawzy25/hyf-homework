-- Part 1: Working with tasks
select *
from task;

-- Add a task
insert into task (title, description, created, updated, due_date, status_id)
value ('new task','new task description',now(),now(),now(),1);

-- Change the title of a task
update task set title ='title updated'
where id =36;

-- Change a task due date
update task set due_date = DATE("2021-06-15 09:34:21")
where id =36;

-- Change a task status
  update task set status_id = 2
   where id = 36;

  -- Mark a task as complete
update task set  status_id =3
where id =36;

-- Delete a task
DELETE FROM task WHERE id =36;

 select * from task ;
