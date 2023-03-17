CREATE PROCEDURE deleteQuestionById
    @id VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM question
    WHERE id = @id;
END;
