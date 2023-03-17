USE Stack
EXEC getAllUsers;
GO
CREATE OR ALTER PROCEDURE getAllUsers
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT *
    FROM users;
END;


SELECT * from  users