USE Stack
-- EXEC deletingUser @id = 'user789';
EXEC deletingUser @username ='johhndoe';


GO

CREATE PROCEDURE deletingUser
    @id VARCHAR(255) = NULL,
    @username VARCHAR(255) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    IF @id IS NOT NULL
        DELETE FROM users WHERE id = @id;
    ELSE IF @username IS NOT NULL
        DELETE FROM users WHERE username = @username;
END;
