-- Use Stack 

-- EXEC insertOrUpdateUser 'user663', 'johndoe', 'johndoe@exampl.com', 'password123', 4.56, 'https://example.com/avatar.jpg', 'I am a software engineer.';
-- EXEC insertOrUpdateUser 'user56', 'janedoe', 'janedoe@example.com', 'password456', 7.89, 'https://example.com/avatar.jpg', 'I am a graphic designer.';
-- EXEC insertOrUpdateUser 'user79', 'bobsmith', 'bobsmith@example.com', 'password789', 1.23, 'https://example.com/avatar.jpg', 'I am a writer.';
-- EXEC insertOrUpdateUser 'user10112', 'alicesmith', 'alicesmith@example.com', 'password101112', 9.87, 'https://example.com/avatar.jpg', 'I am a musician.';
-- EXEC insertOrUpdateUser 'user1315', 'davidsmith', 'davidsmith@example.com', 'password131415', 3.21, 'https://example.com/avatar.jpg', 'I am a photographer.';
-- EXEC insertOrUpdateUser 'user1718', 'maryjones', 'maryjones@example.com', 'password161718', 6.54, 'https://example.com/avatar.jpg', 'I am a teacher.';
-- EXEC insertOrUpdateUser 'user1021', 'sarahbrown', 'sarahbrown@example.com', 'password192021', 2.34, 'https://example.com/avatar.jpg', 'I am a scientist.';
-- EXEC insertOrUpdateUser 'user2324', 'peterblack', 'peterblack@example.com', 'password222324', 8.76, 'https://example.com/avatar.jpg', 'I am a lawyer.';
-- EXEC insertOrUpdateUser 'user2627', 'jimwhite', 'jimwhite@example.com', 'password252627', 5.43, 'https://example.com/avatar.jpg', 'I am a doctor.';
-- EXEC insertOrUpdateUser 'user2930', 'lauragray', 'lauragray@example.com', 'password282930', 0.12, 'https://example.com/avatar.jpg', 'I am a student.';

-- USE Stack
-- EXEC delete_answer '1'





GO

CREATE OR ALTER PROCEDURE paginations
    @page INT,
    @pageSize INT
AS
BEGIN
    SELECT * FROM questions
    ORDER BY created_at DESC
    OFFSET (@page - 1) * @pageSize ROWS
    FETCH NEXT @pageSize ROWS ONLY
END





EXEC getUserByEmail 'oumaj202@gmail.com';

select * FROM users


Use Stack 
INSERT INTO question (id, title, content, createdAt, updatedAt, author)
VALUES ('question1', 'How do I use Python?', 'I am new to Python and I need some help getting started.', '2023-03-16 10:00:00', '2023-03-16 10:00:00', 'user663');

INSERT INTO question (id, title, content, createdAt, updatedAt, author)
VALUES ('question2', 'What is the difference between Python 2 and Python 3?', 'I am confused about the two versions and which one I should use.', '2023-03-16 11:00:00', '2023-03-16 11:00:00', 'user56');

INSERT INTO question (id, title, content, createdAt, updatedAt, author)
VALUES ('question3', 'How do I install Python on my Windows computer?', 'I have Windows 10 and I want to install Python.', '2023-03-16 12:00:00', '2023-03-16 12:00:00', 'user79');

INSERT INTO question (id, title, content, createdAt, updatedAt, author)
VALUES ('question4', 'What are the best Python libraries for data analysis?', 'I am interested in data analysis and want to know which Python libraries are best.', '2023-03-16 13:00:00', '2023-03-16 13:00:00', 'user10112');

INSERT INTO question (id, title, content, createdAt, updatedAt, author)
VALUES ('question5', 'How do I create a Python virtual environment?', 'I want to create a virtual environment to test my Python projects.', '2023-03-16 14:00:00', '2023-03-16 14:00:00', 'user1315');

INSERT INTO question (id, title, content, createdAt, updatedAt, author)
VALUES ('question6', 'How do I use Python for web development?', 'I want to create a website using Python.', '2023-03-16 15:00:00', '2023-03-16 15:00:00', 'user1718');

INSERT INTO question (id, title, content, createdAt, updatedAt, author)
VALUES ('question7', 'How do I debug Python code?', 'I am having trouble with my Python code and I need to debug it.', '2023-03-16 16:00:00', '2023-03-16 16:00:00', 'user1021');

INSERT INTO question (id, title, content, createdAt, updatedAt, author)
VALUES ('question8', 'What are the best Python frameworks for web development?', 'I want to create a website using Python and I am interested in the best frameworks.', '2023-03-16 17:00:00', '2023-03-16 17:00:00', 'user2324');

