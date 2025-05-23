
CREATE DATABASE IF NOT EXISTS eduRunDB;
use eduRunDB;


CREATE TABLE User (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(50) NOT NULL ,
level INT DEFAULT 1,
exp INT DEFAULT 0,
money INT DEFAULT 0
);

CREATE TABLE Item (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
description TEXT,
price INT NOT NULL
);

CREATE TABLE UserItem (
user_id INT,
item_id INT,
count INT DEFAULT 1,
PRIMARY KEY (user_id, item_id),
FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
FOREIGN KEY (item_id) REFERENCES Item(id) ON DELETE CASCADE
);

CREATE TABLE Problem (
id INT AUTO_INCREMENT PRIMARY KEY,
question TEXT NOT NULL,
answer TEXT NOT NULL
);

CREATE TABLE UserProblem (
user_id INT,
problem_id INT,
is_correct BOOLEAN,
solved_at DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (user_id, problem_id),
FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
FOREIGN KEY (problem_id) REFERENCES Problem(id) ON DELETE CASCADE
);


