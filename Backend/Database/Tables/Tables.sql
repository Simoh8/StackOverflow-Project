-- CREATE DATABASE Stack
-- USE Stack
-- DROP TABLE users

-- USE Stack;

-- DROP TABLE IF EXISTS vote;
-- DROP TABLE IF EXISTS question_tag;
-- DROP TABLE IF EXISTS tag;
-- DROP TABLE IF EXISTS comment;
-- DROP TABLE IF EXISTS answer;
-- DROP TABLE IF EXISTS question;
-- DROP TABLE IF EXISTS users;

-- CREATE TABLE users (
--     id VARCHAR(255) PRIMARY KEY,
--     username VARCHAR(255),
--     email VARCHAR(255),
--     password VARCHAR(255),
--     reputation DECIMAL(10,2),
--     avatarUrl VARCHAR(255),
--     bio TEXT,
--     createdAt DATETIME,
--     updatedAt DATETIME
-- );
-- USE Stack

-- CREATE TABLE question (
--     id VARCHAR(255) PRIMARY KEY,
--     title VARCHAR(255),
--     content TEXT,
--     createdAt DATETIME,
--     updatedAt DATETIME,
--     author VARCHAR(255),
--     FOREIGN KEY (author) REFERENCES users(id)
-- );
-- USE Stack

-- CREATE TABLE answer (
--     id VARCHAR(255) PRIMARY KEY,
--     content TEXT,
--     createdAt DATETIME,
--     updatedAt DATETIME,
--     questionId VARCHAR(255),
--     author VARCHAR(255),
--     FOREIGN KEY (questionId) REFERENCES question(id),
--     FOREIGN KEY (author) REFERENCES users(id)
-- );
-- USE Stack

-- CREATE TABLE comment (
--     id VARCHAR(255) PRIMARY KEY,
--     content TEXT,
--     createdAt DATETIME,
--     updatedAt DATETIME,
--     questionId VARCHAR(255),
--     answerId VARCHAR(255),
--     author VARCHAR(255),
--     FOREIGN KEY (questionId) REFERENCES question(id),
--     FOREIGN KEY (answerId) REFERENCES answer(id),
--     FOREIGN KEY (author) REFERENCES users(id)
-- );
-- USE Stack

-- CREATE TABLE tag (
--     id VARCHAR(255) PRIMARY KEY,
--     name VARCHAR(255)
-- );
-- USE Stack

-- CREATE TABLE question_tag (
--     questionId VARCHAR(255),
--     tagId VARCHAR(255),
--     PRIMARY KEY (questionId, tagId),
--     FOREIGN KEY (questionId) REFERENCES question(id),
--     FOREIGN KEY (tagId) REFERENCES tag(id)
-- );
-- USE Stack
-- CREATE TABLE vote (
--   id INT PRIMARY KEY,
--   value INT NOT NULL,
--   questionId VARCHAR(255),
--   answerId VARCHAR(255),
--   author VARCHAR(255),
--   FOREIGN KEY (questionId) REFERENCES question(id),
--   FOREIGN KEY (answerId) REFERENCES answer(id),
--   FOREIGN KEY (author) REFERENCES users(id)
-- );






USE Stack;

DROP TABLE IF EXISTS vote;
DROP TABLE IF EXISTS question_tag;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS answer;
DROP TABLE IF EXISTS question;
DROP TABLE IF EXISTS users;


USE Stack;

CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    reputation DECIMAL(10,2),
    avatarUrl VARCHAR(255),
    bio TEXT,
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE(),
);

CREATE TABLE question (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    tags TEXT,
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE(),
    author VARCHAR(255),
    FOREIGN KEY (author) REFERENCES users(id) ON DELETE CASCADE
);

USE Stack;
CREATE TABLE answer (
    id VARCHAR(255) PRIMARY KEY,
    content TEXT,
    createdAt DATETIME,
    updatedAt DATETIME,
    questionId VARCHAR(255),
    author VARCHAR(255),
    FOREIGN KEY (questionId) REFERENCES question(id) ON DELETE CASCADE,
    FOREIGN KEY (author) REFERENCES users(id) 
);
USE Stack;


CREATE TABLE comment (
    id VARCHAR(255) PRIMARY KEY,
    content TEXT,
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE(),
    questionId VARCHAR(255),
    answerId VARCHAR(255),
    author VARCHAR(255),
    FOREIGN KEY (questionId) REFERENCES question(id) ON DELETE CASCADE,
    FOREIGN KEY (answerId) REFERENCES answer(id),
    FOREIGN KEY (author) REFERENCES users(id) 
);
USE Stack;

CREATE TABLE tag (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE question_tag (
    questionId VARCHAR(255),
    tagId VARCHAR(255),
    PRIMARY KEY (questionId, tagId),
    FOREIGN KEY (questionId) REFERENCES question(id) ON DELETE CASCADE,
    FOREIGN KEY (tagId) REFERENCES tag(id) 
);
USE Stack;

CREATE TABLE vote (
  id INT PRIMARY KEY,
  value INT NOT NULL,
  questionId VARCHAR(255),
  answerId VARCHAR(255),
  author VARCHAR(255),
  FOREIGN KEY (questionId) REFERENCES question(id) ,
  FOREIGN KEY (answerId) REFERENCES answer(id),
  FOREIGN KEY (author) REFERENCES users(id) ON DELETE CASCADE
);
