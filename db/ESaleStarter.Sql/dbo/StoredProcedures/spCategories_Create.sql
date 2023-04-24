CREATE PROCEDURE [dbo].[spCategories_Create]
	@Name NVARCHAR(50),
	@Description NVARCHAR(255),
	@ImageUrl NVARCHAR(255)
AS
BEGIN

	SET NOCOUNT OFF;

	DECLARE @CategoryId INT;

	INSERT INTO dbo.[Categories] ([Name], [Description], [ImageUrl])
		VALUES (@Name, @Description, @ImageUrl);

	SET @CategoryId = SCOPE_IDENTITY();

	SELECT CategoryId = @CategoryId;

END