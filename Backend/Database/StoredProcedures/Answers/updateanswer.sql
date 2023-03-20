USE Stack 
-- EXEC sp_UpdateAnswer @answerId='56' 
-- the proc updates the answer using the id of that answer
GO
CREATE PROCEDURE sp_UpdateAnswer
    @answerId VARCHAR(255),
    @content TEXT,
    @updatedAt DATETIME

AS
BEGIN
    UPDATE answer
    SET content = @content, updatedAt = @updatedAt
    WHERE id = @answerId
END
