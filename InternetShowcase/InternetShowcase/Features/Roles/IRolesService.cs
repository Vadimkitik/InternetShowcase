using InternetShowcase.Data.Models;
using InternetShowcase.Features.Roles.Models;
using InternetShowcase.Infrastructure.Services;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Roles
{
    public interface IRolesService
    {
        Task<ChangeRoleRequestModel> GetUserWithRoles(User user); 
        Task<Result> EditUserRoles(UpdateUserRolesRequestModel updateUser);
        Task<Result> DeleteRole(string id);
        Task<Result> CreateRole(RoleModel model);
    }
}
