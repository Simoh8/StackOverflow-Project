USE Stack
GO
-- this proc insert a comment to an answer using the answerid 
CREATE OR ALTER PROCEDURE InsertCommentByAnswerId
    @answerId VARCHAR(255),
    @content TEXT,
    @author VARCHAR(255)
AS
BEGIN
    DECLARE @commentId VARCHAR(255)


    INSERT INTO comment (id, content, answerId, author)
    VALUES (@commentId, @content, @answerId, @author)
END
