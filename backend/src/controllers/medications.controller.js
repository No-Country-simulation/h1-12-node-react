import { MedicationsService } from "../services/medications.service.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"

export class MedicationsController {

    constructor(){
        this.medicationsService = new MedicationsService()
    }

    getAllMedications = async (req, res, next) => {
        try {
            const medications = await this.medicationsService.getAll()
            res.status(HTTP_CODES.SUCCESS).send(medications)
        } catch (error) {
            next(error)
        }
    }

    getMedicationsByQuery = async (req, res, next) => {
        const { mquery } = req.params
        try {
            const medication = await this.medicationsService.getByQuery(mquery)
            res.status(HTTP_CODES.SUCCESS).send(medication)
        } catch (error) {
            next(error)
        }
    }

    getMedicationById = async (req, res, next) => {
        const { mid } = req.params
        try {
            const medication = await this.medicationsService.getById(mid)
            res.status(HTTP_CODES.SUCCESS).send(medication)
        } catch (error) {
            next(error)
        }
    }

}