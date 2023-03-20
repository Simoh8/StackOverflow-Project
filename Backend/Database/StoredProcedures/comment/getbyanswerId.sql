USE Stack
GO
CREATE OR ALTER PROCEDURE FindCommentsByAnswerId
    @answerId VARCHAR(255)
AS
BEGIN
    SELECT * FROM comment
    WHERE answerId = @answerId
END
