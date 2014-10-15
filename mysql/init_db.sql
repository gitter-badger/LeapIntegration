/* 
Creates a new database for the LeapIntegration project and the required base tables. 
*/

CREATE DATABASE leapmail;
USE leapmail;

CREATE TABLE email_accounts
(
  id int(32) NOT NULL AUTO_INCREMENT,
  first_name varchar(255),
  last_name varchar(255),
  email_address varchar(100),
  PRIMARY KEY (id)
);

CREATE TABLE email_messages
(
  id int(32) NOT NULL AUTO_INCREMENT,
  sender varchar(255),
  sent DATETIME,
  title varchar(255),
  content text,
  isUnread bool DEFAULT true,
  isDeleted bool DEFAULT false,
  PRIMARY KEY (id)
);