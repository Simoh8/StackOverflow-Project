CREATE PROCEDURE usp_DeleteAllQuestions
AS
BEGIN
  SET NOCOUNT ON;

  DELETE FROM questions;
  DBCC CHECKIDENT('questions', RESEED, 0);
END
