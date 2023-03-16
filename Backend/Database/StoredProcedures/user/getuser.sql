USE Stack
EXEC getUser @email = 'johndoe@example.com';

EXEC getUser @username = 'johndoe';

GO
CREATE PROCEDURE getUser
    @id VARCHAR(255) = NULL,
    @username VARCHAR(255) = NULL,
    @email VARCHAR(255) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    IF @id IS NOT NULL
        SELECT * FROM users WHERE id = @id;
    ELSE IF @username IS NOT NULL
        SELECT * FROM users WHERE username = @username;
    ELSE IF @email IS NOT NULL
        SELECT * FROM users WHERE email = @email;
END;
