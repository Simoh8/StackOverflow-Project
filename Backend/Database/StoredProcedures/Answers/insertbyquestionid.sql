-- use Stack // this PROCEDURE inserts a naswer to a certain question
GO
CREATE PROCEDURE InsertAnswerByQuestionId
    @content TEXT,
    @questionId VARCHAR(255),
    @author VARCHAR(255)
AS
BEGIN
    DECLARE @answerId VARCHAR(255)
  
    
    INSERT INTO answer (id, content, questionId, author)
    VALUES (@answerId, @content, @questionId, @author)
    
    SELECT * FROM answer WHERE id = @answerId
END
