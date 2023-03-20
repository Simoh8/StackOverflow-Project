USE Stack
GO
-- this proc gets votes for a single question
CREATE OR Alter  PROCEDURE FindVotesByAnswerId
    @answerId VARCHAR(255)
AS
BEGIN
    SELECT * FROM vote
    WHERE answerId = @answerId
END
