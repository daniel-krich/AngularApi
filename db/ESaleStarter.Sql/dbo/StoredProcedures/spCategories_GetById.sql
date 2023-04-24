CREATE PROCEDURE [dbo].[spCategories_GetById]
	@Id INT
AS
BEGIN

	SELECT *
	FROM dbo.[Categories]
	WHERE Id = @Id;

END
