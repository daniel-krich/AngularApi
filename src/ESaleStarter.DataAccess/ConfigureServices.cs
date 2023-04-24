using ESaleStarter.DataAccess.Data;
using ESaleStarter.DataAccess.DbAccess;
using ESaleStarter.DataAccess.Factories;
using ESaleStarter.DataAccess.Interfaces;

namespace Microsoft.Extensions.DependencyInjection;

public static class ConfigureServices
{
    public static IServiceCollection ConfigureDataAccess(this IServiceCollection services)
    {
        services.AddSingleton<IRelationalDbAccess, RelationalDbAccess>();
        services.AddSingleton<ISqlConnectionFactory, SqlConnectionFactory>();

        services.AddSingleton<IItemData, ItemData>();
        services.AddSingleton<ICategoryData, CategoryData>();

        return services;
    }
}