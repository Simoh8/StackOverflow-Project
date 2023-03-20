USE Stack
-- this proc gets all the questions in app
EXEC getAllQuestions
GO
CREATE PROCEDURE getAllQuestions
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT *
    FROM question;
END;
