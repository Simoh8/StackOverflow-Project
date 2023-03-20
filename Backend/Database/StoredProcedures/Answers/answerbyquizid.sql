-- this procedure gets the answer by the question id  which is the fk
USE Stack
GO
CREATE PROCEDURE GetAnswersByQuestionId
    @questionId VARCHAR(255)
AS
BEGIN
    SELECT * FROM answer
    WHERE questionId = @questionId
END
