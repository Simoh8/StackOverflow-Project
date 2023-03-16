USE Stack
GO
CREATE PROCEDURE insertComment
    @id VARCHAR(255),
    @content TEXT,
    @questionId VARCHAR(255),
    @answerId VARCHAR(255),
    @author VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO comment (id, content, createdAt, updatedAt, questionId, answerId, author)
    VALUES (@id, @content, GETDATE(), GETDATE(), @questionId, @answerId, @author);
END;
