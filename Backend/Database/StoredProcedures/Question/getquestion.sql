USE Stack
-- EXEC getSinglequestionQuestion  @title = 'What is the difference between Python 2 and Python 3?';

-- SELECT * FROM question
-- get question by single id
GO
CREATE OR ALTER PROCEDURE getSinglequestionQuestion
    @id VARCHAR(255) = NULL,
    @title VARCHAR(255) = NULL,
    @author VARCHAR(255) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
         IF @id IS NOT NULL
        SELECT * FROM question WHERE id = @id;
    
        
        
END;
EXEC getQuestion;
