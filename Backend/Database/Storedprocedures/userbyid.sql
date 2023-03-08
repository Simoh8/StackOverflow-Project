CREATE PROCEDURE FindUserById
    (@id INT)
AS
BEGIN
    SELECT *
    FROM users
    WHERE id = @id
END