drop database if exists bibbon;
create database concert default character set utf8;
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
primary key (id_meal)
);