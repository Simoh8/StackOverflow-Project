USE Stack
GO

CREATE OR ALTER PROCEDURE getAllQuestions
    @page INT,
    @pageSize INT
AS
BEGIN
    SELECT * FROM questions
    ORDER BY created_at DESC
    OFFSET (@page - 1) * @pageSize ROWS
    FETCH NEXT @pageSize ROWS ONLY
END


-- -- SELECT * from question
-- -- this proc gets all the questions in app
-- GO
-- CREATE OR ALTER PROCEDURE getAllQuestions
--   @PageSize INT,
--   @PageNumber INT
-- AS
-- BEGIN
--   SET NOCOUNT ON;

--   SELECT *
--   FROM (
--     SELECT ROW_NUMBER() OVER (ORDER BY createdAt DESC) AS RowNum, *
--     FROM question
--   ) AS Q
--   WHERE Q.RowNum BETWEEN (@PageNumber - 1) * @PageSize + 1 AND @PageNumber * @PageSize
--   ORDER BY Q.createdAt DESC;
-- END
USE Stack
GO
CREATE OR ALTER PROCEDURE getAllQuestions
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT *
    FROM question;
END;