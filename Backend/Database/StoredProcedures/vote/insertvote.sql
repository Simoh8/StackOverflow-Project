
USE Stack
GO
CREATE OR ALTER PROCEDURE insertVote
    @id VARCHAR(255),
      @value INT NOT NULL,

    @answerId VARCHAR(255) = NULL,
    @author VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO vote (id,value , answerId, author)
    VALUES (@id,@value, @answerId, @author);
    
END;
