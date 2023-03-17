USE Stack
GO
CREATE PROCEDURE deleteQuestionTag
    @questionId VARCHAR(255),
    @tagId VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM question_tag
    WHERE questionId = @questionId AND tagId = @tagId;
    
END;
