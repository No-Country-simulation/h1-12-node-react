import { Intake, MedicationTreatments } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class IntakesService {

    constructor(){
    }

    getAll = async () => {
        const intakes = await Intake.findAll()
        return intakes
    }

    getById = async (iid) => {
        const intake = await Intake.findByPk(iid)
        if(!intake){
            throw new HttpError('Intake not found', HTTP_CODES.NOT_FOUND)
        }
        return intake
    }

    create = async (payload) => {
        const { medication_treatment_id, date } = payload
        const medicationTreatment = await MedicationTreatments.findByPk(medication_treatment_id)
        if(!medicationTreatment || !date){
            throw new HttpError('Missing data', HTTP_CODES.NOT_FOUND)
        }
        const newIntake = {
            medication_treatment_id,
            date,
            taken: false,
        }
        const intake = await Intake.create(newIntake)
        return intake
    }

    update = async(iid, payload) => {
        const { date, taken } = payload
        const intake = await this.getById(iid)
        if(date){
            intake.date = date
        }
        if(taken){
            intake.taken = taken
        }
        const updatedIntake = await intake.save()
        return updatedIntake
    }

    delete = async (iid) => {
        const intake = await this.getById(iid)
        const deletedIntake = await intake.destroy()
        return deletedIntake
    }
}