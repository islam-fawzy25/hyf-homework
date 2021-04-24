create schema meal_sharing;

create table meal(
id int unsigned auto_increment primary key ,
title varchar(255) not null ,
description text not null ,
location varchar(255) not null,
max_reservation int unsigned not null,
price decimal(10,2) unsigned not null,
created_date  date not null
);



create table reservation(
id int unsigned auto_increment primary key ,
number_of_guests  int unsigned not null ,  -- how to solve it ??!! how to make max number related to meal.max_reservation ??!!
meal_id int unsigned not null,
created_date date not null,
contact_phonenumber varchar(255) not null,
contact_name varchar(255) not null,
contact_email varchar(255) unique not null,
 foreign key (meal_id) references meal(id) on delete cascade on update cascade
);

create table review(
id int unsigned auto_increment primary key ,
title varchar(255),
description text ,
meal_id int unsigned not null, 
stars int unsigned not null,
created_date date not null,
foreign key (meal_id) references meal(id) on delete cascade on update cascade
);

