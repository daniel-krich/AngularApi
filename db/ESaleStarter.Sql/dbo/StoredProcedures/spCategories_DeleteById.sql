CREATE PROCEDURE [dbo].[spCategories_DeleteById]
	@Id INT
AS
BEGIN

	-- Delete all items first
	DELETE FROM
	dbo.[Items]
	WHERE CategoryId = @Id;

	-- Then delete the category itself.
	DELETE FROM
	dbo.[Categories]
	WHERE Id = @Id;

END