USE Stack

EXEC delete_answer '1';
-- this procedure deletes an answer by its id
GO
CREATE PROCEDURE deleteAnswerById
    @id VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM answer
    WHERE id = @id;
END;

