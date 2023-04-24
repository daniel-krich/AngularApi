CREATE PROCEDURE [dbo].[spItems_UpdateById]
	@Id INT,
	@Name NVARCHAR(64),
	@Description NVARCHAR(255),
	@Price DECIMAL(10, 2),
	@ImageUrl NVARCHAR(255)
AS
BEGIN

	UPDATE dbo.[Items]
	SET
		[Name] = @Name,
		[Description] = @Description,
		[Price] = @Price,
		[ImageUrl] = @ImageUrl
	WHERE [Id] = @Id;

END