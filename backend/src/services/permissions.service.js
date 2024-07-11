import { permissions } from "../mocks/data.mock.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

const permissionsList = permissions

export class PermissionsService {
    getAll = async () => {
        return permissionsList
    }

    getById = async (pid) => {
        const permission = await permissionsList.find(permission => permission.id === +pid)
        if(!permission){
            throw new HttpError('RPermission not found', HTTP_CODES.NOT_FOUND)
        }
        return permission
    }

    create = async (payload) => {
        const { permission } = payload
        const newId = permissionsList[permissionsList.length - 1].id + 1
        const newPermission = {
            id: newId,
            permission
        }
        permissionsList.push(newPermission)
        return newPermission
    }

    delete = async (pid) => {
        const idx = permissionsList.findIndex(permission => permission.id === +pid)
        permissionsList.splice(idx, 1)
        return permissionsList
    }
}