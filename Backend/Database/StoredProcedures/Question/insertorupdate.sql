USE Stack
Exec insertOrUpdateQuestion (1, 'How to create a table in MySQL?', 'I want to create a table in MySQL, how can I do it?', 'mysql, create table', 'john.doe');


GO
CREATE OR ALTER PROCEDURE insertOrUpdateQuestion 
    @id VARCHAR(255),
    @title VARCHAR(255),
    @content TEXT,
    @tags TEXT,
    @author VARCHAR(255)

AS
BEGIN
    SET NOCOUNT ON;

    -- Check if the question already exists
    IF EXISTS (SELECT * FROM question WHERE id = @id)
    BEGIN
        -- If it exists, update the existing row
        UPDATE question SET
            title = @title,
            content = @content,
            tags = @tags,
            author=@author,
            updatedAt = GETDATE()
        WHERE id = @id
    END
    ELSE
    BEGIN
        -- If it doesn't exist, insert a new row
        INSERT INTO question (id, title, content, tags,author)
        VALUES (@id, @title, @content, @tags,@author)
    END
END
