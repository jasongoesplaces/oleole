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

CREATE TABLE 'defense' (
  'id' INT(11) AUTO_INCREMENT NOT NULL,
  'team' VARCHAR(255) NOT NULL,
  'player' VARCHAR(255) NOT NULL,
  'SA' VARCHAR(255) NOT NULL,
  'GA' VARCHAR(255) NOT NULL,
  'saves' VARCHAR(255) NOT NULL,
  PRIMARY KEY ('id')
)

CREATE TABLE `offense` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `player` VARCHAR( 11 ) NOT NULL,
  `goals` Int (11) NOT NULL,
  `sog` Int (11) NOT NULL,
  `assists` Int (11) NOT NULL,
  PRIMARY KEY ( `id` ) 
);
