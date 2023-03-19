USE Stack
EXEC deleteQuestion @id = 'question123';
-- this proc is for deleting a question
GO
CREATE PROCEDURE deleteQuestion
    @id VARCHAR(255) = NULL,
    @title VARCHAR(255) = NULL,
    @author VARCHAR(255) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM question
    WHERE (@id IS NULL OR id = @id)
      AND (@title IS NULL OR title = @title)
      AND (@author IS NULL OR author = author);
        
END;
