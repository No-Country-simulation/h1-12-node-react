import { Permission } from "../database/models/permission.js";
import { Role } from "../database/models/role.js";
import { User } from "../database/models/user.js";
import { HTTP_CODES } from "../utils/http-codes.util.js";
import { HttpError } from "../utils/http-error.util.js";

export const authorizationMiddleware = (requiredPermissions) => {
    return async (req, res, next) => {
      const user = req.user;
  
      try {
        if (!user) {
            throw new HttpError('Missing credentials', HTTP_CODES.UNAUTHORIZED)
        }
  
        const userRole = await User.findByPk(user.id, {
            include: [{
              model: Role,
              as: 'role',
              include: [{
                model: Permission,
                as: 'permissions',
                through: { attributes: [] }
              }]
            }]
        })

        if (!userRole) {
          throw new HttpError('Permissions managment error', HTTP_CODES.INTERNAL_SERVER_ERROR)
        }
        
        const userPermissions = [];
        userRole.dataValues.role.dataValues.permissions.forEach(permission => {
            userPermissions.push(permission.dataValues.permission);
        });
  
        const hasPermission = requiredPermissions.every(permission => userPermissions.includes(permission));

        if (!hasPermission) {
            throw new HttpError('Does not have the required permissions', HTTP_CODES.FORBIDDEN)
        }
        next();

      } catch (error) {
        
        next(error)
      }
    };
};
  