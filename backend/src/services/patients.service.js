import { Patient } from "../database/models/patient.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class PatientsService {

    constructor(){}

    createPatient = async(payload) => {
        const { user_id } = payload;
        if(!user_id){
            throw new HttpError('missing data', HTTP_CODES.BAD_REQUEST)
        }
        const newPatient = {
            user_id,
            active_tratment: null,
            health_insurance_id: null,
            head_professional_id: null,
            sex: null,
            blood_factor: null,
            birthdate: null
        }
        const patient = await Patient.create(newPatient)
        return patient
    }
}