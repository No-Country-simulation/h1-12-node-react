import { Role } from "../database/models/role.js"
import { roles } from "../mocks/data.mock.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

const rolesList = roles

export class RolesService {
    getAll = async () => {
        const roles = await Role.findAll()
        return roles
    }

    getById = async (rid) => {
        const role = await Role.findByPk(+rid)
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
        const { role_name } = payload
        const existingRole = await Role.findOne({ where: { role_name: role_name } })
        if(existingRole){
            throw new HttpError('Role already created', HTTP_CODES.BAD_REQUEST)
        }
        const newRole = {
            role_name
        }
        const role = Role.create(newRole)
        return role
    }

    delete = async (rid) => {
        const role = await Role.findByPk(+rid)
        if(!role){
            throw new HttpError('Role not found', HTTP_CODES.NOT_FOUND)
        }
        const deletedRole = await role.destroy()
        return deletedRole
    }
}