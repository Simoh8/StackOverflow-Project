
CREATE PROCEDURE deletesingleuser
    (@id INT)
AS
BEGIN
    DELETE
    FROM question
    WHERE id = @id
END