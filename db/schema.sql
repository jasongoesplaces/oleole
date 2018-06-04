CREATE DATABASE mls_db;
USE mls_db;

CREATE TABLE `teams` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `wins` Int( 11 ) NOT NULL,
  `losses` Int (11) NOT NULL,
  `Draws` Int (11) NOT NULL,
  `Points` Int (11) NOT NULL,
  `PPG` DECIMAL (10,4) NOT NULL,

  PRIMARY KEY ( `id` ) 
);




CREATE TABLE `offense` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `player` VARCHAR( 11 ) NOT NULL,
  `goals` Int (11) NOT NULL,
  `sog` Int (11) NOT NULL,
  `assists` Int (11) NOT NULL,
  PRIMARY KEY ( `id` ) 
);

CREATE TABLE `defense` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `player` VARCHAR( 11 ) NOT NULL,
  `SA` Int (11) NOT NULL,
  `GA` Int (11) NOT NULL,
  `saves` Int (11) NOT NULL,
  PRIMARY KEY ( `id` ) 
);


