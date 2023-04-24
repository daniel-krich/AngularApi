CREATE TABLE [dbo].[Items]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY,
	[Name] NVARCHAR(64) NOT NULL,
	[Description] NVARCHAR(255) NOT NULL,
	[Price] DECIMAL(10, 2),
	[ImageUrl] NVARCHAR(255),

	[CategoryId] INT NOT NULL,
	CONSTRAINT [FK_Items_Categories] FOREIGN KEY([CategoryId]) REFERENCES [Categories]([Id])
)