USE Stack
GO
-- this procedure inserts a comment
CREATE OR ALTER PROCEDURE insertComment
    @id VARCHAR(255),
    @questionId VARCHAR(255),
    @answerId VARCHAR(255),
    @author VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO comment (id, createdAt, updatedAt, questionId, answerId, author)
    VALUES (@id,  GETDATE(), GETDATE(), @questionId, @answerId, @author);
END;
