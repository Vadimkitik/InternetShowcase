using InternetShowcase.Data.Models;
using InternetShowcase.Features.Roles.Models;
using InternetShowcase.Infrastructure.Services;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Roles
{
    public interface IRolesService
    {
        Task<ChangeRoleResponseModel> GetUserWithRoles(User user); 
        Task<Result> EditUserRoles(UpdateUserRolesRequestModel updateUser);
        Task<Result> DeleteRole(string id);
        Task<Result> CreateRole(CreateRoleRequestModel model);
    }
}
