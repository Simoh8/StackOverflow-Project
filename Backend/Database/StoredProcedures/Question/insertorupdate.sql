USE Stack
GO
CREATE OR ALTER PROCEDURE insertOrUpdateQuestion 
    @id VARCHAR(255),
    @title VARCHAR(255),
    @content TEXT,
    @tags TEXT
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
            updatedAt = GETDATE()
        WHERE id = @id
    END
    ELSE
    BEGIN
        -- If it doesn't exist, insert a new row
        INSERT INTO question (id, title, content, tags)
        VALUES (@id, @title, @content, @tags)
    END
END
