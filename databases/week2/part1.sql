-- Part 1: Working with tasks
-- Add a task
insert into task (title, description, created, updated, due_date, status_id)
value ('new task','new task description',now(),now(),now(),1);

-- Change the title of a task
UPDATE task 
SET 
    title = 'title updated'
WHERE
    id = 36;

-- Change a task due date
UPDATE task 
SET 
    due_date = '2021-06-15 09:34:21'
WHERE
    id = 36;

-- Change a task status
UPDATE task 
SET 
    status_id = 2
WHERE
    id = 36;

  -- Mark a task as complete
UPDATE task 
SET 
    status_id = 3
WHERE
    id = 36;

-- Delete a task
DELETE FROM task 
WHERE
    id = 36;