INSERT INTO question (id, title, content, createdAt, updatedAt, author)
VALUES ('question9', 'How do I use Python for machine learning?', 'I want to learn machine learning using Python.', '2023-03-16 18:00:00', '2023-03-16 18:00:00', 'user2627');

-- SELECT * FROM USERS


Use Stack 
INSERT INTO users (id, username, email, password, reputation, avatarUrl, bio)
VALUES
('1', 'user1', 'user1@email.com', 'password1', 100.00, 'http://example.com/avatar1.jpg', 'Bio for user1'),
('2', 'user2', 'user2@email.com', 'password2', 95.00, 'http://example.com/avatar2.jpg', 'Bio for user2'),
('3', 'user3', 'user3@email.com', 'password3', 87.50, 'http://example.com/avatar3.jpg', 'Bio for user3'),
('4', 'user4', 'user4@email.com', 'password4', 76.25, 'http://example.com/avatar4.jpg', 'Bio for user4'),
('5', 'user5', 'user5@email.com', 'password5', 65.50, 'http://example.com/avatar5.jpg', 'Bio for user5'),
('6', 'user6', 'user6@email.com', 'password6', 50.00, 'http://example.com/avatar6.jpg', 'Bio for user6'),
('7', 'user7', 'user7@email.com', 'password7', 38.75, 'http://example.com/avatar7.jpg', 'Bio for user7'),
('8', 'user8', 'user8@email.com', 'password8', 27.50, 'http://example.com/avatar8.jpg', 'Bio for user8'),
('9', 'user9', 'user9@email.com', 'password9', 15.00, 'http://example.com/avatar9.jpg', 'Bio for user9'),
('10', 'user10', 'user10@email.com', 'password10', 5.00, 'http://example.com/avatar10.jpg', 'Bio for user10');

-- USE Stack;

-- INSERT INTO users (id, username, email, password, reputation, avatarUrl, bio)
-- VALUES 
-- ('1', 'user1', 'user1@email.com', 'password1', 100.00, 'http://example.com/avatar1.jpg', 'Bio for user1'),
-- ('2', 'user2', 'user2@email.com', 'password2', 95.00, 'http://example.com/avatar2.jpg', 'Bio for user2'),
-- ('3', 'user3', 'user3@email.com', 'password3', 87.50, 'http://example.com/avatar3.jpg', 'Bio for user3'),
-- ('4', 'user4', 'user4@email.com', 'password4', 76.25, 'http://example.com/avatar4.jpg', 'Bio for user4'),
-- ('5', 'user5', 'user5@email.com', 'password5', 65.50, 'http://example.com/avatar5.jpg', 'Bio for user5'),
-- ('6', 'user6', 'user6@email.com', 'password6', 50.00, 'http://example.com/avatar6.jpg', 'Bio for user6'),
-- ('7', 'user7', 'user7@email.com', 'password7', 38.75, 'http://example.com/avatar7.jpg', 'Bio for user7'),
-- ('8', 'user8', 'user8@email.com', 'password8', 27.50, 'http://example.com/avatar8.jpg', 'Bio for user8'),
-- ('9', 'user9', 'user9@email.com', 'password9', 15.00, 'http://example.com/avatar9.jpg', 'Bio for user9'),
-- ('10', 'user10', 'user10@email.com', 'password10', 5.00, 'http://example.com/avatar10.jpg', 'Bio for user10');


Use Stack 

DELETE * from users
EXECUTE insertOrUpdateQuestion '1', 'Question 1', 'Content for question 1', 'tag1, tag2', 'John Doe';
EXECUTE insertOrUpdateQuestion '2', 'Question 2', 'Content for question 2', 'tag2, tag3', 'Jane Smith';
EXECUTE insertOrUpdateQuestion '3', 'Question 3', 'Content for question 3', 'tag3, tag4', 'Bob Johnson';
EXECUTE insertOrUpdateQuestion '4', 'Question 4', 'Content for question 4', 'tag4, tag5', 'Sara Lee';
EXECUTE insertOrUpdateQuestion '5', 'Question 5', 'Content for question 5', 'tag5, tag6', 'Tom Jones';
EXECUTE insertOrUpdateQuestion '6', 'Question 6', 'Content for question 6', 'tag6, tag7', 'Amy Wang';
EXECUTE insertOrUpdateQuestion '7', 'Question 7', 'Content for question 7', 'tag7, tag8', 'Mike Chen';
EXECUTE insertOrUpdateQuestion '8', 'Question 8', 'Content for question 8', 'tag8, tag9', 'Emily Li';
EXECUTE insertOrUpdateQuestion '9', 'Question 9', 'Content for question 9', 'tag9, tag10', 'David Kim';
use Stack
INSERT INTO vote (id, value, answerId, author)
VALUES
(1, 1, '1', '1' ),
(2, 1, '1', '2' ),
(3, -1, '1', 3 ),
(4, 1, '2', '4'),
(5, -1, '2', '8'),
(6, 1, '76', '1'),
(7, 1, '66', '1'),
(8, -1, '70', '1'),
(9, 1, '32', '2'),
(10, -1, '55', '2');

