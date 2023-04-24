var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.ConfigureDataAccess();

if(builder.Environment.IsDevelopment())
{
    builder.Services.AddCors(options =>
    {
        options.AddPolicy(name: "AllowAllOrigins",
            builder =>
            {
                builder
                .WithOrigins("http://localhost:4200") // Angular client
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
            }
        );
    });
}

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

if (builder.Environment.IsProduction())
{
    app.UseHttpsRedirection();
}

app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

app.UseCors("AllowAllOrigins");

app.MapFallbackToFile("index.html"); // for SPA

app.Run();