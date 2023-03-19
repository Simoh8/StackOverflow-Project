EXEC insert_answer '1', 'This is the content of the answer', '2022-01-01', '2022-01-01', '1', '2';




SELECT *FROM question

EXEC insert_answer 
    @id = '56', 
    @content = 'This is an answer', 
    @questionId = '1'

USE Stack

GO
CREATE OR ALTER PROCEDURE insert_answer
    @id VARCHAR(255),
    @content TEXT


AS
BEGIN
    INSERT INTO answer (id, content)
    VALUES (@id, @content)
END
