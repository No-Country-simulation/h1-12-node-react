import { roles } from "../mocks/data.mock.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

const rolesList = roles

export class RolesService {
    getAll = async () => {
        return rolesList
    }

    getById = async (rid) => {
        const role = await rolesList.find(role => role.id === +rid)
        if(!role){
            throw new HttpError('Role not found', HTTP_CODES.NOT_FOUND)
        }
        return role
    }

    getByName = async (roleName) => {
        const role = await rolesList.find(role => role.role_name === roleName)
        if(!role){
            throw new HttpError('Role not found', HTTP_CODES.NOT_FOUND)
        }
        return role
    }

    create = async (payload) => {
        const { role_name } = payload
        const existingRole = await rolesList.find(role => role.role_name === role_name)
        if(existingRole){
            throw new HttpError('Role already created', HTTP_CODES.BAD_REQUEST)
        }
        const newId = rolesList[rolesList.length - 1].id + 1
        const newRole = {
            id: newId,
            role_name
        }
        rolesList.push(newRole)
        return newRole
    }

    delete = async (rid) => {
        const idx = roles.findIndex(role => role.id === +rid)
        rolesList.splice(idx, 1)
        return rolesList
    }
}