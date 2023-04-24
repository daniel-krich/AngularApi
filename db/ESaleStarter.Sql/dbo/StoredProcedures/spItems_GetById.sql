CREATE PROCEDURE [dbo].[spItems_GetById]
	@Id INT
AS
BEGIN

	SELECT [Id], [Name], [Description], [Price], [ImageUrl], [CategoryId]
	FROM dbo.[Items]
	WHERE [Id] = @Id;

END