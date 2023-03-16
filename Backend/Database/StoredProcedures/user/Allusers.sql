USE Stack
GO
CREATE PROCEDURE getAllUsers
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT *
    FROM users;
END;
