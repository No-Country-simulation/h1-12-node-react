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

    create = async (payload) => {
        const { name } = payload
        const newPermission = {
            name
        }
        const permission = await Permission.create(newPermission)
        return permission
    }

    delete = async (pid) => {
        const permission = await this.getById(pid)
        const deletedPermission = await permission.destroy()
        return deletedPermission
    }
}