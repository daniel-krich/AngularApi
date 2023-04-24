CREATE PROCEDURE [dbo].[spItems_Create]
	@CategoryId INT,
	@Name NVARCHAR(64),
	@Description NVARCHAR(255),
	@Price DECIMAL(10, 2),
	@ImageUrl NVARCHAR(255)
AS
BEGIN

	INSERT INTO dbo.[Items] ([Name], [Description], [Price], [ImageUrl], [CategoryId])
		VALUES (@Name, @Description, @Price, @ImageUrl, @CategoryId);

END