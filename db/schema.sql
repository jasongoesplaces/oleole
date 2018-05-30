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