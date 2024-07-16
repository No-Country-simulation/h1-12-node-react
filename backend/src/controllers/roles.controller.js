import { RolesService } from "../services/roles.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"

export class RolesController {

    constructor(){
        this.rolesService = new RolesService()
    }

    getAllRoles = async (req, res, next) => {
        try {
            const roles = await this.rolesService.getAll()
            res.status(HTTP_CODES.SUCCESS).send(roles)
        } catch (error) {
            next(error)
        }
    }

    getRoleById = async (req, res, next) => {
        const { rid } = req.params
        try {
            const role = await this.rolesService.getById(rid)
            res.status(HTTP_CODES.SUCCESS).send(role)
        } catch (error) {
            next(error)
        }
    }

    createRole = async (req, res, next) => {
        const payload = req.body
        try {
            const role = await this.rolesService.create(payload)
            res.status(HTTP_CODES.CREATED).send(role)
        } catch (error) {
            next(error)
        }
    }

    deleteRole = async (req, res, next) => {
        const { rid } = req.params
        try {
            const deletedRole = await this.rolesService.delete(rid)
            res.status(HTTP_CODES.SUCCESS).send(deletedRole)
        } catch (error) {
            next(error)
        }
    }

}