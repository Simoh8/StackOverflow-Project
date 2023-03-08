CREATE DATABASE Stackoverflow
USE Stackoverflow

-- CREATE TABLE users (
--   id INT NOT NULL ,
--   name VARCHAR (100) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   role VARCHAR(20) NOT NULL DEFAULT 'user',
--   CONSTRAINT chk_role CHECK (role IN ('user', 'admin')),
--   PRIMARY KEY (id)
-- );
CREATE TABLE users
(
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role BIT NOT NULL DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);