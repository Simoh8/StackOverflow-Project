USE Stack
EXEC insertOrUpdateQuestion 'question1293', 'How do I write a stored procedure in SQL?', 'I want to know how to write a stored procedure in SQL. Can someone help me?', 'user123';

GO
CREATE PROCEDURE insertOrUpdateQuestion
    @id VARCHAR(255),
    @title VARCHAR(255),
    @content TEXT,
    @author VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    IF EXISTS (SELECT 1 FROM question WHERE id = @id)
        -- Update existing question
        UPDATE question
        SET title = @title,
            content = @content,
            updatedAt = GETDATE(),
            author = @author
        WHERE id = @id;
        
    ELSE
        -- Insert new question
        INSERT INTO question (id, title, content, createdAt, updatedAt, author)
        VALUES (@id, @title, @content, GETDATE(), GETDATE(), @author);
        
END;
