USE Stack
GO

CREATE PROCEDURE deleteCommentById
    @commentId VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    DELETE FROM comment WHERE id = @commentId;

END;
