import { RolesPermissions, sequelize } from "../database/models/index.js"
import { Permission } from "../database/models/permission.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class PermissionsService {
    getAll = async () => {
        const specialities = await Permission.findAll()
        return specialities
    }

    getById = async (pid) => {
        const permission = await Permission.findByPk(+pid)
        if(!permission){
            throw new HttpError('Permission not found', HTTP_CODES.NOT_FOUND)
        }
        return permission
    }

    //Este método usa transacciones para crear el permiso y la relación que tiene este con los roles en la tabla intermedia
    create = async (payload) => {
        const { permission, role_ids } = payload
        if(!permission || !role_ids || !role_ids.length){
            throw new HttpError('Missing data', HTTP_CODES.BAD_REQUEST)
        }
        const existingPermission = await Permission.findOne({ where: { permission: permission } })
        if(existingPermission){
            throw new HttpError('Permission already created', HTTP_CODES.BAD_REQUEST)
        }
        try {
            const transaction = await sequelize.transaction();
            const newPermission = {
                permission: permission
            }
            const createdPermission = await Permission.create(newPermission, { transaction });

            const rolesPermissions = role_ids.map(roleId => ({
                role_id: roleId,
                permission_id: createdPermission.id
            }));

            await RolesPermissions.bulkCreate(rolesPermissions, { transaction });

            await transaction.commit();
            return createdPermission
        } catch (error) {
            await transaction.rollback(); // si hay algún error se vuelve hacia atrás la transacción
            throw new HttpError(); 
        }
    }

    delete = async (pid) => {
        const permission = await this.getById(pid)
        const deletedPermission = await permission.destroy()
        return deletedPermission
    }
}