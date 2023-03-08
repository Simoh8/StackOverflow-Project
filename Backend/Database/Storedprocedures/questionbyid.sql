CREATE PROCEDURE FindQuestionById
    (@id INT)
AS
BEGIN
    SELECT *
    FROM questions
    WHERE id = @id
END