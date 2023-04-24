IF NOT EXISTS (SELECT 1 FROM dbo.[Categories])
BEGIN

	INSERT INTO dbo.[Categories]([Name], [Description])
		VALUES 
			('Toys', 'Plush toys and some more'),
			('Work tools', 'Work tools and some more'),
			('Furniture', 'Plush toys and some more'),
			('Cleaning tools', 'Cleaning tools');

	IF NOT EXISTS (SELECT 1 FROM dbo.[Items])
	BEGIN

		INSERT INTO dbo.[Items]([Name], [Description], [ImageUrl], [Price], [CategoryId])
			VALUES 
				('Teddy bear', '...', NULL, 25.2, 1),
				('Saw', '...', NULL, 50.2, 2),
				('Table', '...', NULL, 250.99, 3),
				('Cleaning towels', '...', NULL, 9.99, 4);

	END

END