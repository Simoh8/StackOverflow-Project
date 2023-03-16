USE Stack
GO
CREATE PROCEDURE deleteAnswerById
    @id VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM answer
    WHERE id = @id;
END;
