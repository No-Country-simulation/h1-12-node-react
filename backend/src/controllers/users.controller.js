import { PatientsService } from "../services/patients.service.js"
import { UsersService } from "../services/users.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class UsersController {

    constructor(){
        this.usersService = new UsersService()
        this.patientsService = new PatientsService()
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

    getPatientStatistics = async (req, res, next) => {
        const { pid } = req.params
        try {
            const statistics = await this.patientsService.getStatistics(pid)
            res.status(HTTP_CODES.SUCCESS).send(statistics)
        } catch (error) {
            next(error)
        }
    }

    updateUser = async(req, res, next) => {
        const { uid } = req.params
        const payload = req.body
        try {
            if(req.file && req.file.path){
                payload.image = req.file.path
            }
            const updatedUser = await this.usersService.update(uid, payload)
            res.status(HTTP_CODES.SUCCESS).send(updatedUser)
        } catch (error) {
            next(error)
        }
    }

    updateUserPassword = async (req, res, next) => {
        const user = req.user 
        const { password }= req.body
        try {
            const updatedUser = await this.usersService.updatePassword(user.id, password)
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

    getUserHistory = async (req, res, next) => {
        const { pid } = req.params
        try {
            const history = await this.usersService.getHistory(pid)
            res.status(HTTP_CODES.SUCCESS).send(history)
        } catch (error) {
            next(error)
        }
    }

}