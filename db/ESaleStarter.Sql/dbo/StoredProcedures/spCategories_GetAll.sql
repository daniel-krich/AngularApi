CREATE PROCEDURE [dbo].[spCategories_GetAll]
AS
BEGIN

	SELECT [Id], [Name], [Description], [ImageUrl]
	FROM dbo.[Categories];

END
