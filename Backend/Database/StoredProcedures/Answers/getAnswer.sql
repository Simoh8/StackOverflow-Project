USE Stack 

SELECT * FROM answer
-- EXEC GetAnswerById @id='5'
-- gets a single answer using its id
USE Stack 
GO
CREATE OR ALTER PROCEDURE GetAnswerById (
    @id VARCHAR(255)
)
AS
BEGIN
    SELECT *
    FROM answer
    WHERE id = @id;
END;
