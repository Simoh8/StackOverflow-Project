-- this is the answer table with questionid an d userid as the FOREIGN keys

CREATE TABLE answer (
    id VARCHAR(255) PRIMARY KEY,
    content TEXT,
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE(),
    questionId VARCHAR(255),
    author VARCHAR(255),
    FOREIGN KEY (questionId) REFERENCES question(id) ON DELETE CASCADE,
    FOREIGN KEY (author) REFERENCES users(id) 
);