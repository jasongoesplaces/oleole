DROP DATABASE IF EXISTS mls_db;
CREATE DATABASE mls_db;
USE mls_db;

CREATE TABLE `Teams` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `wins` Int( 11 ) NOT NULL,
  `losses` Int (11) NOT NULL,
  `Draws` Int (11) NOT NULL,
  `Points` Int (11) NOT NULL,
  `Goals` Int (11) NOT NULL,
  `Images` VARCHAR (255) NOT NULL,

  PRIMARY KEY ( `id` ) 
);

CREATE TABLE `Offense` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `player` VARCHAR( 255 ) NOT NULL,
  `goals` Int (11) NOT NULL,
  `sog` Int (11) NOT NULL,
  `assists` Int (11) NOT NULL,
  PRIMARY KEY ( `id` ) 
);

CREATE TABLE `Defense` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `player` VARCHAR( 255 ) NOT NULL,
  `SA` Int (11) NOT NULL,
  `GA` Int (11) NOT NULL,
  `saves` Int (11) NOT NULL,
  PRIMARY KEY ( `id` ) 
);


