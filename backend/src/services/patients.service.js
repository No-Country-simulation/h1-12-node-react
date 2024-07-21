import { Patient } from "../database/models/index.js"
import { HTTP_CODES } from "../utils/http-codes.util.js"
import { HttpError } from "../utils/http-error.util.js"

export class PatientsService {

    constructor(){}

    findByUserId = async(uid) => {
        const patient = await Patient.findOne({ where: { user_id: +uid } })
        return patient
    }

    createPatient = async(payload) => {
        const { user_id } = payload;
        if(!user_id){
            throw new HttpError('Missing data', HTTP_CODES.BAD_REQUEST)
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

    updatePatient = async(uid, payload) => {
        if(!uid){
            throw new HttpError('Missing data', HTTP_CODES.BAD_REQUEST)
        }
        const { sex, blood_factor, birthdate } = payload
        if(!sex && !blood_factor && !birthdate){
            return
        }
        const patient = await this.findByUserId(uid)

        if(sex){
            patient.sex = sex
        }
        if(blood_factor){
            patient.blood_factor = blood_factor
        }
        if(birthdate){
            patient.birthdate = new Date(birthdate)
        }
        const updatedPatient = await patient.save()
        return updatedPatient
    }
}