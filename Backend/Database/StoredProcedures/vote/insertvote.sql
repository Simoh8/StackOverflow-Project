
USE Stack
GO
CREATE OR ALTER PROCEDURE insertVote
    @id VARCHAR(255),
    @answerId VARCHAR(255) = NULL,
    @author VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO vote (id,   answerId, author)
    VALUES (@id, @answerId, @author);
    
END;