USE Stack
SELECT * from tag
INSERT INTO tag (id, name) VALUES 
('1', 'Technology'),
('2', 'Fashion'),
('3', 'Food'),
('4', 'Sports'),
('5', 'Music'),
('6', 'Travel'),
('7', 'Education'),
('8', 'Art'),
('9', 'Health'),
('10', 'Business');


INSERT INTO question_tag (questionId, tagId)
VALUES
('1', '1'),
('1', '2'),
('1', '3'),
('2', '4'),
('2', '5'),
('2', '6'),
('3', '1'),
('3', '7'),
('3', '8'),
('4', '9'),
('5', '10');

-- USE Stack;

-- INSERT INTO answer (id, content, createdAt, updatedAt, questionId, author)
-- VALUES 
-- ('1', 'Answer 1 content', GETDATE(), GETDATE(), '1', '2'),
-- ('2', 'Answer 2 content', GETDATE(), GETDATE(), '1', '3'),
-- ('3', 'Answer 3 content', GETDATE(), GETDATE(), '2', '5'),
-- ('4', 'Answer 4 content', GETDATE(), GETDATE(), '3', '7'),
-- ('5', 'Answer 5 content', GETDATE(), GETDATE(), '3', '9'),
-- ('6', 'Answer 6 content', GETDATE(), GETDATE(), '4', '2'),
-- ('7', 'Answer 7 content', GETDATE(), GETDATE(), '4', '4'),
-- ('8', 'Answer 8 content', GETDATE(), GETDATE(), '5', '6'),
-- ('9', 'Answer 9 content', GETDATE(), GETDATE(), '5', '8'),
-- ('10', 'Answer 10 content', GETDATE(), GETDATE(), '5', '10');

USE Stack;

INSERT INTO question (id, title, content, tags, author)
VALUES
('1', 'How do I write a Python function?', 'I am new to programming and would like to learn how to write a function in Python. Can someone please provide an example?', 'Python, function, beginner', '1'),
('2', 'What is the difference between a list and a tuple?', 'I am confused about the differences between Python lists and tuples. Can someone explain?', 'Python, list, tuple', '2'),
('3', 'How can I improve my SQL skills?', 'I have some basic knowledge of SQL, but I would like to improve my skills. Any tips or resources?', 'SQL, database, skills', '3'),
('4', 'What are the best practices for writing clean code?', 'I want to improve the readability and maintainability of my code. What are some best practices for writing clean code?', 'coding, best practices, readability', '4'),
('5', 'How can I speed up my Python code?', 'I have a Python script that is running too slowly. What are some techniques I can use to speed it up?', 'Python, optimization, performance', '5'),
('6', 'What are the benefits of using version control?', 'I have heard about version control systems like Git and SVN, but I am not sure why I should use them. What are the benefits?', 'version control, Git, SVN', '6'),
('7', 'How do I install a Python package?', 'I want to use a Python package in my project, but I am not sure how to install it. Can someone provide instructions?', 'Python, package, installation', '7'),
('8', 'What are the best tools for data visualization?', 'I want to create some visualizations of my data. What are the best tools or libraries to use?', 'data visualization, tools, libraries', '8'),
('9', 'What is the difference between machine learning and deep learning?', 'I am new to the field of AI and am confused about the differences between machine learning and deep learning. Can someone explain?', 'AI, machine learning, deep learning', '9'),
('10', 'How can I secure my web application?', 'I am developing a web application and want to make sure it is secure. What are some best practices for web application security?', 'web application, security, best practices', '10');

-- USE Stack;

