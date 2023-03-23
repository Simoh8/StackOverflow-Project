-- the question table with the userid as the foreign key
USE Stack
SELECT * from answer
INSERT INTO question (id, title, content, tags, author)
VALUES
('1', 'What is the best way to learn a new programming language?', 'I am interested in learning a new programming language but I am not sure where to start. Any suggestions?', 'programming, learning', '1'),
('2', 'How do I fix a syntax error in my code?', 'I keep getting a syntax error when I try to run my code. How can I fix it?', 'programming, debugging', '2'),
('3', 'What is the most efficient algorithm for sorting an array?', 'I have a large array of numbers that I need to sort. What is the most efficient algorithm for doing this?', 'programming, algorithms', '3'),
('4', 'How can I improve the performance of my website?', 'My website is running slow and I want to improve its performance. What are some ways to do this?', 'web development, performance', '4'),
('5', 'What are the best practices for database design?', 'I am designing a new database and want to make sure that I am following best practices. What should I keep in mind?', 'database, design', '5'),
('6', 'How do I create a responsive website?', 'I want to create a website that looks good on both desktop and mobile devices. What are some tips for creating a responsive design?', 'web development, responsive design', '6'),
('7', 'What is the difference between a web designer and a web developer?', 'I am confused about the difference between a web designer and a web developer. Can someone explain the distinction?', 'web development, web design', '7'),
('8', 'How do I implement authentication in my web application?', 'I want to add authentication to my web application so that users can log in and access protected content. What is the best way to do this?', 'web development, authentication', '8'),
('9', 'What is the best way to handle errors in my code?', 'I keep getting errors in my code and I am not sure how to handle them properly. What is the best way to handle errors?', 'programming, debugging', '9'),
('10', 'How can I optimize my code for speed?', 'My code is running slow and I want to optimize it for speed. What are some tips for doing this?', 'programming, optimization', '10');




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