create schema meal_sharing;

create table meal(
id int unsigned auto_increment primary key ,
title varchar(255) not null ,
description text not null ,
location varchar(255) not null,
max_reservation int(1) not null,
price decimal not null,
created_date  date not null
);
drop table meal;
drop table review;
drop table reservation;


create table reservation(
id int unsigned auto_increment primary key ,
number_of_guests  int(1) check ( number_of_guests < 9)  ,  -- how to solve it ??!! how to make max number related to meal.max_reservation ??!!
meal_id int unsigned,
created_date date,
contact_phonenumber varchar(255) ,
contact_name varchar(255) ,
contact_email varchar(255) unique,
 foreign key (meal_id) references meal(id) on delete set null on update cascade
);
-- if we write not null here to reservation elements so, the null rows do not appear when we join it with meal table the null column, right ?!

create table review(
id int unsigned auto_increment primary key ,
title varchar(255),
description text ,
meal_id int unsigned, 
stars int(10) not null,
created_date date not null,
foreign key (meal_id) references meal(id) on delete set null on update cascade
);

