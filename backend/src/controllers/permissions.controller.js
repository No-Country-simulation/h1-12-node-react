import { PermissionsService } from "../services/permissions.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"

export class PermissionsController {

    constructor(){
        this.permissionsService = new PermissionsService()
    }

    getAllPermissions = async (req, res, next) => {
        try {
            const permissions = await this.permissionsService.getAll()
            res.status(HTTP_CODES.SUCCESS).send(permissions)
        } catch (error) {
            next(error)
        }
    }

    getPermissionById = async (req, res, next) => {
        const { pid } = req.params
        try {
            const permission = await this.permissionsService.getById(pid)
            res.status(HTTP_CODES.SUCCESS).send(permission)
        } catch (error) {
            next(error)
        }
    }

    createPermission = async (req, res, next) => {
        const payload = req.body
        try {
            const permission = await this.permissionsService.create(payload)
            res.status(HTTP_CODES.CREATED).send(permission)
        } catch (error) {
            next(error)
        }
    }

    updatePermission = async (req, res, next) => {
        const payload = req.body
        const { pid } = req.params
        try {
            const updatedPermission = await this.permissionsService.update(pid, payload)
            res.status(HTTP_CODES.SUCCESS).send(updatedPermission)
        } catch (error) {
            next(error)
        } 
    }

    deletePermission = async (req, res, next) => {
        const { pid } = req.params
        try {
            const deletedPermission = await this.permissionsService.delete(pid)
            res.status(HTTP_CODES.SUCCESS).send(deletedPermission)
        } catch (error) {
            next(error)
        }
    }

}