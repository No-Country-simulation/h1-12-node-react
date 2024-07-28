import { Permission, Role } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class RolesService {
    getAll = async () => {
        const roles = await Role.findAll()
        return roles
    }

    getById = async (rid) => {
        const role = await Role.findByPk(rid)
        if(!role){
            throw new HttpError('Role not found', HTTP_CODES.NOT_FOUND)
        }
        return role
    }

    getByName = async (role_name) => {
        const role = await Role.findOne({ where: { role_name: role_name }, raw: true })
        if(!role){
            throw new HttpError('Role not found', HTTP_CODES.NOT_FOUND)
        }
        return role
    }

    create = async (payload) => {
        const { role_name, permission_ids } = payload
        const existingRole = await Role.findOne({ where: { role_name: role_name } })
        if(existingRole){
            throw new HttpError('Role already created', HTTP_CODES.BAD_REQUEST)
        }
        if(!permission_ids || !permission_ids.length){
            throw new HttpError('Must assign one permission at least', HTTP_CODES.BAD_REQUEST)
        }
        const permissions = await Permission.findAll({
            where: {
              id: permission_ids,
            },
        });
        const newRole = {
            role_name
        }
        const role = await Role.create(newRole)
        await role.setPermissions(permissions)
        return role
    }

    update = async(rid, payload) => {
        const { role_name, permission_ids } = payload
        const role = await this.getById(rid)
        if(role_name){
            role.role_name = role_name
            const existingRole = await Role.findOne({ where: { role_name: role_name } })
            if(existingRole && existingRole.id !== role.id){
                throw new HttpError('Role name already created', HTTP_CODES.BAD_REQUEST)
            }
        }
        if(permission_ids && permission_ids.length){
            const permissions = await Permission.findAll({
                where: {
                  id: permission_ids,
                },
            });
            await role.setPermissions(permissions)
        }
        const updatedRole = await role.save()
        return updatedRole
    }

    delete = async (rid) => {
        const role = await this.getById(rid)
        const deletedRole = await role.destroy()
        return deletedRole
    }
}