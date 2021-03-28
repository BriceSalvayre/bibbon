
-- Supression de la base de données "brice_bibbon" si elle existe déjà
DROP DATABASE IF EXISTS brice_bibbon;
-- Création de la base de données "brice_bibbon" avec l'encodage "utf8"
CREATE DATABASE brice_bibbon DEFAULT CHARACTER SET utf8;

USE brice_bibbon;

CREATE TABLE users
(
id_user int unsigned auto_increment,
user_name varchar(50) NOT NULL,
user_mail varchar(50) NOT NULL,
user_password varchar(50) NOT NULL,
user_compte tinyint,
user_version tinyint,
PRIMARY KEY (id_user)
);


CREATE TABLE childs
(
id_child int unsigned auto_increment,
child_name varchar(50) NOT NULL,
child_gender varchar(30),
child_birth date,
child_height int,
child_weight int,
child_picture text,
PRIMARY KEY (id_child)
);

CREATE TABLE meal
(
id_meal int unsigned auto_increment,
meal_type varchar(10),
meal_qte int unsigned,
meal_date datetime,
id_child int unsigned,
PRIMARY KEY (id_meal),
FOREIGN KEY (id_child) REFERENCES childs (id_child)
);

CREATE TABLE sleep
(
id_sleep int unsigned auto_increment,
sleep_date date,
sleep_time int,
id_child int unsigned,
PRIMARY KEY (id_sleep),
FOREIGN KEY (id_child) REFERENCES childs (id_child)
);


CREATE TABLE height
(
id_height int unsigned auto_increment,
height_date date,
height_mesure int,
id_child int unsigned,
PRIMARY KEY (id_height),
FOREIGN KEY (id_child) REFERENCES childs (id_child)
);


CREATE TABLE weight
(
id_weight int unsigned auto_increment,
weight_date date,
weight_mesure int,
id_child int unsigned,
PRIMARY KEY (id_weight),
FOREIGN KEY (id_child) REFERENCES childs (id_child)
);

CREATE TABLE relationship
(
id_user int unsigned,
id_child int unsigned,
FOREIGN KEY (id_user) REFERENCES users (id_user),
FOREIGN KEY (id_child) REFERENCES childs (id_child)
);

-- Jointure table childs et users
SELECT * FROM childs c
JOIN relationship r
ON c.id_child = r.id_child
JOIN users u
ON u.id_user = r.id_user;


-- Procédure stockées


-- Renvoi "id_user" si MAIL et MDP correspond
DELIMITER //
CREATE PROCEDURE login
(IN userMail CHAR(20), IN userPass CHAR(20))
BEGIN
SELECT id_user
FROM users
WHERE user_mail = userMail AND user_password = userPass;
END //
DELIMITER ;
-- Appel de la procédure
CALL login('mail','pass');

/* OBSOLETE
-- Renvoi SELECT * meal 
-- id_user en entré
DROP PROCEDURE IF EXISTS catchMeal;
DELIMITER //
CREATE PROCEDURE catchMeal
(IN idUser int)
BEGIN
SELECT *
FROM meal m
JOIN childs c
ON c.id_child = m.id_child
JOIN relationship r
ON r.id_child = c.id_child
JOIN users u
ON u.id_user = r.id_user
WHERE u.id_user = idUser;
END //
DELIMITER
-- Appel de la procédure
CALL catchMeal(10);
*/


-- Renvoi SELECT * meal 
-- id_child en entré
DROP PROCEDURE IF EXISTS catchMeal;
DELIMITER //
CREATE PROCEDURE catchMeal
(IN idChild int)
BEGIN
SELECT *
FROM meal m
JOIN childs c
ON c.id_child = m.id_child
WHERE c.id_child = idChild;
END //
DELIMITER ;
-- Appel de la procédure
CALL catchMeal(10);


-- Renvoi id_child 
-- id_user en entré
DROP PROCEDURE IF EXISTS catchChild;
DELIMITER //
CREATE PROCEDURE catchChild
(IN idUser int)
BEGIN
SELECT c.id_child
FROM childs c
JOIN relationship r
ON c.id_child = r.id_child
JOIN users u
ON u.id_user = r.id_user
WHERE u.id_user = idUser;
END //
DELIMITER ;
-- Appel de la procédure
call catchChild(1);

-- @RETURN SELECT * FROM meal where (?)
-- @IN (id_child)
DROP PROCEDURE IF EXISTS lastMeal;
DELIMITER //
CREATE PROCEDURE lastMeal
(IN idChild int)
BEGIN
SELECT *
FROM meal m
JOIN childs c
ON c.id_child = m.id_child
WHERE c.id_child = idChild
ORDER BY id_meal DESC
LIMIT 2;
END //
DELIMITER
-- Appel de la procédure
CALL lastMeal(10);