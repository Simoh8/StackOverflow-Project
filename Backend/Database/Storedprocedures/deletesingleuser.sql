
CREATE PROCEDURE deletesingleuser
    (@id INT)
AS
BEGIN
    DELETE
    FROM users
    WHERE id = @id
END