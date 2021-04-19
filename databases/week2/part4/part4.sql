create schema tech_department ;
 use tech_department ;
 
 CREATE TABLE projects (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    description TEXT
);
 
 CREATE TABLE teams (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    leader_id INT UNSIGNED,
    FOREIGN KEY (leader_id)
        REFERENCES leaders (id)
        ON DELETE SET NULL ON UPDATE CASCADE
);
 
 CREATE TABLE leaders (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);
 
 CREATE TABLE developers (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    team_id INT UNSIGNED,
    FOREIGN KEY (team_id)
        REFERENCES teams (id)
        ON DELETE SET NULL ON UPDATE CASCADE
);
 
CREATE TABLE team_project (
    team_id INT UNSIGNED,
    project_id INT UNSIGNED,
    PRIMARY KEY (team_id , project_id),
    FOREIGN KEY (team_id)
        REFERENCES teams (id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (project_id)
        REFERENCES projects (id)
        ON DELETE CASCADE ON UPDATE CASCADE
);
