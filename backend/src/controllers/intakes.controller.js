import { IntakesService } from "../services/intakes.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"

export class IntakesController {

    constructor(){
        this.intakesService = new IntakesService()
    }

    getAllIntakes = async (req, res, next) => {
        try {
            const intakes = await this.intakesService.getAll()
            res.status(HTTP_CODES.SUCCESS).send(intakes)
        } catch (error) {
            next(error)
        }
    }

    getIntakeById = async (req, res, next) => {
        const { iid } = req.params
        try {
            const intake = await this.intakesService.getById(iid)
            res.status(HTTP_CODES.SUCCESS).send(intake)
        } catch (error) {
            next(error)
        }
    }

    createIntake = async (req, res, next) => {
        const payload = req.body
        try {
            const intake = await this.intakesService.create(payload)
            res.status(HTTP_CODES.CREATED).send(intake)
        } catch (error) {
            next(error)
        }
    }

    updateIntake = async (req, res, next) => {
        const payload = req.body
        const { iid } = req.params
        try {
            const updatedIntake = await this.intakesService.update(iid, payload)
            res.status(HTTP_CODES.SUCCESS).send(updatedIntake)
        } catch (error) {
            next(error)
        } 
    }

    deleteIntake = async (req, res, next) => {
        const { iid } = req.params
        try {
            const deletedIntake = await this.intakesService.delete(iid)
            res.status(HTTP_CODES.SUCCESS).send(deletedIntake)
        } catch (error) {
            next(error)
        }
    }

}