USE Stack

EXEC getUser @username = 'johndoe';
EXEC getUser @email = '.com';

GO
-- this gets a single user 
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
USE Stack
GO
CREATE PROCEDURE getUserByEmail
  @email VARCHAR(255)
AS
BEGIN
  SELECT * FROM users WHERE email = @email;
END
