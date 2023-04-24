CREATE PROCEDURE [dbo].[spCategories_UpdateById]
	@Id INT,
	@Name NVARCHAR(50),
	@Description NVARCHAR(255),
	@ImageUrl NVARCHAR(255)
AS
BEGIN

	UPDATE dbo.[Categories]
	SET
		[Name] = @Name,
		[Description] = @Description,
		[ImageUrl] = @ImageUrl
	WHERE [Id] = @Id;

END