USE Stack 
GO

-- the procedure inserts a new user 
CREATE OR ALTER PROCEDURE insertOrUpdateUser(
    @id VARCHAR(255),
    @username VARCHAR(255),
    @email VARCHAR(255),
    @password VARCHAR(255)
   
)
AS
BEGIN
    SET NOCOUNT ON;
    
    IF EXISTS (SELECT 1 FROM users WHERE id = @id)
        -- Update existing user
        UPDATE users
        SET username = @username,
            email = @email,
            password = @password,
          
            updatedAt = GETDATE()
        WHERE id = @id;
        
    ELSE
        -- Insert new user
        INSERT INTO users (id, username, email, password,createdAt, updatedAt)
        VALUES (@id, @username, @email, @password, GETDATE(), GETDATE());
        
END;