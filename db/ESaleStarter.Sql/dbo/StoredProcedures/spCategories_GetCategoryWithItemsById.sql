CREATE PROCEDURE [dbo].[spCategories_GetCategoryWithItemsById]
	@Id INT
AS
BEGIN

	SELECT
		[c].[Id],
		[c].[Name],
		[c].[Description],
		[c].[ImageUrl],
		
		[i].[Id] as ItemId,
		[i].[Name] as ItemName,
		[i].[Description] as ItemDescription,
		[i].[Price],
		[i].[ImageUrl] as ItemImageUrl

	FROM dbo.[Categories] c
	LEFT JOIN dbo.[Items] i ON c.Id = i.CategoryId
	WHERE c.[Id] = @Id;

END