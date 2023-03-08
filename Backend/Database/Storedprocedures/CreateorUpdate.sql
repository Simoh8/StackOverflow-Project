CREATE PROCEDURE RegisterUser(
    @name VARCHAR(255),
    @email VARCHAR(255),
    @password VARCHAR(255),
    @role BIT = 0
)
AS
BEGIN
    INSERT INTO users
        (name, email, password, role)
    VALUES
        (@name, @email, @password, @role);

    SELECT *
    FROM users
    WHERE email = @email;
END