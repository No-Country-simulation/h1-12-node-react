import { UsersService } from "../services/users.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"

export class UsersController {

    constructor(){
        this.usersService = new UsersService()
    }

    getAllUsers = async (req, res, next) => {
        try {
            const users = await this.usersService.getAll()
            res.status(HTTP_CODES.SUCCESS).send(users)
        } catch (error) {
            next(error)
        }
    }

    getUserById = async (req, res, next) => {
        const { uid } = req.params
        try {
            const user = await this.usersService.getById(uid)
            res.status(HTTP_CODES.SUCCESS).send(user)
        } catch (error) {
            next(error)
        }
    }

    updateUserPassword = async (req, res, next) => {
        const { uid } = req.params
        const { password }= req.body
        try {
            const updatedUser = await this.usersService.updatePassword(uid, password)
            res.status(HTTP_CODES.SUCCESS).send(updatedUser)
        } catch (error) {
            next(error)
        }
    }

    deleteUser = async (req, res, next) => {
        const { uid } = req.params
        try {
            const deletedUser = await this.usersService.delete(uid)
            res.status(HTTP_CODES.SUCCESS).send(deletedUser)
        } catch (error) {
            next(error)
        }
    }

}