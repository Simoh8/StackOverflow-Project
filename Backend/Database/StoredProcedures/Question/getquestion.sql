USE Stack
EXEC getQuestion;

GO
CREATE PROCEDURE getQuestions
    @id VARCHAR(255) = NULL,
    @title VARCHAR(255) = NULL,
    @author VARCHAR(255) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT * FROM question
    WHERE (@id IS NULL OR id = @id)
      AND (@title IS NULL OR title = @title)
      AND (@author IS NULL OR author = @author);
        
END;
