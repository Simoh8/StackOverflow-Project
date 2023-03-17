CREATE PROCEDURE insertVote
    @id INT,
    @value INT,
    @questionId VARCHAR(255) = NULL,
    @answerId VARCHAR(255) = NULL,
    @author VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO vote (id, value, questionId, answerId, author)
    VALUES (@id, @value, @questionId, @answerId, @author);
    
END;
