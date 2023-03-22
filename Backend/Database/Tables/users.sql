USE Stack;

DROP TABLE IF EXISTS vote;
DROP TABLE IF EXISTS question_tag;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS answer;
DROP TABLE IF EXISTS question;
DROP TABLE IF EXISTS users;

-- this is the user table 
-- thisthis is the user table 
--  is the user table 
-- USE Stackthis is the user table 
-- ;


CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    reputation DECIMAL(10,2),
    avatarUrl VARCHAR(255),
    bio TEXT,
    isSent VARCHAR(150) DEFAULT '0',
    Role VARCHAR(100) DEFAULT 'user',
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE(),
);

use Stack
INSERT INTO users (id, username, email, password, avatarUrl, bio, isSent, Role)
VALUES
('1', 'johnsmith', 'johnsmith@example.com', 'password123',  'https://example.com/avatar1.jpg', 'I am a software developer.', '1', 'admin'),
('2', 'janesmith', 'janesmith@example.com', 'password456',  'https://example.com/avatar2.jpg', 'I am a UX designer.', '0', 'user'),
('3', 'bobdole', 'bobdole@example.com', 'password789', 'https://example.com/avatar3.jpg', 'I am a retired politician.', '0', 'user'),
('4', 'janedoe', 'janedoe@example.com', 'passwordabc', 'https://example.com/avatar4.jpg', 'I am a student studying computer science.', '1', 'user'),
('5', 'tomsmith', 'tomsmith@example.com', 'passworddef', 'https://example.com/avatar5.jpg', 'I am a sales representative.', '0', 'user'),
('6', 'sarahjones', 'sarahjones@example.com', 'passwordghi', 'https://example.com/avatar6.jpg', 'I am a marketing specialist.', '0', 'user'),
('7', 'johndoe', 'johndoe@example.com', 'passwordjkl',  'https://example.com/avatar7.jpg', 'I am a lawyer.', '0', 'user'),
('8', 'janedoe2', 'janedoe2@example.com', 'passwordmno', 'https://example.com/avatar8.jpg', 'I am a software engineer.', '0', 'user'),
('9', 'smithjones', 'smithjones@example.com', 'passwordpqr', 'https://example.com/avatar9.jpg', 'I am a product manager.', '0', 'user'),
('10', 'bobjones', 'bobjones@example.com', 'passwordstu', 'https://example.com/avatar10.jpg', 'I am a consultant.', '0', 'user');



SELECT * from users
DELETE FROM users




