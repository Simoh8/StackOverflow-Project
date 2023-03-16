CREATE PROCEDURE insertAnswer
    @id VARCHAR(255),
    @content TEXT,
    @questionId VARCHAR(255),
    @author VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO answer (id, content, createdAt, updatedAt, questionId, author)
    VALUES (@id, @content, GETDATE(), GETDATE(), @questionId, @author);
END;
