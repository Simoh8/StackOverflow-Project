USE Stack
EXEC getAllQuestions
GO
CREATE PROCEDURE getAllQuestions
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT *
    FROM question;
END;
