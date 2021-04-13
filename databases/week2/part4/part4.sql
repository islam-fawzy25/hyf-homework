create schema tech_department ;
 use tech_department ;
 
 CREATE TABLE projects (
 id int unsigned auto_increment primary key ,
 name varchar(50) unique ,
 description text 
 ) ;
 
 CREATE TABLE teams(
 id int unsigned auto_increment primary key ,
 name varchar(50) unique
 );
 
 CREATE TABLE leaders (
 id int unsigned auto_increment primary key,
 name varchar(50),
 email varchar(50)
 );
 
 CREATE TABLE developers (
 id int unsigned auto_increment primary key ,
 name varchar (50),
 email varchar(50),
 leader_id int unsigned ,
 team_id int unsigned ,
 foreign key (leader_id) references leaders(id) on delete set null on update cascade,
  foreign key (team_id) references teams(id) on delete set null on update cascade
 );
 
CREATE TABLE team_project(
team_id int unsigned ,
project_id int unsigned ,
primary key(team_id,project_id),
foreign key (team_id) references teams(id) on delete cascade on update cascade,
foreign key (project_id) references projects(id) on delete cascade on update cascade
);

