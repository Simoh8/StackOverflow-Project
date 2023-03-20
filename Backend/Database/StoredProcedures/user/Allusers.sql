USE Stack
EXEC getAllUsers;
GO
-- the proc gets all the users in the program 
CREATE OR ALTER PROCEDURE getAllUsers
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT *
    FROM users;
END;


SELECT * from  users