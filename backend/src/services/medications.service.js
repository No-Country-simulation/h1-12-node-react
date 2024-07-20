import { Medication } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"
import { Op } from "sequelize"

export class MedicationsService {
    getAll = async () => {
        const medications = await Medication.findAll()
        return medications
    }

    getByQuery = async (mquery) => {
        const medication = await Medication.findAll({ where: { drug: { [Op.like]: `%${mquery}%` } } })
        if(!medication){
            throw new HttpError('Medications not found', HTTP_CODES.NOT_FOUND)
        }
        return medication
    }

    getById = async (mid) => {
        const medication = await Medication.findByPk(mid)
        if(!medication){
            throw new HttpError('Medication not found', HTTP_CODES.NOT_FOUND)
        }
        return medication
    }
}