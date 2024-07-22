import { TreatmentsService } from "../services/treatments.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"

export class TreatmentsController {

    constructor(){
        this.treatmentsService = new TreatmentsService()
    }

    getAllTreatments = async (req, res, next) => {
        try {
            const treatments = await this.treatmentsService.getAll()
            res.status(HTTP_CODES.SUCCESS).send(treatments)
        } catch (error) {
            next(error)
        }
    }

    getTreatmentById = async (req, res, next) => {
        const { tid } = req.params
        try {
            const treatment = await this.treatmentsService.getById(tid)
            res.status(HTTP_CODES.SUCCESS).send(treatment)
        } catch (error) {
            next(error)
        }
    }

    createTreatment = async (req, res, next) => {
        const payload = req.body
        try {
            const treatment = await this.treatmentsService.create(payload)
            res.status(HTTP_CODES.CREATED).send(treatment)
        } catch (error) {
            next(error)
        }
    }

    updateTreatment = async (req, res, next) => {
        const payload = req.body
        const { tid } = req.params
        try {
            const updatedSpecility = await this.treatmentsService.update(tid, payload)
            res.status(HTTP_CODES.SUCCESS).send(updatedSpecility)
        } catch (error) {
            next(error)
        } 
    }

    deleteTreatment = async (req, res, next) => {
        const { tid } = req.params
        try {
            const deletedTreatment = await this.treatmentsService.delete(tid)
            res.status(HTTP_CODES.SUCCESS).send(deletedTreatment)
        } catch (error) {
            next(error)
        }
    }

}