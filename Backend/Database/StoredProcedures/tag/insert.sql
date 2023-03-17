USE Stack
GO
CREATE PROCEDURE insertTag
    @id VARCHAR(255),
    @name VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO tag (id, name)
    VALUES (@id, @name);

END;
