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
('11', 'johnsith', 'johnsith@example.com', 'password123',  'https://img.icons8.com/ios-filled/1x/user.png', 'I am a software developer.', '1', 'admin'),
('22', 'jansmith', 'janesmi@example.com', 'password456',  'https://img.icons8.com/ios-filled/1x/user.png', 'I am a UX designer.', '0', 'user'),
('31', 'bobole', 'bobdoe@example.com', 'password789', 'https://img.icons8.com/ios-filled/1x/user.png', 'I am a retired politician.', '0', 'user'),
('42', 'janede', 'janeoe@example.com', 'passwordabc', 'https://img.icons8.com/ios-filled/1x/user.png', 'I am a student studying computer science.', '1', 'user'),
('523', 'tomhjsmith', 'tomsmi@example.com', 'passworddef', 'https://img.icons8.com/ios-filled/1x/user.png', 'I am a sales representative.', '0', 'user'),
('63', 'saranes', 'sarjones@example.com', 'passwordghi', 'https://img.icons8.com/ios-filled/1x/user.png', 'I am a marketing specialist.', '0', 'user'),
('73', 'jondoe', 'jodoe@example.com', 'passwordjkl',  'https://img.icons8.com/ios-filled/1x/user.png', 'I am a lawyer.', '0', 'user'),
('83', 'jaoe2', 'janee2@example.com', 'passwordmno', 'https://img.icons8.com/ios-filled/1x/user.png', 'I am a software engineer.', '0', 'user'),
('93', 'smhjones', 'smithjes@example.com', 'passwordpqr', 'https://img.icons8.com/ios-filled/1x/user.png', 'I am a product manager.', '0', 'user'),
('130', 'bobones', 'bobjes@example.com', 'passwordstu', 'https://img.icons8.com/ios-filled/1x/user.png', 'I am a consultant.', '0', 'user');


use Stack
SELECT * from comment
DELETE FROM users




