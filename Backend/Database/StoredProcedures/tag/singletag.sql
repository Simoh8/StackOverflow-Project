USE Stack
GO
CREATE PROCEDURE get_tag

      @id VARCHAR(255)

AS
BEGIN
    SELECT *
    FROM tag
    WHERE id = @id;
END