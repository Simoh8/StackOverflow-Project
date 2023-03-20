USE Stack
GO
-- the proc deletes a vote 
CREATE PROCEDURE deleteVoteByReference
    @questionId VARCHAR(255) = NULL,
    @answerId VARCHAR(255) = NULL,
    @author VARCHAR(255) = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    IF @questionId IS NOT NULL
        DELETE FROM vote WHERE questionId = @questionId;
        
    IF @answerId IS NOT NULL
        DELETE FROM vote WHERE answerId = @answerId;
        
    IF @author IS NOT NULL
        DELETE FROM vote WHERE author = @author;
END;
