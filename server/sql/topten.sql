drop database if exists otTopTen;
create database if not exists otTopTen character set utf8;
use otTopTen;

create table topTen (id integer not null primary key auto_increment, playerName varchar(50), playerScore Integer, dateEarned varchar(15));

insert into topTen (playerName, playerScore, dateEarned) values ('test1',1230,'2019/01/01');
insert into topTen (playerName, playerScore, dateEarned) values ('test2', 1000, '2018/02/02');
insert into topTen (playerName, playerScore, dateEarned) values ('test3', 3220, '2018/03/03');

create user 'me'@'localhost' identified by '12345';
grant all on otTopTen.topTen to 'me'@'localHost';
ALTER USER 'me'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';
