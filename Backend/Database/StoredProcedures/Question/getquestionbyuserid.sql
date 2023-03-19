use Stack
EXEC GetQuestionsByUserId '4'
GO
-- you get question fro a single user 
CREATE PROCEDURE GetQuestionsByUserId
    @userId VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM question
    WHERE author = @userId
END

