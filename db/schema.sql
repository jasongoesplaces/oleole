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

  PRIMARY KEY ( `id` ) 
);

CREATE TABLE `Offenses` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `teamID` INT (11) NOT NULL,
  `player` VARCHAR( 255 ) NOT NULL,
  `goals` Int (11) NOT NULL,
  `sog` Int (11) NOT NULL,
  `assists` Int (11) NOT NULL,
  PRIMARY KEY ( `id` ) 
);

CREATE TABLE `Defenses` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `teamID` INT (11) NOT NULL,
  `player` VARCHAR( 255 ) NOT NULL,
  `SA` Int (11) NOT NULL,
  `GA` Int (11) NOT NULL,
  `saves` Int (11) NOT NULL,
  PRIMARY KEY ( `id` ) 
);

CREATE TABLE `Games` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `homeTeam` VARCHAR( 255) NOT NULL,
  `homeID` Int( 11 ) NOT NULL,
  `homeGoals` Int (11) NOT NULL,
  `awayTeam` VARCHAR (255) NOT NULL,
  `awayID` Int (11) NOT NULL,
  `awayGoals` Int (11) NOT NULL,
  `gameResult` Int (11) NOT NULL,
  PRIMARY KEY ( `id` ) 
);