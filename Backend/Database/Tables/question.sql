-- the question table with the userid as the foreign key
USE Stack
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