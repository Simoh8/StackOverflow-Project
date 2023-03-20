-- gets all answers in the table 
USE Stack
GO
CREATE OR ALTER PROCEDURE getallanswers
AS BEGIN
SELECT * FROM answer
END
USE Stack
EXEC getallanswers