CREATE PROCEDURE usp_UpdateUser(
    @id INT,
    @name NVARCHAR(255) = NULL,
    @email NVARCHAR(255) = NULL,
    @password NVARCHAR(255) = NULL,
    @role BIT = 0
)
AS
BEGIN
    UPDATE users
        SET name = COALESCE(@name, name),
        email = COALESCE(@email, email),
        password = COALESCE(@password, password),
        isAdmin = COALESCE(@role, role),
        updatedAt = GETDATE()
        WHERE id = @id;
    SELECT *
    FROM users
    WHERE id = @id;
END