-- INSERT INTO question (id, title, content, tags, author)
-- VALUES
--     ('q1', 'What is the capital of France?', 'I am trying to learn more about French geography.', 'France, geography, capital', 'u1'),
--     ('q2', 'How do I make a cheesecake?', 'I have never made a cheesecake before and I want to try it out.', 'cooking, baking, dessert', 'u2'),
--     ('q3', 'What are the best hiking trails in Colorado?', 'I want to plan a hiking trip to Colorado and I need recommendations for good trails.', 'Colorado, hiking, outdoors', 'u3'),
--     ('q4', 'What is the difference between a llama and an alpaca?', 'I am confused about the differences between these two animals.', 'animals, llama, alpaca', 'u4'),
--     ('q5', 'What are the best practices for securing a web application?', 'I am developing a web application and want to make sure it is secure.', 'web development, security, best practices', 'u5'),
--     ('q6', 'How do I train for a half marathon?', 'I have signed up for a half marathon and need to start training.', 'running, fitness, half marathon', 'u6'),
--     ('q7', 'What is the best way to learn a new language?', 'I want to learn a new language and am looking for tips and advice.', 'language learning, tips, advice', 'u7'),
--     ('q8', 'What are the best books to read for personal growth?', 'I want to read some books that will help me grow personally and professionally.', 'personal growth, books, reading', 'u8'),
--     ('q9', 'What is the best way to make coffee at home?', 'I want to learn how to make delicious coffee at home without spending a lot of money on equipment.', 'coffee, home brewing, tips', 'u9'),
--     ('q10', 'How do I build a website from scratch?', 'I want to build a website but have no experience with web development.', 'web development, website, beginner', 'u10');







use Stack
GO
CREATE PROCEDURE GetQuestionData
    @questionId VARCHAR(255)
AS
BEGIN
    SELECT a.id AS answerId, a.content AS answerContent, a.createdAt AS answerCreatedAt, a.updatedAt AS answerUpdatedAt, a.author AS answerAuthor,
           c.id AS commentId, c.content AS commentContent, c.createdAt AS commentCreatedAt, c.updatedAt AS commentUpdatedAt, c.author AS commentAuthor,
           v.value AS voteValue, v.author AS voteAuthor,
           qt.tagId AS tagId
    FROM answer a
    LEFT JOIN comment c ON a.id = c.answerId
    LEFT JOIN vote v ON (a.id = v.answerId OR v.questionId = @questionId)
    LEFT JOIN question_tag qt ON a.questionId = qt.questionId
    WHERE a.questionId = @questionId
    ORDER BY a.createdAt DESC
END


USE Stack
GO
CREATE PROCEDURE GetQuestionData
  @questionId VARCHAR(255)
AS
BEGIN
  SELECT 
    a.id AS answerId,
    a.content AS answerContent,
    a.createdAt AS answerCreatedAt,
    a.updatedAt AS answerUpdatedAt,
    c.id AS commentId,
    c.content AS commentContent,
    c.createdAt AS commentCreatedAt,
    c.updatedAt AS commentUpdatedAt,
    v.id AS voteId,
    
    v.value AS voteValue,
    q.id AS questionId,
    q.title AS questionTitle,
    q.content AS questionContent,
    q.createdAt AS questionCreatedAt,
    q.updatedAt AS questionUpdatedAt,
    t.id AS tagId,
    t.name AS tagName
  FROM 
    answer a
    LEFT JOIN comment c ON c.questionId = a.questionId AND c.answerId = a.id
    LEFT JOIN vote v ON v.questionId = a.questionId AND v.answerId = a.id
    INNER JOIN question q ON q.id = a.questionId
    LEFT JOIN question_tag qt ON qt.questionId = a.questionId
    LEFT JOIN tag t ON t.id = qt.tagId
  WHERE 
    a.questionId = @questionId
  ORDER BY 
    a.createdAt DESC;
END
USE Stack
EXEC GetAnswersWithDetails '4'

GO
CREATE PROCEDURE GetAnswersWithDetails 
    @questionId VARCHAR(255)
AS
BEGIN
    SELECT 
        a.id AS answerId, 
        a.content AS answerContent, 
        a.createdAt AS answerCreatedAt, 
        a.updatedAt AS answerUpdatedAt, 
        c.id AS commentId, 
        c.content AS commentContent, 
        c.createdAt AS commentCreatedAt, 
        c.updatedAt AS commentUpdatedAt, 
        v.id AS voteId, 
        v.value AS voteValue, 
        qt.tagId AS questionTagId
    FROM 
        answer a
        LEFT JOIN comment c ON c.answerId = a.id
        LEFT JOIN vote v ON v.answerId = a.id
        LEFT JOIN question_tag qt ON qt.questionId = a.questionId
    WHERE
        a.questionId = @questionId;
END
