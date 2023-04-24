CREATE PROCEDURE [dbo].[spItems_DeleteById]
	@Id INT
AS
BEGIN

	DELETE FROM dbo.[Items]
	WHERE [Id] = @Id;

END