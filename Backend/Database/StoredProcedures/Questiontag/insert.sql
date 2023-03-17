USE Stack
GO
CREATE PROCEDURE insertQuestionTag(
    @questionId VARCHAR(255),
    @tagId VARCHAR(255)
)
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO question_tag (questionId, tagId)
    VALUES (@questionId, @tagId);
        
END;
