CREATE PROCEDURE [dbo].[spItems_GetAll]
AS
BEGIN

	SELECT [Id], [Name], [Description], [Price], [ImageUrl], [CategoryId]
	FROM dbo.[Items];

END