CREATE PROCEDURE usp_UpdateUserProfileByAdmin
    (
    @id INT,
    @name NVARCHAR(255) = NULL,
    @email NVARCHAR(255) = NULL,
    @role BIT = 0
)
AS
BEGIN
    DECLARE @updatedUser TABLE (
        id INT,
        name NVARCHAR(255),
        email NVARCHAR(255),
        password NVARCHAR(255),
        role BIT,
        createdAt DATETIME,
        updatedAt DATETIME
);

    UPDATE users
SET name = COALESCE(@name, name),
email = COALESCE(@email, email),
isAdmin = COALESCE(@role, role),
updatedAt = GETDATE()
OUTPUT INSERTED.*
INTO @updatedUser
WHERE id = @id;

    SELECT *
    FROM @updatedUser;
END