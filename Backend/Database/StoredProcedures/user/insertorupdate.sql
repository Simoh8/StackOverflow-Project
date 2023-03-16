USE Stack 
GO
CREATE PROCEDURE insertOrUpdateUser(
    @id VARCHAR(255),
    @username VARCHAR(255),
    @email VARCHAR(255),
    @password VARCHAR(255),
    @reputation DECIMAL(10,2),
    @avatarUrl VARCHAR(255),
    @bio TEXT
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
            reputation = @reputation,
            avatarUrl = @avatarUrl,
            bio = @bio,
            updatedAt = GETDATE()
        WHERE id = @id;
        
    ELSE
        -- Insert new user
        INSERT INTO users (id, username, email, password, reputation, avatarUrl, bio, createdAt, updatedAt)
        VALUES (@id, @username, @email, @password, @reputation, @avatarUrl, @bio, GETDATE(), GETDATE());
        
END;