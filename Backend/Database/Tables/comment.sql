-- the comment table with questionId,answerId and userid as the foreign keys 
USE Stack
SELECT * from comment
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


