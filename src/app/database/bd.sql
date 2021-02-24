drop database if exists bibbon;
create database bibbon default character set utf8;
use bibbon;

create table people
(
id_people tinyint unsigned auto_increment,
user_name varchar(10),
user_password varchar(10),
user_mail varchar(10),
primary key (id_people)
);

create table meal
(
id_meal int unsigned auto_increment,
meal_type varchar(10),
meal_qte int unsigned,
meal_date datetime,
id_child int,
primary key (id_meal)
);

CREATE TABLE users
(
id_user tinyint unsigned auto_increment,
user_name varchar(50),
user_mail varchar(50),
user_password varchar(50),
user_compte varchar(10),
user_version varchar(10),
primary key (id_user)
);


CREATE TABLE childs
(
id_child tinyint unsigned auto_increment,
child_name varchar(50),
child_gender varchar(30),
child_birth date,
child_height int,
child_weight int,
child_picture varchar(50),
id_user int,
primary key (id_child)
);


CREATE TABLE sleep
(
id_sleep tinyint unsigned auto_increment,
sleep_date date,
sleep_time int,
id_child int,
primary key (id_sleep)
);


CREATE TABLE height
(
id_height tinyint unsigned auto_increment,
height_date date,
height_mesure int,
id_child int,
primary key (id_height)
);


CREATE TABLE weight
(
id_weight tinyint unsigned auto_increment,
weight_date date,
weight_mesure int,
id_child int,
primary key (id_weight)
);
